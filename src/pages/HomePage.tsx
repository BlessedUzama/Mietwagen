import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { RideEstimator } from '../components/sections/RideEstimator';
import { FleetShowcase } from '../components/sections/FleetShowcase';
import { HowItWorks } from '../components/sections/HowItWorks';
import { FAQSection } from '../components/sections/FAQSection';

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection>
        <RideEstimator />
      </HeroSection>
      <FleetShowcase />
      <HowItWorks />
      <FAQSection />
    </>
  );
};
