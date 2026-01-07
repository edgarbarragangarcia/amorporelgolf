import React from 'react';
import { Screen } from '../../types';

interface BottomNavProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  const navItemClass = (screen: Screen) => 
    `group flex flex-col items-center justify-center w-14 gap-1 transition-colors ${
      currentScreen === screen ? 'text-primary' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
    }`;

  const labelClass = (screen: Screen) =>
    `text-[10px] font-medium transition-colors ${
      currentScreen === screen ? 'text-primary' : 'text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300'
    }`;

  const iconClass = "material-symbols-outlined text-[24px] mb-0.5";

  return (
    <div className="fixed bottom-0 z-40 w-full px-4 pb-6 pt-2 pointer-events-none">
      <nav className="pointer-events-auto relative mx-auto flex h-16 w-full max-w-[400px] items-center justify-between rounded-2xl bg-white/90 dark:bg-[#1f1f23]/95 px-4 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl border border-white/20 dark:border-white/5">
        
        <button className={navItemClass(Screen.Dashboard)} onClick={() => onNavigate(Screen.Dashboard)}>
          <span className={iconClass} style={{ fontVariationSettings: currentScreen === Screen.Dashboard ? "'FILL' 1" : "'FILL' 0" }}>home</span>
          <span className={labelClass(Screen.Dashboard)}>Inicio</span>
        </button>

        <button className={navItemClass(Screen.Shop)} onClick={() => onNavigate(Screen.Shop)}>
          <span className={iconClass} style={{ fontVariationSettings: currentScreen === Screen.Shop ? "'FILL' 1" : "'FILL' 0" }}>shopping_bag</span>
          <span className={labelClass(Screen.Shop)}>Tienda</span>
        </button>

        {/* Floating Action Button for AI Coach */}
        <div className="relative -top-6">
          <button 
            onClick={() => onNavigate(Screen.AICoach)}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-[0_8px_16px_rgba(81,200,120,0.4)] hover:bg-primary-dark hover:scale-105 transition-all ring-4 ring-background-light dark:ring-background-dark"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>smart_toy</span>
          </button>
        </div>

        <button className={navItemClass(Screen.Tournaments)} onClick={() => onNavigate(Screen.Tournaments)}>
          <span className={iconClass} style={{ fontVariationSettings: currentScreen === Screen.Tournaments ? "'FILL' 1" : "'FILL' 0" }}>emoji_events</span>
          <span className={labelClass(Screen.Tournaments)}>Eventos</span>
        </button>

        <button className={navItemClass(Screen.Profile)} onClick={() => onNavigate(Screen.Profile)}>
          <span className={iconClass} style={{ fontVariationSettings: currentScreen === Screen.Profile ? "'FILL' 1" : "'FILL' 0" }}>person</span>
          <span className={labelClass(Screen.Profile)}>Perfil</span>
        </button>

      </nav>
    </div>
  );
};