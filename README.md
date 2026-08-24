# Portfolio - Enzo Le Moal

Portfolio personnel développé avec [Next.js](https://nextjs.org), présentant mon parcours, mes compétences et mes projets en tant que développeur web.
- URL du site : https://enzo-lemoal.fr
- URL repository perso : https://github.com/nzoLM/portfolio

## Stack technique

- [Next.js 15](https://nextjs.org) (React 19, App Router)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Motion](https://motion.dev) pour les animations
- [EmailJS](https://www.emailjs.com/) pour le formulaire de contact
- [Vercel Analytics](https://vercel.com/analytics)

## Prérequis

- Node.js 18.18 ou supérieur
- npm

## Installation
Se placer dans le dossier racine "/"

```bash
npm install
```

## Configuration

Le formulaire de contact utilise EmailJS. Créez un fichier `.env` à la racine du projet avec la clé publique associée à votre compte EmailJS :

```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_cle_publique
```

## Lancer le projet en développement

```bash
npm run dev
```

Le site est ensuite accessible sur [http://localhost:3000](http://localhost:3000).

## Scripts disponibles

| Commande        | Description                              |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Démarre le serveur de développement       |
| `npm run build` | Génère le build de production             |
| `npm run start` | Démarre le serveur en mode production      |
| `npm run lint`  | Analyse le code avec ESLint               |

## Structure du projet

```
src/
├── app/            -> Pages et sections (Hero, About, Project, Contact, Technologies...)
├── components/     -> Composants réutilisables (accessibilité, icônes, boutons...)
├── data/           -> Contenus statiques (JSON)
├── pages/          -> Fichiers Next.js spécifiques
└── styles/         -> Polices et styles globaux
public/
├── files/          -> Fichiers téléchargeables (CV)
└── pictures/       -> Images du site
```

## Fonctionnalités

- Présentation et projets
- Formulaire de contact fonctionnel (EmailJS)
- Bascule d'accessibilité (police adaptée à la dyslexie et aux malvoyants)
- Design responsive et animations fluides
