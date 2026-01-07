import React from 'react';

interface CaddieSelectProps {
  onBack: () => void;
}

export const CaddieSelect: React.FC<CaddieSelectProps> = ({ onBack }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pb-24">
      <header className="fixed top-0 z-50 w-full glass">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={onBack} className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          <h1 className="text-lg font-bold tracking-tight">Seleccionar Caddie</h1>
          <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-2xl">calendar_month</span>
          </button>
        </div>
      </header>

      <main className="relative mt-[60px] flex flex-col w-full max-w-md mx-auto">
        <div className="px-4 py-4">
          <div className="flex items-center gap-3 bg-white dark:bg-card-dark p-3 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Ubicación y Hora</span>
              <p className="text-sm font-bold text-gray-900 dark:text-white leading-tight">Pebble Beach • Mañana, 8:00 AM</p>
            </div>
            <button className="ml-auto text-primary text-sm font-semibold">Editar</button>
          </div>
        </div>

        <div className="flex gap-3 px-4 pb-4 overflow-x-auto no-scrollbar">
          <button className="flex h-9 shrink-0 items-center gap-2 rounded-xl bg-[#121614] dark:bg-white px-4 transition-transform active:scale-95">
            <span className="text-xs font-semibold text-white dark:text-black">Todos</span>
          </button>
          <button className="flex h-9 shrink-0 items-center gap-2 rounded-xl bg-white dark:bg-card-dark border border-gray-200 dark:border-white/10 px-4 transition-transform active:scale-95">
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Mejor Valorados</span>
          </button>
          <button className="flex h-9 shrink-0 items-center gap-2 rounded-xl bg-white dark:bg-card-dark border border-gray-200 dark:border-white/10 px-4 transition-transform active:scale-95">
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Menor Hándicap</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 px-4 pb-4">
          <div className="col-span-2 group relative overflow-hidden rounded-[24px] bg-white dark:bg-card-dark shadow-sm border border-gray-100 dark:border-white/5 transition-all hover:shadow-md">
            <div className="flex flex-row p-4 gap-4 items-center">
              <div className="relative h-24 w-24 shrink-0 rounded-2xl overflow-hidden">
                <img className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1aGQtCv4Picx5w8uwzh5Elg3iYXpbRGVrb4Ifx12kRdeDk61nE3frTKRwNebeTIQyha34-5J71tSAMdEO3f7b7V7g4ae9cBc6Wz9fafW_7QXLpK00UD4eAGCS7bNeIc1jdmF578zlSEypCFWapoJH-4uQ_iBFDU0Z971WYdAgCLSE7i9EYRgYSCauf3Wh3afIcyxsednAFtqBvSvaLbh7qQTjviw1WTIkgDIukDD3uG_bqx6N7SH-VB60NGr5wy_41RrrSgqbqnCh" alt="Michael T." />
                <div className="absolute bottom-1 right-1 h-3 w-3 rounded-full bg-primary border-2 border-white dark:border-card-dark"></div>
              </div>
              <div className="flex flex-col flex-1 justify-center">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block rounded-lg bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary mb-1">Especialista del Campo</span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">Michael T.</h3>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-xs font-bold text-gray-900 dark:text-white">4.9</span>
                  </div>
                </div>
                <div className="mt-1 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <span className="font-medium bg-gray-100 dark:bg-white/5 px-1.5 py-0.5 rounded text-gray-700 dark:text-gray-300">HCP 4</span>
                  <span>•</span>
                  <span>500+ Rondas</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-base font-bold text-gray-900 dark:text-white">$120<span className="text-xs font-normal text-gray-500 ml-1">/ronda</span></span>
                  <button className="h-8 rounded-xl bg-primary px-4 text-xs font-bold text-[#121614] transition-transform active:scale-95 shadow-lg shadow-primary/20">Elegir</button>
                </div>
              </div>
            </div>
          </div>

          {[
            { name: 'Sarah J.', role: 'Asociada PGA', hcp: '2', price: '$150', rating: '5.0', img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCK0aHKfeviFwXMMtOPsrD7Vzwi5PZu7GIGP6Ls4g1s0Fp9GIuJ1j0agNGkOuT1-c2-sMDxQGBcBBhQcvjBh2SCLtVt81n1qW-ABMEkhXRwIVnHsp0Kth-JWG5Y2K4xkScl7R6wCCdRDPRkGV092PwPuBJRi07mqZToe6b4gXUzH4pEYUAcV1x6rYmpb-9sEFT9SNlIAP7GGGaG9MVUK8-ZeLxAjKuKta1w23OMvxFWFmsTQv8ge8h0eCOkzREm4SGD4Q4xy6ZI40Zm" },
            { name: 'David K.', role: 'Leyenda Local', hcp: '5', price: '$110', rating: '4.8', img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQBXx3MX_6KZxX4Rl5-tbwIcUkqU_8vzpKCxroWx4W9DG9Q3-OKmhzjikvkwcdn4hsSUuxsuXKJEGpjGPY1r80STnKjvamlJJYoT-VBQotN1Ewp0NEqiAblvia2dlZPt16jC5rC9_ClNOt9Iojo7J1VrmHJR_6XWQa1HehLBrLPI6Q8zyk_Y2_nZs-A7moYHPiEmxbPOYYGJCrioWDp5OvH8XDz9WN1w0qxaO518kR2GLB4IH-Lk8g5tSoj4VXcQwFOBSzQ6ZBbeWx" },
            { name: 'Emma R.', role: 'Experiencia Tour', hcp: '0', price: '$200', rating: '5.0', img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUeYbpXfmY5aXXieocznQ6ZwCtcUhBlGuTr4wRPX0mCGryVGus7mn6K5ugGOV1oroQsQyKBTr4-jCIph_DiXyT8FUxTEm-0JNaU4ax-f8wOq_wN5lY0k7r4usnug0nSuLDnUfDFLJmN4cv1BtaKCLCDvx_Mw38OMpnlq0AlhT-7QZJRd0LzeclNZ9tZNqdwCgtMHAdtyCxBGWTakTQq3aEbmMiAtSgkE0D1-853gx-tcsNTwufvrZwyz3rBG7LZ6pSh-8RqEKr-5Dt" },
            { name: 'James L.', role: 'Maestro Caddie', hcp: '7', price: '$100', rating: '4.7', img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdmgEWcu7a6uCc7SwLUd3Q_Ebr_8zfgmhsdSKR5H5bPbZQsz1KMxyvmInM8AIQk3BNZjdoZWe9rxye9mHmzTKXtUpdRC6pXgn2fLwW95YKzmgv4mkKYNO1PQxTIAHUZ6xRW06fA3MRq2iL-93_-bBYJvgdRKgBcC-iQR3HhP2IhTgNtalWeVS3po7ffREPtYqpBb3C0ss4dIMbUaeUMJlc_SodGP3dupSATQo3JIhQ-FZang1sYgKn75fX3VvZrWUjqf95ZHnSgdJL" }
          ].map((caddie, idx) => (
            <div key={idx} className="group relative flex flex-col overflow-hidden rounded-[24px] bg-white dark:bg-card-dark shadow-sm border border-gray-100 dark:border-white/5">
              <div className="relative h-40 w-full overflow-hidden bg-gray-100">
                <img src={caddie.img} alt={caddie.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-3 right-3 rounded-lg bg-white/90 dark:bg-black/60 backdrop-blur-sm px-2 py-1 flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-[12px] text-amber-400" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-xs font-bold dark:text-white">{caddie.rating}</span>
                </div>
                <div className="absolute bottom-3 left-3 h-2 w-2 rounded-full bg-primary ring-2 ring-white/50"></div>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <div className="mb-1">
                  <span className="text-[10px] font-semibold text-primary uppercase tracking-wide">{caddie.role}</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">{caddie.name}</h3>
                <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                  <span className="font-medium bg-gray-100 dark:bg-white/5 px-1.5 py-0.5 rounded text-gray-700 dark:text-gray-300">HCP {caddie.hcp}</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{caddie.price}</p>
                  <button className="h-8 w-8 flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black transition-transform active:scale-90">
                    <span className="material-symbols-outlined text-[18px]">add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};