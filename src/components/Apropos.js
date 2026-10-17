
import { motion, useReducedMotion } from "framer-motion";
import React from "react";
import profil from "../assets/profil.jpg";

function Apropos() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="w-full">

      <div className="max-w-6xl mx-auto">

        {/* En-tête */}
        <div className="text-center mb-12">

          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600 mb-2">
            Profil
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            À propos de moi
          </h2>

        </div>


        {/* Contenu */}
        <div className="
          bg-white
          border
          border-slate-200
          rounded-2xl
          shadow-sm
          p-6
          md:p-10
          flex
          flex-col
          md:flex-row
          items-center
          gap-10
        ">

          {/* =========================
              IMAGE
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >

            <div className="
              w-56
              h-64
              sm:w-60
              sm:h-72
              overflow-hidden
              rounded-2xl
              border-4
              border-slate-50
              shadow-md
            ">

              <img
                src={profil}
                alt="Yassegoungbe S. Mickael Bonheur"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

            </div>

          </motion.div>


          {/* =========================
              TEXTE
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="max-w-2xl text-center md:text-left"
          >

            <h3 className="
              text-2xl
              md:text-3xl
              font-bold
              text-slate-900
              mb-5
            ">
              Développeur Software & Data
            </h3>


            <p className="
              text-base
              md:text-lg
              leading-relaxed
              text-slate-600 dark:text-slate-400
              mb-5
            ">
              Diplômé en Systèmes d'Information et Réseaux Informatiques,
              je développe des solutions logicielles combinant développement
              web, analyse de données et technologies d'intelligence
              artificielle.
            </p>


            <p className="
              text-base
              md:text-lg
              leading-relaxed
              text-slate-600
              mb-6
            ">
              Mon parcours en mathématiques et en informatique me permet
              d'aborder les problématiques avec une approche à la fois
              analytique et technique. Je m'intéresse particulièrement aux
              applications de la Data, de la biostatistique et de l'IA,
              notamment dans le domaine de la santé.
            </p>


            {/* Domaines */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3">

              <span className="
                px-3
                py-2
                rounded-lg
                bg-brand-50
                text-brand-700
                text-sm
                font-medium
              ">
                Développement logiciel
              </span>

              <span className="
                px-3
                py-2
                rounded-lg
                bg-slate-100
                text-slate-700
                text-sm
                font-medium
              ">
                Data & Biostatistique
              </span>

              <span className="
                px-3
                py-2
                rounded-lg
                bg-slate-100
                text-slate-700
                text-sm
                font-medium
              ">
                Intelligence artificielle
              </span>

              <span className="
                px-3
                py-2
                rounded-lg
                bg-slate-100
                text-slate-700
                text-sm
                font-medium
              ">
                Applications Web
              </span>

            </div>

          </motion.div>

        </div>

        {/* =========================\n            CHIFFRES-CLÉS\n        ========================== */}\n        <div className="mt-12 pt-8 border-t border-slate-200 grid sm:grid-cols-3 gap-6 text-center">
          <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
            <p className="text-2xl font-bold text-ink mb-1">7+</p>
            <p className="text-sm text-slate-600 uppercase tracking-widest">Projets réalisés</p>
          </div>
          <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
            <p className="text-2xl font-bold text-ink mb-1">1</p>
            <p className="text-sm text-slate-600 uppercase tracking-widest">Stage en entreprise</p>
          </div>
          <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
            <p className="text-2xl font-bold text-brand-600 mb-1">Data • Web • IA</p>
            <p className="text-sm text-slate-600 uppercase tracking-widest">Domaines d'expertise</p>
          </div>
        </div>

        {/* =========================\n            BOUTONS D'ACTION\n        ========================== */}\n        <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-brand-600 text-white font-medium hover:bg-brand-700 transition-colors shadow-card hover:shadow-lg"
          >
            Me contacter
          </a>
          <a
            href="/cv.pdf"
            download
            className="px-6 py-3 rounded-xl bg-white text-slate-700 font-medium border border-slate-200 hover:border-brand-500 hover:text-brand-600 transition-colors"
          >
            Télécharger mon CV
          </a>
        </div>

      </div>

    </section>
  );
}

export default Apropos;

