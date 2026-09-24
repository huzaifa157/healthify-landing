import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppFab: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Interactive Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white px-3.5 py-2 rounded-2xl shadow-elevated border border-brand-border/80 animate-fadeIn">
          <span className="text-xs font-semibold text-brand-dark">
            Need diet advice? Chat with us!
          </span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-600 p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/97141234567?text=Hello%20Healthify!%20I%20would%20like%20to%20learn%20more%20about%20your%20healthy%20meal%20plans."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Healthify on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-elevated hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <MessageCircle className="w-7 h-7 fill-white text-white" />
      </a>
    </div>
  );
};
