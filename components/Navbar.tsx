'use client';
import { useLang } from './LanguageContext';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const t = {
  fr: { about: 'À propos', education: 'Formation', projects: 'Projets', skills: 'Compétences', certs: 'Certifications', contact: 'Contact' },
  en: { about: 'About', education: 'Education', projects: 'Projects', skills: 'Skills', certs: 'Certifications', contact: 'Contact' },
};

export default function Navbar() {
  const { lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Ferme le menu quand on scroll
  useEffect(() => {
    if (menuOpen) setMenuOpen(false);
  }, [scrolled]);

  const links = [
    { href: '#about', label: t[lang].about },
    { href: '#education', label: t[lang].education },
    { href: '#projects', label: t[lang].projects },
    { href: '#skills', label: t[lang].skills },
    { href: '#certifications', label: t[lang].certs },
    { href: '#contact', label: t[lang].contact },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between relative z-50">
        <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          ENH
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-slate-300 hover:text-violet-400 transition-colors duration-200 font-medium">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center bg-slate-800 border border-slate-700 rounded-full p-1 gap-1">
            <button
              onClick={() => lang !== 'fr' && toggle()}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
                lang === 'fr'
                  ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md shadow-violet-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              FR
            </button>
            <button
              onClick={() => lang !== 'en' && toggle()}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
                lang === 'en'
                  ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md shadow-violet-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Hamburger button — mobile only */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-violet-400 hover:bg-slate-800 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } bg-slate-900/95 backdrop-blur-md border-t border-slate-800`}
      >
        <div className="flex flex-col px-6 py-4 gap-1">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-slate-300 hover:text-violet-400 hover:bg-slate-800 transition-all duration-200 font-medium py-3 px-4 rounded-xl"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
