'use client';


import { useState } from 'react';
import styles from './Cursos.module.scss';
import data from '@/data/cursos.json';
import { useScreen } from '@/context/ScreenContext';

type TipoCurso = "tecnologia" | "inovacao" | "negocios";

const isTipoCurso = (tipo: string): tipo is TipoCurso => {
  return ['tecnologia', 'inovacao', 'negocios'].includes(tipo);
};



const Cursos = () => {
  const { isDesktop } = useScreen();
  const [tipoSelecionado, setTipoSelecionado] = useState<TipoCurso | string>(isDesktop ? 'tecnologia' : '');

  const handleTipoChange = (tipo: string) => {
    if (isTipoCurso(tipo)) {
      setTipoSelecionado(tipo);
    }
  };

  const toggleOpen = (tipo: TipoCurso) => {
    if (tipoSelecionado === tipo) {
      setTipoSelecionado('');
      return;
    }
    setTipoSelecionado(tipo);

  };



  return (
    <section
      className={styles.cursos}
      id="cursos"
      aria-label='Cursos oferecidos pela Fiap'
    >
      {isDesktop ? (
        <div className={styles.cursos_container}>
          <div className={styles.cursos_container_view}>
            <div className={styles.cursos_container_view_header}>
              <h2>Cursos</h2>
              <span>Cursos de Curta Duração</span>
            </div>
            <div className={styles.cursos_container_view_type}>
              <h3 key={tipoSelecionado}>
                {data.find((item) => item.selected === tipoSelecionado)?.tipo || 'Cursos'}
              </h3>
            </div>
            <div key={tipoSelecionado} className={styles.cursos_container_view_list}>
              {data.find((item) => item.selected === tipoSelecionado)
                ?.materia.map((materia, index) => (
                  <div key={index} className={styles.cursos_container_view_list_item}>
                    <p>{materia.nome}</p>
                    <span>{materia.recursos.join(' ')}</span>
                  </div>
                ))}
            </div>
          </div>
          <div className={styles.cursos_container_menu}>
            {data.map((item) => (
              <div
                key={item.id}
                className={`${styles.cursos_container_menu_item} 
                ${tipoSelecionado === item.selected ? styles.cursos_container_menu_item_active : ''}
              `}
              >
                <div className={styles.borda} />
                <button onClick={() => handleTipoChange(item.selected)}>
                  {item.tipo}
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.cursos_mobile}>
          <div className={styles.cursos_mobile_header}>
            <h2>Cursos</h2>
            <span>Cursos de Curta Duração</span>
          </div>
          <div className={styles.cursos_mobile_list}>
            {data.map((item) => (
              <div key={item.id} className={styles.cursos_mobile_list_item}>
                <div className={styles.cursos_mobile_list_item_thead}>
                  <h3>{item.tipo}</h3>
                  <button
                    className={`
                      ${styles.cursos_mobile_list_item_thead_btn}
                      ${tipoSelecionado === item.selected ? styles.cursos_mobile_list_item_thead_btn_active : ''}
                    `}
                    onClick={() => toggleOpen(item.selected as TipoCurso)}
                  >
                    {tipoSelecionado === item.selected ? '-' : '+'}
                  </button>
                </div>
                <div 
                  
                  className={`
                  ${styles.cursos_mobile_list_item_tbody}
                  ${tipoSelecionado === item.selected ? styles.cursos_mobile_list_item_tbody_open : ''}
                `}>
                  {item.materia.map((materia, index) => (
                    <div key={index} className={styles.cursos_mobile_list_item_tbody_item}>
                      <span>{materia.recursos.join(' ')}</span>
                      <p>{materia.nome}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
};

export default Cursos;