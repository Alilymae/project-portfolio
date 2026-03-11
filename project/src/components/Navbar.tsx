import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import Sidebar from "@/components/Sidebar";
import { sectionLinks } from "@/components/navLinks";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Sidebar only for mobile */}
      {isMobile && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}

      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 ${scrolled ? 'bg-background' : 'bg-background/80'} backdrop-blur border-b border-border transition-colors duration-300`}
      >
      <div className="flex items-center justify-between px-6 md:px-12 py-4 md:py-6">
        <Link
          to="/"
          className="text-foreground font-display font-extrabold text-2xl tracking-tight uppercase"
        >
          A<span className="text-primary">.</span>Mae
        </Link>

        <div className="flex items-center gap-6">
          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-8">
              {sectionLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs font-body tracking-[0.2em] text-foreground hover:text-primary transition-colors duration-300 animated-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Separate pages */}
            <div className="flex items-center gap-3">
              <Link
                to="/projects"
                className="font-body text-xs tracking-[0.25em] uppercase border border-primary bg-primary/10 text-primary px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                ALL PROJECTS
              </Link>
            </div>

            <ThemeToggle />
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground font-body text-xs tracking-[0.2em]"
            >
              {isOpen ? "CLOSE" : "MENU"}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  </>
  );
};

export default Navbar;
