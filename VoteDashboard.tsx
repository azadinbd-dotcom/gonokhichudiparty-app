
import React, { useState, useEffect } from 'react';
import { DISTRICT_DATA, VOTE_PRICE } from './constants';
import { AppState, VoteData } from './types';

const VoteDashboard: React.FC<{ onNavigate: (page: AppState, data?: VoteData) => void }> = ({ onNavigate }) => {
  const [votes, setVotes] = useState(1);
  const districts = Object.keys(DISTRICT_DATA);
  const [selectedDistrict, setSelectedDistrict] = useState(districts[0]);
  const [selectedConstituency, setSelectedConstituency] = useState(DISTRICT_DATA[districts[0]][0]);
  const [phone, setPhone] = useState("");
  const [familyNames, setFamilyNames] = useState<string[]>(['']);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update constituencies when district changes
  useEffect(() => {
    const available = DISTRICT_DATA[selectedDistrict] || [];
    setSelectedConstituency(available[0] || "");
  }, [selectedDistrict]);

  // Sync family names array with votes count
  useEffect(() => {
        const newNames = [...familyNames];
    if (newNames.length < votes) {
      while (newNames.length < votes) {
        newNames.push("");
      }
    } else if (newNames.length > votes) {
      newNames.length = votes;
    }
    setFamilyNames(newNames);

  }, [votes]);

  const total = votes * VOTE_PRICE;

  const handleNameChange = (index: number, value: string) => {
    const updated = [...familyNames];
    updated[index] = value;
    setFamilyNames(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length !== 11) {
      setError("আপনার ১১ সংখ্যার স্পেশাল কোড (ফোন) সঠিকভাবে দিন!");
      return;
    }

    if (familyNames.some(name => name.trim() === "")) {
      setError("সবগুলো ভোটারদের নাম সঠিকভাবে পূরণ করুন!");
      return;
    }

    setError("");
    setIsSubmitting(true);
    
    const voteData: VoteData = {
      count: votes,
      familyMembers: familyNames,
      constituency: selectedConstituency,
      phoneNumber: phone,
      totalPrice: total
    };

    // Simulate API call
    setTimeout(() => {
      onNavigate('success', voteData);
    }, 1500);
  };

  return (
    <div className="pb-24 pt-8 px-6 space-y-6 animate-in slide-in-from-right duration-500 overflow-y-auto max-h-screen">
      <header>
        <h2 className="bengali-font text-3xl font-bold text-emerald-400">ভোট বাজার ড্যাশবোর্ড</h2>
        <p className="bengali-font text-slate-400 text-sm mt-1">আপনার পরিবারে যত বেশি ভোট, আমাদের তত বেশি সুখ!</p>
      </header>

      <form name="voter-submission" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-6">
<input type="hidden" name="form-name" value="voter-submission" />
        <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-3xl space-y-6">
          {/* Vote Counter */}
          <div className="space-y-3">
            <label className="bengali-font block text-slate-300 font-medium text-lg">কতগুলো ভোট বিক্রি করবেন?</label>
            <div className="flex items-center justify-between bg-slate-900 rounded-2xl p-2 border border-slate-700">
              <button 
                type="button" 
                onClick={() => setVotes(Math.max(1, votes - 1))}
                className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-2xl hover:bg-slate-700 transition-colors"
              >-</button>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-black text-emerald-500 leading-none">{votes}</span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">ভোট</span>
              </div>
              <button 
                type="button" 
                onClick={() => setVotes(votes + 1)}
                className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-2xl hover:bg-slate-700 transition-colors"
              >+</button>
            </div>
          </div>

          {/* Dynamic Name Inputs for Additional Votes */}
          {votes >=1 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-top duration-300">
              <div className="h-px bg-slate-700/50 w-full"></div>
              <h3 className="bengali-font text-emerald-400 font-bold text-sm uppercase tracking-wider">ভোটারদের তথ্য যোগ করুন:</h3>
              {familyNames.map((name, idx) => (
                <div key={idx} className="space-y-2">
                  <label className="bengali-font text-slate-400 text-xs font-bold">
                    {idx + 2} নম্বর ভোটটি কার? (নাম লিখুন)
                  </label>
                  <input 
                    name="voter_name[]"
                    type="text"
                    required
                    placeholder={`ভোটার ${idx + 1}-এর নাম...`}
                    value={name}
                    onChange={(e) => handleNameChange(idx, e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-white bengali-font outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all"
                  />
                </div>
              ))}
              <div className="h-px bg-slate-700/50 w-full"></div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-4">
            {/* Step 1: District Selection */}
            <div className="space-y-3">
              <label className="bengali-font block text-slate-300 font-medium">আপনার জেলা (District)</label>
              <div className="relative group">
                <select 
                  name="district"
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-4 text-white bengali-font outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 appearance-none transition-all cursor-pointer shadow-inner"
                >
                  {districts.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Step 2: Constituency Selection */}
            <div className="space-y-3">
              <label className="bengali-font block text-slate-300 font-medium">আপনার নির্বাচনী আসন (Constituency)</label>
              <div className="relative group">
                <select
                  name="constituency"
                  value={selectedConstituency}
                  onChange={(e) => setSelectedConstituency(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-4 text-white bengali-font outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 appearance-none transition-all cursor-pointer shadow-inner"
                >
                  {(DISTRICT_DATA[selectedDistrict] || []).map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Price Display */}
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4 flex justify-between items-center shadow-lg shadow-emerald-500/5">
            <div>
              <p className="bengali-font text-xs text-emerald-500 uppercase font-bold tracking-widest">বাজারদর (প্রতি ভোট)</p>
              <p className="text-2xl font-black text-white">৳{VOTE_PRICE}</p>
            </div>
            <div className="text-right">
              <p className="bengali-font text-xs text-amber-500 uppercase font-bold tracking-widest">মোট পাওনা</p>
              <p className="text-3xl font-black text-amber-400">৳{total.toLocaleString()}</p>
            </div>
          </div>

          {/* Phone Input */}
          <div className="space-y-3">
            <label className="bengali-font block text-slate-300 font-medium">পেমেন্টের জন্য ১১ সংখ্যার আইডি (মোবাইল)</label>
            <div className="relative">
              <input
                name="phone_number"
                type="text"

                placeholder="0 1 X X X X X X X X X"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 11))}
                className={`w-full bg-slate-900 border ${error ? 'border-red-500' : 'border-slate-700'} rounded-2xl p-4 text-white text-center text-xl tracking-[0.5em] font-mono outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all shadow-inner`}
              />
              {phone.length > 0 && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-500 bg-slate-800 px-2 py-1 rounded-md border border-slate-700">
                  {phone.length}/11
                </div>
              )}
            </div>
            {error && <p className="bengali-font text-red-500 text-xs text-center animate-pulse">{error}</p>}
          </div>
        </div>

        <button 
          disabled={isSubmitting}
          className="w-full py-5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xl rounded-3xl shadow-2xl shadow-emerald-900/40 transition-all active:scale-95 bengali-font flex items-center justify-center space-x-3 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>টাকা পাঠানো হচ্ছে...</span>
            </>
          ) : (
            <>
              <span>💸 এখনই ভোট বিক্রি করুন!</span>
            </>
          )}
        </button>
      </form>

      <p className="bengali-font text-[10px] text-slate-500 text-center leading-relaxed px-4 opacity-70">
        * শর্তাবলী প্রযোজ্য: টাকা পাওয়ার পর আমাদের আর কোন দায়ভার থাকবে না। আপনার ভোট আমাদের ভবিষ্যৎ (এবং আমাদের বিলাসবহুল গাড়ি)। এই লেনদেন সম্পুর্ন কাল্পনিক।
      </p>
    </div>
  );
};

export default VoteDashboard;
