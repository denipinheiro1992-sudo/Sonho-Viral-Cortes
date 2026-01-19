
import React from 'react';
import { User, Layers } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 sticky top-0 z-50 bg-[#0d0c12]/80 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <div className="relative">
          <Layers className="w-8 h-8 text-purple-500 transform -rotate-12" />
          <Layers className="w-8 h-8 text-indigo-400 absolute top-0 left-1 transform rotate-12 opacity-50" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-bold text-lg tracking-tight">Sonho Viral</span>
          <span className="text-purple-400 text-sm font-medium -mt-1">Cortes</span>
        </div>
      </div>
      
      <button className="p-2 rounded-full bg-zinc-800/50 hover:bg-zinc-700 transition-colors">
        <User className="w-6 h-6 text-purple-400" />
      </button>
    </header>
  );
};

export default Header;
