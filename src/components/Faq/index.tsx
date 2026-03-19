'use client';

import styles from './Faq.module.scss';
import data from '@/data/faqData.json';

const Faq = () => {

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
          {data.map((item) => (
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
};

export default Faq;
