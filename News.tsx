
import React from 'react';
import { NEWS_FEED } from '../constants';

const News: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="pb-24 pt-8 px-6 space-y-6 animate-in slide-in-from-bottom duration-500">
      <header className="flex items-center justify-between">
        <h2 className="bengali-font text-3xl font-bold text-sky-400">খিচুড়ি সমাচার</h2>
        <div className="bg-sky-500 text-slate-900 px-3 py-1 rounded-full text-[10px] font-black animate-pulse">LIVE UPDATE</div>
      </header>

      <div className="space-y-6">
        {NEWS_FEED.map((news) => (
          <article key={news.id} className="bg-slate-800/40 rounded-3xl overflow-hidden border border-white/5 flex flex-col">
            <div className="h-40 bg-slate-700 relative flex items-center justify-center">
               <span className="text-4xl">🗞️</span>
               <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-sky-400 uppercase tracking-widest">
                {news.category}
               </div>
            </div>
            <div className="p-6 space-y-3">
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-tighter">{news.date}</p>
              <h3 className="bengali-font text-xl font-bold text-white leading-tight hover:text-sky-400 transition-colors cursor-pointer">{news.title}</h3>
              <p className="bengali-font text-slate-400 text-sm leading-relaxed">{news.summary}</p>
              <button className="text-sky-400 text-xs font-bold uppercase tracking-widest pt-2 flex items-center">
                Read More <span className="ml-1">→</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="py-12 text-center">
        <p className="bengali-font text-slate-600 text-xs italic">আরও গুজবের জন্য রিফ্রেশ করতে থাকুন...</p>
      </div>
    </div>
  );
};

export default News;
