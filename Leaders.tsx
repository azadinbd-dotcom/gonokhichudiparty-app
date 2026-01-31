import React from 'react';
import { LEADERS, APP_NAME_BN } from './constants';

const Leaders: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="pb-24 pt-8 px-6 space-y-8 animate-in slide-in-from-right duration-500">
      <header className="flex flex-col space-y-2">
        <div className="flex items-center space-x-4">
          <button onClick={onBack} className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-xl">←</button>
          <h2 className="bengali-font text-3xl font-bold text-red-500">স্বপ্নবাজ নেতৃবৃন্দ</h2>
        </div>
        <p className="bengali-font text-slate-500 text-xs px-14">{APP_NAME_BN}</p>
      </header>

      <div className="space-y-12">
        {LEADERS.map((leader) => (
          <div key={leader.id} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-amber-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-slate-900 rounded-3xl overflow-hidden border border-white/5">
              <img src={leader.image} alt={leader.name} className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="bengali-font text-2xl font-bold text-white">{leader.name}</h3>
                    <p className="bengali-font text-red-500 text-sm font-medium uppercase tracking-widest">{leader.designation}</p>
                  </div>
                  <div className="bg-slate-800 px-3 py-1 rounded-full text-[10px] font-bold text-slate-400">VERIFIED</div>
                </div>
                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-2xl italic">
                  <p className="bengali-font text-red-200 text-sm">"স্লোগান: {leader.promise}"</p>
                </div>
                <p className="bengali-font text-slate-400 text-sm leading-relaxed">{leader.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaders;
