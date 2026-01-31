import React from 'react';
import { VoteData } from './types';

const Success: React.FC<{ data: VoteData | null, onBack: () => void }> = ({ data, onBack }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-8 bg-slate-900 animate-in zoom-in duration-500 overflow-hidden">
      <div className="w-32 h-32 bg-emerald-500 rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-emerald-500/30 animate-bounce">
        <span className="text-6xl text-slate-900">✅</span>
      </div>
      
      <h2 className="bengali-font text-3xl font-bold text-emerald-400 mb-4 text-center">অভিনন্দন!</h2>
      <p className="bengali-font text-slate-200 text-xl text-center mb-2 leading-relaxed">
        আপনার <span className="text-emerald-400 font-bold">{data?.totalPrice.toLocaleString() || "০"}</span> টাকা পাঠানো হয়েছে।
      </p>
      <p className="bengali-font text-slate-400 text-xs text-center mb-6 px-4 opacity-70">
        (হয়তো অন্য কারো একাউন্টে, আমাদের চেক করার সময় নেই)
      </p>

      <div className="w-full bg-slate-800/80 backdrop-blur-sm rounded-3xl p-6 border border-slate-700/50 space-y-4 mb-8 max-h-[40vh] overflow-y-auto custom-scrollbar">
        <div className="flex justify-between items-center text-[10px] border-b border-slate-700/50 pb-2">
          <span className="text-slate-500 uppercase tracking-widest font-bold">ID</span>
          <span className="text-emerald-500 font-mono font-bold">#GK-{Math.floor(100000 + Math.random() * 900000)}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="bengali-font text-slate-400 text-sm">মোট ভোট:</span>
          <span className="bengali-font text-white font-bold">{data?.count || 1} টি</span>
        </div>

        {data && data.familyMembers && data.familyMembers.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-slate-700/30">
            <p className="bengali-font text-xs text-slate-500 font-bold uppercase tracking-wider">ভোটারদের তালিকা:</p>
            <div className="space-y-1">
              <p className="bengali-font text-slate-300 text-sm flex justify-between">
                <span>১. আপনার ভোট</span>
                <span className="text-emerald-500/50 text-[10px] font-bold">PAID</span>
              </p>
              {data.familyMembers.map((name, idx) => (
                <p key={idx} className="bengali-font text-slate-300 text-sm flex justify-between border-t border-slate-700/10 pt-1">
                  <span>{idx + 2}. {name}</span>
                  <span className="text-emerald-500/50 text-[10px] font-bold">PAID</span>
                </p>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-between items-center pt-2 border-t border-slate-700/50">
          <span className="bengali-font text-slate-400 text-sm">আসন:</span>
          <span className="bengali-font text-white font-bold text-xs truncate max-w-[150px] text-right">{data?.constituency || "N/A"}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="bengali-font text-slate-400 text-sm">পেমেন্ট আইডি:</span>
          <span className="text-white font-mono font-bold text-sm tracking-widest">{data?.phoneNumber}</span>
        </div>
      </div>

      <button 
        onClick={onBack}
        className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-lg rounded-2xl transition-all shadow-xl shadow-emerald-900/30 bengali-font active:scale-95"
      >
        হোম পেজে ফিরে যান
      </button>

      <div className="mt-6">
        <p className="bengali-font text-[9px] text-slate-600 text-center uppercase tracking-[0.2em] font-bold">
          No refunds. No accountability. No future.
        </p>
      </div>
    </div>
  );
};

export default Success;
