"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FaArrowLeft, FaCheckCircle, FaFolderOpen } from "react-icons/fa";

const axes = [
  {
    id: "axe-1",
    title: "1. Cadrer un projet et conceptualiser une solution web",
    description:
      "Analyser un besoin, cadrer un projet et transformer les idees en une solution exploitable cote produit, technique et architecture.",
    competences: [
      "Redaction du cahier des charges",
      "Redaction des specifications techniques",
      "Mise en place de l'environnement de travail (Git, outils de partage et communication)",
      "Realisation d'un maquettage",
      "Definition des fonctionnalites et de l'architecture (web + base de donnees)",
      "Presentation argumentee des choix techniques, maquettes et schema de solution",
    ],
  },
  {
    id: "axe-2",
    title: "2. Developper une solution web",
    description:
      "Construire un produit fonctionnel, de l'interface utilisateur jusqu'a la logique metier, avec integration complete et mise en production.",
    competences: [
      "Developpement d'un prototype fonctionnel",
      "Ecriture du code selon les exigences du cahier des charges",
      "Integration de tous les elements du projet",
      "Developpement front-end",
      "Implementation de la logique applicative et de la base de donnees",
      "Mise en place de l'authentification",
      "Conception et execution des tests unitaires et d'integration",
      "Deploiement de l'application sur un serveur",
    ],
  },
  {
    id: "axe-3",
    title: "3. Deployer un systeme d'assurance qualite",
    description:
      "Suivre la qualite d'une solution sur la duree avec documentation, mesures, retours d'usage et amelioration continue.",
    competences: [
      "Documentation technique pour les equipes impliquees",
      "Documentation utilisateur pour le support",
      "Monitoring du lancement (retours utilisateurs, analyse)",
      "Identification d'ameliorations qualite et performance",
      "Evaluation de l'ergonomie et de l'accessibilite",
      "Redaction d'un document argumentatif proposant des ameliorations",
    ],
  },
];

const projects = [
  {
    name: "Kords (projet solo)",
    context: "Plateforme communautaire pour guitaristes, en evolution continue.",
    axis: "axe-2",
    evidence: [
      "Prototype front-end et integration des ecrans cles en Next.js",
      "Conception de la logique metier Node.js pour les interactions communautaires",
      "Organisation du code pour faciliter l'evolution fonctionnelle",
    ],
  },
  {
    name: "E-commerce (groupe de 4)",
    context: "6 semaines pour livrer une plateforme de vente de chaussures.",
    axis: "axe-1",
    evidence: [
      "Cadrage du scope et priorisation des fonctionnalites",
      "Choix techniques front/back coherents avec les contraintes de delai",
      "Definition d'une architecture partagee entre les membres de l'equipe",
    ],
  },
  {
    name: "LavanVids / Previously-on",
    context: "Suivi de series avec API externe et interface orientee usage.",
    axis: "axe-2",
    evidence: [
      "Integration API et gestion des donnees dans l'interface",
      "Developpement front-end orientee parcours utilisateur",
      "Livraison d'un prototype fonctionnel deploye",
    ],
  },
  {
    name: "my-crud-tester",
    context: "Projet scolaire centre sur la qualite logicielle.",
    axis: "axe-3",
    evidence: [
      "Conception et execution de tests unitaires",
      "Execution en environnement Docker pour reproductibilite",
      "Demarche d'amelioration continue sur la fiabilite du code",
    ],
  },
  {
    name: "MyIRC",
    context: "Application de messagerie instantanee avec sockets.",
    axis: "axe-2",
    evidence: [
      "Implementation de logique temps reel en JavaScript",
      "Integration front-end + communication client/serveur",
      "Validation du comportement sur des scenarios d'usage multi-utilisateur",
    ],
  },
  {
    name: "My Quizz",
    context: "Projet de groupe de 3 personnes sur 2 semaines.",
    axis: "axe-3",
    evidence: [
      "Documentation de l'usage des fonctionnalites de creation de quizz",
      "Analyse des retours pour ajuster ergonomie et comprehension",
      "Proposition d'ameliorations qualite/performance post-livraison",
    ],
  },
];

const axisColor = {
  "axe-1": "from-[#c9a88f] to-[#8c6b55]",
  "axe-2": "from-[#7fa19a] to-[#3e5d5a]",
  "axe-3": "from-[#9794ac] to-[#5f5c78]",
};

export default function CompetencesPage() {
  return (
    <main className="min-h-screen bg-[#0f0f10] text-white">
      <section className="relative overflow-hidden px-4 sm:px-8 lg:px-14 pt-10 pb-12">
        <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_15%_20%,#8c6b55_0%,transparent_35%),radial-gradient(circle_at_85%_15%,#3e5d5a_0%,transparent_30%),radial-gradient(circle_at_50%_80%,#5f5c78_0%,transparent_35%)]" />

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
            Competences RNCP
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="analogist max-w-4xl text-lg sm:text-2xl leading-8"
          >
            Cette page relie mes projets aux trois axes RNCP attendus pour le projet de fin de premiere annee.
            Le format reste one page, avec environ 6 projets, en mettant en avant mes realisations personnelles
            et mon identite professionnelle.
          </motion.p>

          <div className="border border-white/20 bg-black/30 p-4 sm:p-6 rounded-xl max-w-4xl">
            <p className="analogist text-base sm:text-xl">
              Consigne respectee: les contenus ci-dessous presentent une demarche personnelle.
              L'objectif est de montrer des preuves concretes de competence, pas de reproduire un modele standard.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-8 lg:px-14 pb-16">
        <div className="max-w-7xl mx-auto grid gap-6 lg:grid-cols-3">
          {axes.map((axis, index) => (
            <motion.article
              key={axis.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-2xl border border-white/20 bg-[#141416] overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${axisColor[axis.id]}`} />
              <div className="p-5 sm:p-6 flex flex-col gap-4">
                <h2 className="fontWacks text-2xl sm:text-3xl leading-tight">{axis.title}</h2>
                <p className="analogist text-base sm:text-lg leading-7 text-white/90">{axis.description}</p>
                <ul className="flex flex-col gap-3">
                  {axis.competences.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <FaCheckCircle className="shrink-0 mt-1 text-[#e2d8cf]" />
                      <span className="analogist text-base sm:text-lg leading-6">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-8 lg:px-14 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="fontWacks text-3xl sm:text-5xl mb-3">Projets et preuves de competences</h2>
          <p className="analogist text-lg sm:text-2xl text-white/90 mb-8">
            6 projets utilises pour illustrer les competences des 3 axes.
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => {
              const axis = axes.find((item) => item.id === project.axis);

              return (
                <motion.article
                  key={project.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="border border-white/15 rounded-2xl p-5 sm:p-6 bg-[#121215]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="fontWacks text-2xl sm:text-3xl">{project.name}</h3>
                    <FaFolderOpen className="text-2xl text-white/75 shrink-0" />
                  </div>
                  <p className="analogist text-base sm:text-lg text-white/85 mt-2">{project.context}</p>

                  <p className="text-sm sm:text-base mt-4 uppercase tracking-[0.18em] text-[#e2d8cf]">
                    Axe principal: {axis?.title}
                  </p>

                  <ul className="mt-4 flex flex-col gap-2">
                    {project.evidence.map((item) => (
                      <li key={item} className="analogist text-base sm:text-lg flex gap-2">
                        <span className="text-[#e2d8cf]">-</span>
                        <span>{item}</span>
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
