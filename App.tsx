
import React, { useState, useEffect } from 'react';
import { AppState, VoteData } from './types';
import Splash from './pages/Splash';
import Onboarding from './pages/Onboarding';
import Home from './pages/Home';
import VoteDashboard from './pages/VoteDashboard';
import Manifesto from './pages/Manifesto';
import Leaders from './pages/Leaders';
import News from './pages/News';
import Success from './pages/Success';
import { COLORS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<AppState>('splash');
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [lastVoteData, setLastVoteData] = useState<VoteData | null>(null);

  useEffect(() => {
    if (currentPage === 'splash') {
      const timer = setTimeout(() => {
        setCurrentPage(hasCompletedOnboarding ? 'home' : 'onboarding');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentPage, hasCompletedOnboarding]);

  const navigateTo = (page: AppState, data?: VoteData) => {
    if (data) setLastVoteData(data);
    setCurrentPage(page);
  };

  const completeOnboarding = () => {
    setHasCompletedOnboarding(true);
    navigateTo('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'splash': return <Splash />;
      case 'onboarding': return <Onboarding onComplete={completeOnboarding} />;
      case 'home': return <Home onNavigate={navigateTo} />;
      case 'vote-dashboard': return <VoteDashboard onNavigate={navigateTo} />;
      case 'manifesto': return <Manifesto onBack={() => navigateTo('home')} />;
      case 'leaders': return <Leaders onBack={() => navigateTo('home')} />;
      case 'news': return <News onBack={() => navigateTo('home')} />;
      case 'success': return <Success data={lastVoteData} onBack={() => navigateTo('home')} />;
      default: return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-screen relative overflow-hidden bg-slate-900 border-x border-slate-800 shadow-2xl">
      {renderPage()}
      
      {/* Navigation Bar (Persistent on Home and Main Sections) */}
      {['home', 'vote-dashboard', 'manifesto', 'leaders', 'news'].includes(currentPage) && (
        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-slate-950/90 backdrop-blur-lg border-t border-slate-800 flex justify-around py-3 px-2 z-50">
          <NavItem active={currentPage === 'home'} icon="🏠" label="Home" onClick={() => navigateTo('home')} />
          <NavItem active={currentPage === 'vote-dashboard'} icon="💰" label="Votes" onClick={() => navigateTo('vote-dashboard')} />
          <NavItem active={currentPage === 'manifesto'} icon="📜" label="Plan" onClick={() => navigateTo('manifesto')} />
          <NavItem active={currentPage === 'news'} icon="📰" label="News" onClick={() => navigateTo('news')} />
        </nav>
      )}
    </div>
  );
};

const NavItem: React.FC<{ active: boolean, icon: string, label: string, onClick: () => void }> = ({ active, icon, label, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center transition-all duration-300 ${active ? 'text-emerald-400 scale-110' : 'text-slate-500 hover:text-slate-300'}`}
  >
    <span className="text-xl mb-1">{icon}</span>
    <span className="text-[10px] uppercase font-bold tracking-widest">{label}</span>
  </button>
);

export default App;
