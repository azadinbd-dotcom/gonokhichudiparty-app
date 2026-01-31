
import React from 'react';
import Logo from './Logo';
import { APP_NAME_BN, SLOGAN_BN } from './constants';

const Splash: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-900">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full"></div>
        <Logo size="lg" />
      </div>
      <h1 className="bengali-font text-4xl font-bold text-emerald-400 mb-2 text-center drop-shadow-lg">
        {APP_NAME_BN}
      </h1>
      <p className="bengali-font text-slate-300 text-lg font-medium text-center animate-pulse">
        {SLOGAN_BN}
      </p>
      
      <div className="absolute bottom-12 flex space-x-2">
        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce delay-100"></div>
        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce delay-200"></div>
      </div>
    </div>
  );
};

export default Splash;
