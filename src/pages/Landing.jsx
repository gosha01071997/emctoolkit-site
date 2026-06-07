import React from 'react';
import GridBackground from '../components/landing/GridBackground';
import ScanLine from '../components/landing/ScanLine';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import ProblemSection from '../components/landing/ProblemSection';
import SolutionSection from '../components/landing/SolutionSection';
import ShowcaseSection from '../components/landing/ShowcaseSection';
import AdvantagesSection from '../components/landing/AdvantagesSection';
import LicenseSection from '../components/landing/LicenseSection';
import DemoSection from '../components/landing/DemoSection';
import CTASection from '../components/landing/CTASection';
import SEOSection from '../components/landing/SEOSection';
import Footer from '../components/landing/Footer';

export default function Landing() {
  return (
    <div className="min-h-screen bg-void text-white overflow-x-hidden">
      <GridBackground />
      <ScanLine />
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ShowcaseSection />
      <AdvantagesSection />
      <DemoSection />
      <LicenseSection />
      <SEOSection />
      <CTASection />
      <Footer />
    </div>
  );
}