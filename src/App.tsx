import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { SEOHead } from './components/SEOHead';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { AppointmentPage } from './pages/AppointmentPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { SERVICE_LANDING_PAGES } from './data/servicePages';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  const renderCurrentPage = () => {
    // Check if the current route matches a dedicated service landing page
    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '');
      const serviceData = SERVICE_LANDING_PAGES[slug];
      if (serviceData) {
        return <ServiceDetailPage service={serviceData} />;
      }
    }

    switch (currentPath) {
      case '/about':
        return <AboutPage />;
      case '/services':
        return <ServicesPage />;
      case '/pricing':
        return <PricingPage />;
      case '/contact':
        return <ContactPage />;
      case '/appointment':
        return <AppointmentPage />;
      case '/':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen pb-14 sm:pb-0 bg-[#FAF8F5] text-stone-900">
      <SEOHead />
      <Header />
      <main className="flex-1">{renderCurrentPage()}</main>
      <Footer />
      <MobileQuickBar />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
