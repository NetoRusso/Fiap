'use client';

import styles from './Header.module.scss';

const Header = () => {

  return (
    <section
      className={styles.header}
      aria-label='Fiap - A melhor faculdade de tecnologia'
    >
      <h1 className={styles.header_title}>
        Sobre
      </h1>
      <div className={styles.header_texts}>
        <h2 className={`${styles.header_texts_destaque} ${styles.texto1}`}>
          A melhor faculdade
        </h2>
        <h2 className={`${styles.header_texts_destaque} ${styles.texto2}`}>
          de tecnologia
        </h2>
      </div>
    </section>
  )
};

export default Header;