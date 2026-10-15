# Portfolio personnel

Site vitrine **React** présentant mon profil, mes compétences, mes projets et un
formulaire de contact. Interface responsive avec animations au défilement et CV
téléchargeable.

> **Stack** : React 19 · Create React App · Tailwind CSS · Framer Motion ·
> react-icons + lucide-react · EmailJS · Docker (build Node → service Nginx).

---

## 1. Fonctionnalités

- **Accueil** — présentation rapide et accroche.
- **Projets** — vitrine des réalisations (aperçus et liens).
- **Détail d'un projet** — page dédiée ouverte depuis une carte projet
  (URL `#/projets/:id`) : visuel, contexte, points clés, technologies et
  navigation précédent / suivant.
- **À propos** — parcours et présentation.
- **Compétences** — technologies et savoir-faire.
- **Contact** — formulaire d'envoi d'e-mail via **EmailJS**.
- Navigation par ancres avec **animations Framer Motion** au scroll.
- CV téléchargeable (`public/cv.pdf`).

---

## 2. Structure

```text
portfolio/
├── Dockerfile                # npm run build (node) puis copie de build/ dans Nginx
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── cv.pdf                # CV téléchargeable
│   ├── index.html
│   └── manifest.json · favicon.ico · logos
└── src/
    ├── App.js                # rend <Layout/>
    ├── data/
    │   └── projects.js       # données des projets (liste + détails)
    ├── components/
    │   ├── Layout.js         # assemble les sections (scroll) + page détail
    │   ├── Header.js         # barre de navigation fixe
    │   ├── Home.js           # section « Accueil »
    │   ├── Projets.js        # section « Projets »
    │   ├── ProjetDetail.js   # page « Détail d'un projet »
    │   ├── Apropos.js        # section « À propos »
    │   ├── Skills.js         # section « Compétences »
    │   ├── Contact.js        # formulaire EmailJS
    │   ├── Footer.js         # liens sociaux, mentions
    │   └── Dockerfile
    └── assets/               # images et aperçus de projets
```

---

## 3. Prérequis

- **Node.js** ≥ 18 et npm

---

## 4. Installation & exécution

```bash
npm install
npm start          # http://localhost:3000
```

### Build de production

```bash
npm run build      # génère le dossier build/ optimisé
```

---

## 5. Déploiement Docker

Le `Dockerfile` construit l'application puis la sert via **Nginx** :

```bash
docker build -t portfolio .
docker run -d -p 80:80 portfolio
```

---

## 6. Dépendances principales

| Paquet | Usage |
|---|---|
| `react`, `react-dom` | Interface utilisateur (React 19) |
| `framer-motion` | Animations au défilement |
| `react-icons`, `lucide-react` | Icônes |
| `emailjs-com` | Envoi du formulaire de contact sans backend |
| `tailwindcss`, `postcss`, `autoprefixer` | Styles utilitaires |

---

## 7. Points d'attention

- Les identifiants **EmailJS** (service, template, clé publique) sont à
  configurer côté client dans `Contact.js` avant le déploiement.
- Pensez à remplacer `public/cv.pdf` par votre CV à jour.
