import React from 'react';
import GridBackground from '../components/landing/GridBackground';
import ScanLine from '../components/landing/ScanLine';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import ProblemSection from '../components/landing/ProblemSection';
import WorkflowSection from '../components/landing/WorkflowSection';
import ShowcaseSection from '../components/landing/ShowcaseSection';
import ProofSection from '../components/landing/ProofSection';
import RoleBenefitsSection from '../components/landing/RoleBenefitsSection';
import ImplementationSection from '../components/landing/ImplementationSection';
import LicenseSection from '../components/landing/LicenseSection';
import SEOSection from '../components/landing/SEOSection';
import CTASection from '../components/landing/CTASection';
import Footer from '../components/landing/Footer';

export default function Landing() {
  return (
    <div className="min-h-screen bg-void text-white overflow-x-hidden">
      <GridBackground />
      <ScanLine />
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <WorkflowSection />
        <ShowcaseSection />
        <ProofSection />
        <RoleBenefitsSection />
        <ImplementationSection />
        <LicenseSection />
        <SEOSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
