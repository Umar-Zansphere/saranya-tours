import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const SLIDES = [
  {
    url: "https://www.shutterstock.com/image-photo/waiting-area-chairs-international-airport-600nw-1739365925.jpg",
    alt: "Airport terminal with aircraft taking off",
  },
  {
    url: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=85&auto=format",
    alt: "Business traveler at international airport",
  },
  {
    url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=85&auto=format",
    alt: "Paris international travel destination",
  },
  {
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=85&auto=format",
    alt: "Corporate business professional",
  },
  {
    url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=85&auto=format",
    alt: "Luxury international travel hotel",
  },
];

const TRUST_ITEMS = [
  {
    icon: (
      <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
      </svg>
    ),
    value: "20+",
    label: "Years of\nExperience",
  },
  {
    icon: (
      <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    value: "Authorized",
    label: "Consulate\nPartner",
  },
  {
    icon: (
      <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    value: "Chennai",
    label: "Based\nExperts",
  },
  {
    icon: (
      <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    value: "24x7",
    label: "Support &\nOperations",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function HeroSection() {
  const swiperRef = useRef(null);
  const heroMinHeight = "max(760px, calc(100vh - 82px))";

  useEffect(() => {
    let swiperInstance = null;

    const init = async () => {
      const { Swiper } = await import("swiper");
      const { Autoplay, EffectFade, Pagination } = await import("swiper/modules");

      await import("swiper/css");
      await import("swiper/css/effect-fade");
      await import("swiper/css/pagination");

      if (!swiperRef.current) return;

      swiperInstance = new Swiper(swiperRef.current, {
        modules: [Autoplay, EffectFade, Pagination],
        effect: "fade",
        fadeEffect: { crossFade: true },
        loop: true,
        speed: 1800,
        autoplay: { delay: 5500, disableOnInteraction: false },
        pagination: {
          el: ".hero-pagination",
          clickable: true,
        },
      });
    };

    init();
    return () => { if (swiperInstance) swiperInstance.destroy(true, true); };
  }, []);

  return (
    <section
      id="home"
      className="relative isolate w-full overflow-hidden"
      style={{ minHeight: heroMinHeight }}
    >
      {/* Swiper carousel */}
      <div ref={swiperRef} className="swiper hero-swiper absolute inset-0 z-10 h-full w-full">
        <div className="swiper-wrapper h-full">
          {SLIDES.map((slide, i) => (
            <div key={i} className="swiper-slide relative h-full overflow-hidden">
              <img
                src={slide.url}
                alt={slide.alt}
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{ transform: "scale(1.06)", transition: "transform 8s ease-out" }}
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Overlay - Left Half Only */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div
          className="absolute inset-y-0 left-0 w-3/4"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.82) 45%, rgba(255,255,255,0.35) 75%, transparent 100%)",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 z-30 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-6 pb-14 md:pt-20 md:pb-20">
          <div className="max-w-[700px]">

            {/* Label */}
            <motion.div
              {...fadeUp(0.2)}
              className="glass-panel mb-7 inline-flex items-center gap-3 rounded-full px-4 py-2.5"
            >
              <span className="h-px w-8 bg-gradient-to-r from-gold-dark to-gold-light" />
              <span className="eyebrow !text-[0.68rem] md:!text-[0.76rem]">
                Trusted Travel &amp; Visa Experts Since 2005
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.38)}
              className="mb-5 max-w-[20ch] font-serif text-[clamp(2.5rem,5.8vw,5rem)] font-semibold leading-[0.88] tracking-[-0.05em] text-navy"
            >
              Trusted Expertise.
              <br />
              <span className="text-gold-dark">Seamless Journeys.</span>
            </motion.h1>

            {/* Gold rule */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="section-divider origin-left mb-6"
            />

            {/* Subheadline */}
            <motion.p
              {...fadeUp(0.65)}
              className="mb-10 max-w-[36rem] text-[clamp(1.02rem,1.9vw,1.18rem)] font-medium leading-8 tracking-[0.01em] text-navy/76"
            >
              Visa, Travel &amp; Holidays — Handled with
              <br className="hidden sm:block" />
              Experience, Care &amp; Commitment.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              {...fadeUp(0.8)}
              className="glass-panel mb-10 inline-flex max-w-full flex-wrap items-stretch gap-y-3 rounded-[1.75rem] px-4 py-4"
            >
              {TRUST_ITEMS.map((item, i) => (
                <div key={i} className="flex items-center">
                  <div className="flex items-start gap-3 px-4 py-2 first:pl-0">
                    <div className="mt-0.5 shrink-0 text-gold-dark">{item.icon}</div>
                    <div>
                      <div className="font-serif text-base font-semibold leading-tight text-navy md:text-lg">
                        {item.value}
                      </div>
                      <div className="mt-1 whitespace-pre-line text-[0.72rem] font-medium leading-snug tracking-[0.05em] text-text-muted md:text-[0.76rem]">
                        {item.label}
                      </div>
                    </div>
                  </div>
                  {i < TRUST_ITEMS.length - 1 && (
                    <div className="mx-1 hidden h-12 w-px bg-gold/15 sm:block" />
                  )}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fadeUp(0.95)} className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#visa"
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="gold-button inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white"
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                </svg>
                Get Visa Assistance
              </motion.a>

              <motion.a
                href="#destinations"
                whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,0.82)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="gold-outline inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-navy"
                style={{
                  backgroundColor: "rgba(255,255,255,0.66)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12a8.96 8.96 0 00.284 2.253" />
                </svg>
                Explore Packages
              </motion.a>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="hero-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2" />
    </section>
  );
}
