
import React from 'react';
import { VideoClip } from '../types';

interface VideoCardProps {
  video: VideoClip;
  onClick: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onClick }) => {
  return (
    <div className="min-w-[280px] bg-zinc-900/60 rounded-3xl p-3 flex gap-4 items-center group cursor-pointer hover:bg-zinc-800/80 transition-colors border border-transparent hover:border-zinc-700/50">
      <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
      </div>
      
      <div className="flex flex-col flex-1 gap-2">
        <h3 className="text-sm font-medium leading-snug line-clamp-2">
          {video.title}
        </h3>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className="w-fit px-6 py-1.5 bg-purple-600/90 hover:bg-purple-500 text-white text-xs font-bold rounded-full transition-all hover:shadow-lg hover:shadow-purple-500/30"
        >
          Acesso
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
