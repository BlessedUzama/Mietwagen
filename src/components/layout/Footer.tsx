import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageSquare, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="w-full bg-slate-100 dark:bg-[#020617] text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80 pt-16 pb-12 transition-colors duration-300 relative z-10">
      {/* Location Scroll Target Anchor */}
      <div id="location" className="absolute -top-20 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Multi-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800/80">
          {/* Column 1: Brand & Trust Tagline */}
          <div className="space-y-4 text-left">
            <Link to="/">
              <BrandLogo showText={true} />
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-2">
              {t('footer.tagline')}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t('footer.verifiedBadge')}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              {t('footer.navTitle')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center gap-1 group">
                  <span>{t('nav.home')}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <a href="/#fleet" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center gap-1 group">
                  <span>{t('nav.fleet')}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="/#how-it-works" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center gap-1 group">
                  <span>{t('footer.howItWorks')}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center gap-1 group">
                  <span>{t('footer.faq')}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Direct WhatsApp */}
          <div className="space-y-4 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              {t('footer.contactTitle')}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:015210236967" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>0152 10236967</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/4915210236967?text=Hallo%20Obazee%20Clement,%20ich%20moechte%20eine%20Fahrt%20anfragen."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{t('footer.whatsappChat')}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1 text-xs text-slate-600 dark:text-slate-400">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>{t('footer.address')}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Service Coverage Area */}
          <div className="space-y-4 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              {t('footer.areaTitle')}
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('footer.areaText')}
            </p>
            <div className="pt-2 text-xs font-semibold text-slate-800 dark:text-slate-300">
              <span>{t('footer.availability')}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© 2026 Obazee Clement Mietwagen. {t('footer.rights')}</p>
          <div className="flex items-center gap-6">
            <Link to="/impressum" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">{t('footer.imprint')}</Link>
            <Link to="/datenschutz" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">{t('footer.privacy')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
