
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import HeroSlider from './components/HeroSlider';
import CategorySection from './components/CategorySection';
import { CATEGORIES, HERO_CLIPS } from './constants';
import { VideoClip } from './types';
import { ChevronLeft, Share2, Bookmark, Play } from 'lucide-react';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<VideoClip | null>(null);

  const filteredCategories = useMemo(() => {
    if (!searchQuery) return CATEGORIES;
    return CATEGORIES.map(cat => ({
      ...cat,
      clips: cat.clips.filter(clip => 
        clip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(cat => cat.clips.length > 0);
  }, [searchQuery]);

  const handleVideoSelect = (video: VideoClip) => {
    setSelectedVideo(video);
  };

  const closeDetails = () => {
    setSelectedVideo(null);
  };

  if (selectedVideo) {
    return (
      <div className="min-h-screen bg-[#0d0c12] animate-in fade-in duration-300">
        <div className="relative h-[60vh] md:h-[70vh]">
          <img 
            src={selectedVideo.thumbnail} 
            alt={selectedVideo.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c12] via-transparent to-black/40"></div>
          
          <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
            <button 
              onClick={closeDetails}
              className="p-3 rounded-2xl bg-black/20 backdrop-blur-xl border border-white/10 text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              <button className="p-3 rounded-2xl bg-black/20 backdrop-blur-xl border border-white/10 text-white">
                <Bookmark className="w-6 h-6" />
              </button>
              <button className="p-3 rounded-2xl bg-black/20 backdrop-blur-xl border border-white/10 text-white">
                <Share2 className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="absolute bottom-8 left-6 right-6">
            <span className="px-3 py-1 bg-purple-600 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 inline-block">
              {selectedVideo.category}
            </span>
            <h1 className="text-3xl font-black leading-tight mb-6">
              {selectedVideo.title}
            </h1>
            <button className="w-full py-5 bg-white text-black font-black rounded-[2rem] flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform active:scale-95">
              <Play className="w-6 h-6 fill-current" />
              ASSISTIR AGORA
            </button>
          </div>
        </div>

        <div className="px-6 py-10">
          <h2 className="text-sm font-bold text-zinc-400 mb-4 tracking-widest uppercase">Descrição</h2>
          <p className="text-zinc-300 leading-relaxed">
            Confira este corte exclusivo de {selectedVideo.title}. Os melhores momentos selecionados especialmente para você que gosta de conteúdo direto ao ponto e viral.
          </p>
          
          <div className="mt-12">
             <h2 className="text-sm font-bold text-zinc-400 mb-6 tracking-widest uppercase">Mais Como Este</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CATEGORIES[0].clips.slice(0, 4).map(clip => (
                  <div key={clip.id} className="flex gap-4 p-2 bg-zinc-900/50 rounded-2xl items-center cursor-pointer hover:bg-zinc-800">
                    <img src={clip.thumbnail} className="w-16 h-16 rounded-xl object-cover" />
                    <div>
                      <p className="text-xs font-bold line-clamp-1">{clip.title}</p>
                      <p className="text-[10px] text-zinc-500 uppercase">{clip.category}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pb-20 max-w-4xl mx-auto">
      <Header />
      <SearchBar onSearch={setSearchQuery} />
      
      {!searchQuery && (
        <HeroSlider items={HERO_CLIPS} />
      )}

      <div className="flex flex-col gap-4">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat) => (
            <CategorySection 
              key={cat.id} 
              title={cat.name} 
              clips={cat.clips} 
              onSelect={handleVideoSelect}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-zinc-500">
            <p className="text-lg font-medium">Nenhum resultado encontrado</p>
            <p className="text-sm">Tente pesquisar algo diferente.</p>
          </div>
        )}
      </div>

      <nav className="fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-40">
        <div className="flex items-center justify-center h-full pointer-events-auto max-w-sm mx-auto">
          <div className="bg-[#1a1923]/90 backdrop-blur-2xl px-8 py-3 rounded-full flex gap-12 border border-white/5 shadow-2xl">
            <button className="text-purple-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            </button>
            <button className="text-zinc-500 hover:text-purple-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </button>
            <button className="text-zinc-500 hover:text-purple-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
            </button>
            <button className="text-zinc-500 hover:text-purple-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
            </button>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default App;
