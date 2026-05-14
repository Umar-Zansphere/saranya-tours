import { motion } from "framer-motion";
import { useInView } from "./hooks/useInView";

const SERVICES = [
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
      </svg>
    ),
    title: "Visa Services",
    desc: "Visa processing for all countries with expert guidance.",
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
    title: "Air Ticketing",
    desc: "Domestic & International flight bookings.",
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: "Hotel Booking",
    desc: "Best hotel deals worldwide for your stay.",
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Foreign Exchange",
    desc: "Best forex rates for all major currencies.",
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Travel Insurance",
    desc: "Comprehensive travel insurance plans.",
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "Passport Services",
    desc: "New passport, renewal & attestation services.",
  },
];

export default function ServicesSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="services" className="bg-white py-12 md:py-18">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="eyebrow mb-4 block">Travel Services</span>
          <h2 className="section-title mb-4 text-navy">
            Our Core Services
          </h2>
          <div className="section-divider mx-auto" />
          <p className="section-copy mx-auto mt-5 max-w-2xl">
            Expert support for visas, tickets, stays, forex and travel protection, all managed with faster communication and sharper follow-through.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 overflow-hidden rounded-[1.75rem] border border-stone-200 bg-[rgba(255,252,247,0.88)] shadow-[0_18px_44px_rgba(11,31,58,0.07)] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="service-card group relative flex cursor-pointer flex-col items-center border-b border-r border-stone-200 bg-white/80 px-6 py-8 text-center"
              style={{ borderRight: i % 6 === 5 ? "none" : undefined }}
            >
              <div className="absolute inset-x-6 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-300 group-hover:scale-x-100" />
              <div className="mb-5 text-navy transition-colors duration-300 group-hover:text-gold">
                {svc.icon}
              </div>
              <h3
                className="mb-3 font-serif text-[1.55rem] font-semibold leading-none tracking-[-0.03em] text-navy"
              >
                {svc.title}
              </h3>
              <p className="text-sm leading-6 text-text-muted">
                {svc.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
