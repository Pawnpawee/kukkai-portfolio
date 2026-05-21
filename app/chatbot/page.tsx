"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "bot";
  content: string;
}

const SUGGESTED_QUESTIONS = [
  "แนะนำตัว Kukkai ให้รู้จักหน่อย 👋",
  "ถนัด Tech Stack อะไรบ้าง? 💻",
  "โปรเจกต์ Ikigai คืออะไร? ✨",
  "มีประสบการณ์ทำงานที่ไหนมาบ้าง? 🏢",
  "ช่องทางการติดต่อ 📬",
];

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content:
        "สวัสดี! ฉันคือผู้ช่วย AI ของกุ๊กไก่ มีอะไรอยากสอบถามเกี่ยวกับกุ๊กไก่ไหม? ฉันสามารถให้ข้อมูลเกี่ยวกับ **ทักษะ**, **ประสบการณ์ทำงาน**, และ **โปรเจกต์ต่าง ๆ** ของกุ๊กไก่ ได้นะ!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await response.json();
      if (data.text) {
        setMessages((prev) => [...prev, { role: "bot", content: data.text }]);
      } else {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content:
            "ขออภัย เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาลองใหม่อีกครั้ง หรือติดต่อ Kukkai โดยตรงที่ pornpawee214@gmail.com",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto w-full px-4 py-8 flex flex-col gap-8 min-h-[calc(100vh-100px)] ">
      {/* Header */}
      <div className="text-center space-y-3 mt-4 md:mt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
          Ask Bot 
        </h1>
        <p className="text-gray-500  text-lg">ask anything about me!</p>
      </div>

      {/* Chat Container (No inner scroll, expands naturally) */}
      <div className="flex-1 bg-white/40 backdrop-blur-xl rounded-3xl shadow-lg border border-white/60 p-4 md:p-8 flex flex-col gap-6 font-google-sans">
        <AnimatePresence initial={false}>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] md:max-w-[75%] px-6 py-4 rounded-3xl text-sm md:text-base  leading-relaxed shadow-sm ${
                  msg.role === "user"
                    ? "bg-gradient-to-br from-[#AEDEFC] to-[#99D9F3] text-black rounded-br-sm"
                    : "bg-white text-black rounded-bl-sm border border-gray-100/80"
                }`}
              >
                {msg.role === "user" ? (
                  msg.content
                ) : (
                  <ReactMarkdown
                    components={{
                      p: ({ children }) => (
                        <p className="mb-2 last:mb-0">{children}</p>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc ml-4 mb-2">{children}</ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal ml-4 mb-2">{children}</ol>
                      ),
                      li: ({ children }) => (
                        <li className="mb-1">{children}</li>
                      ),
                      strong: ({ children }) => (
                        <strong className="font-bold text-black">
                          {children}
                        </strong>
                      ),
                      h1: ({ children }) => (
                        <h1 className="text-xl font-bold mb-2">{children}</h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-lg font-bold mb-2">{children}</h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-md font-bold mb-2">{children}</h3>
                      ),
                      code: ({ children }) => (
                        <code className="bg-gray-100 px-1 rounded text-pink-600">
                          {children}
                        </code>
                      ),
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-white px-6 py-4 rounded-3xl rounded-bl-sm border border-gray-100/80 flex gap-2 items-center h-12 shadow-sm">
              <span className="w-2 h-2 bg-[#AEDEFC] rounded-full animate-bounce" />
              <span className="w-2 h-2 bg-[#AEDEFC] rounded-full animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 bg-[#AEDEFC] rounded-full animate-bounce [animation-delay:0.4s]" />
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} className="h-4" />
      </div>

      {/* Input Area (Sticky at the bottom) */}
      <div className="sticky bottom-4 md:bottom-8 z-50 mt-auto flex flex-col gap-3">
        {/* Suggested Questions */}
        {messages.length < 3 && (
          <div className="flex flex-wrap gap-2 justify-center font-google-sans">
            {SUGGESTED_QUESTIONS.map((q) => (
              <button
                key={q}
                onClick={() => handleSendMessage(q)}
                disabled={isLoading}
                className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-[#AEDEFC] text-gray-700 hover:text-black transition-all text-xs md:text-sm  border border-gray-200 shadow-md disabled:opacity-50 cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage(input);
          }}
          className="flex gap-3 items-center relative bg-white/80 backdrop-blur-xl p-2 rounded-[2rem] shadow-2xl border border-white/80 font-google-sans"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="พิมพ์ข้อความของคุณตรงนี้..."
            disabled={isLoading}
            className="flex-1 bg-transparent px-6 py-3 focus:outline-none  disabled:opacity-50 text-black text-sm md:text-base placeholder:text-gray-400"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="bg-black hover:bg-gray-800 text-white p-4 rounded-full transition-all shadow-md disabled:opacity-50 disabled:hover:bg-black cursor-pointer flex items-center justify-center h-[52px] w-[52px] shrink-0"
          >
            <PaperAirplaneIcon className="w-5 h-5 -ml-0.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
