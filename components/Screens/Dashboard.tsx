import React from 'react';
import { Screen } from '../../types';

interface DashboardProps {
  onNavigate: (screen: Screen) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col pb-24">
      {/* Header */}
      <div className="sticky top-0 z-30 flex items-center justify-between px-6 pt-6 pb-2 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 ring-2 ring-white dark:ring-gray-700 shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCNdlULD5omf46kgqRBpcZpdXbFd_uvCoO8VxQbenSMAgwbHPplGfGAvnJpJv6z2EBV8ihmflYgne_Nc_8YsLCcnuvlQm0h3BawvfsoWzvfVKzpDANVKo4Xkc_KZVDvQueeLR0wi2nxsmzeQTqHRjFuYcpQZVGYXAQ80AFXUIG5KFz1v8lWrNAzhQrm-tBoiWIgNA-7HgfFVsfcX4EtzITjf5x6j5XmPpAUVRhTzOeoujP4-kRiu0eUEeLaVZPk-tzYhvETQZHwbuTS")' }}></div>
            <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-primary ring-2 ring-white dark:ring-gray-800"></span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Good Morning</span>
            <h2 className="text-lg font-bold leading-none tracking-tight">Alex</h2>
          </div>
        </div>
        <button className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-card-dark shadow-sm border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <span className="material-symbols-outlined text-gray-600 dark:text-gray-300 transition-transform group-hover:rotate-12" style={{ fontSize: '20px' }}>notifications</span>
          <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-red-500 ring-1 ring-white dark:ring-card-dark"></span>
        </button>
      </div>

      <main className="flex-1 px-4 pt-2">
        {/* Weather */}
        <div className="flex items-center gap-2 mb-6 px-2 opacity-70">
          <span className="material-symbols-outlined text-primary text-sm">wb_sunny</span>
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">72°F • Pebble Beach, CA</span>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 gap-4">
          
          {/* Hero Card */}
          <div 
            onClick={() => onNavigate(Screen.Tournaments)}
            className="col-span-2 group relative overflow-hidden rounded-bento bg-gray-900 shadow-lg transition-transform active:scale-[0.99] cursor-pointer h-64"
          >
            <div className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOF8TBU1r9mtjFfy86nTvrJlChozsVlEHi61d2DBiNR3Ws_UFrRW6ZghlxxYpSLhBwkosJ3TWdjw6YYeYlXj3679sACw0k_ev3UG4--PfTCkmEhsham5x_JVxgpd2fe0GN7MJ0jVvkptnvbBmxGvpXGJik0ckjBXTTB_9Fshvx6e9ufwjKDby1xXJdyd5li7roCr0WF_ejHZk7jcjX5O-5bG6aKvN9jAVdv9jvgq0TMfg48ky8pyF51ihc9Xoxj-Y5SlXQVvZ3LzoR")' }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="relative flex h-full flex-col justify-between p-5">
              <div className="flex justify-between items-start">
                <span className="inline-flex items-center rounded-full bg-white/20 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-md border border-white/10">
                  <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
                  Registered
                </span>
                <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '20px' }}>calendar_month</span>
                </div>
              </div>
              <div>
                <p className="text-primary font-bold text-sm mb-1 tracking-wide uppercase">Oct 12-14</p>
                <h3 className="text-3xl font-bold text-white tracking-tight leading-tight mb-2">Club<br/>Championship</h3>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  Pebble Beach Links
                </div>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="col-span-1 flex flex-col justify-between rounded-bento bg-white dark:bg-card-dark p-5 shadow-sm border border-gray-100 dark:border-gray-800 transition-colors">
            <div className="flex items-start justify-between">
              <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-lg text-primary">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>trending_down</span>
              </div>
              <span className="text-xs font-semibold text-primary bg-primary/10 px-1.5 py-0.5 rounded">-0.2</span>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-xs font-medium uppercase tracking-wide mb-1">Handicap</p>
              <p className="text-3xl font-bold text-[#121614] dark:text-white tracking-tight">5.4</p>
            </div>
          </div>

          {/* Caddie Card */}
          <div 
            onClick={() => onNavigate(Screen.Caddies)}
            className="col-span-1 relative overflow-hidden rounded-bento bg-white dark:bg-card-dark shadow-sm border border-gray-100 dark:border-gray-800 p-5 flex flex-col justify-between cursor-pointer active:scale-95 transition-transform"
          >
            <div className="flex items-start justify-between">
              <div className="bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 ring-2 ring-gray-50 dark:ring-gray-700" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAK6PjDg6nnBpcsche-1EWyYNCStASldzCbiCDRDN0t-DcZIcGZS39t6rYHRVJ3YGevdkDpMKCX2O8-NMiKlO5VTdN94TrBkleLiejXrpPrkOjJAWBazoV30FpccTiHGY2Wei6pGxNXW7fzRzm7QHT13VRQLuOztM3lo5g_Ouh_D5Hv4800tjOPqjEizu1vDLak4dZEzv1NviFO4_K_7zlxOl0EdDOanD8EwlAJqF2tQDj7ZU3iFiUoO5_YPe8qPy1QIXmIOwsonDnP")' }}></div>
              <div className="flex items-center gap-0.5 text-yellow-500">
                <span className="text-xs font-bold text-gray-900 dark:text-white mr-1">5.0</span>
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Your Caddie</p>
              <p className="font-bold text-sm text-[#121614] dark:text-white mb-3">Sarah J.</p>
              <button className="w-full rounded-lg bg-gray-100 dark:bg-gray-700 py-2 text-xs font-semibold text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                Rebook
              </button>
            </div>
          </div>

          {/* Product Card */}
          <div 
            onClick={() => onNavigate(Screen.ProductDetail)}
            className="col-span-2 relative h-48 overflow-hidden rounded-bento shadow-sm group cursor-pointer"
          >
            <div className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCGJn--oqFoV2fgXWmUJY84cdIapV3qwIIXQqNbXXD8xFLnPwzJY6tbJ16ruaBGFLSuYhktr2UFdUPvPQ1fUc9pUfyekT7we70CFKTkgZAwZEIAYoq1kbeLBgodncNfTKsuEG9u7MHtjHE19Y-fugkAUMvlFU26mUOWr8qblUOTx2bwvQJbJ89ee0_FXuePiN-X8N5htwCe_fh0qzZqEH-SnoLlzEi_esx8TZPqkiXBhdtUxudhjkkbjPQcvCGFWqtSxTJcrsw7tKb1")' }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
            <div className="relative flex h-full flex-col justify-center px-6 py-4 w-2/3">
              <span className="text-primary font-bold text-xs tracking-wider uppercase mb-2">Just Arrived</span>
              <h3 className="text-2xl font-bold text-white mb-2 leading-tight">The New<br/>Titleist TSi3</h3>
              <p className="text-gray-300 text-sm mb-4 line-clamp-2">Precision performance for the dedicated player.</p>
              <div className="flex items-center gap-4">
                <span className="text-white font-bold text-lg">$549</span>
                <button className="rounded-full bg-white h-8 w-8 flex items-center justify-center text-black hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* News Feed */}
          <div className="col-span-2 mt-2">
            <div className="flex justify-between items-center mb-3 px-1">
              <h4 className="font-bold text-sm text-gray-900 dark:text-white">Pro Tips</h4>
              <button className="text-primary text-xs font-medium">View All</button>
            </div>
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
              <div className="min-w-[200px] bg-white dark:bg-card-dark rounded-xl p-3 shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="flex gap-3 items-center">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-2 text-primary">
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>sports_golf</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-900 dark:text-white">Swing Tempo</span>
                    <span className="text-[10px] text-gray-500">3 min read</span>
                  </div>
                </div>
              </div>
              <div className="min-w-[200px] bg-white dark:bg-card-dark rounded-xl p-3 shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="flex gap-3 items-center">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-2 text-orange-500">
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>psychology</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-900 dark:text-white">Mental Game</span>
                    <span className="text-[10px] text-gray-500">5 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};