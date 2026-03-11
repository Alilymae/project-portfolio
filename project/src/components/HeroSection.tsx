import { motion } from "framer-motion";
import profilePhoto from "@/assets/imgpfp.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-12 px-6 md:px-12 grain-overlay overflow-hidden">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h1 className="text-[20vw] font-display font-extrabold uppercase stroke-text opacity-[0.07] whitespace-nowrap">
          CREATIVE
        </h1>
      </div>

      {/* Integrated profile image - slightly smaller */}
      <motion.div
        initial={{ opacity: 0, scale: 1.15 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="
          absolute 
          top-[10%] md:top-[13.5%] 
          right-0 md:right-12 
          w-[60vw] sm:w-[45vw] md:w-[35vw] 
          h-[50vh] sm:h-[65vh] md:h-[80vh] 
          overflow-hidden rounded-3xl"
      >
        <img
          src={profilePhoto}
          alt="Profile photograph"
          className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700"
        />
      </motion.div>

      {/* Main heading */}
      <div className="relative z-10 max-w-7xl">
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-body text-xs tracking-[0.3em] text-muted-foreground mb-6"
        >
          BSC (HONS) CREATIVE COMPUTING STUDENT
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="text-[12vw] md:text-[8vw] font-display font-extrabold leading-[0.9] uppercase mb-8"
        >
          Aliah
          <br />
          <span className="text-gradient">Mae</span>
          <span className="text-primary">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-lg md:text-xl font-body text-foreground/80 max-w-2xl mb-8 leading-relaxed"
        >
          A BSc (Hons) Creative Computing student and a developer and designer specializing in the intersection of generative art,
          UI/UX, and full-stack development. I turn complex problems into intuitive, production-ready digital stories.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex items-center gap-8 mb-12"
        >
          <a
            href="/projects"
            className="font-body text-xs tracking-[0.2em] text-primary pb-1 hover:pb-2 transition-all animated-underline"
          >
            VIEW WORK
          </a>
          <a
            href="/interests"
            className="font-body text-xs tracking-[0.2em] text-muted-foreground hover:text-foreground pb-1 hover:pb-2 transition-all animated-underline"
          >
            LEARN MORE →
          </a>
        </motion.div>
      </div>

      {/* Marquee ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-0 left-0 right-0 border-t border-border py-3 overflow-hidden"
      >
        <div className="marquee whitespace-nowrap font-body text-[10px] tracking-[0.3em] text-muted-foreground">
          UI/UX DESIGN &nbsp; &bull; &nbsp; GENERATIVE ART &nbsp; &bull; &nbsp; BRAND DESIGN &nbsp; &bull; &nbsp; TYPOGRAPHY &nbsp; &bull; &nbsp; DIGITAL STORYTELLING &nbsp; &bull; &nbsp; FRONT-END DEVELOPMENT &nbsp; &bull; &nbsp; FULL-STACK DEVELOPMENT &nbsp; &bull; &nbsp; CREATIVE CODING &nbsp; &bull; &nbsp; DIGITAL MEDIA &nbsp; &bull; &nbsp; DIGITAL ART
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;