import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp({ whatsappNumber }) {
  return (
    <aside aria-label="WhatsApp Support" className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <div className="hidden sm:block mr-3 bg-slate-900 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        সরাসরি WhatsApp-এ কথা বলুন 💬
      </div>

      <a
        href={`https://wa.me/${whatsappNumber}?text=হ্যালো,%20আমি%20একটি%20ওয়েবসাইট%20বানাতে%20চাই`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:scale-110 transition-all duration-300 relative"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 border-2 border-white rounded-full" />
        <MessageCircle className="w-7 h-7" />
      </a>
    </aside>
  );
}
