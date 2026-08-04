import { MainLayout } from './components/layout/MainLayout';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';

export default function App() {
  return (
    <MainLayout navbar={<Navbar />} floatingWidget={<FloatingWhatsApp />}>
      <HeroSection />
    </MainLayout>
  );
}
