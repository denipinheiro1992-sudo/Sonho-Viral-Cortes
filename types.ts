
export interface VideoClip {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  duration?: string;
  author?: string;
}

export interface Category {
  id: string;
  name: string;
  clips: VideoClip[];
}

export type AppState = 'home' | 'details' | 'search';
