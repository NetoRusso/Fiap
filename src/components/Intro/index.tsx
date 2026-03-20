'use client';

import { useState, useEffect, useRef } from 'react';
import MarqueeScroll from '../MarqueeScroll';
import MarqueeSimple from '../MarqueeSimple';
import styles from './Intro.module.scss';
import imagem from '@/assets/img/png/imagem.png';
import Image from 'next/image';
import { useScreen } from '@/context/ScreenContext';

const Intro = () => {
  const { isDesktop, isTablet } = useScreen();
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 } 
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.intro}
      id="intro"
      data-scroll-section
      aria-label='Intro - Tudo o que a Fiap pode te oferecer'
    >
      <MarqueeSimple />

      {(isDesktop || isTablet) && (
        <div 
          ref={imageRef}
          key="intro-desk" 
          className={`${styles.intro_desk} ${isVisible ? styles.visible : ''}`}
          suppressHydrationWarning
        >
          <Image 
            className={styles.image}
            src={imagem}
            alt="Imagem de uma mulher ouvindo algo em um fone de ouvido"
          />
          <div className={styles.scrollElement}>
            <MarqueeScroll />
          </div>
        </div>
      )}
    </section>
  )
};

export default Intro;