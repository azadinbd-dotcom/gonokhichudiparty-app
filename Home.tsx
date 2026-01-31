import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import { APP_NAME_BN, SLOGAN_BN, ANNOUNCEMENTS_BN } from './constants';
import { AppState } from './types';

const Home: React.FC<{ onNavigate: (page: AppState) => void }> = ({ onNavigate }) => {
  const [dailyAnnouncement, setDailyAnnouncement] = useState("");

  useEffect(() => {
    // Select a random announcement from the list every time the Home screen is viewed/refreshed
    const randomIndex = Math.floor(Math.random() * ANNOUNCEMENTS_BN.length);
    setDailyAnnouncement(ANNOUNCEMENTS_BN[randomIndex]);
  }, []);

  return (
    <div className="pb-24 pt-8 px-6 space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col items-center text-center space-y-4">
        <Logo size="md" />
        <div>
          <h1 className="bengali-font text-2xl font-bold text-white leading-tight">{APP_NAME_BN}</h1>
          <p className="text-emerald-500 font-bold text-xs tracking-widest uppercase mt-1">{SLOGAN_BN}</p>
        </div>
      </header>

      <section className="bg-slate-800/50 border border-emerald-500/30 rounded-3xl p-6 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-2 bg-emerald-500 text-[10px] font-black uppercase text-slate-900 rounded-bl-xl">দৈনিক ঘোষণা</div>
        <h2 className="bengali-font text-slate-400 text-xs font-bold uppercase mb-2 tracking-widest">আজকের বাণী:</h2>
        <p className="bengali-font text-xl font-medium text-emerald-100 italic leading-snug">
          "{dailyAnnouncement}"
        </p>
      </section>

      <div className="grid grid-cols-2 gap-4">
        <QuickLink 
          icon="💰" 
          title="ভোট বিক্রি" 
          desc="সেরা দামে" 
          color="bg-emerald-600/20" 
          onClick={() => onNavigate('vote-dashboard')} 
        />
        <QuickLink 
          icon="📜" 
          title="ইশতেহার" 
          desc="সবই মিথ্যা" 
          color="bg-amber-600/20" 
          onClick={() => onNavigate('manifesto')} 
        />
        <QuickLink 
          icon="👔" 
          title="নেতৃবৃন্দ" 
          desc="মহা তস্কর" 
          color="bg-red-600/20" 
          onClick={() => onNavigate('leaders')} 
        />
        <QuickLink 
          icon="📰" 
          title="নির্বাচনী নিউজ" 
          desc="ব্রেকিং গুজব" 
          color="bg-sky-600/20" 
          onClick={() => onNavigate('news')} 
        />
      </div>

      <section className="bg-gradient-to-r from-red-600 to-amber-600 rounded-3xl p-6 text-white shadow-xl shadow-red-900/20">
        <h3 className="bengali-font text-xl font-bold mb-2 flex items-center">
          <span className="mr-2">📢</span> জরুরি ঘোষণা
        </h3>
        <p className="bengali-font text-sm opacity-90 leading-relaxed">
          আপনার এলাকার ভোটার তালিকা আপডেট করুন এবং জিতে নিন একটি প্লাস্টিকের মেডেল! 
          বি.দ্র: টাকা বুঝে নেওয়ার পর আমাদের আর চেনা লাগবে না।
        </p>
      </section>
    </div>
  );
};

const QuickLink: React.FC<{ icon: string, title: string, desc: string, color: string, onClick: () => void }> = ({ icon, title, desc, color, onClick }) => (
  <button 
    onClick={onClick}
    className={`${color} p-5 rounded-3xl border border-white/5 text-left transition-all active:scale-95 flex flex-col space-y-2`}
  >
    <span className="text-3xl">{icon}</span>
    <div>
      <h4 className="bengali-font text-lg font-bold text-white">{title}</h4>
      <p className="bengali-font text-[10px] text-slate-400 font-bold uppercase tracking-wider">{desc}</p>
    </div>
  </button>
);

export default Home;
