'use client';
import { useLang } from './LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar, Briefcase } from 'lucide-react';

const experience = {
  company: 'Rio Tinto',
  type: { fr: 'Saisonnier · 5 mois', en: 'Seasonal · 5 months' },
  location: 'Alma, Québec, Canada',
  roles: {
    fr: [
      {
        title: 'Opérateur — Électrolyse (Équipe technique)',
        period: 'Juin 2025 – Sept. 2025',
        duration: '4 mois',
        bullets: [
          'Participation active à la prise de mesures (température, etc.) en salle d\'électrolyse pour le suivi de la performance des cuves.',
          'Collaboration quotidienne avec l\'équipe technique pour la collecte, l\'analyse et la remontée des données terrain.',
          'Participation aux réunions d\'équipe avec cadres et techniciens pour planifier les interventions.',
        ],
        tag: 'Intelligence des données',
      },
      {
        title: 'Changeur d\'anodes — Électrolyse',
        period: 'Mai 2025 – Juin 2025',
        duration: '2 mois',
        bullets: [
          'Réalisation des opérations de changement d\'anodes dans le respect strict des procédures de sécurité et de production.',
          'Compréhension approfondie du cycle de vie des cuves et des enjeux opérationnels liés à la qualité des anodes.',
          'Familiarisation avec les contraintes de production, les exigences de sécurité et les réalités du terrain industriel.',
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

const sectionT = {
  fr: { title: 'Expérience', sub: 'Expérience industrielle sur le terrain' },
  en: { title: 'Experience', sub: 'Industrial field experience' },
};

export default function Experience() {
  const { lang } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const txt = sectionT[lang];
  const roles = experience.roles[lang];

  return (
    <section id="experience" className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"
        >
          {txt.title}
        </motion.h2>
        <p className="text-slate-400 text-center mb-3">{txt.sub}</p>
        <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-14 rounded-full" />

        {/* Company header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center text-white font-extrabold text-2xl shadow-lg shadow-red-600/30 flex-shrink-0">
            R
          </div>
          <div>
            <h3 className="text-white font-bold text-xl">{experience.company}</h3>
            <p className="text-slate-400 text-sm">{experience.type[lang]}</p>
            <div className="flex items-center gap-1 text-slate-500 text-xs mt-0.5">
              <MapPin size={11} /> {experience.location}
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-6 border-l-2 border-slate-700 space-y-10">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[29px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-red-500 to-orange-500 border-2 border-slate-950 shadow-md" />

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-red-500/40 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-white font-bold text-base leading-snug">{role.title}</h4>
                    <div className="flex items-center gap-3 mt-1 text-slate-400 text-xs">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
