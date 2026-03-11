import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import React from "react";
import { sectionLinks } from "@/components/navLinks";
import ThemeToggle from "@/components/ThemeToggle";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 z-[55]"
            onClick={() => setIsOpen(false)}
          />

          {/* sliding panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="fixed top-0 right-0 h-full w-72 z-[100] flex flex-col shadow-2xl"
          >
            <div className="bg-background border border-primary/50 h-full flex flex-col">
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-foreground font-body text-sm tracking-[0.2em] hover:text-primary transition-colors px-4 py-2 rounded"
                >
                  CLOSE ×
                </button>
              </div>

              <nav className="flex-1 flex flex-col justify-center px-8">
                <ul className="space-y-8">
                  {sectionLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i, duration: 0.4 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-display font-bold uppercase hover:text-primary transition-colors block px-4 py-2 rounded"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * sectionLinks.length, duration: 0.4 }}
                  >
                    <Link
                      to="/projects"
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-display font-bold uppercase text-primary pb-2 animated-underline block px-4 py-2 rounded"
                    >
                      ALL PROJECTS
                    </Link>
                  </motion.li>
                </ul>
              </nav>

              {/* Theme toggle for mobile */}
              <div className="px-8 py-4">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
