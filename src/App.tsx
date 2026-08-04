import { MainLayout } from './components/layout/MainLayout';
import { Navbar } from './components/layout/Navbar';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';

export default function App() {
  return (
    <MainLayout navbar={<Navbar />} floatingWidget={<FloatingWhatsApp />}>
      {/* Temporary Placeholder Hero Section for Step 3 Verification */}
      <section id="home" className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl">
          Erstklassiger Fahrdienst in Frankfurt am Main
        </h1>
        <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
          Obazee Clement Mietwagen – Ihr persönlicher Fahrdienst für Flughafentransfers, Geschäftsreisen & Hoteltransfers zum Festpreis.
        </p>
      </section>
    </MainLayout>
  );
}
