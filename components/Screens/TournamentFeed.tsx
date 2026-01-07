import React from 'react';
import { Screen } from '../../types';

interface TournamentFeedProps {
  onNavigate: (screen: Screen) => void;
}

export const TournamentFeed: React.FC<TournamentFeedProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-screen flex flex-col pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md pt-safe-top">
        <div className="px-5 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-[32px] font-bold tracking-tight text-gray-900 dark:text-white">Tournaments</h1>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-card-dark shadow-sm border border-gray-100 dark:border-zinc-700 active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-gray-900 dark:text-white" style={{ fontSize: '24px' }}>search</span>
            </button>
          </div>
          {/* Filters */}
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            <button className="flex-shrink-0 px-5 h-9 rounded-full bg-primary text-white text-sm font-semibold shadow-glow transition-all">All</button>
            {['Pro', 'Amateur', 'Charity', 'Club'].map(f => (
              <button key={f} className="flex-shrink-0 px-5 h-9 rounded-full bg-[#EFF0F2] dark:bg-card-dark text-gray-900 dark:text-gray-300 text-sm font-medium border border-transparent hover:border-gray-300 transition-all">
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="h-4 w-full bg-gradient-to-b from-background-light dark:from-background-dark to-transparent absolute -bottom-4 z-10 pointer-events-none"></div>
      </header>

      {/* Feed */}
      <main className="flex-1 px-4 pt-2 flex flex-col gap-4">
        {/* Featured */}
        <div className="group relative w-full h-[400px] rounded-bento overflow-hidden shadow-soft active:scale-[0.99] transition-transform duration-300 cursor-pointer">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDB054BfyP3z9PnsZnKcez2yJHLAP_ywHp1JYFHD40gXO23yFTOGy-r7GN0NFQWutOHbGTKkx4lltoAf_3D3-JXrgYTZcWZtr1Ysp5358CLfd9tjkH7r1_ixSkyp87OCcuQN2bYs9WPhWaqXC5zqVvSopVVS2GYj7SogqJ2sZmyWD8dPV69j2DKFd43mj_V26xvvFcCH0S0ruUn4MTuavsq6GftcQHuaAhFGV0YdtCK94ku551aTPozQYE-_fT4i9-aemPs8K6nhwqq")' }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10"></div>
          <div className="absolute top-4 left-4 flex gap-2">
            <div className="bg-white/20 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <span className="material-symbols-outlined text-white text-[16px]">calendar_month</span>
              <span className="text-white text-xs font-semibold tracking-wide uppercase">Oct 12-14</span>
            </div>
            <div className="bg-primary/80 border border-primary/50 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <span className="text-white text-xs font-bold tracking-wide uppercase">Featured</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-primary font-medium text-sm mb-1 tracking-wide uppercase">Pro Division</p>
                <h2 className="text-white text-3xl font-bold leading-none mb-1">The Coastal Open</h2>
                <p className="text-gray-300 text-base font-light">Pebble Beach Golf Links</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3 pt-4 border-t border-white/10">
              <div className="flex flex-col">
                <span className="text-gray-400 text-xs uppercase tracking-wider">Entry Fee</span>
                <span className="text-white text-xl font-bold">$450</span>
              </div>
              <button className="bg-white text-gray-900 hover:bg-primary hover:text-white transition-colors h-10 px-6 rounded-full font-bold text-sm flex items-center gap-2">
                Book Spot
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* List Item */}
        <div className="relative h-24 rounded-bento bg-white dark:bg-card-dark shadow-soft p-3 flex items-center gap-4 cursor-pointer active:bg-gray-50 dark:active:bg-zinc-800 transition-colors border border-gray-100 dark:border-zinc-800">
          <div className="h-full aspect-square rounded-xl bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDhOpJugoCzv2EcKeHRzerENxBPJ7TfkAjLEtv0TGD8bNUh67f1tywxJpr7yVlg0ojXmu7VOdqpaZ4_uxsvGtIDkTuV2J2hxmIdplY-kC-m2OjGPZl6-qVYvoUDWCQVFDqNJlPXTyt99CD2t2zMWPquVIdMBC3kM0ryvJZSzlafENnTduC1Fnv38-W0OmdL8ERr7DYCS7gGatgJk6uTCg3LMIqDa3EOhWen0eqLULcg77fi32tyjNvZUz3rBG7LZ6pSh-8RqEKr-5Dt")' }}>
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex justify-between items-start w-full">
              <div className="flex flex-col">
                <h3 className="text-gray-900 dark:text-white font-bold text-base leading-tight">Masters Qualifier</h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">Augusta National • Nov 05</p>
              </div>
              <div className="text-right">
                <span className="block text-gray-900 dark:text-white font-bold text-base">$850</span>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-gray-100 dark:bg-zinc-700 text-gray-600 dark:text-gray-300">Stroke Play</span>
              <span className="text-primary text-[10px] font-medium flex items-center gap-0.5">
                <span className="material-symbols-outlined text-[12px]">bolt</span>
                Filling Fast
              </span>
            </div>
          </div>
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 h-[160px] rounded-bento bg-primary p-4 flex flex-col justify-between relative overflow-hidden shadow-glow">
            <div className="absolute -right-4 -bottom-4 opacity-20">
              <span className="material-symbols-outlined text-white text-[120px]">emoji_events</span>
            </div>
            <div>
              <p className="text-green-900 font-bold text-xs uppercase tracking-wider opacity-60">Your Season</p>
              <p className="text-white font-bold text-3xl mt-1">3rd</p>
              <p className="text-white text-xs opacity-90">Current Ranking</p>
            </div>
            <button className="bg-white/20 backdrop-blur-md text-white text-xs font-bold py-2 px-3 rounded-lg w-fit hover:bg-white/30 transition-colors">
              View Leaderboard
            </button>
          </div>
          <div className="col-span-1 h-[160px] rounded-bento bg-white dark:bg-card-dark shadow-soft p-4 flex flex-col justify-between relative overflow-hidden border border-gray-100 dark:border-zinc-800">
            <div className="flex justify-between items-start">
              <div className="h-10 w-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <span className="material-symbols-outlined">umbrella</span>
              </div>
              <span className="text-xs font-bold text-gray-400">Sat, Oct 12</span>
            </div>
            <div>
              <p className="text-gray-900 dark:text-white font-bold text-lg">Sunny</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">72°F • Wind 5mph</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};