
import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Skills from './Skills';
import Contact from './Contact';
import Projets from './Projets';
import Apropos from './Apropos';
import ProjetDetail from './ProjetDetail';
import Reveal from './Reveal';
import { getProjectById } from '../data/projects';

const SECTION_IDS = ['home', 'projets', 'apropos', 'skills', 'contact'];

const DEFAULT_TITLE = 'Mickael Yass — Développeur Software & Data | Portfolio';
const DEFAULT_DESCRIPTION =
  'Portfolio de Yassegoungbe S. Mickael Bonheur — Développeur Software & Data à Cotonou (Bénin). Projets en développement web, data, biostatistique et intelligence artificielle appliquée à la santé.';

function setMetaDescription(content) {
  const meta = document.querySelector('meta[name="description"]');
  if (meta) {
    meta.setAttribute('content', content);
  }
}

function getProjectIdFromHash() {
  const match = window.location.hash.match(/^#\/projets\/(\d+)$/);
  return match ? Number(match[1]) : null;
}

function Layout() {
  const [selectedProjectId, setSelectedProjectId] = useState(() => {
    const id = getProjectIdFromHash();
    return id !== null && getProjectById(id) ? id : null;
  });

  const openedFromApp = useRef(false);

  // Synchronise l'affichage de la page détail avec l'historique du navigateur
  useEffect(() => {
    function handleHashChange() {
      const id = getProjectIdFromHash();

      if (id !== null && getProjectById(id)) {
        setSelectedProjectId(id);
      } else {
        setSelectedProjectId(null);
      }
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll : haut de page sur la détail, section ciblée sinon
  useEffect(() => {
    if (selectedProjectId !== null) {
      window.scrollTo({ top: 0 });
      return;
    }

    const sectionId = window.location.hash.replace('#', '');

    if (SECTION_IDS.includes(sectionId)) {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedProjectId]);

  const openProject = (id) => {
    openedFromApp.current = true;
    setSelectedProjectId(id);

    const hash = `#/projets/${id}`;
    if (window.location.hash !== hash) {
      window.location.hash = hash;
    }
  };

  const closeProject = () => {
    if (openedFromApp.current && window.history.length > 1) {
      // Revient à l'entrée précédente (section projets, etc.)
      window.history.back();
    } else {
      // Accès direct par URL : on ferme proprement
      window.location.hash = 'projets';
    }
  };

  const selectedProject =
    selectedProjectId !== null ? getProjectById(selectedProjectId) : null;

  // SEO : titre + meta description dynamiques selon la page affichée
  useEffect(() => {
    if (selectedProject) {
      document.title = `${selectedProject.title} — Mickael Yass`;
      setMetaDescription(
        `${selectedProject.description} Projet réalisé par Yassegoungbe S. Mickael Bonheur, Développeur Software & Data.`
      );
    } else {
      document.title = DEFAULT_TITLE;
      setMetaDescription(DEFAULT_DESCRIPTION);
    }
  }, [selectedProject]);

  return (
    <div className="min-h-screen flex flex-col bg-mist dark:bg-slate-950 text-ink dark:text-slate-100">

      {/* Lien d'évitement (a11y) */}
      <a href="#contenu" className="skip-link">
        Aller au contenu principal
      </a>

      <Header />

      <main id="contenu" className="flex-grow pt-20">

        {/* =========================
            PAGE DÉTAIL D'UN PROJET
        ========================== */}
        {selectedProject ? (
          <ProjetDetail
            project={selectedProject}
            onBack={closeProject}
            onSelectProject={openProject}
          />
        ) : (
        <>

        {/* =========================
            ACCUEIL
        ========================== */}
        <Reveal
          as="section"
          id="home"
          className="scroll-section max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          <Home />
        </Reveal>


        {/* =========================
            PROJETS
        ========================== */}
        <Reveal
          as="section"
          id="projets"
          className="scroll-section max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          <Projets onSelectProject={openProject} />
        </Reveal>


        {/* =========================
            À PROPOS
        ========================== */}
        <Reveal
          as="section"
          id="apropos"
          className="scroll-section max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          <Apropos />
        </Reveal>


        {/* =========================
            COMPÉTENCES
        ========================== */}
        <Reveal
          as="section"
          id="skills"
          className="scroll-section max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          <Skills />
        </Reveal>


        {/* =========================
            PARCOURS
        ========================== */}
        <section id="parcours" className="scroll-section max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600 mb-2">
              Parcours
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Mon expérience
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-[54px] top-0 bottom-0 w-0.5 bg-brand-200" />
            <div className="relative mb-12 pl-14">
              <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-brand-600 border-2 border-white shadow-card" />
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-ink mb-1">Diplôme — Systèmes d'Information et Réseaux Informatiques</h3>
                <p className="text-sm text-brand-600 font-medium mb-3">Formation académique</p>
                <p className="text-sm text-slate-600">Acquisition des bases en développement, réseaux et bases de données.</p>
              </div>
            </div>
            <div className="relative mb-12 pl-14">
              <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-brand-600 border-2 border-white shadow-card" />
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-ink mb-1">Stage — Direction Départementale de la Santé du Littoral</h3>
                <p className="text-sm text-brand-600 font-medium mb-3">GestiPerso — API REST + React</p>
                <p className="text-sm text-slate-600">Développement d'API REST sécurisées (JWT) et d'une interface web de gestion du personnel.</p>
              </div>
            </div>
            <div className="relative pl-14">
              <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-brand-600 border-2 border-white shadow-card" />
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-ink mb-1">Projets académiques — GoPark & Gestion d'épicerie</h3>
                <p className="text-sm text-brand-600 font-medium mb-3">C++ • UML • C</p>
                <p className="text-sm text-slate-600">Modélisation UML, développement système et gestion de stocks.</p>
              </div>
            </div>
          </div>
        </section>


        {/* =========================
            CE QUE JE PEUX FAIRE POUR VOUS
        ========================== */}
        <section id="offres" className="scroll-section max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-mist">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600 mb-2">
              Offres
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Ce que je peux faire pour vous
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink mb-3">Développement web</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Applications React, API REST, interfaces responsives et modernes.
              </p>
              <a href="#contact" className="text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors">
                Me contacter →
              </a>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v1m-6 0a2 2 0 002-2h2a2 2 0 002 2v1m-6 0a2 2 0 012-2h2a2 2 0 012 2v1m0 0v3a2 2 0 01-2-2H5a2 2 0 00-2 2v-3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink mb-3">Data & Biostatistique</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Analyse de données, R/Shiny, Python et modélisation statistique appliquée à la santé.
              </p>
              <a href="#contact" className="text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors">
                Me contacter →
              </a>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink mb-3">IA & Intelligence Artificielle</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Intégration d'IA dans vos produits, assistants intelligents et automatisation.
              </p>
              <a href="#contact" className="text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors">
                Me contacter →
              </a>
            </div>
          </div>
        </section>


        {/* =========================
            CONTACT
        ========================== */}
        <Reveal
          as="section"
          id="contact"
          className="scroll-section max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          <Contact />
        </Reveal>

        </>
        )}

      </main>

      <Footer />

    </div>
  );
}

export default Layout;

