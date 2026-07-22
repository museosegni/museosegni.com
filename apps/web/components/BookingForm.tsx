'use client';

import { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    people: '1',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Grazie per la tua prenotazione! Ti contatteremo presto.');
    setFormData({ name: '', email: '', date: '', people: '1', message: '' });
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
      <button
        type="submit"
        className="w-full bg-museum-accent text-museum-dark font-body font-semibold py-2.5 rounded-md hover:bg-museum-accent-light transition-colors text-sm"
      >
        Invia richiesta di prenotazione
      </button>
    </form>
  );
}
