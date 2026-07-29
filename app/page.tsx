import React, { useState } from 'react';
import Turnstile from 'react-turnstile'; // o tu librería de Turnstile
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
  const [verified, setVerified] = useState(false);

  return (
    <>
      {!verified && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, width: '100vw', height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          zIndex: 9999
        }}>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '10px' }}>
            <h2>Verificación de Seguridad</h2>
            <Turnstile
              sitekey="0x4AAAAAABasPB1LMzxw_dps"
              onSuccess={() => setVerified(true)}
            />
          </div>
        </div>
      )}

      {verified && (
        <main>
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
        </main>
      )}
    </>
  );
}
