
import React from 'react';
import { MANIFESTO_ITEMS, APP_NAME_BN } from './constants';

const Manifesto: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="pb-24 pt-8 px-6 space-y-6 animate-in slide-in-from-left duration-500">
      <header className="flex items-center space-x-4">
        <button onClick={onBack} className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-xl">←</button>
        <h2 className="bengali-font text-3xl font-bold text-amber-400">নির্বাচনী ইশতেহার</h2>
      </header>

      <div className="space-y-4">
        <p className="bengali-font text-slate-400 italic">"যা দেবো না, তার তালিকা আমাদের অনেক বড়।" - {APP_NAME_BN} বোর্ড</p>
        
        <div className="space-y-4">
          {MANIFESTO_ITEMS.map((item, idx) => (
            <div key={idx} className="bg-slate-800/40 border-l-4 border-amber-500 p-6 rounded-r-3xl flex space-x-4">
              <span className="text-2xl font-black text-amber-500/50">{idx + 1}</span>
              <p className="bengali-font text-slate-200 text-lg leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-white/5 text-center">
        <div className="text-5xl mb-4">🏆</div>
        <h3 className="bengali-font text-xl font-bold text-white mb-2">গ্যারান্টি কার্ড</h3>
        <p className="bengali-font text-sm text-slate-400">আমাদের ইশতেহারের প্রতিটি কথা ১০০% মিথ্যা হওয়ার গ্যারান্টি আমরা দিচ্ছি। ব্যর্থ হলে পরবর্তী নির্বাচনে আবারও মিথ্যা বলবো।</p>
      </div>
    </div>
  );
};

export default Manifesto;
