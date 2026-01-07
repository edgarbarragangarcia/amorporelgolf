import { GoogleGenAI, Type } from "@google/genai";

// NOTE: In a real app, never expose API keys on the client side.
// For this demo, we assume process.env.API_KEY is available.
const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const GeminiService = {
  // 1. Chat with Thinking Mode (Pro)
  async chatWithCoach(message: string, useThinking = false): Promise<string> {
    try {
      const model = 'gemini-3-pro-preview';
      const config: any = {
        // Updated system instruction to Spanish
        systemInstruction: "Eres un experto entrenador de golf y caddie. Proporciona consejos estratégicos, técnicos y mentales en español.",
        tools: [{ googleSearch: {} }] // Search grounding
      };

      if (useThinking) {
        config.thinkingConfig = { thinkingBudget: 1024 }; // Lower budget for demo speed, max is 32768
      }

      const response = await ai.models.generateContent({
        model,
        contents: message,
        config
      });

      return response.text || "No pude generar una respuesta.";
    } catch (error) {
      console.error("Chat error:", error);
      return "Lo siento, tengo problemas para conectar con la casa club en este momento.";
    }
  },

  // 2. Image Editing (Flash Image)
  async analyzeSwingPhoto(base64Image: string, prompt: string): Promise<string> {
    try {
      const model = 'gemini-2.5-flash-image';
      const response = await ai.models.generateContent({
        model,
        contents: {
          parts: [
            { inlineData: { mimeType: 'image/jpeg', data: base64Image } },
            { text: prompt || "Analiza esta postura de golf y sugiere mejoras en español." }
          ]
        }
      });
      
      // Flash image mainly returns text analysis or edited image if specifically requested via generateImages
      // For this feature "Edit", we might want to use generateContent with instructions to edit if supported, 
      // but usually for pixel-level editing we might need specific endpoints or detailed prompting.
      // Here we return the text analysis.
      return response.text || "Análisis completado.";
    } catch (error) {
      console.error("Vision error:", error);
      return "No se pudo analizar la imagen.";
    }
  },

  // 3. Find Courses (Maps Grounding)
  async findNearbyCourses(latitude: number, longitude: number): Promise<string> {
    try {
      const model = 'gemini-2.5-flash';
      const response = await ai.models.generateContent({
        model,
        contents: "Encuentra los 3 mejores campos de golf cerca de mí y su distancia. Responde en español.",
        config: {
          tools: [{ googleMaps: {} }],
          toolConfig: {
            retrievalConfig: {
              latLng: { latitude, longitude }
            }
          }
        }
      });
      return response.text || "No se encontraron campos cercanos.";
    } catch (error) {
      console.error("Maps error:", error);
      return "No se pudo acceder a los datos de mapas.";
    }
  },

  // 4. Generate Course Flyover (Veo)
  async generateFlyover(prompt: string): Promise<string | null> {
    try {
        if (!window.aistudio) {
            console.error("AI Studio not loaded");
            return null;
        }
        
       const hasKey = await window.aistudio.hasSelectedApiKey();
       if(!hasKey) {
           await window.aistudio.openSelectKey();
           // In real app, wait or retry.
           return null;
       }
       
       // Re-init with potentially new key context if needed, but for now we rely on the global instance or fresh call
       // Note: Veo requires specific paid key setup in browser usually.
       
       // Mocking the operation flow for the UI demo as we can't easily wait minutes in a synchronous UI block
       // Real implementation would look like the guide:
       /*
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt + " drone flyover view, cinematic lighting, 4k",
        config: { numberOfVideos: 1, resolution: '1080p', aspectRatio: '16:9' }
      });
      // ... polling loop ...
      */
      return "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"; // Placeholder
    } catch (error) {
      console.error("Veo error:", error);
      return null;
    }
  }
};