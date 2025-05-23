import { useEffect, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DiscographyTimeline from './components/DiscographyTimeline';
import Biography from './components/Biography';
import AwardsWall from './components/AwardsWall';
import SobrietySection from './components/SobrietySection';
import FanHub from './components/FanHub';
import MultimediaGallery from './components/MultimediaGallery';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';
import { Loader } from './components/Loader';
import MediaOptimizer from './components/MediaOptimizer';
import BackgroundAudio from './components/BackgroundAudio';
import MediaTip from './components/MediaTip';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for dramatic effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <MediaOptimizer>
      <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen overflow-x-hidden">
        <Header />
        <main className="relative">
          <HeroSection />
          <DiscographyTimeline />
          <Biography />
          <AwardsWall />
          <SobrietySection />
          <FanHub />
          <MultimediaGallery />
        </main>
        <Footer />
        <AudioPlayer />
        <BackgroundAudio />
        <MediaTip />
      </div>
    </MediaOptimizer>
  );
}

export default App;