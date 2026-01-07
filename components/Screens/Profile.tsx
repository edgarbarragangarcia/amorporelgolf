import React from 'react';
import { Screen } from '../../types';

interface ProfileProps {
  onNavigate: (screen: Screen) => void;
  onLogout: () => void;
}

export const Profile: React.FC<ProfileProps> = ({ onNavigate, onLogout }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pb-24">
       {/* Header */}
       <div className="relative h-72 w-full overflow-hidden">
         <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCNdlULD5omf46kgqRBpcZpdXbFd_uvCoO8VxQbenSMAgwbHPplGfGAvnJpJv6z2EBV8ihmflYgne_Nc_8YsLCcnuvlQm0h3BawvfsoWzvfVKzpDANVKo4Xkc_KZVDvQueeLR0wi2nxsmzeQTqHRjFuYcpQZVGYXAQ80AFXUIG5KFz1v8lWrNAzhQrm-tBoiWIgNA-7HgfFVsfcX4EtzITjf5x6j5XmPpAUVRhTzOeoujP4-kRiu0eUEeLaVZPk-tzYhvETQZHwbuTS")' }}></div>
         <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background-light dark:to-background-dark"></div>
         <div className="absolute bottom-0 left-0 w-full p-6 flex items-end justify-between">
            <div className="flex items-end gap-4">
                <div className="h-24 w-24 rounded-2xl bg-white p-1 shadow-lg relative -mb-4 z-10">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNdlULD5omf46kgqRBpcZpdXbFd_uvCoO8VxQbenSMAgwbHPplGfGAvnJpJv6z2EBV8ihmflYgne_Nc_8YsLCcnuvlQm0h3BawvfsoWzvfVKzpDANVKo4Xkc_KZVDvQueeLR0wi2nxsmzeQTqHRjFuYcpQZVGYXAQ80AFXUIG5KFz1v8lWrNAzhQrm-tBoiWIgNA-7HgfFVsfcX4EtzITjf5x6j5XmPpAUVRhTzOeoujP4-kRiu0eUEeLaVZPk-tzYhvETQZHwbuTS" className="h-full w-full rounded-xl object-cover" />
                </div>
                <div className="mb-1">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Alex Rodriguez</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">verified</span>
                        Miembro Premium
                    </p>
                </div>
            </div>
            <button className="bg-white dark:bg-card-dark p-2.5 rounded-full shadow-sm border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">edit</span>
            </button>
         </div>
       </div>

       <div className="pt-8">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 px-6 mb-8">
                {[
                    { label: 'Hándicap', value: '5.4', icon: 'trending_down' },
                    { label: 'Rondas', value: '128', icon: 'golf_course' },
                    { label: 'Mejor', value: '72', icon: 'emoji_events' }
                ].map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-card-dark p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 text-center flex flex-col items-center gap-1">
                        <span className="material-symbols-outlined text-gray-400 text-lg mb-1">{stat.icon}</span>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{stat.label}</p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Menu */}
            <div className="px-4 flex flex-col gap-3">
                <button onClick={() => onNavigate(Screen.Caddies)} className="group flex items-center gap-4 bg-white dark:bg-card-dark p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 active:scale-[0.99] transition-all hover:border-primary/50">
                    <div className="h-12 w-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined">groups</span>
                    </div>
                    <div className="flex-1 text-left">
                        <h3 className="font-bold text-gray-900 dark:text-white text-base">Mis Caddies</h3>
                        <p className="text-xs text-gray-500">Gestionar reservas y favoritos</p>
                    </div>
                    <span className="material-symbols-outlined text-gray-300">chevron_right</span>
                </button>

                <button className="group flex items-center gap-4 bg-white dark:bg-card-dark p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 active:scale-[0.99] transition-all hover:border-primary/50">
                    <div className="h-12 w-12 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined">history</span>
                    </div>
                    <div className="flex-1 text-left">
                        <h3 className="font-bold text-gray-900 dark:text-white text-base">Historial de Rondas</h3>
                        <p className="text-xs text-gray-500">Ver tarjetas y estadísticas</p>
                    </div>
                    <span className="material-symbols-outlined text-gray-300">chevron_right</span>
                </button>

                <button className="group flex items-center gap-4 bg-white dark:bg-card-dark p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 active:scale-[0.99] transition-all hover:border-primary/50">
                    <div className="h-12 w-12 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined">credit_card</span>
                    </div>
                    <div className="flex-1 text-left">
                        <h3 className="font-bold text-gray-900 dark:text-white text-base">Pagos y Suscripción</h3>
                        <p className="text-xs text-gray-500">Tarjetas y facturación</p>
                    </div>
                    <span className="material-symbols-outlined text-gray-300">chevron_right</span>
                </button>

                <button className="group flex items-center gap-4 bg-white dark:bg-card-dark p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 active:scale-[0.99] transition-all hover:border-primary/50">
                    <div className="h-12 w-12 rounded-full bg-gray-50 dark:bg-gray-700/50 flex items-center justify-center text-gray-500 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined">settings</span>
                    </div>
                    <div className="flex-1 text-left">
                        <h3 className="font-bold text-gray-900 dark:text-white text-base">Ajustes</h3>
                        <p className="text-xs text-gray-500">Notificaciones y privacidad</p>
                    </div>
                    <span className="material-symbols-outlined text-gray-300">chevron_right</span>
                </button>
            </div>

            {/* Logout */}
            <div className="px-4 mt-8 mb-4">
                <button onClick={onLogout} className="w-full py-4 rounded-2xl border border-red-100 dark:border-red-900/30 text-red-500 font-bold bg-red-50 dark:bg-red-900/10 hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">logout</span>
                    Cerrar Sesión
                </button>
                <p className="text-center text-[10px] text-gray-400 mt-4">Golf Super-App v2.5.0</p>
            </div>
       </div>
    </div>
  );
};