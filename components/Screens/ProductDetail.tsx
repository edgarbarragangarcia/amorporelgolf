import React from 'react';

interface ProductDetailProps {
  onBack: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ onBack }) => {
  return (
    <div className="relative w-full min-h-screen flex flex-col pb-[100px] bg-white dark:bg-background-dark">
      {/* Floating Header */}
      <div className="fixed top-0 left-0 right-0 z-50 p-4 pt-8 flex items-center justify-between pointer-events-none">
        <button 
          onClick={onBack}
          className="pointer-events-auto flex items-center justify-center h-10 w-10 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 hover:bg-white/30 transition-colors shadow-sm"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>
        <div className="flex gap-3 pointer-events-auto">
          <button className="flex items-center justify-center h-10 w-10 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 hover:bg-white/30 transition-colors shadow-sm">
            <span className="material-symbols-outlined text-[20px]">favorite</span>
          </button>
          <button className="flex items-center justify-center h-10 w-10 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 hover:bg-white/30 transition-colors shadow-sm">
            <span className="material-symbols-outlined text-[20px]">share</span>
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-[55vh] shrink-0">
        <div className="absolute inset-0 bg-gray-200">
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDVLR3d7Vxc3fwau5nUv7cFADgcGYjLH3A7o9egw2eAJ32SCjE94Ton8jGLLpX3w8dEQQQoFqMU5ev8fH75zpXOYTE8j925o-90OFCaWs4d8BUH5RtPOQcTvRcCHZdZIeyH-toKjFsqxsaXC8M4PL7FvkK6hbqOCYk3TT1ODX8J9Ke32USxbKmg6QstBMymNMkTa-hu7qXHgVFy5tQLIulzvt-U2Vqn8StCDu3AR5elfv93a4Ejf-51WNhA1kpZvahaDjWHLzEqE32l")' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20"></div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2">
          <div className="h-1.5 w-6 rounded-full bg-white shadow-sm"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-white/50 backdrop-blur-sm"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-white/50 backdrop-blur-sm"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative -mt-6 z-10 w-full bg-background-light dark:bg-background-dark rounded-t-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] overflow-hidden">
        <div className="w-full flex justify-center pt-3 pb-1">
          <div className="w-12 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
        </div>
        
        <div className="px-6 pt-4 pb-8 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <h2 className="text-primary font-bold text-sm tracking-widest uppercase mb-1">TaylorMade</h2>
                <h1 className="text-3xl font-display font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">Stealth 2 Plus Driver</h1>
              </div>
              <div className="flex flex-col items-end pt-1">
                <span className="text-2xl font-bold text-primary tracking-tight">$599</span>
                <div className="flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-yellow-400 text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">4.9 (128)</span>
                </div>
              </div>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              Diseñado con cara de carbono 60X para un rendimiento más ligero, rápido y permisivo.
            </p>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: 'golf_course', label: 'Loft', val: '10.5°' },
              { icon: 'waves', label: 'Flex', val: 'Stiff' },
              { icon: 'pan_tool', label: 'Mano', val: 'Derecha' }
            ].map((spec, i) => (
              <div key={i} className="bg-white dark:bg-card-dark p-4 rounded-xl shadow-soft flex flex-col items-center justify-center gap-2 text-center aspect-square border border-gray-100 dark:border-gray-800">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-1">
                  <span className="material-symbols-outlined text-[20px]">{spec.icon}</span>
                </div>
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold">{spec.label}</span>
                <span className="text-sm font-bold text-gray-900 dark:text-white">{spec.val}</span>
              </div>
            ))}
          </div>

          {/* Selectors */}
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold text-gray-900 dark:text-white">Colores</span>
            <div className="flex gap-4">
              <label className="group relative cursor-pointer">
                <input type="radio" name="color" className="peer sr-only" defaultChecked />
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-red-600 to-black ring-2 ring-transparent ring-offset-2 ring-offset-background-light peer-checked:ring-red-500 transition-all"></div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-medium text-gray-500 opacity-0 group-hover:opacity-100 peer-checked:opacity-100 transition-opacity whitespace-nowrap">Rojo Stealth</span>
              </label>
              <label className="group relative cursor-pointer">
                <input type="radio" name="color" className="peer sr-only" />
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#51c878] to-black ring-2 ring-transparent ring-offset-2 ring-offset-background-light peer-checked:ring-primary transition-all"></div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-medium text-gray-500 opacity-0 group-hover:opacity-100 peer-checked:opacity-100 transition-opacity whitespace-nowrap">Esmeralda</span>
              </label>
            </div>
          </div>

          {/* Upsell */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-bold text-gray-900 dark:text-white">Completa el Look</span>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
              <div className="min-w-[140px] bg-white dark:bg-card-dark rounded-xl p-3 border border-gray-100 dark:border-gray-800 flex flex-col gap-2">
                <div className="w-full aspect-[4/5] rounded-lg bg-gray-100 dark:bg-gray-800 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBwDS7jhKhanPQrtDsz1D9hSPgNGkqV66RlcfPip_yMB5O-ZSNC_WEy6-3SXt8M5m1nTt1wX6vqNsuZdIPwVTYNeMmoDzNW1CuGHQxOgDJCgRU4itIMpgufYkExRBaUttgeacUfI6pFBGHyoyj8s-y7SxspeB1Aix4DWBd_XEdJ_kWORwUC6u8Y3CTJRPhEUVqUrXwhQ9USSTRASF5iu8tNpSSUdz8Rtbzq-86wY7AHLW-opzhNdpGKiX5LjCcJDsCU9l6C0YkdoJDf")' }}></div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white truncate">Polo Tour</h4>
                  <span className="text-xs text-primary font-medium">$85.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-6 pt-4 glass flex items-center gap-4 rounded-t-2xl shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-4 bg-gray-100 dark:bg-card-dark rounded-full px-2 py-1.5 h-12 border border-gray-200 dark:border-gray-700">
          <button className="h-8 w-8 flex items-center justify-center rounded-full bg-white dark:bg-gray-700 text-gray-500 shadow-sm hover:text-primary active:scale-95 transition-all">
            <span className="material-symbols-outlined text-[18px]">remove</span>
          </button>
          <span className="font-bold w-4 text-center text-gray-900 dark:text-white">1</span>
          <button className="h-8 w-8 flex items-center justify-center rounded-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm hover:text-primary active:scale-95 transition-all">
            <span className="material-symbols-outlined text-[18px]">add</span>
          </button>
        </div>
        <button className="flex-1 h-12 bg-primary hover:bg-primary-dark active:scale-[0.98] transition-all rounded-full flex items-center justify-center gap-2 shadow-glow text-white font-bold text-[15px] tracking-wide">
          <span>Añadir al Carrito</span>
          <span className="bg-white/20 px-1.5 py-0.5 rounded text-[11px] font-semibold">$599</span>
        </button>
      </div>
    </div>
  );
};