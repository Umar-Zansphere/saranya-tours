import { motion } from "framer-motion";
import { useInView } from "./hooks/useInView";
import { i } from "framer-motion/client";

const CONSULATES = [
  {
    flag: "🇮🇹",
    image: "/italy.png",
    name: "Italy",
    emoji: true,
  },
  {
    flag: "🇲🇾",
    image: "/flag.png",
    name: "Malaysia",
    emoji: true,
  },
  {
    flag: "🇸🇬",
    image: "/singapore.png",
    name: "Singapore",
    emoji: true,
  },
  {
    flag: null,
    name: "& Many\nMore",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
];

export default function ConsulateSection() {
  const { ref, inView } = useInView(0.15);

  return (
    <section id="visa" className="py-0 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">

          {/* Left: Image */}
          <div className="relative overflow-hidden min-h-[320px] lg:min-h-[400px]">
            <img
              src="https://img.magnific.com/free-photo/flat-lay-visa-application-assortment_23-2149117807.jpg?t=st=1778747354~exp=1778750954~hmac=bd9c2e9c72cb82b026ff00106543ecaad8fb626d8b6f950ce8bcfb2410bdfcc3&w=2000"
              alt="Professional handshake - authorized consulate partners"
              className="absolute inset-0 w-full h-full object-contain object-center"
            />
            {/* <div className="absolute inset-0 bg-navy/20" /> */}
          </div>

          {/* Right: Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center px-10 md:px-16 py-6 bg-white"
          >
            <div className="mb-4">
              <span className="eyebrow">
                Authorized Consulate Handling
              </span>
            </div>

            <h2 className="section-title mb-5 max-w-[12ch] text-navy">
              Your Trusted Partner for
              <br />Visa Processing
            </h2>

            <p className="text-text-muted leading-relaxed mb-10 text-sm md:text-base max-w-md">
              We are exclusively authorized by the Consulates of Italy, Malaysia and Singapore for submission and collection.
            </p>

            {/* Country Badges */}
            <div className="flex flex-wrap gap-5">
              {CONSULATES.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div
                    className={`flex h-[4.5rem] w-[4.5rem] items-center justify-center overflow-hidden rounded-full border-2 shadow-md ${
                      c.image
                        ? "border-gold/20 bg-white"
                        : "border-stone-200 bg-stone-50 text-gray-400"
                    }`}
                  >
                    {c.image ? (
                      <img
                        src={c.image}
                        alt={c.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      c.icon
                    )}
                  </div>
                  <span className="text-center whitespace-pre-line text-xs font-semibold uppercase tracking-[0.08em] text-navy">
                    {c.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="glass-panel mt-10 inline-flex w-fit items-center gap-3 rounded-full px-5 py-3"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#C89B3C" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                Officially Authorized Partner
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
