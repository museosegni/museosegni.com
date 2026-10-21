import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy e Cookie — Museo Archeologico Comunale di Segni',
};

const sections = [
  {
    title: 'Titolare del trattamento',
    body: [
      'Il Titolare del trattamento dei dati personali è il Comune di Segni, che gestisce il Museo Archeologico Comunale di Segni (Via Lauri, 1 – 00037 Segni RM). Per domande o richieste riguardanti il trattamento dei dati personali è possibile scrivere a comune.segni@pec.it.',
    ],
  },
  {
    title: 'Responsabile della Protezione dei Dati (DPO)',
    body: [
      'Il Comune di Segni ha nominato un Responsabile della Protezione dei Dati, contattabile all’indirizzo dpo@comune.segni.rm.it per qualunque questione relativa alla protezione dei dati personali.',
    ],
  },
  {
    title: 'Dati raccolti',
    body: [
      'Dati forniti dall’utente: nome e cognome, indirizzo email, data della visita, numero di persone ed eventuali note, inviati con il modulo di prenotazione (che prepara un’email dal programma di posta dell’utente) oppure scrivendo direttamente agli indirizzi email del Museo.',
      'Dati di navigazione: come per ogni sito web, i server che ospitano il sito registrano dati tecnici (ad esempio indirizzo IP, tipo di browser, pagine richieste), utilizzati solo per garantirne il funzionamento e la sicurezza.',
    ],
  },
  {
    title: 'Finalità e base giuridica',
    body: [
      'I dati forniti dall’utente sono trattati esclusivamente per rispondere alle richieste di informazioni e per gestire, comunicare e confermare la prenotazione delle visite. Il trattamento si basa sul consenso espresso con l’apposita casella del modulo e sulla necessità di dare seguito alla richiesta dell’utente (art. 6, par. 1, lett. a) e b) del Regolamento UE 2016/679).',
      'I dati non sono utilizzati per newsletter, attività promozionali o profilazione.',
    ],
  },
  {
    title: 'Conservazione',
    body: [
      'I dati sono conservati per il tempo necessario a gestire la richiesta e la visita, e successivamente solo se previsto da obblighi di legge.',
    ],
  },
  {
    title: 'Destinatari',
    body: [
      'I dati sono trattati dal personale del Museo e del Comune di Segni incaricato. Possono essere trattati anche dai fornitori dei servizi tecnici necessari (hosting del sito, servizio di posta elettronica), in qualità di responsabili del trattamento. I dati non sono diffusi.',
    ],
  },
  {
    title: 'Diritti dell’interessato',
    body: [
      'L’utente può chiedere in ogni momento l’accesso ai propri dati, la rettifica, la cancellazione, la limitazione del trattamento o opporsi al trattamento, e revocare il consenso, ai sensi degli articoli 15-22 del Regolamento UE 2016/679, scrivendo a comune.segni@pec.it o al DPO. È inoltre possibile proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <h1 className="font-heading text-3xl sm:text-4xl text-white mb-2">
        Privacy e <span className="text-museum-accent">Cookie</span>
      </h1>
      <p className="text-white/60 font-body text-sm mb-10">Informativa sul trattamento dei dati personali · aggiornata al 21 ottobre 2026</p>

      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="font-heading text-xl text-white mb-3">{section.title}</h2>
            {section.body.map((paragraph, idx) => (
              <p key={idx} className="text-white/80 font-body text-sm leading-relaxed mb-3">
                {paragraph}
              </p>
            ))}
          </div>
        ))}

        <div id="cookie" className="museum-panel p-6 scroll-mt-24">
          <h2 className="font-heading text-xl text-white mb-3">Cookie</h2>
          <p className="text-white/80 font-body text-sm leading-relaxed">
            Questo sito non utilizza cookie di profilazione, di marketing o di statistica, né strumenti di
            tracciamento di terze parti: per questo non viene mostrato alcun banner di consenso. Anche i caratteri
            tipografici sono serviti direttamente dal sito, senza richieste a servizi esterni.
          </p>
        </div>
      </div>
    </section>
  );
}
