'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ScreenContextType {
  width: number;
  height: number;
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
  isClient: boolean;
  shouldShowDesktop: boolean;
}

const ScreenContext = createContext<ScreenContextType | undefined>(undefined);

export const ScreenProvider = ({ children }: { children: ReactNode }) => {
  const [width, setWidth] = useState(1920);
  const [height, setHeight] = useState(1080);
  const [isClient, setIsClient] = useState(false);
  const [shouldShowDesktop, setShouldShowDesktop] = useState(false);


  useEffect(() => {

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);

    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    handleResize();

    let rafId: number;
    const debouncedResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleResize);
    };

    window.addEventListener('resize', debouncedResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', debouncedResize);
    }
  }, []);

  useEffect(() => {
    const curentIsDesktop = width > 1279;

    if (curentIsDesktop) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShouldShowDesktop(true);
    } else {
      const timer = setTimeout(() => {
        setShouldShowDesktop(false);
      }, 50);

      return () => clearTimeout(timer);
    }

  },[width])

  const value: ScreenContextType = {
    width,
    height,
    isDesktop: width > 1279,
    isTablet: width > 768 && width <= 1279,
    isMobile: width <= 768,
    isClient,
    shouldShowDesktop
  };

  return (
    <ScreenContext.Provider value={value}>
      {children}
    </ScreenContext.Provider>
  );
};

export const useScreen = () => {
  const context = useContext(ScreenContext);
  if (!context || context === undefined) {
    throw new Error('useScreen não pode ser acessado fora do ScreenProvider');
  }
  return context;
};