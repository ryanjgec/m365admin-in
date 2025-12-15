import React from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { HeroCard } from './components/HeroCard';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-950 flex flex-col items-center justify-center selection:bg-ms-blue selection:text-white">
      {/* Background Layer */}
      <BackgroundEffects />

      {/* Main Content Container */}
      <main className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[90vh]">
        <HeroCard />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;