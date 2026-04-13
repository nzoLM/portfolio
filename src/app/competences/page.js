"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FaArrowLeft } from "react-icons/fa";

const projectCompetences = [
  {
    project: "Kords",
    competences: [
      "Axe 1 - Cadrage | Redaction du cahier des charges | Preuve: Ce document (portfolio, Kords)",
      "Axe 1 - Cadrage | Redaction des specifications techniques | Preuve: Kords",
      "Axe 1 - Cadrage | Realisation d'un maquettage | Preuve: Kords, E-commerce",
      "Axe 1 - Cadrage | Definition des fonctionnalites et architecture | Preuve: E-commerce, Kords",
      "Axe 2 - Developpement | Developpement d'un prototype fonctionnel | Preuve: Kords, MyIRC, LavanVids",
      "Axe 2 - Developpement | Mise en place de l'authentification | Preuve: Kords",
      "Axe 2 - Developpement | Deploiement sur serveur | Preuve: Portfolio (Netlify), Kords (Netlify)",
      "Axe 3 - Qualite | Documentation utilisateur | Preuve: A mettre en place (Kords)",
      "Axe 3 - Qualite | Monitoring et retours utilisateurs | Preuve: A mettre en place (Kords)",
    ],
  },
  {
    project: "E-commerce",
    competences: [
      "Axe 1 - Cadrage | Realisation d'un maquettage | Preuve: Kords, E-commerce",
      "Axe 1 - Cadrage | Definition des fonctionnalites et architecture | Preuve: E-commerce, Kords",
      "Axe 2 - Developpement | Ecriture du code selon le CDC | Preuve: E-commerce, Twitter Clone",
      "Axe 2 - Developpement | Integration de tous les elements | Preuve: Portfolio, E-commerce",
      "Axe 2 - Developpement | Implementation logique et base de donnees | Preuve: E-commerce, My Quizz",
    ],
  },
  {
    project: "LavanVids",
    competences: [
      "Axe 2 - Developpement | Developpement d'un prototype fonctionnel | Preuve: Kords, MyIRC, LavanVids",
      "Axe 2 - Developpement | Developpement front-end | Preuve: Portfolio (Next.js), LavanVids (Svelte)",
    ],
  },
  {
    project: "MyIRC",
    competences: [
      "Axe 2 - Developpement | Developpement d'un prototype fonctionnel | Preuve: Kords, MyIRC, LavanVids",
    ],
  },
  {
    project: "My Quizz",
    competences: ["Axe 2 - Developpement | Implementation logique et base de donnees | Preuve: E-commerce, My Quizz"],
  },
  {
    project: "my-crud-tester",
    competences: ["Axe 2 - Developpement | Tests unitaires et d'integration | Preuve: my-crud-tester"],
  },
  {
    project: "Portfolio",
    competences: [
      "Axe 1 - Cadrage | Presentation des choix techniques et maquettes | Preuve: Ce document + portfolio",
      "Axe 2 - Developpement | Integration de tous les elements | Preuve: Portfolio, E-commerce",
      "Axe 2 - Developpement | Developpement front-end | Preuve: Portfolio (Next.js), LavanVids (Svelte)",
      "Axe 2 - Developpement | Deploiement sur serveur | Preuve: Portfolio (Netlify), Kords (Netlify)",
      "Axe 3 - Qualite | Evaluation ergonomie et accessibilite | Preuve: Portfolio v2 a documenter",
    ],
  },
  {
    project: "Tous les projets",
    competences: ["Axe 1 - Cadrage | Mise en place environnement de travail (Git, outils) | Preuve: Tous les projets"],
  },
  {
    project: "Twitter Clone",
    competences: ["Axe 2 - Developpement | Ecriture du code selon le CDC | Preuve: E-commerce, Twitter Clone"],
  },
  {
    project: "Transversal (documentation et qualite)",
    competences: [
      "Axe 3 - Qualite | Documentation technique | Preuve: README GitHub, ce CDC",
      "Axe 3 - Qualite | Identification d'ameliorations qualite/perf | Preuve: Analyse Lighthouse a documenter",
      "Axe 3 - Qualite | Document argumentatif d'amelioration | Preuve: Ce CDC + analyses a publier",
    ],
  },
];

export default function CompetencesPage() {
  return (
    <main className="min-h-screen text-white bg-[#0f0f10]">
      <section className="relative overflow-hidden px-4 sm:px-8 lg:px-14 pt-10 pb-12">
        <div className="relative max-w-7xl mx-auto flex flex-col gap-8">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm sm:text-base hover:text-[#e2d8cf] transition"
            >
              <FaArrowLeft /> Retour au portfolio
            </Link>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fontWacks text-4xl sm:text-5xl lg:text-7xl leading-tight"
          >
            Competences liees aux projets
          </motion.h1>
        </div>
      </section>

      <section className="px-4 sm:px-8 lg:px-14 pb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="fontWacks text-3xl sm:text-5xl mb-3">Competences RNCP par projet</h2>

          <div className="grid gap-5 md:grid-cols-2">
            {projectCompetences.map((entry) => {
              return (
                <motion.article
                  key={entry.project}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.3 }}
                  className="border border-white/15 rounded-2xl p-5 sm:p-6 bg-[#121215]"
                >
                  <h3 className="fontWacks text-2xl sm:text-3xl">{entry.project}</h3>

                  <ul className="mt-4 flex flex-col gap-2">
                    {entry.competences.map((ligne) => (
                      <li key={`${entry.project}-${ligne}`} className="analogist text-base sm:text-lg list-disc ml-5">
                        {ligne}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
