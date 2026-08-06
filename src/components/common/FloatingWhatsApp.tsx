import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FloatingWhatsAppProps {
  phoneNumber?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phoneNumber = '4915210236967',
}) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const visibleButtons = new Set<Element>();

    const setupObserver = () => {
      const buttons = document.querySelectorAll('.observe-wa-btn');
      if (buttons.length === 0) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleButtons.add(entry.target);
            } else {
              visibleButtons.delete(entry.target);
            }
          });
          // Hide floating widget if any static/inline WhatsApp button is visible on screen
          setIsVisible(visibleButtons.size === 0);
        },
        { threshold: 0.1 }
      );

      buttons.forEach((btn) => observer?.observe(btn));
    };

    // Initial setup + fallback delay for dynamic client mounts
    setupObserver();
    const timer = setTimeout(setupObserver, 300);

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const message = encodeURIComponent(
    'Hallo Obazee Clement, ich möchte eine direkte Fahrt in Frankfurt am Main anfragen.'
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 transition-all duration-300 ${
        isVisible
          ? 'opacity-100 scale-100 pointer-events-auto'
          : 'opacity-0 scale-90 pointer-events-none'
      }`}
    >
      {/* Response Badge Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/90 dark:bg-slate-900/90 text-white text-xs font-semibold shadow-2xl border border-slate-700/80 backdrop-blur-md"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>{t('contact.fastResponse')}</span>
      </motion.div>

      {/* Main Floating Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, rotate: 3 }}
        whileTap={{ scale: 0.95 }}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-glow-green hover:shadow-emerald-500/70 transition-all duration-300 border border-emerald-400/40 cursor-pointer"
        aria-label="Direct WhatsApp Booking"
      >
        {/* Pulsing Outer Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 group-hover:bg-emerald-500/50 animate-pulse-slow pointer-events-none" />

        <MessageSquare className="w-7 h-7 text-white fill-white/20 transition-transform duration-300 group-hover:scale-110" />
      </motion.a>
    </div>
  );
};
