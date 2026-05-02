'use client';
import { useLang } from './LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BadgeCheck, Clock, Eye, ShieldCheck } from 'lucide-react';

const certs = [
  {
    code: 'AZ-900',
    name: { fr: 'Azure Fundamentals', en: 'Azure Fundamentals' },
    issuer: 'Microsoft',
    status: 'done' as const,
    color: 'from-blue-500 to-cyan-500',
    border: 'hover:border-blue-500/60',
    viewUrl: '',
    verifyUrl: '',
  },
  {
    code: 'AI-102',
    name: { fr: 'Designing & Implementing AI Solutions', en: 'Designing & Implementing AI Solutions' },
    issuer: 'Microsoft',
    status: 'done' as const,
    color: 'from-violet-500 to-fuchsia-500',
    border: 'hover:border-violet-500/60',
    viewUrl: '',
    verifyUrl: '',
  },
  {
    code: 'DP-100',
    name: { fr: 'Designing & Implementing Data Science Solutions', en: 'Designing & Implementing Data Science Solutions' },
    issuer: 'Microsoft',
    status: 'done' as const,
    color: 'from-emerald-500 to-teal-500',
    border: 'hover:border-emerald-500/60',
    viewUrl: '',
    verifyUrl: '',
  },
  {
    code: 'AZ-204',
    name: { fr: 'Developing Solutions for Azure', en: 'Developing Solutions for Azure' },
    issuer: 'Microsoft',
    status: 'done' as const,
    color: 'from-orange-500 to-amber-500',
    border: 'hover:border-orange-500/60',
    viewUrl: '',
    verifyUrl: '',
  },
  {
    code: 'SC-900',
    name: { fr: 'Security, Compliance & Identity Fundamentals', en: 'Security, Compliance & Identity Fundamentals' },
    issuer: 'Microsoft',
    status: 'inprogress' as const,
    color: 'from-slate-500 to-slate-600',
    border: 'hover:border-slate-400/60',
    viewUrl: null,
    verifyUrl: null,
  },
  {
    code: 'IT Support',
    name: { fr: 'Google IT Support Professional', en: 'Google IT Support Professional' },
    issuer: 'Google',
    status: 'done' as const,
    color: 'from-red-500 to-yellow-500',
    border: 'hover:border-red-500/60',
    viewUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/2D5UGEL38G7F',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/2D5UGEL38G7F',
  },
];

const sectionT = {
  fr: {
    title: 'Certifications',
    sub: 'Certifications Microsoft Azure obtenues et en cours',
    inprogress: 'En cours',
    obtained: 'Obtenu',
    view: 'Voir',
    verify: 'Vérifier',
  },
  en: {
    title: 'Certifications',
    sub: 'Microsoft Azure certifications obtained and in progress',
    inprogress: 'In progress',
    obtained: 'Obtained',
    view: 'View',
    verify: 'Verify',
  },
};

export default function Certifications() {
  const { lang } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const txt = sectionT[lang];

  return (
    <section id="certifications" className="pt-24 pb-4 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent"
        >
          {txt.title}
        </motion.h2>
        <p className="text-slate-400 text-center mb-3">{txt.sub}</p>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto mb-14 rounded-full" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.code}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-slate-900 border border-slate-800 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 flex flex-col ${cert.border}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`px-3 py-1 rounded-lg bg-gradient-to-r ${cert.color} text-white text-sm font-bold`}>
                  {cert.code}
                </div>
                {cert.status === 'done' ? (
                  <span className="flex items-center gap-1 text-emerald-400 text-xs font-medium">
                    <BadgeCheck size={14} /> {txt.obtained}
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-amber-400 text-xs font-medium">
                    <Clock size={14} /> {txt.inprogress}
                  </span>
                )}
              </div>
              <p className="text-white font-semibold text-sm leading-snug mb-1">{cert.name[lang]}</p>
              <p className="text-slate-500 text-xs mb-4">{cert.issuer}</p>

              {cert.status === 'done' && (
                <div className="flex gap-2 mt-auto">
                  <a
                    href={cert.viewUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium hover:border-violet-500 hover:text-violet-400 transition-all duration-200"
                  >
                    <Eye size={13} /> {txt.view}
                  </a>
                  <a
                    href={cert.verifyUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium hover:border-emerald-500 hover:text-emerald-400 transition-all duration-200"
                  >
                    <ShieldCheck size={13} /> {txt.verify}
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
