'use client';
import { useLang } from './LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Send, Users, Wifi } from 'lucide-react';

function LinkedinIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const t = {
  fr: {
    title: 'Contact',
    sub: 'Disponible pour des opportunités en ML, Data Science et IA',
    cta: 'Me contacter sur LinkedIn',
    email: 'Karasmbis@gmail.com',
    location: 'Chicoutimi, Québec, Canada',
    availability: 'Disponibilité',
    modes: ['Présentiel / Hybride', '100% Télétravail'],
    form: {
      title: 'Envoyer un message',
      name: 'Nom complet',
      namePh: 'Votre nom',
      email: 'Adresse email',
      emailPh: 'votre@email.com',
      subject: 'Sujet',
      subjectPh: 'Opportunité de collaboration...',
      message: 'Message',
      messagePh: 'Décrivez votre projet ou opportunité...',
      send: 'Envoyer le message',
      sending: 'Envoi...',
    },
    footer: 'Tous droits réservés',
  },
  en: {
    title: 'Contact',
    sub: 'Available for ML, Data Science, and AI opportunities',
    cta: 'Contact me on LinkedIn',
    email: 'Karasmbis@gmail.com',
    location: 'Chicoutimi, Québec, Canada',
    availability: 'Availability',
    modes: ['On-site / Hybrid', '100% Remote'],
    form: {
      title: 'Send a message',
      name: 'Full name',
      namePh: 'Your name',
      email: 'Email address',
      emailPh: 'your@email.com',
      subject: 'Subject',
      subjectPh: 'Collaboration opportunity...',
      message: 'Message',
      messagePh: 'Describe your project or opportunity...',
      send: 'Send message',
      sending: 'Sending...',
    },
    footer: 'All rights reserved',
  },
};

const infoCards = (txt: typeof t.fr) => [
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'emmanuel-nse-mbia-heumbia-data',
    href: 'https://www.linkedin.com/in/emmanuel-nse-mbia-heumbia-data',
    gradient: 'from-violet-600 to-fuchsia-600',
    border: 'hover:border-violet-500/60',
    isComponent: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: txt.email,
    href: `mailto:${txt.email}`,
    gradient: 'from-orange-500 to-pink-600',
    border: 'hover:border-orange-500/60',
    isComponent: false,
  },
  {
    icon: MapPin,
    label: txt.availability,
    value: txt.location,
    href: null,
    gradient: 'from-cyan-500 to-blue-600',
    border: 'hover:border-cyan-500/60',
    isComponent: false,
  },
];

export default function Contact() {
  const { lang } = useLang();
  const txt = t[lang];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formsubmit.co/ajax/Karasmbis@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          _captcha: 'false',
        }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 5000);
  };

  const cards = infoCards(txt);

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent"
        >
          {txt.title}
        </motion.h2>
        <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto mb-4 rounded-full" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-center text-lg mb-12"
        >
          {txt.sub}
        </motion.p>

        {/* Info cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto"
        >
          {cards.map((card) => {
            const content = (
              <div className={`bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center transition-all duration-300 ${card.border} ${card.href ? 'hover:-translate-y-1 cursor-pointer' : ''}`}>
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mx-auto mb-3`}>
                  {card.isComponent
                    ? <card.icon size={20} />
                    : <card.icon size={20} className="text-white" />}
                </div>
                <p className="text-white font-semibold text-sm mb-1">{card.label}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{card.value}</p>
              </div>
            );
            return card.href ? (
              <a key={card.label} href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                {content}
              </a>
            ) : (
              <div key={card.label}>{content}</div>
            );
          })}
        </motion.div>

        {/* Availability badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/40 border border-emerald-700/50 text-emerald-400 text-sm font-medium">
            <Users size={15} /> {txt.modes[0]}
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-900/40 border border-cyan-700/50 text-cyan-400 text-sm font-medium">
            <Wifi size={15} /> {txt.modes[1]}
          </div>
        </motion.div>

        {/* Contact form - full width */}
        <div>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-8"
          >
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
              <Send size={18} className="text-fuchsia-400" />
              {txt.form.title}
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-slate-400 text-sm mb-1.5">{txt.form.name}</label>
                <input
                  type="text"
                  required
                  placeholder={txt.form.namePh}
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-1.5">{txt.form.email}</label>
                <input
                  type="email"
                  required
                  placeholder={txt.form.emailPh}
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-slate-400 text-sm mb-1.5">{txt.form.subject}</label>
              <input
                type="text"
                required
                placeholder={txt.form.subjectPh}
                value={form.subject}
                onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500 transition-colors"
              />
            </div>

            <div className="mb-6">
              <label className="block text-slate-400 text-sm mb-1.5">{txt.form.message}</label>
              <textarea
                required
                rows={5}
                placeholder={txt.form.messagePh}
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500 transition-colors resize-none"
              />
            </div>

            {status === 'success' && (
              <div className="mb-4 px-4 py-3 rounded-xl bg-emerald-900/40 border border-emerald-700/50 text-emerald-400 text-sm text-center">
                {lang === 'fr' ? '✅ Message envoyé avec succès !' : '✅ Message sent successfully!'}
              </div>
            )}
            {status === 'error' && (
              <div className="mb-4 px-4 py-3 rounded-xl bg-red-900/40 border border-red-700/50 text-red-400 text-sm text-center">
                {lang === 'fr' ? '❌ Erreur lors de l\'envoi. Réessayez.' : '❌ Send error. Please try again.'}
              </div>
            )}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
            >
              <Send size={16} />
              {status === 'sending' ? txt.form.sending : txt.form.send}
            </button>
          </motion.form>
        </div>

        {/* Footer */}
        <div className="mt-10 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Emmanuel NSE MBIA HEUMBIA - {txt.footer}
          </p>
          <p className="text-slate-600 text-xs mt-1">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
}
