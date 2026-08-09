import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Users, Briefcase, CheckCircle2, MessageSquare, Zap, Car, Users2, ArrowRight } from 'lucide-react';
import { ShinyBordersButton } from '../ui/ShinyBordersButton';

interface VehicleCardData {
  id: 'electric' | 'suv' | 'van7';
  titleKey: string;
  subtitleKey: string;
  badgeKey: string;
  icon: React.ReactNode;
  seats: number;
  luggage: number;
  featuresKey: string;
}

const FLEET_CARDS: VehicleCardData[] = [
  {
    id: 'electric',
    titleKey: 'fleetShowcase.electric.title',
    subtitleKey: 'fleetShowcase.electric.subtitle',
    badgeKey: 'fleetShowcase.electric.badge',
    icon: <Zap className="w-5 h-5 text-blue-500 dark:text-blue-400" />,
    seats: 4,
    luggage: 2,
    featuresKey: 'fleetShowcase.electric.features',
  },
  {
    id: 'suv',
    titleKey: 'fleetShowcase.suv.title',
    subtitleKey: 'fleetShowcase.suv.subtitle',
    badgeKey: 'fleetShowcase.suv.badge',
    icon: <Car className="w-5 h-5 text-blue-500 dark:text-blue-400" />,
    seats: 6,
    luggage: 4,
    featuresKey: 'fleetShowcase.suv.features',
  },
  {
    id: 'van7',
    titleKey: 'fleetShowcase.van7.title',
    subtitleKey: 'fleetShowcase.van7.subtitle',
    badgeKey: 'fleetShowcase.van7.badge',
    icon: <Users2 className="w-5 h-5 text-blue-500 dark:text-blue-400" />,
    seats: 8,
    luggage: 6,
    featuresKey: 'fleetShowcase.van7.features',
  },
];

export const FleetShowcase: React.FC = () => {
  const { t } = useTranslation();

  const handleBookVehicle = (vName: string) => {
    const textPayload = `Hallo Obazee Clement! Ich möchte eine Fahrt in der Klasse "${vName}" anfragen.`;
    const whatsappUrl = `https://wa.me/4915210236967?text=${encodeURIComponent(textPayload)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="fleet" className="relative py-12 md:py-16 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-blue-500" />
            <span>{t('fleetShowcase.tagline')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('fleetShowcase.title')}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
            {t('fleetShowcase.subtitle')}
          </p>
        </div>

        {/* 3-Column Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {FLEET_CARDS.map((card) => (
            <motion.div
              key={card.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl flex flex-col justify-between transition-all duration-300"
            >
              <div className="space-y-6">
                {/* Header Badge & Capacity Pill */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold">
                    {card.icon}
                    <span>{t(card.badgeKey)}</span>
                  </span>
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    {t('fleetShowcase.upToSeats', { seats: card.seats })}
                  </span>
                </div>

                {/* Card Title & Subtitle */}
                <div className="text-left space-y-2">
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {t(card.titleKey)}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed min-h-[44px]">
                    {t(card.subtitleKey)}
                  </p>
                </div>

                {/* Capacity Badges */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200/60 dark:border-slate-800 flex items-center gap-3">
                    <Users className="w-4 h-4 text-blue-500 shrink-0" />
                    <div className="text-left">
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block uppercase font-bold">{t('fleetShowcase.capacity')}</span>
                      <span className="text-xs font-bold text-slate-900 dark:text-white">{t('fleetShowcase.upToSeats', { seats: card.seats })}</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200/60 dark:border-slate-800 flex items-center gap-3">
                    <Briefcase className="w-4 h-4 text-blue-500 shrink-0" />
                    <div className="text-left">
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block uppercase font-bold">{t('fleetShowcase.luggage')}</span>
                      <span className="text-xs font-bold text-slate-900 dark:text-white">{t('fleetShowcase.upToLuggage', { luggage: card.luggage })}</span>
                    </div>
                  </div>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-2.5 pt-2 text-left">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    {t('fleetShowcase.featuresHeader')}
                  </span>
                  <div className="space-y-2">
                    {(t(card.featuresKey, { returnObjects: true }) as string[]).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Isolated Emerald WhatsApp CTA */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                <ShinyBordersButton
                  variant="whatsapp"
                  fullWidth
                  onClick={() => handleBookVehicle(t(card.titleKey))}
                  className="observe-wa-btn w-full flex flex-row items-center justify-center gap-2 whitespace-nowrap"
                  icon={<MessageSquare className="w-4.5 h-4.5 text-white shrink-0" />}
                >
                  <span className="whitespace-nowrap">{t('fleetShowcase.bookBtn', { title: t(card.titleKey) })}</span>
                  <ArrowRight className="w-4 h-4 ml-1 shrink-0" />
                </ShinyBordersButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
