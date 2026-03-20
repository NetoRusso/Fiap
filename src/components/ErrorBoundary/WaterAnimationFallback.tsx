'use client';

import styles from './WaterAnimationFallback.module.scss';

export default function WaterAnimationFallback() {
  return (
    <div className={styles.fallback}>
      <div className={styles.content}>
        <h3>Não foi possível carregar a animação</h3>
        <p>Mas você ainda pode continuar navegando pelo site.</p>
      </div>
    </div>
  );
}
