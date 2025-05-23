import React, { useEffect, useState, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

const BackgroundAudio: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [volume, setVolume] = useState(0.15);
  const [isVisible, setIsVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    const handleUserInteraction = () => {
      setUserInteracted(true);
      setIsVisible(true);
    };

    // Set initial volume when component mounts
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }

    // Wait for user interaction before showing audio controls
    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('touchstart', handleUserInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, [volume]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  if (!userInteracted || !isVisible) {
    return null;
  }

  return (
    <>      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src="/liridon_eminem-lose-yourself.mp3"
        loop
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={(e) => console.error('Audio error:', e)}
      />

      {/* Floating audio control */}
      <div className="fixed top-20 right-4 z-50 bg-black bg-opacity-80 backdrop-blur-sm rounded-full p-3 border border-red-600 border-opacity-30 shadow-2xl">
        <div className="flex items-center gap-3">
          {/* Play/Pause button */}
          <button
            onClick={toggleAudio}
            className="text-white hover:text-red-500 transition-colors"
            title={isPlaying ? 'Pause background music' : 'Play background music'}
          >
            {isPlaying ? (
              <Volume2 className="w-5 h-5" />
            ) : (
              <VolumeX className="w-5 h-5" />
            )}
          </button>

          {/* Volume control - shown on hover */}
          <div className="group relative">
            <Music className="w-4 h-4 text-gray-400 cursor-pointer" />
            <div className="absolute right-0 top-full mt-2 bg-black bg-opacity-90 rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
              <div className="flex items-center gap-2 min-w-[120px]">
                <VolumeX className="w-3 h-3 text-gray-400" />
                <input
                  type="range"
                  min="0"
                  max="0.5"
                  step="0.05"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="flex-1 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <Volume2 className="w-3 h-3 text-gray-400" />
              </div>
              <div className="text-xs text-gray-500 text-center mt-1">
                Background Music
              </div>
            </div>
          </div>
        </div>

        {/* Now playing indicator */}
        {isPlaying && (
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>        )}
      </div>
    </>
  );
};

export default BackgroundAudio;
