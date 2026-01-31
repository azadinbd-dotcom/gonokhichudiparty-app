
import React, { useState } from 'react';
import Logo from './components/Logo';

const STEPS = [
  {
    title: "স্বাগতম গণ-খিচুড়ি পরিবারে",
    desc: "আমরা কোন নির্দিষ্ট দলের নই, আমরা সব দলের মিক্সড খিচুড়ি। আমাদের লক্ষ্য একটাই - আপনার পকেট ভর্তি করা (মাঝে মাঝে)।",
    useLogo: true
  },
  {
    title: "ভোট বিক্রি করুন নিরাপদে",
    desc: "বাজারদরের সাথে তাল মিলিয়ে আমরা দিচ্ছি সর্বোচ্চ মূল্য। আপনার মূল্যবান ভোটটি খিচুড়ি মার্কায় গচ্ছিত রাখুন।",
    icon: "💸"
  },
  {
    title: "গদি বিলাস জিন্দাবাদ",
    desc: "মিথ্যা আশ্বাস আর কাল্পনিক ইশতেহারের মহাসড়কে আপনাকে আমন্ত্রণ। আমাদের খিচুড়ি মার্কায় যা আছে, তা আপনি কল্পনাও করতে পারবেন না!",
    icon: "🚀"
  }
];

const Onboarding: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  const next = () => {
    if (step < STEPS.length - 1) setStep(step + 1);
    else onComplete();
  };

  return (
    <div className="h-screen flex flex-col p-8 justify-between bg-slate-900">
      <div className="pt-20 flex flex-col items-center text-center">
        <div className="mb-12 flex justify-center w-full">
          {STEPS[step].useLogo ? (
             <Logo size="lg" />
          ) : (
            <div className="text-8xl animate-float">{STEPS[step].icon}</div>
          )}
        </div>
        <h2 className="bengali-font text-3xl font-bold text-emerald-400 mb-6">{STEPS[step].title}</h2>
        <p className="bengali-font text-slate-400 text-lg leading-relaxed">{STEPS[step].desc}</p>
      </div>

      <div className="pb-12 space-y-6">
        <div className="flex justify-center space-x-2">
          {STEPS.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === step ? 'w-8 bg-emerald-500' : 'w-2 bg-slate-700'}`}></div>
          ))}
        </div>
        <button 
          onClick={next}
          className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl shadow-lg shadow-emerald-900/40 transition-transform active:scale-95 bengali-font"
        >
          {step === STEPS.length - 1 ? "শুরু করা যাক!" : "পরবর্তী"}
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
