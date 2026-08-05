import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, MessageSquare, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-[#020617] text-slate-400 border-t border-slate-800/80 pt-16 pb-12 transition-colors duration-300 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Multi-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Trust Tagline */}
          <div className="space-y-4 text-left">
            <BrandLogo showText={true} />
            <p className="text-sm text-slate-400 leading-relaxed pt-2">
              Ihr persönlicher Mietwagen-Fahrdienst in Frankfurt am Main. Erstklassiger Fahrkomfort, pünktlicher Flughafentransfer und garantierte Festpreise ohne versteckte Gebühren.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Geprüfter Mietwagen-Konzessionsinhaber</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors duration-200 flex items-center gap-1 group">
                  <span>{t('nav.home')}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-blue-400 transition-colors duration-200 flex items-center gap-1 group">
                  <span>{t('nav.fleet')}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-blue-400 transition-colors duration-200 flex items-center gap-1 group">
                  <span>So funktioniert's</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-400 transition-colors duration-200 flex items-center gap-1 group">
                  <span>Häufige Fragen (FAQ)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Direct WhatsApp */}
          <div className="space-y-4 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">
              Kontakt & Buchung
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:015210236967" className="hover:text-blue-400 transition-colors duration-200 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>0152 10236967</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/4915210236967?text=Hallo%20Obazee%20Clement,%20ich%20moechte%20eine%20Fahrt%20anfragen."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>WhatsApp Chat Starten</span>
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>Rötgenstr. 7-9, 60388 Frankfurt am Main</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Service Coverage Area */}
          <div className="space-y-4 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">
              Einsatzgebiet
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Flughafen Frankfurt (FRA Terminals 1 & 2), Messe Frankfurt, Hauptbahnhof, Offenbach, Hanau, Bad Homburg & gesamtes Rhein-Main-Gebiet.
            </p>
            <div className="pt-2 text-xs font-semibold text-slate-300">
              <span>Erreichbarkeit: 24/7 nach Vereinbarung</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Obazee Clement Mietwagen. {t('footer.rights')}</p>
          <div className="flex items-center gap-6">
            <a href="#imprint" className="hover:text-slate-200 transition-colors">{t('footer.imprint')}</a>
            <a href="#privacy" className="hover:text-slate-200 transition-colors">{t('footer.privacy')}</a>
            <a href="#terms" className="hover:text-slate-200 transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
