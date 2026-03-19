'use client';

import { useEffect, useLayoutEffect, useRef, useState, useCallback } from 'react';
import styles from './WaterAnimation.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 192;
const INITIAL_LOAD_COUNT = 15;
const BUFFER_SIZE = 10;

const WaterAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(Array(FRAME_COUNT).fill(null));
  const loadedFramesRef = useRef<Set<number>>(new Set());
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const isMountedRef = useRef(true);
  const currentFrameRef = useRef(0);

  useEffect(() => {
    isMountedRef.current = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '200px',
        threshold: 0,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      isMountedRef.current = false;
      observer.disconnect();
    };
  }, []);

  const loadFrame = useCallback((index: number): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (loadedFramesRef.current.has(index) || imagesRef.current[index]) {
        resolve();
        return;
      }

      const img = new Image();
      const frameNumber = index.toString().padStart(3, '0');
      img.src = `/water/water_${frameNumber}.jpg`;
      img.alt = `Frame ${frameNumber}`;
      
      img.onload = () => {
        if (isMountedRef.current) {
          imagesRef.current[index] = img;
          loadedFramesRef.current.add(index);
          resolve();
        }
      };
      
      img.onerror = () => {
        console.warn(`Erro ao carregar frame ${index}`);
        reject(new Error(`Failed to load frame ${index}`));
      };
    });
  }, []);

  const loadFrameBuffer = useCallback(async (centerFrame: number) => {
    const framesToLoad: number[] = [];
    const start = Math.max(0, centerFrame - BUFFER_SIZE);
    const end = Math.min(FRAME_COUNT - 1, centerFrame + BUFFER_SIZE);

    for (let i = start; i <= end; i++) {
      if (!loadedFramesRef.current.has(i)) {
        framesToLoad.push(i);
      }
    }

    const chunkSize = 5;
    for (let i = 0; i < framesToLoad.length; i += chunkSize) {
      const chunk = framesToLoad.slice(i, i + chunkSize);
      await Promise.allSettled(chunk.map(loadFrame));
    }
  }, [loadFrame]);

  useEffect(() => {
    if (!isVisible) return;

    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    canvas.width = 1920;
    canvas.height = 1080;

    const loadInitialImages = async () => {

      const promises = [];
      for (let i = 0; i < INITIAL_LOAD_COUNT; i++) {
        promises.push(loadFrame(i));
      }

      await Promise.allSettled(promises);
      
      if (isMountedRef.current && imagesRef.current[0]) {
        setImagesLoaded(true);
        context.drawImage(imagesRef.current[0], 0, 0, canvas.width, canvas.height);
      }
    };

    loadInitialImages();
  }, [isVisible, loadFrame]);

  useLayoutEffect(() => {
    if (!imagesLoaded || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const container = containerRef.current;
    if (!context) return;

    const obj = { frame: 0 };
    let lastLoadedFrame = -1;

    const tween = gsap.to(obj, {
      frame: FRAME_COUNT - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=100%',
        scrub: 0.5,
        pin: true,
        pinSpacing: '+=10%',
        id: 'water-animation-trigger',
      },
      onUpdate: () => {
        if (!isMountedRef.current) return;
        
        const frameIndex = Math.round(obj.frame);
        currentFrameRef.current = frameIndex;
        
        if (Math.abs(frameIndex - lastLoadedFrame) > 3) {
          lastLoadedFrame = frameIndex;
          loadFrameBuffer(frameIndex);
        }

        const img = imagesRef.current[frameIndex];
        if (img && img.complete) {
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
      },
    });

    tweenRef.current = tween;
    scrollTriggerRef.current = tween.scrollTrigger || null;

    return () => {
      isMountedRef.current = false;

      if (tweenRef.current) {
        tweenRef.current.pause();
        tweenRef.current.progress(0);
        tweenRef.current.kill();
        tweenRef.current = null;
      }

      if (scrollTriggerRef.current) {
        try {
          scrollTriggerRef.current.kill(true);
          scrollTriggerRef.current = null;
        } catch (error) {
          console.error('Error cleanup ScrollTrigger:', error);
        }
      }

      try {
        ScrollTrigger.getAll().forEach(st => {
          if (st.vars.id === 'water-animation-trigger' || st.vars.trigger === container) {
            st.kill(true);
          }
        });
      } catch (error) {
        console.error('Error killing ScrollTriggers on cleanup:', error);
      }
    };
  }, [imagesLoaded, loadFrameBuffer]);


  return (
    <div
      ref={containerRef}
      className={styles.waterAnimation}
      key="water-animation"
      suppressHydrationWarning
      id='water'
    >
      <canvas ref={canvasRef} className={styles.canvas} />
      {!imagesLoaded && (
        <div className={styles.loading}>Carregando animação...</div>
      )}
    </div>
  )
};

export default WaterAnimation;