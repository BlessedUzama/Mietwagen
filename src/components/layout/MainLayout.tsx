import React from 'react';
import { Outlet } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingWhatsApp } from '../common/FloatingWhatsApp';

interface MainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-300 relative ${
        theme === 'dark' ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Background Ambient Glow FX */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-600/10 dark:bg-blue-500/10 blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 blur-[140px] pointer-events-none z-0" />

      {/* Sticky Header Navigation */}
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      {/* Main Page Content Area - Renders Route Outlet or Children */}
      <main className="flex-1 z-10 relative">
        {children || <Outlet />}
      </main>

      {/* Floating Action Elements (WhatsApp Widget) */}
      <aside className="z-40 relative">
        <FloatingWhatsApp />
      </aside>

      {/* Footer Section */}
      <footer className="z-10 relative mt-auto">
        <Footer />
      </footer>
    </div>
  );
};
