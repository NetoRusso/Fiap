'use client';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './MarqueeScroll.module.scss';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { duplicateContent } from '@/util/textFunctions';


gsap.registerPlugin(ScrollTrigger);

const MarqueeScroll = () => {
  const line1Ref = useRef<HTMLParagraphElement>(null);
  const line2Ref = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger[]>([]);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    if (!line1Ref.current || !line2Ref.current || !containerRef.current) return;

    const line1 = line1Ref.current;
    const line2 = line2Ref.current;
    const container = containerRef.current;

    duplicateContent(line1, 10);
    duplicateContent(line2, 10);


    const st1 = ScrollTrigger.create({
      trigger: container,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
      animation: gsap.fromTo(
        line1,
        { x: '-10%' },
        { x: '10%', ease: 'none' }
      ),
    });

    const st2 = ScrollTrigger.create({
      trigger: container,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
      animation: gsap.fromTo(
        line2,
        { x: '10%' },
        { x: '-10%', ease: 'none' }
      ),
    });

    scrollTriggerRef.current = [st1, st2];

    return () => {
      isMountedRef.current = false;
      scrollTriggerRef.current.forEach(st => {
        if (st) st.kill(true);
      });
      scrollTriggerRef.current = [];
    };

  }, []);

  return (
    <div ref={containerRef} className={styles.marqueeScroll}>
      <p ref={line1Ref} className={`${styles.text_marquee} ${styles.line1}`}>
        Skills • Conhecimento •&nbsp;
      </p>
      <p ref={line2Ref} className={`${styles.text_marquee} ${styles.line2}`}>
        MUITO ALÉM DOS TUTORIAIS •&nbsp;
      </p>
    </div>
  )
};

export default MarqueeScroll;