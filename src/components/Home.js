import { motion, useReducedMotion } from "framer-motion";
import { Download, ArrowRight, ChevronDown } from "lucide-react";
import profil from "../assets/y.jpg";

const STAGGER = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

function Home() {
  const prefersReducedMotion = useReducedMotion();

  const item = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center py-12 px-4">

      {/* Motif de fond discret : grille fine + glow radial */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-3xl"
      >
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0B1120 1px, transparent 1px), linear-gradient(to bottom, #0B1120 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full">

        <motion.div
          variants={STAGGER}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >

          {/* =========================
              CONTENU TEXTE
          ========================== */}
          <div className="text-center md:text-left">

            {/* Badge disponibilité — point pulsant vert */}
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white border border-slate-200 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>

              <span className="text-sm font-medium text-slate-700">
                Disponible pour de nouveaux projets
              </span>
            </motion.div>

            {/* Sur-titre */}
            <motion.p
              variants={item}
              className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand-600 mb-3"
            >
              Software • Data • IA
            </motion.p>

            {/* H1 — prénom en dégradé */}
            <motion.h1
              variants={item}
              className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-[-0.02em] leading-[1.1] text-ink mb-4"
            >
              Bonjour, je suis{" "}
              <em className="not-italic text-gradient">Mickael</em>
            </motion.h1>

            {/* Sous-titre — positionnement */}
            <motion.p
              variants={item}
              className="max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed mb-8 mx-auto md:mx-0"
            >
              Je conçois des solutions logicielles et des outils Data adaptés
              aux besoins des utilisateurs — avec un focus sur la santé et
              l'intelligence artificielle.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
            >

              <a
                href="#projets"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-brand-600 text-white font-semibold shadow-card hover:bg-brand-700 hover:shadow-glow transition-all duration-200"
              >
                Voir mes projets
                <ArrowRight size={19} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white border border-slate-300 text-slate-700 font-semibold hover:border-brand-500 hover:text-brand-600 transition-all duration-200"
              >
                Me contacter
              </a>

            </motion.div>

            {/* Lien CV discret */}
            <motion.a
              variants={item}
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors underline-offset-4 hover:underline"
            >
              <Download size={16} />
              Télécharger mon CV (PDF)
            </motion.a>

            {/* Technologies principales */}
            <motion.div
              variants={item}
              className="mt-10 pt-6 border-t border-slate-200"
            >

              <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-4">
                Technologies principales
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-slate-600 font-medium">

                <span>Python</span>
                <span>R / Shiny</span>
                <span>Node.js</span>
                <span>React</span>
                <span>SQL</span>

              </div>

            </motion.div>

          </div>


          {/* =========================
              PHOTO
          ========================== */}
          <motion.div
            variants={item}
            className="flex justify-center md:justify-end"
          >

            <div className="relative">

              {/* Halo derrière le portrait */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-brand-500/15 to-accent-500/15 blur-2xl -z-10" />

              {/* Photo */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-8 border-white shadow-card">

                <img
                  src={profil}
                  alt="Portrait de Yassegoungbe S. Mickael Bonheur"
                  className="w-full h-full object-cover"
                  width={320}
                  height={320}
                />

              </div>

              {/* Badge flottant */}
              <div className="absolute -bottom-4 -left-4 sm:left-0 bg-white border border-slate-200 rounded-xl shadow-card px-4 py-3">

                <p className="text-xs text-slate-500 mb-1">
                  Spécialisation
                </p>

                <p className="text-sm font-semibold text-ink">
                  Software • Data • IA
                </p>

              </div>

            </div>

          </motion.div>

        </motion.div>

        {/* Indicateur de scroll vers #apropos */}
        <div className="flex justify-center mt-10 md:mt-4">
          <a
            href="#apropos"
            aria-label="Faire défiler vers la section À propos"
            className="p-3 rounded-full text-slate-400 hover:text-brand-600 hover:bg-brand-50 transition-colors"
          >
            <ChevronDown
              size={24}
              className={prefersReducedMotion ? "" : "animate-bounce"}
            />
          </a>
        </div>

      </div>

    </section>
  );
}

export default Home;

