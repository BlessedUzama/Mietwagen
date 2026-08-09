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
    <>
      <nav className="w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl transform-gpu border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300 relative z-30">
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
                className="p-2 text-slate-700 dark:text-slate-200 focus:outline-none cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - OUTSIDE nav to break free from transform-gpu containing block */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#0B1E3D] text-white p-6 space-y-6 overflow-y-auto">
          {/* Top Bar with Logo & Close Button */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <BrandLogo />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-white/10 cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav Links Container */}
          <div className="flex flex-col space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-xl font-bold text-slate-100 hover:text-indigo-400 transition-colors py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Bottom Action Buttons */}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-3 mt-auto">
            <a href="tel:015210236967" className="w-full">
              <ShinyBordersButton variant="outline" fullWidth icon={<Phone className="w-4 h-4 text-indigo-400" />}>
                0152 10236967
              </ShinyBordersButton>
            </a>
            <a
              href="https://wa.me/4915210236967?text=Hallo%20Obazee%20Clement,%20ich%20moechte%20eine%20Fahrt%20anfragen."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <ShinyBordersButton variant="whatsapp" fullWidth icon={<MessageSquare className="w-4 h-4 text-white" />}>
                {t('nav.whatsappRide')}
              </ShinyBordersButton>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
