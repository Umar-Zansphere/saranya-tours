import { motion } from "framer-motion";
import { useInView } from "./hooks/useInView";

export default function CorporateCTA() {
  const { ref, inView } = useInView(0.2);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80&auto=format"
          alt="Corporate travel background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy/88" />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow mb-6 block !text-gold-light">
            Corporate Travel Solutions
          </span>
          <h2 className="mb-6 font-serif text-[clamp(2.7rem,5vw,4.3rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-white">
            Let Us Handle Your Team's
            <br />Travel &amp; Visa Requirements
          </h2>
          <p className="text-white/65 leading-relaxed mb-10 text-base max-w-2xl mx-auto">
            From visa applications to complete travel management — we provide end-to-end solutions for businesses of all sizes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="gold-button inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white"
            >
              Start Corporate Account
            </motion.a>
            <motion.a
              href="tel:+914424671414"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] !text-white"
              style={{ backgroundColor: "rgba(255,255,255,0.07)", letterSpacing: "0.05em" }}
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call Us Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
