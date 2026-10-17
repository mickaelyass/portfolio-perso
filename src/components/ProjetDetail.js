import { motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Info,
  Layers,
} from "lucide-react";
import projectsData from "../data/projects";

function ProjetDetail({ project, onBack, onSelectProject }) {
  const prefersReducedMotion = useReducedMotion();
  const index = projectsData.findIndex((p) => p.id === project.id);
  const previousProject = index > 0 ? projectsData[index - 1] : null;
  const nextProject =
    index < projectsData.length - 1 ? projectsData[index + 1] : null;

  // Met à jour le titre du document et la meta description dynamiquement
  useEffect(() => {
    document.title = `${project.title} — Mickael Yass | Portfolio`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        `${project.description} — Portfolio de Yassegoungbe S. Mickael Bonheur`
      );
    }
  }, [project.title, project.description]);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      {/* =========================
          RETOUR
      ========================== */}
      <button
        onClick={onBack}
        className="
          inline-flex
          items-center
          gap-2
          mb-8
          px-4
          py-2
          rounded-lg
          bg-white
          border
          border-slate-200
          text-sm
          font-medium
          text-slate-600
          hover:border-brand-500
          hover:text-brand-600
          transition-colors
          duration-200
        "
      >
        <ArrowLeft size={17} />
        Retour aux projets
      </button>


      {/* =========================
          VISUEL + TITRE
      ========================== */}
      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          relative
          h-60
          sm:h-96
          rounded-2xl
          overflow-hidden
          bg-slate-100
          border
          border-slate-200
          mb-8
        "
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute top-4 left-4">
          <span className="
            inline-flex
            px-3
            py-1.5
            rounded-full
            bg-white/95
            backdrop-blur-sm
            text-xs
            font-semibold
            text-slate-700
            shadow-sm
          ">
            {project.category}
          </span>
        </div>
      </motion.div>


      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-600 mb-2">
          Projet
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          {project.title}
        </h1>

        <p className="max-w-3xl text-slate-600 leading-relaxed mb-8">
          {project.description}
        </p>
      </motion.div>


      {/* =========================
          CONTENU DÉTAILLÉ
      ========================== */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* Colonne principale */}
        <div className="lg:col-span-2 space-y-6">

          {/* À propos */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white border border-slate-200 rounded-2xl p-6"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              À propos du projet
            </h2>

            <p className="text-slate-600 leading-relaxed">
              {project.longDescription}
            </p>
          </motion.div>


          {/* Points clés */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white border border-slate-200 rounded-2xl p-6"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Points clés
            </h2>

            <ul className="space-y-3">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-slate-600 leading-relaxed"
                >
                  <CheckCircle2
                    size={19}
                    className="flex-shrink-0 mt-0.5 text-brand-600"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>


        {/* Colonne latérale */}
        <div className="space-y-6">

          {/* Informations */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-white border border-slate-200 rounded-2xl p-6"
          >
            <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
              <Info size={19} className="text-brand-600" />
              Informations
            </h2>

            <dl className="space-y-4">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">
                  Catégorie
                </dt>
                <dd className="text-sm text-slate-700">
                  {project.category}
                </dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">
                  Contexte
                </dt>
                <dd className="text-sm text-slate-700">
                  {project.context}
                </dd>
              </div>
            </dl>
          </motion.div>


          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white border border-slate-200 rounded-2xl p-6"
          >
            <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
              <Layers size={19} className="text-brand-600" />
              Technologies
            </h2>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-2.5
                    py-1
                    rounded-md
                    bg-slate-100
                    text-slate-600
                    text-xs
                    font-medium
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

      </div>


      {/* =========================
          NAVIGATION ENTRE PROJETS
      ========================== */}
      <div className="mt-10 flex items-center justify-between gap-4">

        {previousProject ? (
          <button
            onClick={() => onSelectProject(previousProject.id)}
            className="
              flex
              items-center
              gap-2
              px-4
              py-3
              rounded-xl
              bg-white
              border
              border-slate-200
              text-sm
              font-medium
              text-slate-600
              hover:border-brand-500
              hover:text-brand-600
              transition-colors
              duration-200
            "
          >
            <ArrowLeft size={17} />
            <span className="hidden sm:inline">
              {previousProject.title}
            </span>
            <span className="sm:hidden">Précédent</span>
          </button>
        ) : (
          <span />
        )}

        {nextProject ? (
          <button
            onClick={() => onSelectProject(nextProject.id)}
            className="
              flex
              items-center
              gap-2
              px-4
              py-3
              rounded-xl
              bg-white
              border
              border-slate-200
              text-sm
              font-medium
              text-slate-600
              hover:border-brand-500
              hover:text-brand-600
              transition-colors
              duration-200
            "
          >
            <span className="hidden sm:inline">
              {nextProject.title}
            </span>
            <span className="sm:hidden">Suivant</span>
            <ArrowRight size={17} />
          </button>
        ) : (
          <span />
        )}

      </div>

    </section>
  );
}

export default ProjetDetail;

