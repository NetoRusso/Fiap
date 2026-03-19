export interface Materia {
  nome: string;
  recursos: string[];
}

export interface CursoData {
  id: number;
  tipo: string;
  selected: 'tecnologia' | 'inovacao' | 'negocios';
  materia: Materia[];
}

export interface FaqData {
  id: number;
  pergunta: string;
  resposta: string;
}

export type TipoCurso = 'tecnologia' | 'inovacao' | 'negocios';
