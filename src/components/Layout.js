
import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Skills from './Skills';
import Contact from './Contact';
import Projets from './Projets';
import Apropos from './Apropos';
import ProjetDetail from './ProjetDetail';
import { getProjectById } from '../data/projects';
import { motion } from 'framer-motion';

const SECTION_IDS = ['home', 'projets', 'apropos', 'skills', 'contact'];

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

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">

      <Header />

      <main className="flex-grow pt-20">

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
        <motion.section
          id="home"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="scroll-section max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          <Home />
        </motion.section>


        {/* =========================
            PROJETS
        ========================== */}
        <motion.section
          id="projets"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="scroll-section max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          <Projets onSelectProject={openProject} />
        </motion.section>


        {/* =========================
            À PROPOS
        ========================== */}
        <motion.section
          id="apropos"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="scroll-section max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          <Apropos />
        </motion.section>


        {/* =========================
            COMPÉTENCES
        ========================== */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="scroll-section max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          <Skills />
        </motion.section>


        {/* =========================
            CONTACT
        ========================== */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="scroll-section max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          <Contact />
        </motion.section>

        </>
        )}

      </main>

      <Footer />

    </div>
  );
}

export default Layout;

