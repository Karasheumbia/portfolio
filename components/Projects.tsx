'use client';
import { useLang } from './LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const projects = {
  fr: [
    {
      title: 'Prédiction de Retard de Vol',
      desc: "Modèle ML pour prédire les retards de vols sur 563 000+ enregistrements (2018–2022). Pipeline complet : prétraitement, rééchantillonnage, sélection de features, évaluation.",
      tags: ['Python', 'sklearn', 'Pandas', 'Feature Selection', 'Oversampling'],
      color: 'from-violet-600 to-blue-600',
    },
    {
      title: 'LIARRA – Reconnaissance de Gestes',
      desc: "Analyse exploratoire et modélisation sur 10,8M+ enregistrements de capteurs PPG & ACC pour la reconnaissance de gestes/activités. Modèles ML et Deep Learning comparés.",
      tags: ['Deep Learning', 'TensorFlow', 'PPG/ACC', 'EDA', 'Multi-modal'],
      color: 'from-fuchsia-600 to-pink-600',
    },
    {
      title: 'MalWear – Analyse de Signaux Physiologiques',
      desc: "Dataset de 576 MB de signaux physiologiques issus de capteurs portables (wearables). Analyse de stress et niveaux de tension sur 300+ fichiers annotés par participants.",
      tags: ['Wearables', 'Physiologie', 'Signal Processing', 'Python', 'CSV'],
      color: 'from-emerald-600 to-teal-600',
    },
    {
      title: 'API Flask E-Commerce',
      desc: "API REST complète pour une plateforme e-commerce avec gestion des produits, commandes et transactions. ORM Peewee avec SQLite, architecture MVC, tests inclus.",
      tags: ['Flask', 'REST API', 'SQLite', 'Peewee ORM', 'Python'],
      color: 'from-orange-600 to-amber-600',
    },
    {
      title: 'Expense Tracker AI',
      desc: "Application web de suivi de dépenses avec visualisations interactives. Interface moderne construite avec Next.js, Tailwind CSS et Recharts.",
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts', 'React'],
      color: 'from-cyan-600 to-sky-600',
    },
  ],
  en: [
    {
      title: 'Flight Delay Prediction',
      desc: "ML model to predict flight delays on 563,000+ records (2018–2022). Full pipeline: preprocessing, resampling, feature selection, evaluation.",
      tags: ['Python', 'sklearn', 'Pandas', 'Feature Selection', 'Oversampling'],
      color: 'from-violet-600 to-blue-600',
    },
    {
      title: 'LIARRA – Gesture Recognition',
      desc: "Exploratory analysis and modeling on 10.8M+ PPG & ACC sensor records for gesture/activity recognition. ML and Deep Learning models compared.",
      tags: ['Deep Learning', 'TensorFlow', 'PPG/ACC', 'EDA', 'Multi-modal'],
      color: 'from-fuchsia-600 to-pink-600',
    },
    {
      title: 'MalWear – Physiological Signal Analysis',
      desc: "576 MB dataset of physiological signals from wearable sensors. Stress and tension level analysis across 300+ participant-annotated files.",
      tags: ['Wearables', 'Physiology', 'Signal Processing', 'Python', 'CSV'],
      color: 'from-emerald-600 to-teal-600',
    },
    {
      title: 'Flask E-Commerce API',
      desc: "Full REST API for an e-commerce platform with product, order, and transaction management. Peewee ORM with SQLite, MVC architecture, tests included.",
      tags: ['Flask', 'REST API', 'SQLite', 'Peewee ORM', 'Python'],
      color: 'from-orange-600 to-amber-600',
    },
    {
      title: 'Expense Tracker AI',
      desc: "Web application for expense tracking with interactive visualizations. Modern UI built with Next.js, Tailwind CSS, and Recharts.",
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts', 'React'],
      color: 'from-cyan-600 to-sky-600',
    },
  ],
};

const sectionT = {
  fr: {
    title: 'Mes Projets',
    sub: '5 projets illustrant mes compétences en ML, Data Science et développement',
    showMore: 'Voir plus de projets',
    showLess: 'Réduire',
  },
  en: {
    title: 'My Projects',
    sub: '5 projects showcasing my skills in ML, Data Science, and development',
    showMore: 'See more projects',
    showLess: 'Show less',
  },
};

function ProjectCard({ project, i, inView }: { project: typeof projects.fr[0]; i: number; inView: boolean }) {
  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
    >
      <div className={`h-2 bg-gradient-to-r ${project.color}`} />
      <div className="p-6">
        <h3 className="text-white font-bold text-lg mb-3 group-hover:text-violet-400 transition-colors">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.desc}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-md border border-slate-700">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { lang } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [showAll, setShowAll] = useState(false);
  const list = projects[lang];
  const txt = sectionT[lang];
  const visible = showAll ? list : list.slice(0, 3);

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-orange-400 to-fuchsia-400 bg-clip-text text-transparent"
        >
          {txt.title}
        </motion.h2>
        <p className="text-slate-400 text-center mb-3">{txt.sub}</p>
        <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-fuchsia-500 mx-auto mb-14 rounded-full" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {visible.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} inView={inView} />
          ))}
        </div>

        {/* Bouton voir plus / réduire */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(v => !v)}
            className="flex items-center gap-2 px-8 py-3 rounded-full border border-slate-600 text-slate-300 hover:border-violet-500 hover:text-violet-400 transition-all duration-300 font-medium"
          >
            {showAll ? <><ChevronUp size={18} /> {txt.showLess}</> : <><ChevronDown size={18} /> {txt.showMore}</>}
          </button>
        </div>
      </div>
    </section>
  );
}
