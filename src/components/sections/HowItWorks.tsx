import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calculator, MessageSquare, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface StepData {
  number: string;
  titleKey: string;
  descKey: string;
  icon: React.ReactNode;
  highlightKey: string;
}

const STEPS_DATA: StepData[] = [
  {
    number: '01',
    titleKey: 'howItWorks.step1.title',
    descKey: 'howItWorks.step1.desc',
    icon: <Calculator className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
    highlightKey: 'howItWorks.step1.highlight',
  },
  {
    number: '02',
    titleKey: 'howItWorks.step2.title',
    descKey: 'howItWorks.step2.desc',
    icon: <MessageSquare className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />,
    highlightKey: 'howItWorks.step2.highlight',
  },
  {
    number: '03',
    titleKey: 'howItWorks.step3.title',
    descKey: 'howItWorks.step3.desc',
    icon: <ShieldCheck className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
    highlightKey: 'howItWorks.step3.highlight',
  },
];

export const HowItWorks: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="how-it-works" className="relative py-20 md:py-32 bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <span>{t('howItWorks.tagline')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('howItWorks.title')}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        {/* Responsive 3-Step Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {STEPS_DATA.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="relative p-8 rounded-3xl bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl flex flex-col justify-between transition-all duration-300 group"
            >
              <div className="space-y-6">
                {/* Step Number & Icon Header */}
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black text-blue-600/20 dark:text-blue-500/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {step.number}
                  </span>
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                    {step.icon}
                  </div>
                </div>

                {/* Title & Description */}
                <div className="text-left space-y-2">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {t(step.descKey)}
                  </p>
                </div>
              </div>

              {/* Bottom Feature Tag */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span className="text-blue-600 dark:text-blue-400 font-bold">{t(step.highlightKey)}</span>
                {index < STEPS_DATA.length - 1 && (
                  <ArrowRight className="w-4 h-4 hidden md:block text-slate-400 dark:text-slate-600 group-hover:translate-x-1 transition-transform" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
