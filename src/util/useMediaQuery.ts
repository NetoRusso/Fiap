'use client';

import { useEffect, useState } from 'react';

/**
 * Hook customizado para verificar media queries
 * Evita re-renders desnecessários usando apenas CSS media queries
 * 
 * @param query - Media query string (ex: '(min-width: 1280px)')
 * @returns boolean indicando se a media query corresponde
 * 
 * @example
 * const isDesktop = useMediaQuery('(min-width: 1280px)');
 * const isMobile = useMediaQuery('(max-width: 768px)');
 * const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
    const media = window.matchMedia(query);
    
    setMatches(media.matches);

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [query]);


  return isClient ? matches : false;
}

export const breakpoints = {
  mobile: '(max-width: 768px)',
  tablet: '(min-width: 769px) and (max-width: 1279px)',
  desktop: '(min-width: 1280px)',
  prefersReducedMotion: '(prefers-reduced-motion: reduce)',
  hasHover: '(hover: hover)',
  hasFinePointer: '(pointer: fine)',
} as const;
