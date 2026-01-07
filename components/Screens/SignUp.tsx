import React from 'react';

interface SignUpProps {
  onLogin: () => void;
}

export const SignUp: React.FC<SignUpProps> = ({ onLogin }) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-end pb-10 sm:justify-center sm:pb-0 overflow-hidden bg-black">
       {/* Background */}
       <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
         <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOF8TBU1r9mtjFfy86nTvrJlChozsVlEHi61d2DBiNR3Ws_UFrRW6ZghlxxYpSLhBwkosJ3TWdjw6YYeYlXj3679sACw0k_ev3UG4--PfTCkmEhsham5x_JVxgpd2fe0GN7MJ0jVvkptnvbBmxGvpXGJik0ckjBXTTB_9Fshvx6e9ufwjKDby1xXJdyd5li7roCr0WF_ejHZk7jcjX5O-5bG6aKvN9jAVdv9jvgq0TMfg48ky8pyF51ihc9Xoxj-Y5SlXQVvZ3LzoR" 
            className="w-full h-full object-cover opacity-80"
            alt="Golf Background"
         />
       </div>

       {/* Content */}
       <div className="relative z-20 w-full max-w-md px-6 flex flex-col gap-6">
         <div className="flex flex-col gap-2 mb-4 animate-fade-in-up">
            <div className="h-14 w-14 rounded-2xl bg-primary flex items-center justify-center mb-2 shadow-glow ring-4 ring-primary/20">
                <span className="material-symbols-outlined text-white text-3xl">sports_golf</span>
            </div>
            <h1 className="text-4xl font-display font-bold text-white tracking-tight leading-tight">Bienvenido al<br/>Club</h1>
            <p className="text-gray-300 text-sm font-medium">Mejora tu juego con IA y conecta con profesionales.</p>
         </div>

         {/* Manual Registration */}
         <div className="flex flex-col gap-4 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl">
            <div className="space-y-4">
                <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-300 ml-1 uppercase tracking-wider">Nombre Completo</label>
                    <input type="text" placeholder="Alex..." className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium" />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-300 ml-1 uppercase tracking-wider">Correo Electrónico</label>
                    <input type="email" placeholder="alex@golf.com" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium" />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-300 ml-1 uppercase tracking-wider">Contraseña</label>
                    <input type="password" placeholder="••••••••" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium" />
                </div>
            </div>
            
            <button onClick={onLogin} className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 active:scale-[0.98] transition-all mt-2 text-sm uppercase tracking-wide">
                Registrarse
            </button>
         </div>

         <div className="flex flex-col items-center gap-5">
             <div className="flex items-center gap-3 text-gray-400 text-xs font-medium">
                 <span className="h-px w-12 bg-white/10"></span>
                 <span>O continúa con</span>
                 <span className="h-px w-12 bg-white/10"></span>
             </div>
             {/* Only Google Login */}
             <div className="flex gap-4">
                 <button className="h-14 w-14 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg active:scale-95" onClick={onLogin}>
                     <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="h-6 w-6" alt="Google" />
                 </button>
             </div>
             <p className="text-xs text-gray-400 mt-2">
                 ¿Ya tienes cuenta? <button onClick={onLogin} className="text-white font-bold hover:underline">Iniciar Sesión</button>
             </p>
         </div>
       </div>
    </div>
  );
};