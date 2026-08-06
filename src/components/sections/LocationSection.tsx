import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Clock, Navigation, ShieldCheck, Compass } from 'lucide-react';
import { ShinyBordersButton } from '../ui/ShinyBordersButton';

export const LocationSection: React.FC = () => {
  const { t } = useTranslation();

  const handleDirectionsClick = () => {
    const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=R%C3%B6tgenstr.+7-9,+60388+Frankfurt+am+Main';
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="location" className="relative py-20 md:py-28 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-blue-500" />
            <span>{t('location.tagline')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('location.title')}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
            {t('location.serviceAreaText')}
          </p>
        </div>

        {/* Location & Coverage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Headquarters */}
          <div className="p-8 rounded-3xl bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between text-left space-y-6">
            <div className="space-y-4">
              <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 w-fit">
                <MapPin className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {t('location.addressTitle')}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {t('location.addressText')}
              </p>
            </div>

            <ShinyBordersButton
              variant="outline"
              size="sm"
              onClick={handleDirectionsClick}
              icon={<Navigation className="w-4 h-4 text-blue-500" />}
            >
              Google Maps Route
            </ShinyBordersButton>
          </div>

          {/* Card 2: Primary Operational Coverage */}
          <div className="p-8 rounded-3xl bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between text-left space-y-6">
            <div className="space-y-4">
              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 w-fit">
                <ShieldCheck className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {t('location.serviceAreaTitle')}
              </h3>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Flughafen Frankfurt (FRA Terminals 1 & 2)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Messe Frankfurt & Hauptbahnhof</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Offenbach, Hanau, Bad Homburg</span>
                </li>
              </ul>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800 text-xs font-semibold text-slate-500 dark:text-slate-400">
              Rhein-Main-Gebiet Abdeckung
            </div>
          </div>

          {/* Card 3: 24/7 Service Hours & Phone Hotline */}
          <div className="p-8 rounded-3xl bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between text-left space-y-6">
            <div className="space-y-4">
              <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 w-fit">
                <Clock className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {t('location.hoursTitle')}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {t('location.hoursText')}
              </p>
              <div className="pt-1 space-y-1 text-xs font-bold text-slate-700 dark:text-slate-200">
                <p>{t('location.phone1')}: 0152 10236967</p>
                <p>{t('location.phone2')}: 0157 51633765</p>
              </div>
            </div>

            <a href="tel:015210236967" className="w-full">
              <ShinyBordersButton
                variant="primary"
                fullWidth
                icon={<Phone className="w-4 h-4" />}
              >
                Jetzt Anrufen
              </ShinyBordersButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
