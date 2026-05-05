import { GoogleGenAI, Modality } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const generateMotivationalSpeech = async (studentName: string, goal: string) => {
  try {
    const prompt = `Generate a high-energy, powerful motivational speech for a student named ${studentName} who is ${goal}. 
    Focus on resilience, the rewards of hard work, and the bright future ahead. 
    Keep it emotionally resonant and under 150 words.
    The response should be just the speech text.`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error generating motivation:", error);
    return "Believe in yourself! Every step you take today is a building block for your dream tomorrow. Keep going, the peak is worth the climb.";
  }
};

export const generateSpeechAudio = async (text: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-tts-preview",
      contents: [{ parts: [{ text: `Read this powerfully and motivationally: ${text}` }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Charon' }, // Charon is strong and deep
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (base64Audio) {
      return `data:audio/wav;base64,${base64Audio}`;
    }
    return null;
  } catch (error) {
    console.error("Error generating speech audio:", error);
    return null;
  }
};
