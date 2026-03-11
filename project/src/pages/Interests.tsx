import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const interests = [
  {
    category: "TECH & LEARNING",
    items: [
      "Exploring different design styles and aesthetics",
      "Experimenting with generative art",
      "Learning new skills through online courses",
    ],
  },
  {
    category: "OFF-SCREEN",
    items: [
      "Visual Novels and Books of Literature",
      "Exploring art and design inspiration on Pinterest",
      "Movie/TV show marathons with friends",
    ],
  },
  {
    category: "FUN FACTS",
    items: [
      "I love mythology-inspired stories",
      "Most of my ideas start as sketches in my notebook",
      "I often design while listening to random playlists on Spotify",
    ],
  }
];

const Interests = () => {
  return (
    <main className="bg-pattern text-foreground min-h-screen">
      <Navbar />

      <section className="section-padding pt-32 border-b border-primary/60 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.3em] text-muted-foreground mb-4"
          >
            04 — INTERESTS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-3xl md:text-5xl font-display font-extrabold uppercase leading-tight mb-6"
          >
            Creative <span className="text-gradient">Playground</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-body text-base md:text-lg text-muted-foreground max-w-2xl"
          >
            A space for the hobbies, curiosities, and small obsessions that quietly shape how I think
            about design, technology, and collaboration.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4 space-y-6">
            <div className="text-[6rem] md:text-[8rem] font-display font-extrabold leading-none stroke-text-accent">
              04
            </div>
            <p className="font-body text-xs tracking-[0.3em] text-muted-foreground uppercase">
              INTERESTS & HOBBIES
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              I&apos;m drawn to projects that blur boundaries between disciplines: code as craft, design
              as storytelling, and technology as a way to invite people into playful experiences.
            </p>
          </div>

          <div className="md:col-span-8 space-y-8">
            {interests.map((block, index) => (
              <motion.div
                key={block.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="border border-border bg-card/40 backdrop-blur-sm p-6 md:p-8"
              >
                <h2 className="font-display text-xl md:text-2xl font-extrabold uppercase mb-4">
                  {block.category}
                </h2>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="font-body text-base text-muted-foreground flex gap-2"
                    >
                      <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Interests;

