import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import CapabilitiesBar from '@/components/sections/CapabilitiesBar';
import EnvironmentsSection from '@/components/sections/EnvironmentsSection';
import ProblemSolutionSection from '@/components/sections/ProblemSolutionSection';
import ModulesGrid from '@/components/sections/ModulesGrid';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import SolutionsGrid from '@/components/sections/SolutionsGrid';
import ScreenshotsShowcase from '@/components/sections/ScreenshotsShowcase';
import FeaturedCaseSection from '@/components/sections/FeaturedCaseSection';
import FaqSection from '@/components/sections/FaqSection';
import CtaBanner from '@/components/sections/CtaBanner';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CapabilitiesBar />
      <EnvironmentsSection />
      <ProblemSolutionSection />
      <ModulesGrid />
      <HowItWorksSection />
      <SolutionsGrid />
      <ScreenshotsShowcase />
      <FeaturedCaseSection />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
