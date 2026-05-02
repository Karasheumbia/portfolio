'use client';
import { useLang } from './LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillIcons: Record<string, string> = {
  'scikit-learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
  'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  'Keras': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  'NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
  'Matplotlib': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg',
  'Jupyter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
  'Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'SQLite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
  'Power BI': 'https://img.icons8.com/color/48/power-bi.png',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  'Azure': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
};

const skillGroups = {
  fr: [
    {
      category: 'Machine Learning & IA',
      color: 'from-violet-500 to-fuchsia-500',
      skills: ['scikit-learn', 'TensorFlow', 'Keras', 'Deep Learning', 'NLP', 'Computer Vision', 'Feature Engineering'],
    },
    {
      category: 'Data Science & Analyse',
      color: 'from-cyan-500 to-blue-500',
      skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter'],
    },
    {
      category: 'Développement & API',
      color: 'from-orange-500 to-amber-500',
      skills: ['Flask', 'REST API', 'Next.js', 'React', 'TypeScript', 'SQL', 'SQLite'],
    },
    {
      category: 'Power Platform & Outils',
      color: 'from-emerald-500 to-teal-500',
      skills: ['Power Apps', 'Power Automate', 'Power BI', 'Git', 'VS Code', 'Azure'],
    },
  ],
  en: [
    {
      category: 'Machine Learning & AI',
      color: 'from-violet-500 to-fuchsia-500',
      skills: ['scikit-learn', 'TensorFlow', 'Keras', 'Deep Learning', 'NLP', 'Computer Vision', 'Feature Engineering'],
    },
    {
      category: 'Data Science & Analytics',
      color: 'from-cyan-500 to-blue-500',
      skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter'],
    },
    {
      category: 'Development & APIs',
      color: 'from-orange-500 to-amber-500',
      skills: ['Flask', 'REST API', 'Next.js', 'React', 'TypeScript', 'SQL', 'SQLite'],
    },
    {
      category: 'Power Platform & Tools',
      color: 'from-emerald-500 to-teal-500',
      skills: ['Power Apps', 'Power Automate', 'Power BI', 'Git', 'VS Code', 'Azure'],
    },
  ],
};

const sectionT = {
  fr: { title: 'Compétences', sub: 'Technologies et outils que je maîtrise' },
  en: { title: 'Skills', sub: 'Technologies and tools I master' },
};

function SkillBadge({ skill }: { skill: string }) {
  const icon = skillIcons[skill];
  return (
    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 border border-slate-700 text-slate-300 text-sm rounded-lg hover:border-violet-500 hover:text-violet-400 transition-all duration-200 cursor-default">
      {icon && (
        <img
          src={icon}
          alt={skill}
          width={16}
          height={16}
          className="w-4 h-4 object-contain"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
      )}
      {skill}
    </span>
  );
}

export default function Skills() {
  const { lang } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const groups = skillGroups[lang];
  const txt = sectionT[lang];

  return (
    <section id="skills" className="py-24 bg-slate-900">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
        >
          {txt.title}
        </motion.h2>
        <p className="text-slate-400 text-center mb-3">{txt.sub}</p>
        <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-14 rounded-full" />

        <div className="grid md:grid-cols-2 gap-8">
          {groups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.15 }}
              className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 hover:border-slate-500 transition-all duration-300"
            >
              <div className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${group.color} text-white text-sm font-bold mb-5`}>
                {group.category}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
