import { motion } from "framer-motion";
import { useInView } from "./hooks/useInView";

const HIGHLIGHTS = [
  {
    id: "visa",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516" />
      </svg>
    ),
    value: "20 years of travel, visa and tour expertise"
  },
  {
      id: "operations",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    value: "24x7 operations with computerized back-office support"
  },
  {
      id: "authorization",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12a8.96 8.96 0 00.284 2.253" />
      </svg>
    ),
    value: "Exclusive authorization for Italy, Malaysia and Singapore submissions"
  }
];

const INFRASTRUCTURE_POINTS = [
  "Fully computerized back-office system with instant access to transactions and reports.",
  "Staff availability extends beyond business hours, including holiday assistance on mobile.",
  "Experienced visa professionals for consulates across India with prompt feedback.",
];

export default function BusinessSection() {
  const { ref, inView } = useInView(0.15);

  return (
    <section id="about" className="bg-white py-12 md:py-18">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-start gap-14  lg:gap-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow mb-4 block">About Saranya</span>
            <h2 className="section-title mb-6 max-w-[30ch] text-navy">
              Deep-rooted travel and visa expertise, built over two decades.
            </h2>
            <p className="section-copy mb-5 max-w-6xl">
              Saranya Tours &amp; Travels Pvt Ltd is a trusted name for arranging different types of tours with carefully planned packages. For the past 20 years, we have worked as experienced travel agents, visa specialists and tour operators, helping clients travel with more confidence and less friction.
            </p>
            <p className="section-copy mb-9 max-w-6xl">
              We process visas for consulates based in Chennai, and our strength lies in a seasoned team that stays accessible through email and phone. Our visa department is led by staff members who have spent more than 20 years in the field.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              {HIGHLIGHTS.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                  className="glass-panel rounded-[1.5rem] px-5 py-5"
                >
                  <div className="mb-3 h-px w-10 bg-gradient-to-r from-gold-dark to-gold-light" />
                  <div className="text-gold mb-3">{item.icon}</div>
                  <p className="text-sm leading-7 text-text-muted">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel rounded-[2rem] px-7 py-8"
          >
            <span className="eyebrow mb-4 block">Visa Expertise</span>
            <h3 className="font-serif text-[2.2rem] font-semibold leading-none tracking-[-0.04em] text-navy">
              Trusted by consulates and powered by experienced staff.
            </h3>
            <p className="mt-5 text-sm leading-7 text-text-muted md:text-[1rem]">
              We handle visa processing for consulates across Chennai and support travelers with clear, prompt communication throughout the application journey. Apart from other consulates in Chennai, we have been exclusively authorized by the consulates of Italy, Malaysia and Singapore for submission and collection.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="glass-panel rounded-[2rem] px-7 py-8"
          >
            <span className="eyebrow mb-4 block">Our Infrastructure</span>
            <h3 className="font-serif text-[2.2rem] font-semibold leading-none tracking-[-0.04em] text-navy">
              Round-the-clock systems and support that keep things moving.
            </h3>
            <div className="mt-5 space-y-4">
              {INFRASTRUCTURE_POINTS.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="mt-1 shrink-0 text-gold-dark">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.9">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-sm leading-7 text-text-muted md:text-[1rem]">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div> */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="glass-panel mt-6 rounded-[2rem] px-7 py-8"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow mb-4 block">What We Also Provide</span>
              <h3 className="font-serif text-[2.3rem] font-semibold leading-none tracking-[-0.04em] text-navy">
                Tailor-made tours backed by complete travel support.
              </h3>
              <p className="mt-5 text-sm leading-7 text-text-muted md:text-[1rem]">
                Along with visa handling, we create customized and tailor-made tour packages for a wide range of destinations and assist with the travel essentials that complete the journey.
              </p>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="gold-button inline-flex items-center gap-2 self-start rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white"
            >
              Plan With Us
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </motion.a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
