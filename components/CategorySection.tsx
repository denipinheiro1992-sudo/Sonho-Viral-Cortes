
import React from 'react';
import { VideoClip } from '../types';
import VideoCard from './VideoCard';

interface CategorySectionProps {
  title: string;
  clips: VideoClip[];
  onSelect: (video: VideoClip) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, clips, onSelect }) => {
  return (
    <div className="py-4">
      <h2 className="px-6 mb-4 text-xs font-black tracking-widest text-zinc-500 uppercase">
        {title}
      </h2>
      <div className="px-6 overflow-x-auto no-scrollbar flex gap-4 pb-4">
        {clips.map((clip) => (
          <VideoCard 
            key={clip.id} 
            video={clip} 
            onClick={() => onSelect(clip)} 
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
