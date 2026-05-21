import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import * as constants from "@/data/constants";

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// Simple In-Memory Rate Limiter
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_COUNT = 5; // Limit to 5 requests
const RATE_LIMIT_WINDOW = 60 * 1000; // per 1 minute (60,000 ms)

export async function POST(req: Request) {
  try {
    // Rate Limiting Logic
    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown-ip";
    const now = Date.now();
    let rateLimitInfo = rateLimitMap.get(ip);

    if (!rateLimitInfo || now - rateLimitInfo.lastReset > RATE_LIMIT_WINDOW) {
      rateLimitInfo = { count: 0, lastReset: now };
    }

    if (rateLimitInfo.count >= RATE_LIMIT_COUNT) {
      return NextResponse.json(
        { error: "ส่งข้อความบ่อยเกินไป กรุณารอสักครู่แล้วลองใหม่ ⏳" },
        { status: 429 },
      );
    }

    rateLimitInfo.count++;
    rateLimitMap.set(ip, rateLimitInfo);

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error(
        "Chatbot API Error: GEMINI_API_KEY is not defined in environment variables.",
      );
      return NextResponse.json(
        { error: "API Key is missing. Please check your .env file." },
        { status: 500 },
      );
    }

    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    // Prepare context from constants
    const contextData = JSON.stringify(constants);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash-lite",
      systemInstruction: `You are a helpful and professional AI assistant for the personal portfolio website of "Pawnpawee Tanonchaiyaphat" พรปวีณ์ ธนลไชยพัฒน์ (Nickname: Kukkai) กุ๊กไก่. 
Your primary goal is to answer questions from visitors about Kukkai's profile, skills, work experience, and projects.

CRITICAL INSTRUCTIONS (MUST FOLLOW STRICTLY):
1. USE ONLY PROVIDED CONTEXT: You must base your answers SOLELY on the provided data context (the constants file data). 
2. NO HALLUCINATIONS: Do not invent, guess, or assume any information, skills, projects, or links that are not explicitly mentioned in the context.
3. HANDLING UNKNOWN INFO: If a user asks a question that cannot be answered using the provided context, you MUST politely decline and redirect them to contact Kukkai directly via email (pornpawee214@gmail.com) or LinkedIn. Example: "I don't have that specific information in my database, but you can reach out to Kukkai directly at pornpawee214@gmail.com!"
4. TONE & STYLE: Be friendly, professional, concise, and enthusiastic. Mirror the language of the user (e.g., if they ask in Thai, answer in Thai. If English, answer in English). 
5. CONTEXTUAL RELEVANCE: Keep answers concise and relevant to the user's prompt. Do not dump all information at once.

FORMATTING RULES (CRITICAL): 
- NEVER output long, unbroken paragraphs. 
- ALWAYS use bullet points for lists, short sentences, and line breaks to make the text highly scannable.
- Use **bold text** to highlight key terms, technologies, and names.
- Use appropriate emojis to make the response friendly and easy to read.

- IMAGES: If you want to show images of Kukkai, you MUST use the Markdown image syntax: ![
        description
      ](/path/ot / image.jpg).
  - Only use the allowed image paths provided in the context.
  - Do not invent image paths.

CONTEXT DATA TO USE:
${contextData}`,
    });

    // Generate content
    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ text });
  } catch (error: any) {
    console.error("Chatbot API Detailed Error:", error.message || error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch response from AI" },
      { status: 500 },
    );
  }
}
