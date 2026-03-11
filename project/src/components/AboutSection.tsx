import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding border-t border-primary/60 bg-secondary/10" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16">
          {/* Left - Number/Label */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="md:col-span-3"
          >
            <span className="text-[8rem] font-display font-extrabold leading-none stroke-text-accent">
              01
            </span>
            <p className="font-body text-xs tracking-[0.3em] text-muted-foreground mt-4">
              ABOUT
            </p>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="md:col-span-9 space-y-12"
          >
            <h2 className="text-3xl md:text-5xl font-display font-extrabold uppercase leading-tight">
              Design Philosphy
              <br />
              & <span className="text-gradient">Digital Vision</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-muted-foreground font-body text-base leading-relaxed">
                  To me, design is about more than just aesthetics;
                  it’s about using technology to build intuitive and enjoyable experiences.
                  Whether I’m developing a web interface or experimenting with brand identity and layout,
                  I am driven by a passion for digital storytelling and innovative problem-solving.
                </p>
                <p className="text-muted-foreground font-body text-base leading-relaxed">
                  Whether I’m architecting a complex web application or defining a brand’s visual identity,
                  I treat every project as an opportunity to experiment with new technologies while maintaining pragmatic,
                  production-ready standards.
                </p>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-6">
                  <p className="font-display font-bold text-lg uppercase mb-2">Philosophy</p>
                  <p className="text-muted-foreground font-body text-base leading-relaxed">
                    Research → Ideate → Prototype → Build → Iterate. Every project
                    pushes boundaries while maintaining production-ready standards.
                  </p>
                </div>
                <div className="border-l-2 border-border/70 pl-6">
                  <p className="font-display font-bold text-lg uppercase mb-2">Interests</p>
                  <p className="text-muted-foreground font-body text-base leading-relaxed">
                    Interactive media, generative art, UX research, full-stack
                    development, creative coding, and AI-driven design tools.
                  </p>
                </div>
              </div>
            </div>
            <a
              href="/interests"
              className="inline-block font-body text-xs tracking-[0.2em] text-primary pb-1 hover:pb-2 transition-all uppercase animated-underline"
            >
              LEARN MORE →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
