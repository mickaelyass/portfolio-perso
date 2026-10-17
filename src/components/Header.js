import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp, Menu, X, Sun, Moon } from "lucide-react";
import logo from "../assets/logod.svg";

const NAV_LINKS = [
  { href: "#home", label: "Accueil", id: "home" },
  { href: "#apropos", label: "À propos", id: "apropos" },
  { href: "#projets", label: "Projets", id: "projets" },
  { href: "#skills", label: "Compétences", id: "skills" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });
  const prefersReducedMotion = useReducedMotion();

  // Header : transparent en haut → fond flouté après 50px de scroll
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 600);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy : surligne la section visible dans le viewport
  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.id)
    ).filter(Boolean);

    if (sections.length === 0 || !("IntersectionObserver" in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Menu mobile : fermeture par la touche Échap
  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  // Thème sombre : applique la classe dark sur <html> et mémorise le choix
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-md border-b border-slate-200 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">

        {/* Logo + Nom */}
        <a
          href="#home"
          className="flex items-center gap-4 rounded-lg"
          aria-label="Retour à l'accueil"
        >
          <img
            src={logo}
            alt=""
            className="h-10 w-auto"
          />

          <div className="hidden sm:block">
            <p className="text-lg font-semibold text-ink">
              Yassegoungbe
            </p>

            <p className="text-xs text-slate-500">
              Software & Data
            </p>
          </div>
        </a>

        {/* Navigation desktop */}
        <nav
          aria-label="Navigation principale"
          className="hidden md:flex items-center gap-1"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              aria-current={activeSection === link.id ? "true" : undefined}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                activeSection === link.id
                  ? "text-brand-700 bg-brand-50"
                  : "text-slate-600 hover:text-brand-700 hover:bg-brand-50/60"
              }`}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="ml-3 px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition-colors duration-200"
          >
            Me contacter
          </a>

          <button
            onClick={toggleTheme}
            className="ml-3 p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors"
            aria-label={darkMode ? "Passer en mode clair" : "Passer en mode sombre"}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Bouton menu mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 min-w-11 min-h-11 flex items-center justify-center text-slate-700 hover:text-brand-600 transition-colors"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>

      {/* Menu mobile plein écran */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: prefersReducedMotion ? 0 : "100%" }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-white border-t border-slate-200 overflow-y-auto"
          >
            <nav
              aria-label="Navigation mobile"
              className="flex flex-col px-6 py-6 space-y-2"
            >

              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={activeSection === link.id ? "true" : undefined}
                  className={`px-4 py-3 min-h-12 flex items-center rounded-lg text-base font-medium transition ${
                    activeSection === link.id
                      ? "bg-brand-50 text-brand-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-brand-600"
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 px-4 py-3 min-h-12 flex items-center justify-center rounded-lg bg-brand-600 text-white font-medium hover:bg-brand-700 transition"
              >
                Me contacter
              </a>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      </header>

      {/* Retour en haut */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
            transition={{ duration: 0.2 }}
            aria-label="Retour en haut de page"
            className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-brand-600 text-white shadow-card flex items-center justify-center hover:bg-brand-700 transition-colors"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
