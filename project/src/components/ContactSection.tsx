import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding border-t border-border" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="md:col-span-3"
          >
            <span className="text-[8rem] font-display font-extrabold leading-none stroke-text-accent">
              04
            </span>
            <p className="font-body text-xs tracking-[0.3em] text-muted-foreground mt-4">
              CONTACT
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="md:col-span-9 space-y-12"
          >
            <h2 className="text-4xl md:text-7xl font-display font-extrabold uppercase leading-[0.95]">
              LET'S BUILD
              <br />
              <span className="text-gradient">SOMETHING</span>
              <br />
              TOGETHER<span className="text-primary">.</span>
            </h2>

            <p className="text-muted-foreground font-body text-base max-w-lg leading-relaxed">
              Currently seeking opportunities in creative technology,
              frontend development, and UX design. Open to freelance,
              full-time, and collaborative projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="mailto:ortizaliah88@gmail.com"
                className="font-body text-xs tracking-[0.2em] text-primary pb-2 hover:pb-3 transition-all animated-underline"
              >
                EMAIL
              </a>
              <a
                href="https://www.linkedin.com/in/aliah-mae-ortiz-088b55302/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs tracking-[0.2em] text-muted-foreground hover:text-foreground pb-2 transition-all animated-underline"
              >
                LINKEDIN
              </a>
              <a
                href="https://github.com/Alilymae"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs tracking-[0.2em] text-muted-foreground hover:text-foreground pb-2 transition-all animated-underline"
              >
                GITHUB
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
