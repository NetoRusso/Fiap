'use client';

import { memo } from 'react';
import styles from './Faq.module.scss';
import data from '@/data/faqData.json';
import type { FaqData } from '@/types';

const Faq = memo(() => {
  return (
    <section
      className={styles.faq}
      id="faq"
      aria-label='Perguntas frequentes sobre a Fiap'
    >
      <div className={styles.faq_container}>
        <div className={styles.faq_container_header}>
          <h2>FAQ</h2>
          <span>Dúvidas Frequentes</span>
        </div>
        <div className={styles.faq_container_list}>
          {(data as FaqData[]).map((item) => (
            <div key={item.id} className={styles.faq_container_list_item}>
              <div className={styles.border}/>
              <h3>{item.pergunta}</h3>
              <p>{item.resposta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Faq.displayName = 'Faq';

export default Faq;
