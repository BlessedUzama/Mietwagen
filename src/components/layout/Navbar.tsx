import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useLocation } from 'react-router-dom';
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
      const isTop = window.scrollY < 50;
      setIsAtTop((prevState) => {
        if (prevState !== isTop) return isTop;
        return prevState;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: 'home', label: t('nav.home'), hideAtTop: true },
    { id: 'advantages', label: t('nav.advantages'), hideAtTop: false },
    { id: 'fleet', label: t('nav.fleet'), hideAtTop: false },
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
    <nav className="w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl transform-gpu border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300 relative">
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
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Permanent DOM Mobile Backdrop Overlay with CSS opacity transition */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Permanent DOM Mobile Sliding Drawer Menu with CSS transform transition */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-[#0B1E3D] text-white shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-700/80">
            <span className="font-bold text-sm text-indigo-300 uppercase tracking-wider">Menü</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="px-3 py-2 rounded-xl text-base font-semibold text-slate-200 hover:text-white hover:bg-indigo-600/30 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-slate-700/80 space-y-3">
          <a href="tel:015210236967" className="w-full block">
            <ShinyBordersButton variant="outline" fullWidth icon={<Phone className="w-4 h-4 text-indigo-400" />}>
              0152 10236967
            </ShinyBordersButton>
          </a>
          <a
            href="https://wa.me/4915210236967?text=Hallo%20Obazee%20Clement,%20ich%20moechte%20eine%20Fahrt%20anfragen."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block"
          >
            <ShinyBordersButton variant="whatsapp" fullWidth icon={<MessageSquare className="w-4 h-4 text-white" />}>
              {t('nav.whatsappRide')}
            </ShinyBordersButton>
          </a>
        </div>
      </div>
    </nav>
  );
};
