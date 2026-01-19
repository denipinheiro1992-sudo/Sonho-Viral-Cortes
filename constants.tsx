
import { VideoClip, Category } from './types';

export const MOCK_CLIPS: VideoClip[] = [
  // Podcasts
  {
    id: 'p1',
    title: 'Flow Podcast: Entrevista com Elon Musk',
    thumbnail: 'https://picsum.photos/seed/musk/400/225',
    category: 'PODCASTS',
    author: 'Flow Podcast'
  },
  {
    id: 'p2',
    title: 'Podpah: Histórias de Infância',
    thumbnail: 'https://picsum.photos/seed/podpah/400/225',
    category: 'PODCASTS',
    author: 'Podpah'
  },
  {
    id: 'p3',
    title: 'Inteligência Ltda: Astronomia com Sacani',
    thumbnail: 'https://picsum.photos/seed/sacani/400/225',
    category: 'PODCASTS',
    author: 'Inteligência Ltda'
  },
  // Chris
  {
    id: 'c1',
    title: 'Aquele Episódio do Emprego do Chris',
    thumbnail: 'https://picsum.photos/seed/chris1/400/225',
    category: 'TODO MUNDO ODEIA O CHRIS'
  },
  {
    id: 'c2',
    title: 'Chris e a Faculdade',
    thumbnail: 'https://picsum.photos/seed/chris2/400/225',
    category: 'TODO MUNDO ODEIA O CHRIS'
  },
  {
    id: 'c3',
    title: 'Tia Rochelle: Grana Curta',
    thumbnail: 'https://picsum.photos/seed/rochelle/400/225',
    category: 'TODO MUNDO ODEIA O CHRIS'
  },
  // Religiosos
  {
    id: 'r1',
    title: 'Pregação Pr. Cláudio Duarte',
    thumbnail: 'https://picsum.photos/seed/claudio/400/225',
    category: 'RELIGIOSOS'
  },
  {
    id: 'r2',
    title: 'Mensagem de Fé: Pe. Marcelo Rossi',
    thumbnail: 'https://picsum.photos/seed/marcelo/400/225',
    category: 'RELIGIOSOS'
  },
  {
    id: 'r3',
    title: 'Cura e Libertação',
    thumbnail: 'https://picsum.photos/seed/fe/400/225',
    category: 'RELIGIOSOS'
  }
];

export const CATEGORIES: Category[] = [
  {
    id: 'podcasts',
    name: 'PODCASTS',
    clips: MOCK_CLIPS.filter(c => c.category === 'PODCASTS')
  },
  {
    id: 'chris',
    name: 'TODO MUNDO ODEIA O CHRIS',
    clips: MOCK_CLIPS.filter(c => c.category === 'TODO MUNDO ODEIA O CHRIS')
  },
  {
    id: 'religiosos',
    name: 'RELIGIOSOS',
    clips: MOCK_CLIPS.filter(c => c.category === 'RELIGIOSOS')
  }
];

export const HERO_CLIPS: VideoClip[] = [
  {
    id: 'h1',
    title: 'Melhores Cortes: Todo Mundo Odeia o Chris',
    thumbnail: 'https://picsum.photos/seed/hero1/800/450',
    category: 'FEATURED'
  },
  {
    id: 'h2',
    title: 'O Plano de Elon Musk para Marte',
    thumbnail: 'https://picsum.photos/seed/hero2/800/450',
    category: 'FEATURED'
  }
];
