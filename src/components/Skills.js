
import { motion, useReducedMotion } from "framer-motion";
import {
  Brain,
  Database,
  Code2,
  Monitor,
  Wrench,
  Users,
} from "lucide-react";

function Skills() {
  const prefersReducedMotion = useReducedMotion();

  const skills = [
    {
      category: "Data, IA & Biostatistique",
      icon: Brain,
      description:
        "Analyse de données, développement d'outils Data et intégration de technologies d'intelligence artificielle.",
      items: [
        "R / RStudio",
        "Shiny",
        "Python",
        "FastAPI",
        "Biostatistique",
        "Data Wrangling",
        "Modélisation",
        "Intégration IA",
      ],
    },

    {
      category: "Backend & Bases de données",
      icon: Database,
      description:
        "Conception d'API, développement backend et gestion de bases de données.",
      items: [
        "Node.js",
        "Express.js",
        "Nest.js",
        "Django",
        "API REST",
        "PostgreSQL",
        "MongoDB",
        "SQL",
      ],
    },

    {
      category: "Frontend & UX/UI",
      icon: Code2,
      description:
        "Création d'interfaces web modernes, responsives et orientées utilisateur.",
      items: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "React",
        "Figma",
      ],
    },

    {
      category: "Outils & Systèmes",
      icon: Wrench,
      description:
        "Environnements, outils de développement et gestion des projets logiciels.",
      items: [
        "Git",
        "GitHub",
        "Docker",
        "Linux / Ubuntu",
        "Windows",
      ],
    },

    {
      category: "Modélisation & Méthodes",
      icon: Monitor,
      description:
        "Analyse, conception et structuration de solutions informatiques.",
      items: [
        "Modélisation UML",
        "Architecture logicielle",
        "API REST",
        "Data Wrangling",
        "Résolution de problèmes",
      ],
    },

    {
      category: "Soft Skills",
      icon: Users,
      description:
        "Compétences transversales mobilisées dans les projets et le travail en équipe.",
      items: [
        "Rigueur analytique",
        "Résolution de problèmes",
        "Pédagogie",
        "Travail en équipe Agile",
        "Adaptabilité",
      ],
    },
  ];

  return (
    <section className="w-full">

      <div className="max-w-6xl mx-auto">

        {/* =========================
            EN-TÊTE
        ========================== */}
        <div className="text-center mb-12">

          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600 mb-2">
            Expertise
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Mes compétences
          </h2>

          <p className="max-w-2xl mx-auto text-slate-600 leading-relaxed">
            Un ensemble de compétences techniques et méthodologiques couvrant
            le développement logiciel, la Data, l'intelligence artificielle
            et les systèmes d'information.
          </p>

        </div>


        {/* =========================
            CARTES
        ========================== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {skills.map((skillCategory, index) => {

            const Icon = skillCategory.icon;

            return (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="
                  group
                  bg-white
                  border
                  border-slate-200
                  rounded-2xl
                  p-6
                  shadow-sm
                  hover:shadow-lg
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >

                {/* Icône + titre */}
                <div className="flex items-start gap-4 mb-5">

                  <div className="
                    flex
                    items-center
                    justify-center
                    w-11
                    h-11
                    rounded-xl
                    bg-brand-50
                    text-brand-600
                    flex-shrink-0
                    group-hover:bg-brand-600
                    group-hover:text-white
                    transition-colors
                    duration-300
                  ">
                    <Icon size={22} />
                  </div>

                  <div>

                    <h3 className="
                      text-lg
                      font-bold
                      text-slate-900
                      leading-tight
                    ">
                      {skillCategory.category}
                    </h3>

                  </div>

                </div>


                {/* Description */}
                <p className="
                  text-sm
                  text-slate-500 dark:text-slate-400
                  leading-relaxed
                  mb-5
                ">
                  {skillCategory.description}
                </p>


                {/* Technologies */}
                <div className="flex flex-wrap gap-2">

                  {skillCategory.items.map((item) => (

                    <span
                      key={item}
                      className="
                        px-3
                        py-1.5
                        rounded-lg
                        bg-slate-100
                        text-slate-600
                        text-xs
                        font-medium
                        hover:bg-brand-50
                        hover:text-brand-700
                        transition-colors
                      "
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default Skills;

