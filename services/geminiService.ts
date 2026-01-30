import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  async getCloudStrategy(query: string): Promise<string> {
    try {
      // Create a new instance right before the call to ensure the latest API key from environment variables is used
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: query,
        config: {
          systemInstruction: `You are the Lead Cloud Architect at ELshaddai Cloud Solutions. 
          Your tone is professional, visionary, and helpful. 
          Keep answers concise (max 3-4 sentences). 
          Promote ELshaddai's services: Cloud Migration, Legacy Transformation, Cloud Security, Full Stack Dev, and Agentic AI.
          Focus on providing high-level technical insights.`,
          temperature: 0.7,
        },
      });

      // Directly access the .text property of the response object as per SDK requirements
      return response.text || "I'm currently analyzing your cloud needs. Could you please rephrase your query?";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "We are experiencing high demand for our AI consulting. Please try again in a moment.";
    }
  }
}

export const geminiService = new GeminiService();