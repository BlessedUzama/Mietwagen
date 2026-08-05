import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles, MessageSquare } from 'lucide-react';
import { ShinyBordersButton } from '../ui/ShinyBordersButton';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: 'Wie funktioniert die Abholung am Flughafen Frankfurt (FRA)?',
    answer:
      'Ihr Fahrer Obazee Clement erwartet Sie pünktlich im Ankunftsbereich (Terminal 1 oder 2) mit einem personalisierten Abholschild. Wir verfolgen Ihre Flugnummer live, sodass keine zusätzlichen Kosten bei Flugverspätungen entstehen.',
  },
  {
    question: 'Gibt es versteckte Kosten oder Zusatzgebühren bei Stau?',
    answer:
      'Nein. Alle angegebenen Fahrpreise sind transparente Festpreise. Bei Verkehrsbehinderungen oder Stau im Raum Frankfurt bleibt Ihr Preis zu 100 % garantiert unverändert.',
  },
  {
    question: 'Wie viel Gepäck passt in die Fahrzeuge?',
    answer:
      'Unsere Premium Electric Limousine fasst bis zu 2 große Koffer und Handgepäck. Unser Comfort 7-Sitzer bietet großzügigen Stauraum für bis zu 6 große Koffer und Freizeitgepäck.',
  },
  {
    question: 'Welche Zahlungsmöglichkeiten stehen zur Verfügung?',
    answer:
      'Sie bezahlen flexibel vor Ort beim Fahrer in bar, mit allen gängigen EC- und Kreditkarten (inkl. Apple Pay / Google Pay) oder vorab direkt per Banküberweisung / PayPal.',
  },
  {
    question: 'Wie kann ich meine Buchung ändern oder stornieren?',
    answer:
      'Änderungen oder Stornierungen können Sie bis zu 2 Stunden vor Fahrtantritt ganz unkompliziert und kostenlos direkt via WhatsApp an Obazee Clement senden.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAskQuestion = () => {
    const textPayload = 'Hallo Obazee Clement! Ich habe eine Frage zu Ihren Mietwagen-Services in Frankfurt:';
    const whatsappUrl = `https://wa.me/4915210236967?text=${encodeURIComponent(textPayload)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="faq" className="relative py-20 md:py-32 bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <span>HÄUFIG GESTELLTE FRAGEN</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Fragen & Antworten
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
            Alles, was Sie über unseren persönlichen Mietwagen-Service in Frankfurt am Main wissen müssen.
          </p>
        </div>

        {/* Accordion List Container */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-md transition-all duration-200"
              >
                {/* Question Trigger Button */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-500 dark:text-blue-400 shrink-0" />
                    <span>{item.question}</span>
                  </span>
                  <div
                    className={`p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Additional Question WhatsApp Conversion Callout */}
        <div className="mt-14 p-8 rounded-3xl bg-slate-100 dark:bg-[#0B1220] border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">Noch Fragen offen?</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Schreiben Sie Obazee Clement direkt per WhatsApp – wir antworten in unter 5 Minuten.
            </p>
          </div>

          <ShinyBordersButton
            variant="whatsapp"
            size="md"
            onClick={handleAskQuestion}
            icon={<MessageSquare className="w-4.5 h-4.5 text-white" />}
          >
            <span>Frage via WhatsApp stellen</span>
          </ShinyBordersButton>
        </div>
      </div>
    </section>
  );
};
