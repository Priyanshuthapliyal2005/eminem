import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize, Download, Share2, Heart, Eye, Film, Image, Music, Headphones, Speaker } from 'lucide-react';

interface MediaItem {
  id: number;
  type: 'video' | 'image' | 'audio';
  thumbnail: string;
  title: string;
  description: string;
  source: string;
  duration?: string;
  views: number;
  likes: number;
  category: 'music-video' | 'live-performance' | 'behind-scenes' | 'interview' | 'rare-footage';
  releaseDate: string;
  quality?: '4K' | 'HD' | 'SD';
  featured?: boolean;
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: 'video',
    thumbnail: "https://images.pexels.com/photos/2426085/pexels-photo-2426085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Lose Yourself (8 Mile)",
    description: "From the 8 Mile soundtrack, this Oscar-winning track became Eminem's biggest hit and an anthem for perseverance.",
    source: "https://player.vimeo.com/external/368244127.sd.mp4?s=12a14051e6417ed5c970d7bad32374de3216afb2&profile_id=164&oauth2_token_id=57447761",
    duration: "5:24",
    views: 2847392,
    likes: 186429,
    category: 'music-video',
    releaseDate: '2002-10-28',
    quality: '4K',
    featured: true
  },
  {
    id: 2,
    type: 'video',
    thumbnail: "https://images.pexels.com/photos/1336842/pexels-photo-1336842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Rap God (Official Video)",
    description: "Showcasing Eminem's technical mastery with one of the fastest verses in rap history.",
    source: "https://player.vimeo.com/external/368244127.sd.mp4?s=12a14051e6417ed5c970d7bad32374de3216afb2&profile_id=164&oauth2_token_id=57447761",
    duration: "6:04",
    views: 1934821,
    likes: 143672,
    category: 'music-video',
    releaseDate: '2013-10-14',
    quality: 'HD',
    featured: true
  },
  {
    id: 3,
    type: 'video',
    thumbnail: "https://images.pexels.com/photos/1540627/pexels-photo-1540627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "The Real Slim Shady (Live at Grammy Awards)",
    description: "Iconic performance with an army of Slim Shady lookalikes that shocked audiences worldwide.",
    source: "https://player.vimeo.com/external/368244127.sd.mp4?s=12a14051e6417ed5c970d7bad32374de3216afb2&profile_id=164&oauth2_token_id=57447761",
    duration: "4:15",
    views: 867293,
    likes: 92847,
    category: 'live-performance',
    releaseDate: '2001-02-21',
    quality: 'SD'
  },
  {
    id: 4,
    type: 'image',
    thumbnail: "https://images.pexels.com/photos/2426086/pexels-photo-2426086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Detroit Concert (2018)",
    description: "Performing for his hometown crowd during the Revival Tour.",
    source: "https://images.pexels.com/photos/2426086/pexels-photo-2426086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    views: 156732,
    likes: 24891,
    category: 'live-performance',
    releaseDate: '2018-08-15'
  },
  {
    id: 5,
    type: 'image',
    thumbnail: "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Studio Session (2020)",
    description: "Working on Music to Be Murdered By in the recording studio.",
    source: "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    views: 298472,
    likes: 43827,
    category: 'behind-scenes',
    releaseDate: '2020-01-17'
  },
  {
    id: 6,
    type: 'video',
    thumbnail: "https://images.pexels.com/photos/1267325/pexels-photo-1267325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Rock & Roll Hall of Fame (2022)",
    description: "Eminem's induction ceremony into the Rock & Roll Hall of Fame.",
    source: "https://player.vimeo.com/external/368244127.sd.mp4?s=12a14051e6417ed5c970d7bad32374de3216afb2&profile_id=164&oauth2_token_id=57447761",
    duration: "12:35",
    views: 1264892,
    likes: 87264,
    category: 'interview',
    releaseDate: '2022-11-05',
    quality: '4K'
  },
  {
    id: 7,
    type: 'audio',
    thumbnail: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Rare Freestyle Session",
    description: "Unreleased freestyle from the early 2000s recording sessions.",
    source: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    duration: "3:47",
    views: 456789,
    likes: 78234,
    category: 'rare-footage',
    releaseDate: '2003-05-12'
  },
  {
    id: 8,
    type: 'video',
    thumbnail: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Without Me (Behind the Scenes)",
    description: "Making of the iconic Without Me music video.",
    source: "https://player.vimeo.com/external/368244127.sd.mp4?s=12a14051e6417ed5c970d7bad32374de3216afb2&profile_id=164&oauth2_token_id=57447761",
    duration: "8:22",
    views: 723456,
    likes: 56789,
    category: 'behind-scenes',
    releaseDate: '2002-05-14',
    quality: 'HD'
  }
];

const MultimediaGalleryEnhanced: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [likedMedia, setLikedMedia] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState<'views' | 'likes' | 'date'>('views');

  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const floatingY = useTransform(scrollYProgress, [0, 1], ["0px", "-100px"]);

  const handlePlay = () => {
    if (!selectedMedia) return;
    
    if (selectedMedia.type === 'video' && videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
    } else if (selectedMedia.type === 'audio' && audioRef.current) {
      isPlaying ? audioRef.current.pause() : audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (selectedMedia?.type === 'video' && videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    } else if (selectedMedia?.type === 'audio' && audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (selectedMedia?.type === 'video' && videoRef.current) {
      setDuration(videoRef.current.duration);
    } else if (selectedMedia?.type === 'audio' && audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (time: number) => {
    if (selectedMedia?.type === 'video' && videoRef.current) {
      videoRef.current.currentTime = time;
    } else if (selectedMedia?.type === 'audio' && audioRef.current) {
      audioRef.current.currentTime = time;
    }
    setCurrentTime(time);
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (selectedMedia?.type === 'video' && videoRef.current) {
      videoRef.current.volume = newVolume;
    } else if (selectedMedia?.type === 'audio' && audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (selectedMedia?.type === 'video' && videoRef.current) {
      videoRef.current.muted = !isMuted;
    } else if (selectedMedia?.type === 'audio' && audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const filteredMedia = selectedCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === selectedCategory);

  const sortedMedia = [...filteredMedia].sort((a, b) => {
    switch (sortBy) {
      case 'views': return b.views - a.views;
      case 'likes': return b.likes - a.likes;
      case 'date': return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
      default: return 0;
    }
  });

  const handleLike = (id: number) => {
    if (likedMedia.includes(id)) {
      setLikedMedia(likedMedia.filter(mediaId => mediaId !== id));
    } else {
      setLikedMedia([...likedMedia, id]);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'music-video': return <Music className="w-4 h-4" />;
      case 'live-performance': return <Speaker className="w-4 h-4" />;
      case 'behind-scenes': return <Film className="w-4 h-4" />;
      case 'interview': return <Headphones className="w-4 h-4" />;
      case 'rare-footage': return <Eye className="w-4 h-4" />;
      default: return <Image className="w-4 h-4" />;
    }
  };

  // Multimedia symbols for floating animation
  const multimediaSymbols = ['🎬', '📹', '🎵', '🎭', '📸', '🎪', '🎨', '🎤'];

  return (
    <section ref={sectionRef} className="section-container bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Enhanced Parallax Background */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-red-900/30" />
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </motion.div>

      {/* Floating Multimedia Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {multimediaSymbols.map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              y: floatingY,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 15, -15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center mb-4">
            <motion.span
              className="inline-block"
              animate={{ 
                textShadow: [
                  "0 0 10px #8b5cf6",
                  "0 0 20px #8b5cf6", 
                  "0 0 10px #8b5cf6"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              MULTIMEDIA VAULT
            </motion.span>
          </h2>
          
          <p className="text-center text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
            Explore iconic music videos, live performances, behind-the-scenes footage, and rare content from throughout Eminem's legendary career.
          </p>
        </motion.div>

        {/* Enhanced Controls */}
        <motion.div 
          className="max-w-6xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-between items-center gap-4 p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-purple-600/30">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {['all', 'music-video', 'live-performance', 'behind-scenes', 'interview', 'rare-footage'].map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {getCategoryIcon(category)}
                  {category.replace('-', ' ').toUpperCase()}
                </motion.button>
              ))}
            </div>

            {/* Sort Controls */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400">Sort by:</span>
              {['views', 'likes', 'date'].map((sort) => (
                <motion.button
                  key={sort}
                  onClick={() => setSortBy(sort as any)}
                  className={`px-3 py-1 rounded transition-all duration-300 ${
                    sortBy === sort
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {sort.toUpperCase()}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Content Showcase */}
        {sortedMedia.filter(item => item.featured).length > 0 && (
          <motion.div 
            className="max-w-6xl mx-auto mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="heading-text text-2xl text-center mb-8 text-purple-400">FEATURED CONTENT</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {sortedMedia.filter(item => item.featured).slice(0, 2).map((item, index) => (
                <motion.div
                  key={item.id}
                  className="relative bg-black/70 rounded-xl overflow-hidden border border-purple-600/50 group cursor-pointer"
                  initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -10 }}
                  onClick={() => setSelectedMedia(item)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                      FEATURED
                    </div>

                    {/* Quality Badge */}
                    {item.quality && (
                      <div className="absolute top-4 right-4 bg-green-600 text-white px-2 py-1 rounded text-xs">
                        {item.quality}
                      </div>
                    )}

                    {/* Play Button Overlay */}
                    {item.type !== 'image' && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                        <motion.div 
                          className="w-20 h-20 rounded-full bg-purple-600 bg-opacity-90 flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Play className="w-8 h-8 text-white ml-1" />
                        </motion.div>
                      </div>
                    )}

                    {/* Duration */}
                    {item.duration && (
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {item.duration}
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="heading-text text-xl text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Eye size={14} />
                          {item.views.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart size={14} />
                          {item.likes.toLocaleString()}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-purple-400">
                        {getCategoryIcon(item.category)}
                        <span className="text-xs">{item.category.replace('-', ' ').toUpperCase()}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        
        {/* Enhanced Media Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedMedia.map((item, index) => (
              <motion.div 
                key={item.id}
                className="bg-black/70 rounded-xl overflow-hidden border border-gray-800 group cursor-pointer hover:border-purple-500 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedMedia(item)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
                  
                  {/* Type Icon */}
                  <div className="absolute top-2 left-2">
                    {item.type === 'video' ? (
                      <Film className="w-5 h-5 text-white" />
                    ) : item.type === 'audio' ? (
                      <Headphones className="w-5 h-5 text-white" />
                    ) : (
                      <Image className="w-5 h-5 text-white" />
                    )}
                  </div>

                  {/* Quality Badge */}
                  {item.quality && (
                    <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs">
                      {item.quality}
                    </div>
                  )}
                  
                  {/* Play Button for Video/Audio */}
                  {item.type !== 'image' && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                      <motion.div 
                        className="w-12 h-12 rounded-full bg-purple-600 bg-opacity-90 flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Play className="w-5 h-5 text-white ml-1" />
                      </motion.div>
                    </div>
                  )}

                  {/* Duration */}
                  {item.duration && (
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {item.duration}
                    </div>
                  )}

                  {/* Stats Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex justify-between items-center text-white text-xs">
                      <div className="flex items-center gap-1">
                        <Eye size={12} />
                        {item.views > 1000000 ? `${(item.views / 1000000).toFixed(1)}M` : `${(item.views / 1000).toFixed(0)}K`}
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart size={12} />
                        {item.likes > 1000000 ? `${(item.likes / 1000000).toFixed(1)}M` : `${(item.likes / 1000).toFixed(0)}K`}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="heading-text text-lg text-white mb-1 line-clamp-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-3">{item.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-purple-400 text-xs">
                      {getCategoryIcon(item.category)}
                      <span>{item.category.replace('-', ' ')}</span>
                    </div>
                    <div className="text-gray-500 text-xs">
                      {new Date(item.releaseDate).getFullYear()}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced Media Player Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div 
              className="max-w-6xl w-full bg-black/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-purple-600/30"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {selectedMedia.type === 'video' ? (
                  <video 
                    ref={videoRef}
                    src={selectedMedia.source}
                    className="w-full aspect-video object-cover"
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />
                ) : selectedMedia.type === 'audio' ? (
                  <div className="w-full aspect-video bg-gradient-to-br from-purple-900 to-black flex items-center justify-center">
                    <audio 
                      ref={audioRef}
                      src={selectedMedia.source}
                      onTimeUpdate={handleTimeUpdate}
                      onLoadedMetadata={handleLoadedMetadata}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                    />
                    <div className="text-center">
                      <motion.div
                        animate={{ scale: isPlaying ? [1, 1.1, 1] : 1 }}
                        transition={{ duration: 1, repeat: isPlaying ? Infinity : 0 }}
                      >
                        <Headphones className="w-24 h-24 text-purple-400 mx-auto mb-4" />
                      </motion.div>
                      <h3 className="text-2xl text-white font-bold">{selectedMedia.title}</h3>
                      <p className="text-gray-400 mt-2">Audio Track</p>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={selectedMedia.source}
                    alt={selectedMedia.title}
                    className="w-full aspect-video object-cover"
                  />
                )}
                
                {/* Close Button */}
                <button 
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center hover:bg-black/80 transition-colors z-10"
                  onClick={() => setSelectedMedia(null)}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Enhanced Media Controls */}
                {selectedMedia.type !== 'image' && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div 
                        className="w-full h-2 bg-gray-700 rounded-full cursor-pointer"
                        onClick={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          const x = e.clientX - rect.left;
                          const percentage = x / rect.width;
                          handleSeek(percentage * duration);
                        }}
                      >
                        <motion.div 
                          className="h-full bg-purple-600 rounded-full"
                          style={{ width: `${(currentTime / duration) * 100}%` }}
                          transition={{ duration: 0.1 }}
                        />
                      </div>
                      <div className="flex justify-between text-sm text-gray-400 mt-1">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                      </div>
                    </div>

                    {/* Control Buttons */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <motion.button
                          onClick={handlePlay}
                          className="w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white ml-1" />}
                        </motion.button>

                        <div className="flex items-center gap-2">
                          <motion.button
                            onClick={toggleMute}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
                          </motion.button>
                          
                          <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={volume}
                            onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                            className="w-20 accent-purple-600"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <motion.button
                          onClick={() => handleLike(selectedMedia.id)}
                          className="flex items-center gap-2 text-white hover:text-red-400 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Heart 
                            className={`w-5 h-5 ${
                              likedMedia.includes(selectedMedia.id) ? 'text-red-500 fill-current' : ''
                            }`} 
                          />
                          <span>{selectedMedia.likes + (likedMedia.includes(selectedMedia.id) ? 1 : 0)}</span>
                        </motion.button>

                        <motion.button
                          className="text-white hover:text-blue-400 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Share2 className="w-5 h-5" />
                        </motion.button>

                        <motion.button
                          className="text-white hover:text-green-400 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Download className="w-5 h-5" />
                        </motion.button>

                        {selectedMedia.type === 'video' && (
                          <motion.button
                            onClick={() => videoRef.current?.requestFullscreen()}
                            className="text-white hover:text-purple-400 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Maximize className="w-5 h-5" />
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
              
              {/* Media Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="heading-text text-3xl text-white mb-2">{selectedMedia.title}</h3>
                    <p className="text-gray-300 mb-4">{selectedMedia.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-purple-400">
                    {getCategoryIcon(selectedMedia.category)}
                    <span className="text-sm">{selectedMedia.category.replace('-', ' ').toUpperCase()}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{selectedMedia.views.toLocaleString()}</div>
                    <div className="text-sm text-gray-400">Views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{selectedMedia.likes.toLocaleString()}</div>
                    <div className="text-sm text-gray-400">Likes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">
                      {new Date(selectedMedia.releaseDate).toLocaleDateString()}
                    </div>
                    <div className="text-sm text-gray-400">Released</div>
                  </div>
                  {selectedMedia.duration && (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{selectedMedia.duration}</div>
                      <div className="text-sm text-gray-400">Duration</div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MultimediaGalleryEnhanced;
