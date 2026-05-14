import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Visa Services", href: "#visa" },
  { label: "Tour Packages", href: "#destinations" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`sticky top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "border-gold/20 bg-white/92 shadow-[0_14px_36px_rgba(11,31,58,0.12)] backdrop-blur-xl"
          : "border-transparent bg-white/84 shadow-[0_6px_24px_rgba(11,31,58,0.08)] backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[82px]">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="20" cy="20" r="19" stroke="#C89B3C" strokeWidth="1.5" fill="none"/>
                <path d="M8 26 C12 14, 20 8, 32 14" stroke="#0B1F3A" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <path d="M20 8 L22 16 L30 12 L24 19 L32 20 L24 22 L28 30 L20 25 L14 32 L16 22 L8 26 L16 20 L10 14 L18 16 Z" fill="#C89B3C" opacity="0.9"/>
              </svg>
            </div>
            <div>
              <div
                className="font-serif text-[1.65rem] font-semibold leading-none tracking-[0.12em] text-navy transition-colors duration-300"
              >
                SARANYA
              </div>
              <div
                className="mt-0.5 text-[0.58rem] font-semibold leading-tight tracking-[0.22em] text-text-muted uppercase transition-colors duration-300"
              >
                TOURS &amp; TRAVELS PVT. LTD.
              </div>
              <div
                className="mt-1 text-[0.62rem] font-semibold tracking-[0.28em] text-gold uppercase transition-colors duration-300"
              >
                Since 2005
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`group relative text-[0.95rem] font-semibold tracking-[0.08em] transition-colors duration-200 text-text hover:text-gold ${activeLink === link.label ? "text-gold" : ""}`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-2 left-0 h-px bg-gradient-to-r from-gold-dark via-gold to-gold-light transition-all duration-300 ${
                    activeLink === link.label ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="gold-button rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-all duration-200 hover:shadow-[0_20px_34px_rgba(159,116,32,0.35)]"
              style={{ letterSpacing: "0.04em" }}
            >
              Get in Touch
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden rounded-full border border-gold/20 bg-white/75 p-2.5 text-navy transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-gold/15 bg-white/95 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-4 px-6 py-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => { setActiveLink(link.label); setMenuOpen(false); }}
                  className="border-b border-gold/10 py-2.5 text-sm font-semibold tracking-[0.08em] text-text transition-all duration-200 hover:pl-2 hover:text-navy"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="gold-button mt-2 rounded-full px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.14em] text-white"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
