'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './CustomCursor.scss';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const outLineSvg = useRef<SVGSVGElement>(null);
  const solidSvg = useRef<SVGSVGElement>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [hasPointer, setHasPointer] = useState(false);


  useEffect(() => {
    const checkPointerDevice = () => {
      const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
      const hasFinePointer = window.matchMedia('(pointer: fine)').matches;

      setHasPointer(hasFinePointer && !hasCoarsePointer);
    }

    checkPointerDevice();
    const mediaQuery = window.matchMedia('(pointer: fine)');
    mediaQuery.addEventListener('change', checkPointerDevice);

    return () => mediaQuery.removeEventListener('change', checkPointerDevice);

  }, []);

  useGSAP(() => {

    if (!hasPointer) return;

    const xTo = gsap.quickTo(cursorRef.current, 'x', { duration: 0.4, ease: 'power3' });
    const yTo = gsap.quickTo(cursorRef.current, 'y', { duration: 0.4, ease: 'power3' });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleMouseDown = () => {
      setIsClicked(true);

      gsap.to(solidSvg.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: 'power2.out',
      });

      gsap.to(outLineSvg.current, {
        opacity: 1,
        scale: 1.2,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseUp = () => {
      setIsClicked(false);

      gsap.to(outLineSvg.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(solidSvg.current, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    gsap.set(solidSvg.current, { opacity: 1, scale: 1 });
    gsap.set(outLineSvg.current, { opacity: 0, scale: 0.8 });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };

  }, { scope: cursorRef, dependencies: [hasPointer] });

  if (!hasPointer) return null;

  return (
   <div ref={cursorRef} className="custom-cursor">
      <div className='svg-wrapper'>
        <svg
          id="Camada_2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.5 27.28"
          ref={solidSvg}
          className='cursor-solid'
        >
          <defs>
            <style>{".cls-1{fill:#ed145b;}"}</style>
          </defs>
          <g id="Camada_1-2">
            <polygon
              className="cls-1"
              points="23.62 0 7.88 0 0 13.64 7.88 27.28 23.62 27.28 31.5 13.64 23.62 0"
            />
          </g>
        </svg>
        <svg
          id="Camada_2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.5 27.28"
          ref={outLineSvg}
          className='cursor-outline'
        >
          <defs>
            <style>{".cls-1{fill:#ed145b;}"}</style>
          </defs>
          <g id="Camada_1-2">
            <path
              className="cls-1"
              d="M23.05,1l7.3,12.64-7.3,12.64h-14.6L1.15,13.64,8.45,1h14.6M23.62,0H7.88L0,13.64l7.88,13.64h15.75l7.88-13.64L23.62,0h0Z"
            />
          </g>
        </svg>
      </div>
    </div>
  )

};