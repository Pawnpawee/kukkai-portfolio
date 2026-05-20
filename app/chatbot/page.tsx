import { chatbotData } from "@/data/constants";

export default function ChatbotPage() {
  return (
    <div className="flex min-h-[60vh] w-full items-center justify-center px-4 py-16">
      <h1 className="text-2xl font-bold text-black">{chatbotData.comingSoonText}</h1>
    </div>
  );
}
