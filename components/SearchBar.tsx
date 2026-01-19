
import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <div className="px-6 py-4">
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-zinc-400 group-focus-within:text-purple-400 transition-colors" />
        </div>
        <input
          type="text"
          placeholder="Pesquisar categorias..."
          className="block w-full pl-12 pr-4 py-4 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all text-sm backdrop-blur-sm"
          onChange={(e) => onSearch(e.target.value)}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/10 to-transparent blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
      </div>
    </div>
  );
};

export default SearchBar;
