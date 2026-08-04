import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface MainLayoutProps {
  children: React.ReactNode;
  navbar?: React.ReactNode;
  footer?: React.ReactNode;
  floatingWidget?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  navbar,
  footer,
  floatingWidget,
}) => {
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
      {navbar && <header className="sticky top-0 z-50">{navbar}</header>}

      {/* Main Page Content Container */}
      <main className="flex-1 z-10 relative">{children}</main>

      {/* Floating Action Elements (e.g., WhatsApp Widget) */}
      {floatingWidget && <aside className="z-40 relative">{floatingWidget}</aside>}

      {/* Footer Section */}
      {footer && <footer className="z-10 relative mt-auto">{footer}</footer>}
    </div>
  );
};
