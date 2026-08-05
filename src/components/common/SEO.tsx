import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../context/LanguageContext';

interface SEOProps {
  title: string;
  description: string;
  name?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  name = 'Obazee Clement Mietwagen',
  type = 'website',
}) => {
  const { language } = useLanguage();
  const currentLang = language === 'de' ? 'de_DE' : 'en_US';

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph Tags for WhatsApp & Social Previews */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={name} />
      <meta property="og:locale" content={currentLang} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};
