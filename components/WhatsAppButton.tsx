import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

export default function WhatsAppButton() {
  return (
    <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-green-900/30 transition-all duration-200 hover:scale-110"
      aria-label="WhatsApp">
      <MessageCircle size={26}/>
    </a>
  );
}
