import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <main className="bg-pattern text-foreground min-h-screen">
      <Navbar />
      <section className="section-padding pt-32 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.3em] text-muted-foreground mb-4"
          >
            03 — PROJECTS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-3xl md:text-5xl font-display font-extrabold uppercase leading-tight mb-6"
          >
            All <span className="text-gradient">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-body text-base md:text-lg text-muted-foreground max-w-2xl"
          >
            A fuller view of the work I&apos;ve been doing across creative coding, UX, and front-end
            development — from experimental sketches to production-ready builds.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="grid md:grid-cols-12 gap-8 items-stretch border border-primary/50 bg-secondary/20 backdrop-blur-sm overflow-hidden hover:bg-secondary/30 hover:border-primary transition-colors duration-300"
            >
              <div className="md:col-span-5 relative overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="h-full w-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 border-r border-border/40" />
                <div className="absolute inset-4 border border-primary/20 pointer-events-none" />
              </div>

              <div className="md:col-span-7 flex flex-col justify-between p-6 md:p-8 space-y-6">
                <div className="space-y-3">
                  <p className="font-body text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                    {project.year} — {project.role}
                  </p>
                  <h2 className="font-display text-2xl md:text-3xl font-extrabold uppercase">
                    {project.title}
                  </h2>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-body text-[10px] tracking-wider uppercase text-muted-foreground border border-border px-3 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] text-primary pb-1 hover:pb-2 transition-all animated-underline"
                  >
                    VIEW CASE STUDY
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Projects;

