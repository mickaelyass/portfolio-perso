
import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Search, ArrowUpRight } from "lucide-react";

import projectsData from "../data/projects";

const CATEGORY_OPTIONS = [
  { value: "all", label: "Tous" },
  { value: "web", label: "Développement Web" },
  { value: "data", label: "Data & IA" },
  { value: "academic", label: "Projet académique" },
  { value: "systems", label: "Systèmes" },
];

const normalizeSearch = (value) =>
  value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

function filterProjects(projects, searchTerm, category) {
  const query = normalizeSearch(searchTerm);

  return projects.filter((project) => {
    if (category !== "all" && project.category !== category) {
      return false;
    }

    if (!query) {
      return true;
    }

    return (
      normalizeSearch(project.title).includes(query) ||
      normalizeSearch(project.description).includes(query) ||
      normalizeSearch(project.category).includes(query) ||
      project.technologies.some((tech) => normalizeSearch(tech).includes(query))
    );
  });
}

function Projets({ onSelectProject }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const prefersReducedMotion = useReducedMotion();

  const categoryCounts = useMemo(() => {
    const counts = new Map();
    for (const project of projectsData) {
      counts.set(project.category, (counts.get(project.category) || 0) + 1);
    }
    return counts;
  }, []);

  const filteredProjects = useMemo(() => {
    return filterProjects(projectsData, searchTerm, category);
  }, [searchTerm, category]);

  return (
    <section className="w-full">

      <div className="max-w-6xl mx-auto">

        {/* =========================
            EN-TÊTE
        ========================== */}
        <div className="text-center mb-12">

          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600 mb-2">
            Portfolio
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Mes projets
          </h2>

          <p className="max-w-2xl mx-auto text-slate-600 leading-relaxed">
            Une sélection de projets réalisés dans les domaines du
            développement logiciel, de la Data, de l'intelligence artificielle
            et des systèmes d'information.
          </p>

        </div>


        {/* =========================
            RECHERCHE
        ========================== */}
        <div className="flex justify-center mb-10">

          <div className="relative w-full max-w-md">

            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="text"
              placeholder="Rechercher un projet..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="
                w-full
                pl-11
                pr-4
                py-3
                bg-white
                border
                border-slate-200
                rounded-xl
                text-slate-700
                placeholder:text-slate-500
                outline-none
                focus:border-brand-500
                focus:ring-2
                focus:ring-brand-100
                transition
              "
            />

          </div>

        </div>


        {/* =========================
            FILTRES PAR CATÉGORIE
        ========================= */}
        <div className="flex flex-wrap justify-center gap-3 mb-10" role="group" aria-label="Filtrer les projets par catégorie">
          {CATEGORY_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setCategory(option.value)}
              className={
                category === option.value
                  ? "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-600 text-white font-semibold shadow-card"
                  : "inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 bg-white text-slate-600 font-medium hover:border-brand-400 hover:text-brand-600 transition-colors"
              }
              aria-pressed={category === option.value}
            >
              {option.label}
              <span
                className={`text-xs font-medium ${category === option.value ? "text-brand-100" : "text-slate-400"}`}
              >
                {categoryCounts.get(option.label) || 0}
              </span>
            </button>
          ))}
        </div>


        {/* =========================
            PROJETS
        ========================= */}
        <AnimatePresence initial={false}>
          {filteredProjects.length > 0 ? (

            <motion.div
              key="projects-grid"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >

              {filteredProjects.map((project, index) => (

                <motion.article
                key={project.id}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                onClick={() => onSelectProject(project.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelectProject(project.id);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Voir les détails du projet ${project.title}`}
                className="
                  group
                  cursor-pointer
                  bg-white
                  border
                  border-slate-200
                  rounded-2xl
                  overflow-hidden
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  flex
                  flex-col
                "
              >

                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-slate-100">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-105
                      transition-transform
                      duration-500
                    "
                  />

                  {/* Catégorie */}
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

                </div>


                {/* Contenu */}
                <div className="p-5 flex flex-col flex-grow">

                  <div className="flex items-start justify-between gap-3 mb-3">

                    <h3 className="
                      text-xl
                      font-bold
                      text-slate-900
                      group-hover:text-brand-600
                      transition-colors
                    ">
                      {project.title}
                    </h3>

                    <ArrowUpRight
                      size={20}
                      className="
                        flex-shrink-0
                        text-slate-300
                        group-hover:text-brand-600
                        transition-colors
                      "
                    />

                  </div>


                  <p className="
                    text-sm
                    text-slate-600
                    leading-relaxed
                    mb-5
                    flex-grow
                  ">
                    {project.description}
                  </p>


                  {/* Technologies */}
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

                </div>

              </motion.article>

            ))}

        </motion.div>


        ) : (

          <div className="
            text-center
            py-16
            bg-white
            border
            border-slate-200
            rounded-2xl
          ">

            <p className="text-slate-500">
              Aucun projet ne correspond à votre recherche.
            </p>

          </div>

        )}

        </AnimatePresence>

      </div>

    </section>
  );
}

export default Projets;

