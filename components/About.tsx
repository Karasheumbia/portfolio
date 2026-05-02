'use client';
import { useLang } from './LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Brain, Database, Zap, Factory, X, MapPin, Calendar, Briefcase } from 'lucide-react';

const t = {
  fr: {
    title: 'À propos de moi',
    p1: "Passionné par l'intelligence artificielle et la data science, je transforme des données complexes en insights actionnables et en solutions intelligentes. Avec une solide formation en apprentissage automatique et une expérience industrielle chez Rio Tinto, je combine rigueur académique et pragmatisme terrain.",
    p2: "Je maîtrise l'ensemble du pipeline de la donnée : de la collecte et nettoyage à la modélisation, déploiement et visualisation. J'aime construire des outils qui ont un impact réel.",
    cards: [
      { icon: Brain, label: 'Machine Learning', desc: 'sklearn, TensorFlow, Deep Learning', clickable: false },
      { icon: Database, label: 'Data Engineering', desc: 'Pandas, SQL, ETL Pipelines', clickable: false },
      { icon: Zap, label: 'Power Platform', desc: 'Power Apps, Power Automate', clickable: false },
      { icon: Factory, label: 'Rio Tinto', desc: 'Expérience industrielle', clickable: true },
    ],
    clickHint: 'Cliquer pour voir',
  },
  en: {
    title: 'About Me',
    p1: "Passionate about artificial intelligence and data science, I transform complex data into actionable insights and intelligent solutions. With a strong background in machine learning and industrial experience at Rio Tinto, I combine academic rigor with practical know-how.",
    p2: "I master the full data pipeline: from collection and cleaning to modeling, deployment, and visualization. I love building tools that create real impact.",
    cards: [
      { icon: Brain, label: 'Machine Learning', desc: 'sklearn, TensorFlow, Deep Learning', clickable: false },
      { icon: Database, label: 'Data Engineering', desc: 'Pandas, SQL, ETL Pipelines', clickable: false },
      { icon: Zap, label: 'Power Platform', desc: 'Power Apps, Power Automate', clickable: false },
      { icon: Factory, label: 'Rio Tinto', desc: 'Industrial Experience', clickable: true },
    ],
    clickHint: 'Click to view',
  },
};

const experienceData = {
  company: 'Rio Tinto',
  type: { fr: 'Saisonnier · 5 mois', en: 'Seasonal · 5 months' },
  location: 'Alma, Québec, Canada',
  roles: {
    fr: [
      {
        title: "Opérateur — Électrolyse (Équipe technique)",
        period: 'Juin 2025 – Sept. 2025',
        duration: '4 mois',
        bullets: [
          "Participation active à la prise de mesures (température, etc.) en salle d'électrolyse pour le suivi de la performance des cuves.",
          "Collaboration quotidienne avec l'équipe technique pour la collecte, l'analyse et la remontée des données terrain.",
          "Participation aux réunions d'équipe avec cadres et techniciens pour planifier les interventions.",
        ],
        tag: 'Intelligence des données',
      },
      {
        title: "Changeur d'anodes — Électrolyse",
        period: 'Mai 2025 – Juin 2025',
        duration: '2 mois',
        bullets: [
          "Réalisation des opérations de changement d'anodes dans le respect strict des procédures de sécurité et de production.",
          "Compréhension approfondie du cycle de vie des cuves et des enjeux opérationnels liés à la qualité des anodes.",
          "Familiarisation avec les contraintes de production, les exigences de sécurité et les réalités du terrain industriel.",
        ],
        tag: null,
      },
    ],
    en: [
      {
        title: 'Operator — Electrolysis (Technical Team)',
        period: 'Jun 2025 – Sep 2025',
        duration: '4 months',
        bullets: [
          'Active participation in measurement collection (temperature, etc.) in the electrolysis room to monitor cell performance.',
          'Daily collaboration with the technical team for data collection, analysis, and field reporting.',
          'Participation in team meetings with managers and technicians to plan interventions.',
        ],
        tag: 'Data Intelligence',
      },
      {
        title: 'Anode Changer — Electrolysis',
        period: 'May 2025 – Jun 2025',
        duration: '2 months',
        bullets: [
          'Carried out anode change operations in strict compliance with safety and production procedures.',
          'In-depth understanding of the cell lifecycle and operational challenges related to anode quality.',
          'Familiarization with production constraints, safety requirements, and industrial field realities.',
        ],
        tag: null,
      },
    ],
  },
};

export default function About() {
  const { lang } = useLang();
  const txt = t[lang];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [modalOpen, setModalOpen] = useState(false);
  const roles = experienceData.roles[lang];

  return (
    <>
      <section id="about" className="pt-24 pb-4 bg-slate-900">
        <div className="max-w-5xl mx-auto px-6" ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"
          >
            {txt.title}
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-slate-300 text-lg leading-relaxed mb-5">{txt.p1}</p>
              <p className="text-slate-400 text-lg leading-relaxed">{txt.p2}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {txt.cards.map(({ icon: Icon, label, desc, clickable }) =>
                clickable ? (
                  <button
                    key={label}
                    onClick={() => setModalOpen(true)}
                    className="bg-slate-800 border border-slate-700 rounded-2xl p-5 hover:border-red-500/60 hover:-translate-y-1 transition-all duration-300 text-left group relative"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center mb-3">
                      <Icon size={20} className="text-white" />
                    </div>
                    <p className="text-white font-semibold text-sm">{label}</p>
                    <p className="text-slate-400 text-xs mt-1">{desc}</p>
                    <span className="absolute bottom-2 right-3 text-red-400 text-xs opacity-70 group-hover:opacity-100 transition-opacity">
                      {txt.clickHint} →
                    </span>
                  </button>
                ) : (
                  <div
                    key={label}
                    className="bg-slate-800 border border-slate-700 rounded-2xl p-5 hover:border-violet-500/60 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center mb-3">
                      <Icon size={20} className="text-white" />
                    </div>
                    <p className="text-white font-semibold text-sm">{label}</p>
                    <p className="text-slate-400 text-xs mt-1">{desc}</p>
                  </div>
                )
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 relative"
              onClick={e => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
              >
                <X size={20} />
              </button>

              {/* Company header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center text-white font-extrabold text-2xl shadow-lg shadow-red-600/30 flex-shrink-0">
                  R
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">{experienceData.company}</h3>
                  <p className="text-slate-400 text-sm">{experienceData.type[lang]}</p>
                  <div className="flex items-center gap-1 text-slate-500 text-xs mt-0.5">
                    <MapPin size={11} /> {experienceData.location}
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative pl-6 border-l-2 border-slate-700 space-y-8">
                {roles.map((role, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[29px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-red-500 to-orange-500 border-2 border-slate-900" />
                    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h4 className="text-white font-bold text-sm leading-snug">{role.title}</h4>
                          <div className="flex flex-wrap items-center gap-3 mt-1 text-slate-400 text-xs">
                            <span className="flex items-center gap-1"><Calendar size={11} /> {role.period}</span>
                            <span className="flex items-center gap-1"><Briefcase size={11} /> {role.duration}</span>
                          </div>
                        </div>
                        {role.tag && (
                          <span className="px-3 py-1 rounded-full bg-red-900/40 border border-red-700/50 text-red-400 text-xs font-medium">
                            {role.tag}
                          </span>
                        )}
                      </div>
                      <ul className="space-y-2 mt-3">
                        {role.bullets.map((b, j) => (
                          <li key={j} className="flex gap-2 text-slate-400 text-sm leading-relaxed">
                            <span className="text-red-500 mt-1 flex-shrink-0">▸</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
