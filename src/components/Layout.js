
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
    <div className="min-h-screen flex flex-col bg-mist text-ink">

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

