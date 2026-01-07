import React, { useState } from 'react';
import { Dashboard } from './components/Screens/Dashboard';
import { ProductDetail } from './components/Screens/ProductDetail';
import { TournamentFeed } from './components/Screens/TournamentFeed';
import { CaddieSelect } from './components/Screens/CaddieSelect';
import { AICoach } from './components/Screens/AICoach';
import { SignUp } from './components/Screens/SignUp';
import { Profile } from './components/Screens/Profile';
import { BottomNav } from './components/Navigation/BottomNav';
import { Screen } from './types';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Dashboard);
  const [previousScreen, setPreviousScreen] = useState<Screen>(Screen.Dashboard);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigateTo = (screen: Screen) => {
    if (screen !== currentScreen) {
      setPreviousScreen(currentScreen);
      setCurrentScreen(screen);
      window.scrollTo(0, 0);
    }
  };

  const goBack = () => {
    setCurrentScreen(previousScreen);
  };

  if (!isLoggedIn) {
      return <SignUp onLogin={() => setIsLoggedIn(true)} />;
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.Dashboard:
        return <Dashboard onNavigate={navigateTo} />;
      case Screen.ProductDetail:
        return <ProductDetail onBack={goBack} />;
      case Screen.Tournaments:
        return <TournamentFeed onNavigate={navigateTo} />;
      case Screen.Caddies:
        return <CaddieSelect onBack={() => navigateTo(Screen.Dashboard)} />;
      case Screen.AICoach:
        return <AICoach onBack={goBack} />;
      case Screen.Profile:
        return <Profile onNavigate={navigateTo} onLogout={() => setIsLoggedIn(false)} />;
      default:
        return <Dashboard onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-background-light dark:bg-background-dark overflow-x-hidden">
      {renderScreen()}
      
      {/* Hide bottom nav on specific screens like Product Detail or Full Screen AI */}
      {currentScreen !== Screen.ProductDetail && currentScreen !== Screen.AICoach && (
        <BottomNav currentScreen={currentScreen} onNavigate={navigateTo} />
      )}
    </div>
  );
};

export default App;