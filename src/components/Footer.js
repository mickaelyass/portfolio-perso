
import React from 'react';
import { Github, Linkedin, Mail, MapPin, ArrowUp } from 'lucide-react';

const SOCIALS = [
  { icon: Mail, label: 'yassegoungbeseton@gmail.com', href: 'mailto:yassegoungbeseton@gmail.com' },
  { icon: Github, label: 'github.com/mickaelyass', href: 'https://github.com/mickaelyass', external: true },
  { icon: Linkedin, label: 'linkedin.com/in/mickaelyass', href: 'https://www.linkedin.com/in/mickaelyass/', external: true },
  { icon: MapPin, label: 'Cotonou, Bénin', href: 'https://www.google.com/maps/search/Cotonou+Benin', external: true },
];

const NAV_LINKS = [
  { label: 'Accueil', href: '#home' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Projets', href: '#projets' },
  { label: 'Contact', href: '#contact' },
];

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Colonne 1 : Identité */}
          <div>
            <p className="text-xl font-bold text-white font-display mb-2">
              Yassegoungbe S. Mickael Bonheur
            </p>
            <p className="text-sm text-brand-400 font-medium tracking-widest uppercase mb-4">
              Software • Data • IA
            </p>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Développeur Software & Data basé à Cotonou (Bénin). Je conçois des
              solutions logicielles et des outils Data avec un focus sur la santé
              et l'intelligence artificielle.
            </p>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-600/10 text-brand-400 text-xs font-medium border border-brand-600/20">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500">Disponible</span>
            </span>
          </div>

          {/* Colonne 2 : Navigation rapide */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Contact & Social */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Contact & social
            </p>
            <ul className="space-y-3">
              {SOCIALS.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={social.external ? '_blank' : undefined}
                      rel={social.external ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors"
                      aria-label={social.label}
                    >
                      <Icon size={18} className="flex-shrink-0 text-brand-400" />
                      <span>{social.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

        {/* Ligne bottom */}
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Yassegoungbe S. Mickael Bonheur — Tous
            droits réservés.
          </p>
          <a
            href="#home"
            className="hover:text-white transition-colors"
            aria-label="Retour en haut de page"
          >
            <ArrowUp size={14} className="inline mr-1" /> Retour en haut
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

