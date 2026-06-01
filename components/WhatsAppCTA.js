import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_NUMBER = "919710426697";

const QUICK_MESSAGES = [
  {
    id: "visa",
    label: "Visa Assistance",
    message: "Hello Saranya Tours, I need help with a visa application. Please share the process and required documents.",
  },
  {
    id: "tour",
    label: "Tour Package",
    message: "Hello Saranya Tours, I would like details about your tailor-made tour packages and available destinations.",
  },
  {
    id: "corporate",
    label: "Corporate Travel",
    message: "Hello Saranya Tours, I am looking for corporate travel support for my team. Please get in touch with me.",
  },
];

function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function WhatsAppIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function WhatsAppCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [selectedQuick, setSelectedQuick] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    function handlePointerDown(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function handleSend() {
    const message = input.trim() || (selectedQuick && selectedQuick.message);
    if (!message) return;
    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
    setInput("");
    setSelectedQuick(null);
    setIsOpen(false);
  }

  function handleQuickMessage(item) {
    setSelectedQuick(item);
    setInput(item.message);
  }

  return (
    <div
      ref={containerRef}
      className="fixed right-4 bottom-4 z-50 flex max-w-[calc(100vw-2rem)] flex-col items-end gap-3 md:right-6 md:bottom-6"
    >
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="wa-modal"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="w-[min(18rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-[#e5e5e5] bg-[#f7f7f7] shadow-xl"
            id="whatsapp-quick-chat"
            role="dialog"
            aria-label="WhatsApp quick chat"
            style={{ boxShadow: "0 8px 32px rgba(11,31,58,0.13)" }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-[#075e54] px-4 py-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#25D366]">
                <WhatsAppIcon className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <div className="text-sm font-semibold text-white">Saranya Tours</div>
                <div className="text-xs text-[#d0f8ce]">Typically replies instantly</div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 text-white/80 hover:bg-white/10"
                aria-label="Close WhatsApp chat"
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Chat body */}
            <div className="flex flex-col gap-2 px-4 py-3 min-h-[120px] bg-[#ece5dd]">
              {/* Welcome message */}
              <div className="self-start max-w-[80%] rounded-xl rounded-bl-sm bg-white px-3 py-2 text-sm shadow-sm">
                Hi 👋<br />How can we help you today?
              </div>
              {/* If quick message selected, show as user bubble */}
              {selectedQuick && (
                <div className="self-end max-w-[80%] rounded-xl rounded-br-sm bg-[#dcf8c6] px-3 py-2 text-sm shadow-sm">
                  {selectedQuick.message}
                </div>
              )}
            </div>

            {/* Quick replies */}
            <div className="flex flex-wrap gap-2 px-4 pb-2 pt-1 bg-[#ece5dd]">
              {QUICK_MESSAGES.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleQuickMessage(item)}
                  className="rounded-full border border-[#25D366]/30 bg-white px-3 py-1 text-xs font-medium text-[#075e54] shadow-sm transition hover:bg-[#e9f9ee] focus:outline-none"
                  style={{ opacity: selectedQuick && selectedQuick.id === item.id ? 0.7 : 1 }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Input area */}
            <form
              className="flex items-center gap-2 px-4 py-3 bg-[#f7f7f7] border-t border-[#e5e5e5]"
              onSubmit={e => { e.preventDefault(); handleSend(); }}
            >
              <input
                type="text"
                className="flex-1 rounded-full border border-[#e5e5e5] bg-white px-3 py-2 text-sm outline-none focus:border-[#25D366] transition"
                placeholder="Type your message..."
                value={input}
                onChange={e => { setInput(e.target.value); setSelectedQuick(null); }}
                aria-label="Type your message"
              />
              <button
                type="submit"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition hover:bg-[#128c7e] disabled:opacity-50"
                aria-label="Send message on WhatsApp"
                disabled={!input.trim() && !selectedQuick}
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </button>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        whileHover={{ y: -2, scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="wa-pulse flex items-center gap-2 rounded-full bg-[#075e54] px-6 py-3 text-left text-white shadow-lg"
        aria-expanded={isOpen}
        aria-controls="whatsapp-quick-chat"
        aria-label={isOpen ? "Close WhatsApp chat options" : "Open WhatsApp chat options"}
        style={{ minWidth: 0 }}
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#25D366]">
          <WhatsAppIcon className="h-6 w-6" />
        </span>
        <span className="hidden sm:block">
          <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/75">
            WhatsApp
          </span>
          <span className="block text-sm font-semibold leading-tight">
            Chat
          </span>
        </span>
      </motion.button>
    </div>
  );
}
