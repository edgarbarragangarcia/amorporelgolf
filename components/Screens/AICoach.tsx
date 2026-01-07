import React, { useState } from 'react';
import { GeminiService } from '../../services/geminiService';
import { AIMode } from '../../types';

interface AICoachProps {
  onBack: () => void;
}

export const AICoach: React.FC<AICoachProps> = ({ onBack }) => {
  const [activeMode, setActiveMode] = useState<AIMode>(AIMode.Chat);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: "¡Hola Alex! Soy tu Caddie IA. ¿Cómo puedo ayudarte con tu juego hoy?" }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMsg = inputText;
    setInputText('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    let response = '';

    if (activeMode === AIMode.Chat) {
      // Using gemini-3-pro-preview with thinking mode potentially if query is complex
      // For simplicity here we just toggle thinking based on a keyword or default
      response = await GeminiService.chatWithCoach(userMsg, true);
    } else if (activeMode === AIMode.Maps) {
        // Trigger maps grounding
        response = await GeminiService.findNearbyCourses(36.57, -121.95); // Mock coords for Pebble Beach area
    } else if (activeMode === AIMode.Veo) {
        const url = await GeminiService.generateFlyover(userMsg);
        response = url ? `He generado una vista previa del sobrevuelo para ti: ${url}` : "Lo siento, no pude generar el video en este momento.";
    }

    setMessages(prev => [...prev, { role: 'ai', text: response }]);
    setIsLoading(false);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      
      setIsLoading(true);
      // Convert to base64
      const reader = new FileReader();
      reader.onloadend = async () => {
          const base64 = (reader.result as string).split(',')[1];
          // Use Flash Image for analysis
          const analysis = await GeminiService.analyzeSwingPhoto(base64, "Analiza esta postura de golf.");
          setMessages(prev => [...prev, { role: 'user', text: "[Imagen Subida]" }, { role: 'ai', text: analysis }]);
          setIsLoading(false);
      };
      reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-background-dark">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-white/10">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10">
          <span className="material-symbols-outlined">expand_more</span>
        </button>
        <div className="flex flex-col items-center">
          <span className="text-sm font-bold">Caddie IA</span>
          <span className="text-[10px] text-primary flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
            En Línea
          </span>
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10">
          <span className="material-symbols-outlined">more_vert</span>
        </button>
      </div>

      {/* Mode Selector */}
      <div className="flex gap-2 p-2 overflow-x-auto no-scrollbar border-b border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-black/20">
        {[
          { id: AIMode.Chat, icon: 'chat_bubble', label: 'Chat' },
          { id: AIMode.Voice, icon: 'mic', label: 'En Vivo' },
          { id: AIMode.Vision, icon: 'image_search', label: 'Swing ID' },
          { id: AIMode.Veo, icon: 'movie', label: 'Sobrevuelo' },
          { id: AIMode.Maps, icon: 'map', label: 'Campos' },
        ].map((mode) => (
          <button
            key={mode.id}
            onClick={() => setActiveMode(mode.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
              activeMode === mode.id 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-white dark:bg-card-dark text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">{mode.icon}</span>
            {mode.label}
          </button>
        ))}
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-primary text-white rounded-br-none' 
                : 'bg-gray-100 dark:bg-card-dark text-gray-800 dark:text-gray-200 rounded-bl-none'
            }`}>
              {msg.text.includes('http') ? (
                  <div className="flex flex-col gap-2">
                      <span>Aquí tienes tu video generado:</span>
                      <video src={msg.text} controls className="rounded-lg w-full" />
                  </div>
              ) : msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
             <div className="bg-gray-100 dark:bg-card-dark p-3 rounded-2xl rounded-bl-none flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
             </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-100 dark:border-white/10 bg-white dark:bg-background-dark">
        {activeMode === AIMode.Vision ? (
             <label className="flex items-center justify-center w-full h-12 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl cursor-pointer hover:border-primary transition-colors">
                 <div className="flex items-center gap-2 text-gray-500">
                     <span className="material-symbols-outlined">add_a_photo</span>
                     <span className="text-sm font-medium">Subir Foto de Swing</span>
                 </div>
                 <input type="file" className="hidden" accept="image/*" onChange={handleFileUpload} />
             </label>
        ) : activeMode === AIMode.Voice ? (
            <div className="flex flex-col items-center gap-4 py-8">
                <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                    <button className="relative z-10 h-20 w-20 bg-primary rounded-full flex items-center justify-center text-white shadow-xl">
                        <span className="material-symbols-outlined text-4xl">mic</span>
                    </button>
                </div>
                <p className="text-sm text-gray-500">Escuchando...</p>
            </div>
        ) : (
            <div className="flex items-center gap-2">
            <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">add_circle</span>
            </button>
            <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={activeMode === AIMode.Veo ? "Describe el sobrevuelo..." : "Pregunta a tu entrenador..."}
                className="flex-1 bg-gray-100 dark:bg-card-dark border-none rounded-full px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
            />
            <button 
                onClick={handleSend}
                disabled={!inputText.trim() || isLoading}
                className="p-2 bg-primary text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-dark transition-colors"
            >
                <span className="material-symbols-outlined">send</span>
            </button>
            </div>
        )}
      </div>
    </div>
  );
};