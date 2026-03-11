import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "DEVELOPMENT",
    items: ["HTML5", "React", "JavaScript", "Node.js", "Python", "REST APIs"],
  },
  {
    category: "DESIGN",
    items: ["Figma", "Adobe Illustrator", "Canva", "Affinity Designer", "IbisPaint"],
  },
  {
    category: "CREATIVE",
    items: ["Generative Art", "p5.js", "Processing"],
  },
  {
    category: "TOOLS",
    items: ["GitHub", "VS Code", "Cursor"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding border-t border-border" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="md:col-span-3"
          >
            <span className="text-[8rem] font-display font-extrabold leading-none stroke-text-accent">
              02
            </span>
            <p className="font-body text-xs tracking-[0.3em] text-muted-foreground mt-4">
              SKILLS
            </p>
          </motion.div>

          {/* Right */}
          <div className="md:col-span-9">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="border-b border-border py-8 first:pt-0 last:border-b-0 group"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                  <h3 className="font-display font-extrabold text-xl uppercase w-48 shrink-0 group-hover:text-primary transition-colors">
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="font-body text-base tracking-wider text-muted-foreground border border-border px-4 py-2.5 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
