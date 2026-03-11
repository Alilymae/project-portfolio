import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getProjectBySlug } from "@/data/projects";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <main className="bg-pattern text-foreground min-h-screen">
        <Navbar />
        <section className="section-padding pt-32">
          <div className="max-w-7xl mx-auto">
            <p className="font-body text-base text-muted-foreground mb-4">
              Project not found.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] text-primary pb-1 hover:pb-2 transition-all animated-underline"
            >
              <ArrowLeft className="h-4 w-4" />
              BACK TO PROJECTS
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-pattern text-foreground min-h-screen">
      <Navbar />

      <section className="section-padding pt-32 border-b border-border">
        <div className="max-w-7xl mx-auto space-y-6">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            BACK TO ALL PROJECTS
          </Link>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.3em] text-muted-foreground"
          >
            {project.year} — {project.role}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-3xl md:text-5xl font-display font-extrabold uppercase leading-tight"
          >
            <span className="text-primary mr-3">{project.num}</span>
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-body text-base md:text-lg text-muted-foreground max-w-2xl"
          >
            {project.longDescription}
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7 relative overflow-hidden border-2 border-primary bg-secondary/20"
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
              loading="lazy"
            />
            <div className="absolute inset-4 border border-primary/40 pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="md:col-span-5 space-y-6"
          >
            <div className="border border-border bg-card/60 backdrop-blur-sm p-6 md:p-8">
              <h2 className="font-display text-lg md:text-xl font-extrabold uppercase mb-4">
                Project Overview
              </h2>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                {project.overview || "This project sits at the intersection of design and technology. My focus was on crafting a clear narrative, thoughtful interaction patterns, and a visual language that still leaves room for experimentation."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-primary/60 bg-secondary/20 p-4">
                <h3 className="font-display text-lg md:text-xl font-extrabold uppercase mb-4">
                  Responsibilities
                </h3>
                <ul className="space-y-1 font-body text-base text-muted-foreground">
                  {(project.responsibilities || ["Concept & direction", "Interface & interaction design", "Front-end implementation"]).map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
              <div className="border border-border bg-card/60 p-4">
                <h3 className="font-display text-lg md:text-xl font-extrabold uppercase mb-4">
                  Tools & Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-body text-[10px] tracking-wider uppercase text-muted-foreground border border-border px-3 py-1 transition-all duration-300 hover:bg-red-500 hover:text-white hover:border-red-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {project.link && (
              <Link
                to={project.link}
                className="inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] text-primary pb-1 hover:pb-2 transition-all animated-underline"
              >
                VIEW LIVE PROJECT
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            )}
          </motion.div>
        </div>

        {project.images.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-10"
          >
            <Carousel className="w-full">
              <CarouselContent>
                {project.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative overflow-hidden border-2 border-primary bg-secondary/20">
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-300 object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-4 border border-primary/40 pointer-events-none" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </motion.div>
        )}
      </section>

      <Footer />
    </main>
  );
};

export default ProjectDetail;

