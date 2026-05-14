import { motion } from "framer-motion";
import { useInView } from "./hooks/useInView";

export default function OfficeSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="eyebrow mb-4 block">
            Find Us
          </span>
          <h2 className="section-title text-navy">
            Our Office
          </h2>
          <div className="section-divider mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left: Contact card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="glass-panel flex flex-col justify-between rounded-[2rem] p-8 md:p-10"
          >
            <div>
              {/* Logo text */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3
                  className="mb-1 font-serif text-[2rem] font-semibold leading-none tracking-[-0.03em] text-navy"
                >
                  SARANYA TOURS &amp; TRAVELS PVT. LTD.
                </h3>
                <div className="section-divider mt-3" />
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 mb-6">
                <div className="text-gold mt-1 shrink-0">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div className="text-sm leading-7 text-text-muted">
                  DORR No.5, IIIrd FLOOR,<br />
                  SAPTHAGRI APARTMENTS<br />
                  187, T.T.K ROAD, ALWARPET,<br />
                  <span className="font-semibold text-navy">CHENNAI – 600 018</span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 mb-5">
                <div className="text-gold mt-1 shrink-0">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div className="text-sm leading-7 text-text-muted">
                  <a href="tel:+914424671414" className="hover:text-gold transition-colors">+91-44-2467 1414</a>
                  {" / "}
                  <a href="tel:+914424671415" className="hover:text-gold transition-colors">15</a>
                  <br />
                  <a href="tel:+919710426697" className="hover:text-gold transition-colors">+91-97104 26697</a>
                  {" / "}
                  <a href="tel:+919710426700" className="hover:text-gold transition-colors">26700</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 mb-8">
                <div className="text-gold shrink-0">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <a href="mailto:stt@saranyatours.com" className="text-sm font-semibold text-navy transition-colors hover:text-gold">
                  stt@saranyatours.com
                </a>
              </div>

              {/* Business hours badge */}
              <div className="inline-flex items-center gap-3 rounded-full border border-gold/20 bg-white/60 px-4 py-3">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#0B1F3A" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-navy">24×7 Operations</div>
                  <div className="text-text-muted text-xs">Our staff is available round the clock</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="min-h-[400px] overflow-hidden rounded-[2rem] border border-gold/15 shadow-[0_22px_48px_rgba(11,31,58,0.1)]"
          >
            <iframe
              title="Saranya Tours Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.024437!2d80.2598!3d13.0350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526736b7c5a8bb%3A0x7e5c0f5eb8e0e3a4!2s187%2C%20TTK%20Rd%2C%20Alwarpet%2C%20Chennai%2C%20Tamil%20Nadu%20600018!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
