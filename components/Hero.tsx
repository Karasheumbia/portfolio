'use client';
import { useLang } from './LanguageContext';
import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import Image from 'next/image';

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

const t = {
  fr: {
    greeting: 'Bonjour, je suis',
    role: 'Machine Learning Engineer & Data Scientist',
    sub: 'Python • IA • Data Analytics • Power Platform | Expérience Industrielle @ Rio Tinto',
    cta: 'Voir mes projets',
    cv: 'Télécharger le CV',
  },
  en: {
    greeting: "Hi, I'm",
    role: 'Machine Learning Engineer & Data Scientist',
    sub: 'Python • AI • Data Analytics • Power Platform | Industrial Experience @ Rio Tinto',
    cta: 'View my projects',
    cv: 'Download CV',
  },
};

export default function Hero() {
  const { lang } = useLang();
  const txt = t[lang];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-violet-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-fuchsia-600/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12">

        {/* Text content */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-violet-400 font-semibold text-lg mb-2 tracking-widest uppercase"
          >
            {txt.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight"
          >
            Emmanuel{' '}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              NSE MBIA
            </span>
            <br />HEUMBIA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-4"
          >
            {txt.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-400 text-base mb-10 max-w-xl"
          >
            {txt.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-300 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50"
            >
              {txt.cta}
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-nse-mbia-heumbia-data"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-slate-600 text-slate-300 hover:border-violet-500 hover:text-violet-400 transition-all duration-300 flex items-center gap-2"
            >
              <LinkedinIcon size={18} /> LinkedIn
            </a>
            <a
              href="/cv-emmanuel-nse-mbia-heumbia.pdf"
              download="Emmanuel_NSE-MBIA_HEUMBIA_CV.pdf"
              className="px-6 py-3 rounded-full border border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <Download size={18} /> {txt.cv}
            </a>
          </motion.div>
        </div>

        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex-shrink-0 order-1 md:order-2"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-500 blur-md opacity-50 animate-pulse" />
            {/* Border gradient */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-950">
                <Image
                  src="/Photo.jpg"
                  alt="Emmanuel NSE MBIA HEUMBIA"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hover:text-violet-400 transition-colors duration-200 animate-bounce"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
}
