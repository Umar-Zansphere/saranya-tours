import { motion } from "framer-motion";
import { useInView } from "./hooks/useInView";

const DESTINATIONS = [
  {
    title: "Europe",
    desc: "Timeless cities & rich culture",
    img: "https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?w=900&q=80&auto=format",
  },
  {
    title: "Asia",
    desc: "Vibrant traditions & modern wonders",
    img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=900&q=80&auto=format",
  },
  {
    title: "Australia",
    desc: "Natural beauty & iconic landscapes",
    img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=900&q=80&auto=format",
  },
  {
    title: "Adventure",
    desc: "Thrilling experiences worldwide",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80&auto=format",
  },
];

export default function DestinationsSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="destinations" className="bg-bg py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="eyebrow mb-4 block">Curated Holidays</span>
          <h2 className="section-title mb-4 text-navy">
            Top Destinations
          </h2>
          <div className="section-divider mx-auto" />
          <p className="section-copy mx-auto mt-5 max-w-2xl">
            Explore luxury getaways, high-value itineraries and iconic international escapes selected for smooth planning from Chennai.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DESTINATIONS.map((dest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="dest-card group relative cursor-pointer overflow-hidden rounded-[1.8rem] border border-white/60 shadow-[0_20px_50px_rgba(11,31,58,0.12)] transition-shadow duration-400 hover:shadow-[0_28px_70px_rgba(11,31,58,0.18)]"
              style={{ aspectRatio: "3/4" }}
            >
              <img
                src={dest.img}
                alt={dest.title}
                className="dest-img absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/88 via-navy/28 to-transparent" />
              {/* Hover tint */}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(215,173,87,0.05),rgba(11,31,58,0))] group-hover:bg-[linear-gradient(180deg,rgba(215,173,87,0.16),rgba(11,31,58,0.08))] transition-colors duration-400" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3
                  className="mb-2 font-serif text-[2rem] font-semibold leading-none tracking-[-0.03em] text-white"
                >
                  {dest.title}
                </h3>
                <p className="max-w-[15rem] text-[0.95rem] font-medium text-white/78">{dest.desc}</p>
                <div className="mt-4 h-px w-0 bg-gradient-to-r from-gold-light to-gold transition-all duration-300 group-hover:w-14" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
