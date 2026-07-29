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

const axisSynthesis = [
  {
    title: "Axe 1 - Cadrer un projet et conceptualiser une solution web",
    assessment:
      "Le cadrage est l'axe le plus solide : cahier des charges, specifications techniques, maquettage et environnement de travail (Git) sont poses avant le developpement sur la plupart des projets. La definition des fonctionnalites et de l'architecture reste cependant plus intuitive qu'ecrite sur certains projets (Kords, E-commerce), et la presentation des choix techniques n'existe pour l'instant que sous la forme de ce document et du portfolio lui-meme, sans support dedie.",
    improvements: [
      "Formaliser par ecrit l'architecture (fonctionnalites, donnees) avant de coder, plutot que de la garder en tete",
      "Construire un support de presentation dedie aux choix techniques et aux maquettes, reutilisable projet par projet",
    ],
  },
  {
    title: "Axe 2 - Developper une solution web",
    assessment:
      "Le developpement front-end, l'integration et le deploiement sont acquis et demontres sur plusieurs projets (Portfolio, LavanVids, E-commerce). L'authentification et l'implementation logique/base de donnees sont couvertes par Kords et E-commerce/My Quizz, mais restent des projets encore en cours ou peu documentes. Les tests unitaires et d'integration ne sont demontres que sur my-crud-tester, un projet isole plutot qu'une pratique integree a mes projets principaux.",
    improvements: [
      "Completer et documenter Kords pour qu'il demontre une logique back-end, une base de donnees et une authentification abouties",
      "Integrer des tests unitaires et d'integration directement dans mes projets principaux plutot que dans un depot separe",
    ],
  },
  {
    title: "Axe 3 - Deployer un systeme d'assurance qualite",
    assessment:
      "C'est l'axe le moins avance : la documentation utilisateur et le monitoring sur Kords restent a mettre en place, l'evaluation d'ergonomie et d'accessibilite du portfolio reste a documenter, et je n'ai pas encore publie d'analyse de performance (Lighthouse) ni de document argumentatif listant mes pistes d'amelioration. La documentation technique se limite pour l'instant aux README GitHub et a ce cahier des charges.",
    improvements: [
      "Rediger une documentation utilisateur pour Kords et mettre en place un monitoring des retours utilisateurs",
      "Realiser un audit d'accessibilite et d'ergonomie du portfolio (Lighthouse, axe) et publier les resultats",
      "Rediger un document argumentatif listant mes propositions d'amelioration qualite/performance",
    ],
  },
];

export default function CompetencesClient() {
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

      <section className="px-4 sm:px-8 lg:px-14 pb-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <h2 className="fontWacks text-3xl sm:text-5xl mb-3">Auto-evaluation</h2>

          <div className="flex flex-col gap-6">
            {axisSynthesis.map((axis) => (
              <motion.article
                key={axis.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3 }}
                className="border border-white/15 rounded-2xl p-5 sm:p-6 bg-[#121215]"
              >
                <h3 className="fontWacks text-xl sm:text-2xl">{axis.title}</h3>
                <p className="analogist text-base sm:text-lg mt-3 leading-7 text-white/85">{axis.assessment}</p>
                <div className="mt-4 pl-4 border-l-2 border-[#A79EA1]">
                  <h4 className="fontWacks text-base sm:text-lg text-[#e2d8cf]">Axes d&apos;amelioration</h4>
                  <ul className="mt-2 flex flex-col gap-1">
                    {axis.improvements.map((item) => (
                      <li key={item} className="analogist text-base sm:text-lg list-disc ml-5 text-white/85">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
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
