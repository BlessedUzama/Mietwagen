import { MainLayout } from './components/layout/MainLayout';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { RideEstimator } from './components/sections/RideEstimator';
import { FleetShowcase } from './components/sections/FleetShowcase';
import { HowItWorks } from './components/sections/HowItWorks';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';

export default function App() {
  return (
    <MainLayout navbar={<Navbar />} floatingWidget={<FloatingWhatsApp />}>
      <HeroSection>
        <RideEstimator />
      </HeroSection>
      <FleetShowcase />
      <HowItWorks />
    </MainLayout>
  );
}
