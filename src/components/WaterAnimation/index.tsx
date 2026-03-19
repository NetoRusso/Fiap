'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './WaterAnimation.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WaterAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const isMountedRef = useRef(true);
  const frameCount = 192;


  useEffect(() => {

    isMountedRef.current = true;
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    canvas.width = 1920;
    canvas.height = 1080;

    const loadImages = async () => {
      const promises = [];

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        const frameNumber = i.toString().padStart(3, '0');
        img.src = `/water/water_${frameNumber}.jpg`;
        img.alt = `Frame ${frameNumber}`;
        imagesRef.current[i] = img;
        promises.push(
          new Promise((resolve) => {
            img.onload = resolve;
          })
        );
      }

      await Promise.all(promises);
      if (isMountedRef.current) {
        setImagesLoaded(true);
        context.drawImage(imagesRef.current[0], 0, 0, canvas.width, canvas.height);
      }
    };

    loadImages();

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useLayoutEffect(() => {
    if (!imagesLoaded || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const container = containerRef.current;
    if (!context) return;

    const obj = { frame: 0 };

    const tween = gsap.to(obj, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        id: 'water-animation-trigger'
      },
      onUpdate: () => {
        if (!isMountedRef.current) return;
        const frameIndex = Math.round(obj.frame);
        if (imagesRef.current[frameIndex]) {
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(
            imagesRef.current[frameIndex],
            0,
            0,
            canvas.width,
            canvas.height
          );
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
      }

      if (scrollTriggerRef.current) {
        try {
          scrollTriggerRef.current.kill(true);
          scrollTriggerRef.current = null;
        } catch (error) {
          console.error('Error cleanup ScrollTrigger:', error);
        }
      }
      if (tweenRef.current) {
        tweenRef.current.kill();
        tweenRef.current = null;
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
  }, [imagesLoaded]);


  return (
    <div
      ref={containerRef}
      className={styles.waterAnimation}
      key="water-animation"
      suppressHydrationWarning
    >
      <canvas ref={canvasRef} className={styles.canvas} />
      {!imagesLoaded && (
        <div className={styles.loading}>Carregando animação...</div>
      )}
    </div>
  )
};

export default WaterAnimation;