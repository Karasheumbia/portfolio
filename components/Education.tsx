'use client';
import { useLang } from './LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Calendar, Star } from 'lucide-react';

const sectionT = {
  fr: {
    title: 'Formation',
    sub: 'Parcours académique en informatique et intelligence artificielle',
    degree: 'Baccalauréat en informatique',
    concentration: 'Concentration : Intelligence Artificielle',
    specialization: 'Spécialisation : Science des données',
    period: 'Août 2022 – Déc. 2025',
    gpa: 'Moyenne cumulative',
    courses: 'Cours pertinents',
    courseList: [
      'Apprentissage automatique', 'Deep Learning', 'Traitement du langage naturel',
      'Vision par ordinateur', 'Bases de données', 'Analyse de données',
      'Algorithmes & Structures de données', 'Développement web',
    ],
  },
  en: {
    title: 'Education',
    sub: 'Academic background in computer science and artificial intelligence',
    degree: 'Bachelor of Computer Science',
    concentration: 'Concentration: Artificial Intelligence',
    specialization: 'Specialization: Data Science',
    period: 'Aug 2022 – Dec 2025',
    gpa: 'Cumulative GPA',
    courses: 'Relevant Courses',
    courseList: [
      'Machine Learning', 'Deep Learning', 'Natural Language Processing',
      'Computer Vision', 'Databases', 'Data Analysis',
      'Algorithms & Data Structures', 'Web Development',
    ],
  },
};

export default function Education() {
  const { lang } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const txt = sectionT[lang];

  return (
    <section id="education" className="pt-4 pb-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent"
        >
          {txt.title}
        </motion.h2>
        <p className="text-slate-400 text-center mb-3">{txt.sub}</p>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto mb-14 rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-slate-800/60 border border-slate-700 rounded-3xl p-8 hover:border-cyan-500/40 transition-all duration-300"
        >
          {/* Header */}
          <div className="flex items-start gap-5 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-600 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-600/20">
              <GraduationCap size={30} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-extrabold text-xl leading-snug mb-1">
                Université du Québec à Chicoutimi
              </h3>
              <p className="text-cyan-400 font-semibold text-base mb-2">UQAC</p>
              <div className="flex flex-wrap gap-4 text-slate-400 text-sm">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} /> Chicoutimi, Québec
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> {txt.period}
                </span>
              </div>
            </div>
          </div>

          {/* Degree info */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-4 text-center">
              <p className="text-slate-400 text-xs mb-1">{txt.degree}</p>
              <p className="text-white font-bold text-sm">{txt.concentration}</p>
            </div>
            <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-4 text-center">
              <p className="text-slate-400 text-xs mb-1">{lang === 'fr' ? 'Spécialisation' : 'Specialization'}</p>
              <p className="text-white font-bold text-sm">{lang === 'fr' ? 'Science des données' : 'Data Science'}</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/40 to-violet-900/40 border border-cyan-700/40 rounded-2xl p-4 text-center">
              <p className="text-slate-400 text-xs mb-1">{txt.gpa}</p>
              <div className="flex items-center justify-center gap-1.5">
                <Star size={14} className="text-yellow-400 fill-yellow-400" />
                <p className="text-white font-extrabold text-lg">3.5 <span className="text-slate-400 font-normal text-sm">/ 4.3</span></p>
              </div>
            </div>
          </div>

          {/* Relevant courses */}
          <div>
            <p className="text-slate-300 font-semibold text-sm mb-3">{txt.courses}</p>
            <div className="flex flex-wrap gap-2">
              {txt.courseList.map(course => (
                <span
                  key={course}
                  className="px-3 py-1.5 bg-slate-900 border border-slate-700 text-slate-300 text-xs rounded-lg hover:border-cyan-500/60 hover:text-cyan-400 transition-all duration-200"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
