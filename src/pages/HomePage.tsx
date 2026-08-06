import React from 'react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/common/SEO';
import { HeroSection } from '../components/sections/HeroSection';
import { RideEstimator } from '../components/sections/RideEstimator';
import { FleetShowcase } from '../components/sections/FleetShowcase';
import { HowItWorks } from '../components/sections/HowItWorks';
import { FAQSection } from '../components/sections/FAQSection';
import { LocationSection } from '../components/sections/LocationSection';

export const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('seo.metaTitle')}
        description={t('seo.metaDescription')}
      />
      <HeroSection>
        <RideEstimator />
      </HeroSection>
      <FleetShowcase />
      <HowItWorks />
      <FAQSection />
      <LocationSection />
    </>
  );
};
