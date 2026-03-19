'use client';

import Image from 'next/image';
import styles from './Navbar.module.scss';
import logo from '@/assets/img/svg/logo-fiap.svg';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollY / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    updateProgress();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={styles.navbar}>
      <div className={styles.navbar_container}>
        <Image
          className={styles.navbar_container_logo}
          src={logo}
          alt="Logo da FIAP"
          width={144}
          preload
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
        <div
          className={styles.navbar_container_progress}
          style={{ width: `${scrollProgress}%`}}
        />
      </div>
    </header>
  )
};

export default Navbar;