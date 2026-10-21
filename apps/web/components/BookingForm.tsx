'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function BookingForm({ email }: { email: string }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    people: '1',
    message: '',
  });

  // Nessun backend di prenotazione: la richiesta parte come email precompilata
  // dal client di posta del visitatore verso l'indirizzo del museo.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `Nome e cognome: ${formData.name}`,
      `Email: ${formData.email}`,
      `Data della visita: ${formData.date}`,
      `Numero persone: ${formData.people}`,
      formData.message && `Note: ${formData.message}`,
    ]
      .filter(Boolean)
      .join('\n');
    const subject = `Richiesta di prenotazione visita - ${formData.name}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="museum-panel p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-white/80 text-sm font-body mb-1.5">Nome e cognome</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="museum-field px-3 h-[42px] text-base"
            placeholder="Mario Rossi"
          />
        </div>
        <div>
          <label className="block text-white/80 text-sm font-body mb-1.5">Email</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="museum-field px-3 h-[42px] text-base"
            placeholder="mario@esempio.it"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-white/80 text-sm font-body mb-1.5">Data della visita</label>
          <input
            type="date"
            required
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="museum-field px-3 h-[42px] text-base"
          />
        </div>
        <div>
          <label className="block text-white/80 text-sm font-body mb-1.5">Numero persone</label>
          <select
            value={formData.people}
            onChange={(e) => setFormData({ ...formData, people: e.target.value })}
            className="museum-field px-3 h-[42px] text-base"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
              <option key={n} value={n} className="bg-museum-dark">{n} {n === 1 ? 'persona' : 'persone'}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-white/80 text-sm font-body mb-1.5">Note aggiuntive</label>
        <textarea
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="museum-field px-3 py-2 text-sm resize-none"
          placeholder="Richieste particolari, accessibilità, lingua guida..."
        />
      </div>
      <label className="flex items-start gap-2 text-white/70 text-xs font-body">
        <input type="checkbox" required className="mt-0.5 accent-museum-accent" />
        <span>
          Ho letto l&apos;
          <Link href="/privacy" className="text-museum-accent hover:underline">
            informativa privacy
          </Link>{' '}
          e acconsento al trattamento dei miei dati per comunicare e confermare la prenotazione della visita.
        </span>
      </label>
      <button
        type="submit"
        className="w-full bg-museum-accent text-museum-dark font-body font-semibold py-2.5 rounded-md hover:bg-museum-accent-light transition-colors text-sm"
      >
        Invia richiesta di prenotazione
      </button>
      <p className="text-white/50 text-xs font-body">
        Si aprirà il tuo programma di posta con la richiesta già compilata per {email}.
      </p>
    </form>
  );
}
