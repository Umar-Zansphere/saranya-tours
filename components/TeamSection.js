import { motion } from "framer-motion";
import { useInView } from "./hooks/useInView";

const TEAM = [
  { name: "R. Narayanan", role: "Managing Director", phone: "+91 97104 26697", initials: "RN", color: "#0B1F3A" },
  { name: "N. Govindaraj", role: "Director – Operations", phone: "+91 97104 26700", initials: "NG", color: "#122847" },
  { name: "G.K. Venkatesan", role: "Head – Visa Services", phone: "+91 44 2467 1414", initials: "GV", color: "#0B1F3A" },
  { name: "P. Sivaprakash", role: "Senior Travel Consultant", phone: "+91 44 2467 1415", initials: "PS", color: "#122847" },
  { name: "S. Thangaraj", role: "Corporate Accounts Manager", phone: "+91 97104 26697", initials: "ST", color: "#0B1F3A" },
];

// Professional placeholder avatars using consistent business portraits
const AVATARS = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face&q=80",
];

export default function TeamSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="team" className="bg-bg py-20 md:py-28">
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
            Our Team
          </span>
          <h2 className="section-title text-navy">
            Meet the Experts
          </h2>
          <div className="section-divider mx-auto mt-4" />
        </motion.div>

        {/* Team Grid */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
          {TEAM.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className=" group flex w-48 flex-col items-center rounded-[1.75rem] px-5 py-7 text-center"
            >
              {/* Circular portrait */}
              <div className="relative mb-5">
                <div className="h-28 w-28 overflow-hidden rounded-full border-[3px] border-[rgba(215,173,87,0.28)] shadow-lg transition-shadow duration-300 group-hover:shadow-xl">
                  <img
                    src={AVATARS[i]}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Gold ring on hover */}
                <div className="absolute inset-0 scale-110 rounded-full border border-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <h3
                className="mb-2 font-serif text-[1.55rem] font-semibold leading-none tracking-[-0.03em] text-navy"
              >
                {member.name}
              </h3>
              <p className="mb-4 text-sm leading-6 text-text-muted">
                {member.role}
              </p>
              {/* <a
                href={`tel:${member.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-1.5 text-[0.8rem] font-semibold tracking-[0.08em] text-navy/70 transition-colors duration-200 hover:text-gold"
              >
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {member.phone}
              </a> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
