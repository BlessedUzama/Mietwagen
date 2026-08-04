import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Navigation, Calendar, Shield, ArrowRight, MessageSquare, Users, Briefcase } from 'lucide-react';
import { ShineBorder } from '../ui/ShineBorder';
import { ShinyBordersButton } from '../ui/ShinyBordersButton';
import { POPULAR_ROUTES, VEHICLE_TIERS, calculateFare } from '../../utils/fareCalculator';
import type { VehicleTier } from '../../utils/fareCalculator';
import { useLanguage } from '../../context/LanguageContext';

export const RideEstimator: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const [pickup, setPickup] = useState<string>('');
  const [selectedRouteId, setSelectedRouteId] = useState<string | null>('airport');
  const [selectedTier, setSelectedTier] = useState<'comfort' | 'executive' | 'van'>('comfort');
  const [pickupDate, setPickupDate] = useState<string>(() => {
    const now = new Date();
    now.setHours(now.getHours() + 1);
    return now.toISOString().slice(0, 16);
  });

  const fareResult = calculateFare(selectedRouteId, selectedTier);

  const activeRoute = POPULAR_ROUTES.find((r) => r.id === selectedRouteId);

  const handleSelectRoute = (routeId: string) => {
    setSelectedRouteId(routeId);
    const route = POPULAR_ROUTES.find((r) => r.id === routeId);
    if (route) {
      setPickup(language === 'de' ? route.nameDe : route.nameEn);
    }
  };

  const currentTierObj: VehicleTier =
    VEHICLE_TIERS.find((t) => t.id === selectedTier) || VEHICLE_TIERS[0];

  const handleWhatsAppBooking = () => {
    const destinationName = activeRoute
      ? language === 'de'
        ? activeRoute.nameDe
        : activeRoute.nameEn
      : 'Frankfurt am Main';

    const pickupText = pickup || (language === 'de' ? 'Frankfurt Zentrum' : 'Frankfurt Downtown');
    const tierName = t(currentTierObj.nameKey);

    const textPayload = `Hallo Obazee Clement! Ich möchte eine Fahrt buchen:
📍 Abholung: ${pickupText}
🏁 Ziel: ${destinationName}
📅 Datum/Zeit: ${pickupDate}
🚘 Fahrzeug: ${tierName}
💰 Festpreis: ca. €${fareResult.fare}

Bitte bestätigen Sie meine Anfrage. Danke!`;

    const whatsappUrl = `https://wa.me/4915210236967?text=${encodeURIComponent(textPayload)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <ShineBorder
      color={['#2563EB', '#10B981', '#6366F1']}
      borderRadius={24}
      className="w-full shadow-2xl"
    >
      <div className="p-6 sm:p-8 bg-slate-900/95 dark:bg-slate-950/95 text-white rounded-[23px] space-y-6">
        {/* Header Title & Live Badge */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
              <Navigation className="w-5 h-5 text-blue-500" />
              <span>{t('hero.bookingCardTitle')}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">{t('hero.bookingCardSub')}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Live Fare
          </span>
        </div>

        {/* Quick Destination Chips */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Beliebte Schnellziele (Frankfurt)
          </label>
          <div className="flex flex-wrap gap-2">
            {POPULAR_ROUTES.map((route) => {
              const isSelected = selectedRouteId === route.id;
              return (
                <button
                  key={route.id}
                  onClick={() => handleSelectRoute(route.id)}
                  type="button"
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-glow-blue border border-blue-400/50'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700/60'
                  }`}
                >
                  {t(route.labelKey)}
                </button>
              );
            })}
          </div>
        </div>

        {/* Input Fields Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Pickup Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>{t('hero.pickupLabel')}</span>
            </label>
            <input
              type="text"
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
                setSelectedRouteId(null);
              }}
              placeholder={t('hero.pickupPlaceholder')}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Pickup Date & Time */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>{t('hero.dateLabel')}</span>
            </label>
            <input
              type="datetime-local"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Vehicle Tier Switcher Tabs */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
            {t('hero.vehicleLabel')}
          </label>
          <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-slate-800/70 border border-slate-700/60">
            {VEHICLE_TIERS.map((tier) => {
              const active = selectedTier === tier.id;
              return (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setSelectedTier(tier.id)}
                  className={`flex flex-col items-center justify-center p-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-blue-600 text-white shadow-md border border-blue-400/40'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <span className="text-xs font-bold">{t(tier.nameKey)}</span>
                  <div className="flex items-center gap-2 mt-1 text-[11px] opacity-90">
                    <span className="flex items-center gap-0.5">
                      <Users className="w-3 h-3" /> {tier.seats}
                    </span>
                    <span className="flex items-center gap-0.5">
                      <Briefcase className="w-3 h-3" /> {tier.luggage}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Price Output & Conversion Box */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-emerald-950/60 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <span className="text-xs text-slate-400 font-medium block">
              {t('hero.estimatedFare')}
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-white">€{fareResult.fare}</span>
              <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                <Shield className="w-3 h-3" /> Festpreis
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Ca. {fareResult.km} km • {fareResult.mins} Min Fahrzeit
            </p>
          </div>

          <ShinyBordersButton
            variant="whatsapp"
            size="lg"
            onClick={handleWhatsAppBooking}
            icon={<MessageSquare className="w-5 h-5 text-white" />}
          >
            <span>{t('hero.ctaWhatsApp')}</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </ShinyBordersButton>
        </div>
      </div>
    </ShineBorder>
  );
};
