import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Phone, Menu, X, Globe, MessageSquare } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { BrandLogo } from '../common/BrandLogo';
import { ShinyBordersButton } from '../ui/ShinyBordersButton';

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: t('nav.home'), hideAtTop: true },
    { id: 'advantages', label: t('nav.advantages'), hideAtTop: false },
    { id: 'fleet', label: t('nav.fleet'), hideAtTop: false },
    { id: 'calculator', label: t('nav.calculator'), hideAtTop: true },
    { id: 'location', label: t('nav.location'), hideAtTop: false },
    { id: 'contact', label: t('nav.contact'), hideAtTop: false },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate(`/#${targetId}`);
      setTimeout(() => {
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <nav className="w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" onClick={(e) => handleNavClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, 'home')} className="flex items-center">
            <BrandLogo />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const shouldHide = link.hideAtTop && isAtTop && location.pathname === '/';
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 ${
                    shouldHide ? 'hidden' : 'block'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Toggles & CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/80 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700 transition-all cursor-pointer"
              title="Toggle DE / EN"
            >
              <Globe className="w-3.5 h-3.5 text-blue-500" />
              <span className="uppercase">{language}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700 transition-all cursor-pointer"
              title="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Direct Call Button */}
            <a href="tel:015210236967">
              <ShinyBordersButton variant="outline" size="sm" icon={<Phone className="w-3.5 h-3.5 text-blue-500" />}>
                0152 10236967
              </ShinyBordersButton>
            </a>

            {/* WhatsApp Booking Button */}
            <a href="https://wa.me/4915210236967?text=Hallo%20Obazee%20Clement,%20ich%20moechte%20eine%20Fahrt%20anfragen." target="_blank" rel="noopener noreferrer">
              <ShinyBordersButton variant="whatsapp" size="sm" icon={<MessageSquare className="w-3.5 h-3.5 text-white" />}>
                WhatsApp
              </ShinyBordersButton>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-xs font-bold text-slate-700 dark:text-slate-200"
            >
              {language.toUpperCase()}
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 dark:text-slate-200 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl px-4 pt-2 pb-6 space-y-3"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
              <a href="tel:015210236967" className="w-full">
                <ShinyBordersButton variant="primary" fullWidth icon={<Phone className="w-4 h-4" />}>
                  {t('nav.callNow')} (015210236967)
                </ShinyBordersButton>
              </a>
              <a
                href="https://wa.me/4915210236967?text=Hallo%20Obazee%20Clement,%20ich%20moechte%20eine%20Fahrt%20anfragen."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <ShinyBordersButton variant="whatsapp" fullWidth icon={<MessageSquare className="w-4 h-4" />}>
                  {t('nav.whatsappRide')}
                </ShinyBordersButton>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
