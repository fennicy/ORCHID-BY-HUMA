import React, { Suspense, lazy } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { SEOHead } from './components/SEOHead';
import { HomePage } from './pages/HomePage'; // Eager load home page for instant LCP
import { SERVICE_LANDING_PAGES } from './data/servicePages';

// Lazy load secondary routes for optimal initial bundle performance
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const PricingPage = lazy(() => import('./pages/PricingPage').then(m => ({ default: m.PricingPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const AppointmentPage = lazy(() => import('./pages/AppointmentPage').then(m => ({ default: m.AppointmentPage })));
const GalleryPage = lazy(() => import('./pages/GalleryPage').then(m => ({ default: m.GalleryPage })));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage').then(m => ({ default: m.ReviewsPage })));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage').then(m => ({ default: m.ServiceDetailPage })));

const RouteLoadingFallback: React.FC = () => (
  <div className="min-h-[50vh] flex items-center justify-center bg-[#FAF7F5]">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 rounded-full border-2 border-[#EACCC9] border-t-[#4A2C2A] animate-spin" />
      <span className="text-xs uppercase tracking-widest text-[#4A2C2A]/70 font-medium">Orchid By Huma</span>
    </div>
  </div>
);

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  const renderCurrentPage = () => {
    // Check if the current route matches a dedicated service landing page
    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '');
      const serviceData = SERVICE_LANDING_PAGES[slug];
      if (serviceData) {
        return (
          <Suspense fallback={<RouteLoadingFallback />}>
            <ServiceDetailPage service={serviceData} />
          </Suspense>
        );
      }
    }

    switch (currentPath) {
      case '/about':
        return (
          <Suspense fallback={<RouteLoadingFallback />}>
            <AboutPage />
          </Suspense>
        );
      case '/services':
        return (
          <Suspense fallback={<RouteLoadingFallback />}>
            <ServicesPage />
          </Suspense>
        );
      case '/pricing':
        return (
          <Suspense fallback={<RouteLoadingFallback />}>
            <PricingPage />
          </Suspense>
        );
      case '/gallery':
        return (
          <Suspense fallback={<RouteLoadingFallback />}>
            <GalleryPage />
          </Suspense>
        );
      case '/reviews':
        return (
          <Suspense fallback={<RouteLoadingFallback />}>
            <ReviewsPage />
          </Suspense>
        );
      case '/contact':
        return (
          <Suspense fallback={<RouteLoadingFallback />}>
            <ContactPage />
          </Suspense>
        );
      case '/book':
      case '/appointment':
        return (
          <Suspense fallback={<RouteLoadingFallback />}>
            <AppointmentPage />
          </Suspense>
        );
      case '/':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen pb-14 sm:pb-0 bg-[#FAF7F5] text-[#4A2C2A]">
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
