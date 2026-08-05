import React from 'react';
import { useTranslation } from 'react-i18next';
import { Lock, ShieldCheck, Database, MessageSquare } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const Datenschutz: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={`${t('datenschutz.title')} | Obazee Clement Mietwagen`}
        description={t('datenschutz.subtitle')}
      />
      <div className="py-20 md:py-28 bg-slate-50 dark:bg-[#020617] text-slate-700 dark:text-slate-300 transition-colors duration-300 min-h-[70vh]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
          {/* Header */}
          <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Lock className="w-3.5 h-3.5 text-emerald-500" />
              <span>DATENSCHUTZERKLÄRUNG (DSGVO)</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t('datenschutz.title')}
            </h1>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
              {t('datenschutz.subtitle')}
            </p>
          </div>

          {/* Content Cards */}
          <div className="space-y-8">
            {/* Overview Card */}
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <span>{t('datenschutz.overviewTitle')}</span>
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('datenschutz.overviewText')}
              </p>
            </div>

            {/* Responsible Party */}
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Database className="w-5 h-5 text-blue-500" />
                <span>{t('datenschutz.responsibleTitle')}</span>
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Obazee Clement Mietwagen<br />
                Rötgenstr. 7-9, 60388 Frankfurt am Main<br />
                Telefon: 0152 10236967<br />
                E-Mail: info@obazee-mietwagen.de
              </p>
            </div>

            {/* WhatsApp Data Handling */}
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-500" />
                <span>{t('datenschutz.whatsappTitle')}</span>
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('datenschutz.whatsappText')}
              </p>
            </div>

            {/* User Rights */}
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {t('datenschutz.rightsTitle')}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('datenschutz.rightsText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
