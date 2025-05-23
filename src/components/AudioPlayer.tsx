import React, { useState, useRef, useEffect } from 'react';

interface Track {
  id: number;
  title: string;
  album: string;
  duration: string;
}

const tracks: Track[] = [
  { id: 1, title: "Lose Yourself", album: "8 Mile Soundtrack", duration: "5:26" },
  { id: 2, title: "Not Afraid", album: "Recovery", duration: "4:08" },
  { id: 3, title: "Till I Collapse", album: "The Eminem Show", duration: "4:57" },
  { id: 4, title: "Rap God", album: "The Marshall Mathers LP 2", duration: "6:03" },
  { id: 5, title: "Stan", album: "The Marshall Mathers LP", duration: "6:44" }
];

const AudioPlayer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track>(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const progressIntervalRef = useRef<number | null>(null);
  
  // Simulate playback progress
  useEffect(() => {
    if (isPlaying) {
      progressIntervalRef.current = window.setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            // Move to next track
            const nextTrackIndex = tracks.findIndex(t => t.id === currentTrack.id) + 1;
            if (nextTrackIndex < tracks.length) {
              setCurrentTrack(tracks[nextTrackIndex]);
            } else {
              setCurrentTrack(tracks[0]);
            }
            return 0;
          }
          return prev + 0.5;
        });
      }, 500);
    } else {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    }
    
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [isPlaying, currentTrack]);
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  const selectTrack = (track: Track) => {
    setCurrentTrack(track);
    setProgress(0);
    setIsPlaying(true);
  };
  
  const formatTime = (duration: string) => {
    return duration;
  };
  
  const getCurrentTime = () => {
    const [minutes, seconds] = currentTrack.duration.split(':');
    const totalSeconds = parseInt(minutes) * 60 + parseInt(seconds);
    const currentSeconds = Math.floor(totalSeconds * (progress / 100));
    const currentMinutes = Math.floor(currentSeconds / 60);
    const remainingSeconds = currentSeconds % 60;
    return `${currentMinutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`fixed bottom-0 right-0 z-40 transition-all duration-300 transform ${isOpen ? 'translate-y-0' : 'translate-y-16'}`}>
      {/* Audio player UI */}
      <div className="bg-black border-t border-l border-gray-800 rounded-tl-lg shadow-2xl overflow-hidden">
        {/* Minimized player */}
        <div 
          className="flex items-center justify-between bg-gradient-to-r from-black to-primary/30 px-4 py-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center">
            <button 
              className="text-white p-2 focus:outline-none"
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
            >
              {isPlaying ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            <div className="ml-3">
              <div className="text-white heading-text truncate max-w-[150px]">{currentTrack.title}</div>
              <div className="text-gray-400 text-xs">{currentTrack.album}</div>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="text-gray-400 text-xs mr-3">
              {getCurrentTime()} / {formatTime(currentTrack.duration)}
            </div>
            <button 
              className="text-white"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
            >
              {isOpen ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 13H5v-2h14v2z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 14l5-5 5 5z" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="h-1 bg-gray-800">
          <div 
            className="h-full bg-primary"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        {/* Full player */}
        {isOpen && (
          <div className="p-4 w-80">
            <h3 className="heading-text text-lg text-white mb-4">PLAYLIST</h3>
            
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {tracks.map((track) => (
                <div 
                  key={track.id}
                  className={`flex items-center p-2 rounded cursor-pointer ${
                    currentTrack.id === track.id ? 'bg-primary bg-opacity-20' : 'hover:bg-gray-900'
                  }`}
                  onClick={() => selectTrack(track)}
                >
                  <div className="w-6 h-6 flex items-center justify-center mr-3">
                    {currentTrack.id === track.id && isPlaying ? (
                      <div className="flex space-x-1">
                        <div className="w-1 h-4 bg-primary animate-pulse"></div>
                        <div className="w-1 h-3 bg-primary animate-pulse delay-75"></div>
                        <div className="w-1 h-5 bg-primary animate-pulse delay-150"></div>
                      </div>
                    ) : (
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-grow">
                    <div className={`text-sm ${currentTrack.id === track.id ? 'text-primary' : 'text-white'}`}>
                      {track.title}
                    </div>
                    <div className="text-xs text-gray-500">{track.album}</div>
                  </div>
                  <div className="text-xs text-gray-500">{track.duration}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 flex justify-center">
              <div className="text-center">
                <div className="text-xs text-gray-500">
                  Disclaimer: This audio player is a visual demo only. No actual music is played.
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  © Eminem | Shady Records | Aftermath Entertainment | Interscope Records
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AudioPlayer;