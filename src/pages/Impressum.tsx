import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, MapPin, Phone, Mail, FileText } from 'lucide-react';

export const Impressum: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="py-20 md:py-28 bg-slate-50 dark:bg-[#020617] text-slate-700 dark:text-slate-300 transition-colors duration-300 min-h-[70vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
        {/* Header */}
        <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5 text-blue-500" />
            <span>RECHTLICHE ANGABEN (§ 5 DDG)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('impressum.title')}
          </h1>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
            {t('impressum.subtitle')}
          </p>
        </div>

        {/* Content Cards */}
        <div className="space-y-8">
          {/* Provider Card */}
          <div className="p-8 rounded-3xl bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-500" />
              <span>{t('impressum.providerTitle')}</span>
            </h2>
            <p className="text-base font-semibold text-slate-800 dark:text-slate-200">
              {t('impressum.providerName')}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Inhaber: Obazee Clement
            </p>
          </div>

          {/* Address & Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>{t('impressum.addressTitle')}</span>
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('impressum.address')}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-500" />
                <span>{t('impressum.contactTitle')}</span>
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('impressum.phone')}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-500" />
                <span>{t('impressum.email')}</span>
              </p>
            </div>
          </div>

          {/* Regulatory License Info */}
          <div className="p-8 rounded-3xl bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {t('impressum.licenseTitle')}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('impressum.licenseText')}
            </p>
          </div>

          {/* Disclaimer */}
          <div className="p-8 rounded-3xl bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {t('impressum.disclaimerTitle')}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('impressum.disclaimerText')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
