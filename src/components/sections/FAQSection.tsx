import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles, MessageSquare } from 'lucide-react';
import { ShinyBordersButton } from '../ui/ShinyBordersButton';

interface FAQItemData {
  qKey: string;
  aKey: string;
}

const FAQ_ITEMS: FAQItemData[] = [
  { qKey: 'faq.q1', aKey: 'faq.a1' },
  { qKey: 'faq.q2', aKey: 'faq.a2' },
  { qKey: 'faq.q3', aKey: 'faq.a3' },
  { qKey: 'faq.q4', aKey: 'faq.a4' },
  { qKey: 'faq.q5', aKey: 'faq.a5' },
];

export const FAQSection: React.FC = () => {
  const { t } = useTranslation();
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
    <section id="faq" className="relative py-12 md:py-16 bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <span>{t('faq.tagline')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('faq.title')}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* Accordion List Container */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
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
                    <span>{t(item.qKey)}</span>
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
                      <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-4">
                        {t(item.aKey)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Additional Question WhatsApp Conversion Callout */}
        <div className="mt-10 p-8 rounded-3xl bg-slate-100 dark:bg-[#0B1220] border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">{t('faq.moreQuestionsTitle')}</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {t('faq.moreQuestionsSub')}
            </p>
          </div>

          <ShinyBordersButton
            variant="whatsapp"
            size="md"
            onClick={handleAskQuestion}
            className="observe-wa-btn"
            icon={<MessageSquare className="w-4.5 h-4.5 text-white" />}
          >
            <span>{t('faq.askBtn')}</span>
          </ShinyBordersButton>
        </div>
      </div>
    </section>
  );
};
