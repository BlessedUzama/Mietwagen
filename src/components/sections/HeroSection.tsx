import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Phone, MessageSquare, Clock, MapPin, Sparkles } from 'lucide-react';
import { GridGlowBackground } from '../ui/GridGlowBackground';
import { AnimatedGradientText } from '../ui/AnimatedGradientText';
import { ShinyBordersButton } from '../ui/ShinyBordersButton';

interface HeroSectionProps {
  children?: React.ReactNode;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ children }) => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-[75dvh] sm:min-h-[80dvh] flex items-center justify-center overflow-hidden pt-8 md:pt-12 pb-16 md:pb-20">
      {/* 21st.dev Grid Glow Background Aura */}
      <GridGlowBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left contain-paint"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 dark:bg-indigo-400/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 animate-pulse" />
              <span>{t('hero.badge')}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              <span>{t('hero.titleHeadline')}</span>{' '}
              <br className="hidden sm:inline" />
              <AnimatedGradientText>{t('hero.titleSubline')}</AnimatedGradientText>
            </h1>

            {/* Subtitle Copy */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-2xl">
              {t('hero.subtitle')}
            </p>

            {/* Micro Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Festpreise ohne Aufschlag</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <Zap className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Direkter WhatsApp Kontakt</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>24/7 Flughafen Frankfurt</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* WhatsApp Mandatory Emerald CTA */}
              <a
                href="https://wa.me/4915210236967?text=Hallo%20Obazee%20Clement,%20ich%20moechte%20eine%20Fahrt%20in%20Frankfurt%20anfragen."
                target="_blank"
                rel="noopener noreferrer"
                className="observe-wa-btn"
              >
                <ShinyBordersButton variant="whatsapp" size="lg" icon={<MessageSquare className="w-5 h-5 text-white" />}>
                  {t('hero.ctaWhatsApp')}
                </ShinyBordersButton>
              </a>

              {/* Direct Call Button */}
              <a href="tel:015210236967">
                <ShinyBordersButton variant="outline" size="lg" icon={<Phone className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />}>
                  0152 10236967
                </ShinyBordersButton>
              </a>
            </div>

            {/* Service Locations Strip */}
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-3">
              <MapPin className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
              <span>Beliebte Ziele: Flughafen FRA • Messe Frankfurt • Hauptbahnhof • Hoteltransfer</span>
            </div>
          </motion.div>

          {/* Right Column: Slot for Ride Estimator Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 w-full"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
