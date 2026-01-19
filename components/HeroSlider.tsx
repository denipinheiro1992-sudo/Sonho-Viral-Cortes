
import React from 'react';
import { Play } from 'lucide-react';
import { VideoClip } from '../types';

interface HeroSliderProps {
  items: VideoClip[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ items }) => {
  return (
    <div className="px-6 pb-6 overflow-x-auto no-scrollbar flex gap-4 snap-x snap-mandatory">
      {items.map((item) => (
        <div 
          key={item.id}
          className="relative min-w-[85vw] md:min-w-[60vw] lg:min-w-[40vw] h-64 rounded-[2rem] overflow-hidden snap-center cursor-pointer group shadow-2xl shadow-purple-500/5"
        >
          <img 
            src={item.thumbnail} 
            alt={item.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-xl md:text-2xl font-bold leading-tight max-w-[70%]">
                {item.title}
              </h2>
              <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-black shadow-lg hover:scale-110 transition-transform flex-shrink-0">
                <Play className="w-8 h-8 fill-current ml-1" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
