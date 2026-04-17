import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const SYSTEM_PROMPT = `You are MyCare+ AI, a professional medical assistant. Your job is to:

1. Ask patients about their symptoms ONE question at a time
2. Take notes on their condition carefully
3. Ask follow up questions about duration, severity, location of pain etc
4. After gathering enough information (5-7 questions), provide:
   - Possible conditions/diagnosis
   - Recommended actions
   - Whether they should see a doctor urgently
   - Basic home remedies if applicable
   - Medicines that might help (mention they should consult a doctor before taking)

IMPORTANT RULES:
- Always be empathetic and professional
- Never give a definitive diagnosis — always say "possible condition"
- Always recommend seeing a real doctor for serious symptoms
- If symptoms suggest emergency (chest pain, difficulty breathing, stroke) — immediately say to call emergency services
- Ask one question at a time
- Keep responses clear and easy to understand
- Format your final report clearly with sections

Start by greeting the patient and asking their main symptom.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: SYSTEM_PROMPT }]
        },
        {
          role: "model",
          parts: [{ text: "Understood. I am MyCare+ AI medical assistant. I will help patients understand their symptoms professionally." }]
        },
        ...messages.slice(0, -1).map((msg: any) => ({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.content }]
        }))
      ]
    });

    const lastMessage = messages[messages.length - 1];
    const result = await chat.sendMessage(lastMessage.content);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ message: text });

  } catch (error) {
    console.error("Gemini API error:", error);
    return NextResponse.json(
      { error: "Failed to get response" },
      { status: 500 }
    );
  }
}