import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export class GonoKhichuriAI {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: API_KEY });
  }

  async getDailySlogan(): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: "Generate one short, extremely satirical, absurd, and funny political slogan for a party named 'Bangladesh Gono-Khichuri Party'. Use Bengali only. Theme: 'Dreamy Deception' or 'Vote Buying'.",
        config: {
          thinkingConfig: { thinkingBudget: 0 }
        }
      });
      return response.text || "আগামী দিনের স্বপ্ন দেখুন, আজ কিছু চাইবেন না!";
    } catch (e) {
      return "আগামী দিনের স্বপ্ন দেখুন, আজ কিছু চাইবেন না!";
    }
  }

  async generateFakeNews(): Promise<any[]> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: "Generate 3 fake satirical news headlines for a Bangladeshi political context involving 'Gono-Khichuri Party'. Return as JSON array with properties: title, date, summary, category (Scandal/Promise/Election). Use Bengali for title and summary.",
        config: {
          responseMimeType: "application/json",
          thinkingConfig: { thinkingBudget: 0 }
        }
      });
      return JSON.parse(response.text);
    } catch (e) {
      return [];
    }
  }
}