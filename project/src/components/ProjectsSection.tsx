import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding border-t border-border" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="md:col-span-3"
          >
            <span className="text-[8rem] font-display font-extrabold leading-none stroke-text-accent">
              03
            </span>
            <p className="font-body text-xs tracking-[0.3em] text-muted-foreground mt-4">
              SELECTED WORK
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="md:col-span-9 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <h2 className="text-3xl md:text-5xl font-display font-extrabold uppercase leading-tight">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-body text-[10px] tracking-[0.25em] uppercase text-primary pb-1 hover:pb-2 transition-all animated-underline"
            >
              VIEW ALL PROJECTS
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* Project list - editorial style */}
        <div className="space-y-0">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="group block border-t border-border/70 py-8 md:py-12 hover:bg-secondary/10 hover:border-primary transition-colors duration-300"
            >
              <Link to={`/projects/${project.slug}`} className="grid md:grid-cols-12 gap-6 items-center">
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="font-body text-xs text-primary pl-4">{project.num}</span>
                </div>

                {/* Image - shows on hover for desktop */}
                <div className="md:col-span-3 overflow-hidden h-32 md:h-24 relative">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Title */}
                <div className="md:col-span-4">
                  <h3 className="font-display font-extrabold text-2xl md:text-3xl uppercase group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="mt-2 font-body text-base text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="md:col-span-3">
                  <div className="flex flex-wrap gap-3 text-right justify-end">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-body text-xs tracking-wider text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="md:col-span-1 flex justify-end pr-4">
                  <ArrowUpRight
                    size={24}
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
