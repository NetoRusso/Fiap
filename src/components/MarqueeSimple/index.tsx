'use client';

import { useEffect, useRef } from 'react';
import styles from './MarqueeSimple.module.scss';
import { duplicateContent } from '@/util/textFunctions';

const MarqueeSimple = () => {
  const line1Ref = useRef<HTMLParagraphElement>(null);
  const line2Ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!line1Ref.current || !line2Ref.current) return;
      duplicateContent(line1Ref.current, 3);
      duplicateContent(line2Ref.current, 3);
  }, []);

  return (
    <div className={styles.marqueeSimple}>
      <p ref={line1Ref} className={`${styles.text_marquee} ${styles.line1}`}>
        CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO.&nbsp;
      </p>
      <p ref={line2Ref} className={`${styles.text_marquee} ${styles.line2}`}>
        TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.&nbsp;
      </p>
    </div>
  )
};

export default MarqueeSimple;