import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/Footer';
import HeroSection from '@/components/HeroSection';
import CollectionHighlight from '@/components/CollectionHighlight';
import EditorialSection from '@/components/EditorialSection';
import PhilosophySection from '@/components/PhilosophySection';

export default function Home() {
  // #region agent log
  useEffect(() => {
    fetch('http://127.0.0.1:7877/ingest/e57a92b3-a59f-4bfc-aa61-c17f7566fe39', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': 'e2a24c' },
      body: JSON.stringify({
        sessionId: 'e2a24c',
        runId: 'pre',
        hypothesisId: 'H4',
        location: 'Home.jsx:useEffect',
        message: 'Home mounted',
        data: { pathname: window.location.pathname },
        timestamp: Date.now(),
      }),
    }).catch(() => {})
  }, [])
  // #endregion
  return (
    <div className="noise-overlay">
      <Navigation />
      <main>
        <HeroSection />
        <CollectionHighlight />
        <EditorialSection />
        <PhilosophySection />
      </main>
      <Footer />
    </div>
  );
}