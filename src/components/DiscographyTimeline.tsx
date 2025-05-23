import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Play, Calendar, Music, Award, ChevronRight, Headphones, Heart, Share2, Download, Star } from 'lucide-react';

// Album type definition
interface Album {
  id: number;
  title: string;
  year: string;
  cover: string;
  tracks: string[];
  description: string;
}

const albums: Album[] = [
  {
    id: 1,
    title: "Infinite",
    year: "1996",
    cover: "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tracks: ["Infinite", "W.E.G.O. (Interlude)", "It's O.K.", "Tonite", "313", "Maxine", "Open Mic", "Never 2 Far", "Searchin'", "Backstabber", "Jealousy Woes II"],
    description: "Eminem's independent debut studio album, showcasing his early raw talent before the Slim Shady persona emerged."
  },
  {
    id: 2,
    title: "The Slim Shady LP",
    year: "1999",
    cover: "https://images.pexels.com/photos/1884306/pexels-photo-1884306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tracks: ["Public Service Announcement", "My Name Is", "Guilty Conscience", "Brain Damage", "Paul (Skit)", "If I Had", "97' Bonnie & Clyde", "Bitch (Skit)", "Role Model", "Lounge (Skit)", "My Fault", "Ken Kaniff (Skit)", "Cum On Everybody", "Rock Bottom", "Just Don't Give A Fuck", "Soap (Skit)", "As The World Turns", "I'm Shady", "Bad Meets Evil", "Still Don't Give A Fuck"],
    description: "The major-label debut that introduced Slim Shady to the world and launched Eminem to stardom."
  },
  {
    id: 3,
    title: "The Marshall Mathers LP",
    year: "2000",
    cover: "https://images.pexels.com/photos/1209982/pexels-photo-1209982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tracks: ["Public Service Announcement 2000", "Kill You", "Stan", "Paul (Skit)", "Who Knew", "Steve Berman (Skit)", "The Way I Am", "The Real Slim Shady", "Remember Me?", "I'm Back", "Marshall Mathers", "Ken Kaniff (Skit)", "Drug Ballad", "Amityville", "Bitch Please II", "Kim", "Under The Influence", "Criminal"],
    description: "Often considered his magnum opus, this album solidified Eminem's place in hip-hop history."
  },
  {
    id: 4,
    title: "The Eminem Show",
    year: "2002",
    cover: "https://images.pexels.com/photos/811838/pexels-photo-811838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tracks: ["Curtains Up (Skit)", "White America", "Business", "Cleanin' Out My Closet", "Square Dance", "The Kiss (Skit)", "Soldier", "Say Goodbye Hollywood", "Drips", "Without Me", "Paul Rosenberg (Skit)", "Sing for the Moment", "Superman", "Hailie's Song", "Steve Berman (Skit)", "When the Music Stops", "Say What You Say", "Till I Collapse", "My Dad's Gone Crazy", "Curtains Close"],
    description: "A more mature album where Eminem addressed his newfound fame and personal struggles."
  },
  {
    id: 5,
    title: "Encore",
    year: "2004",
    cover: "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tracks: ["Curtains Up", "Evil Deeds", "Never Enough", "Yellow Brick Road", "Like Toy Soldiers", "Mosh", "Puke", "My 1st Single", "Paul (Skit)", "Rain Man", "Big Weenie", "Em Calls Paul (Skit)", "Just Lose It", "Ass Like That", "Spend Some Time", "Mockingbird", "Crazy in Love", "One Shot 2 Shot", "Final Thought (Skit)", "Encore/Curtains Down"],
    description: "Released during a tumultuous period in Eminem's life, showing signs of his struggles with fame and addiction."
  },
  {
    id: 6,
    title: "Relapse",
    year: "2009",
    cover: "https://images.pexels.com/photos/1884306/pexels-photo-1884306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tracks: ["Dr. West (Skit)", "3 A.M.", "My Mom", "Insane", "Bagpipes from Baghdad", "Hello", "Tonya (Skit)", "Same Song & Dance", "We Made You", "Medicine Ball", "Paul (Skit)", "Stay Wide Awake", "Old Time's Sake", "Must Be the Ganja", "Mr. Mathers (Skit)", "Déjà Vu", "Beautiful", "Crack a Bottle", "Steve Berman (Skit)", "Underground", "My Darling"],
    description: "His comeback album after a five-year hiatus, dealing with his recovery from addiction."
  },
  {
    id: 7,
    title: "Recovery",
    year: "2010",
    cover: "https://images.pexels.com/photos/1209982/pexels-photo-1209982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tracks: ["Cold Wind Blows", "Talkin' 2 Myself", "On Fire", "Won't Back Down", "W.T.P.", "Going Through Changes", "Not Afraid", "Seduction", "No Love", "Space Bound", "Cinderella Man", "25 to Life", "So Bad", "Almost Famous", "Love the Way You Lie", "You're Never Over", "Untitled"],
    description: "A more personal album where Eminem confronted his addiction struggles and embraced sobriety."
  },
  {
    id: 8,
    title: "The Marshall Mathers LP 2",
    year: "2013",
    cover: "https://images.pexels.com/photos/811838/pexels-photo-811838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tracks: ["Bad Guy", "Parking Lot (Skit)", "Rhyme or Reason", "So Much Better", "Survival", "Legacy", "Asshole", "Berzerk", "Rap God", "Brainless", "Stronger Than I Was", "The Monster", "So Far...", "Love Game", "Headlights", "Evil Twin"],
    description: "A sequel to his magnum opus, showing his continued evolution as an artist while honoring his roots."
  }
];

const DiscographyTimeline: React.FC = () => {
  const [activeAlbum, setActiveAlbum] = useState<Album | null>(null);
  const [hoveredAlbum, setHoveredAlbum] = useState<number | null>(null);
  const [likedAlbums, setLikedAlbums] = useState<Set<number>>(new Set());
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const toggleLike = (albumId: number) => {
    const newLiked = new Set(likedAlbums);
    if (newLiked.has(albumId)) {
      newLiked.delete(albumId);
    } else {
      newLiked.add(albumId);
    }
    setLikedAlbums(newLiked);
  };

  const playTrack = (trackName: string) => {
    setPlayingTrack(playingTrack === trackName ? null : trackName);
  };

  return (
    <section ref={containerRef} id="discography" className="section-container bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Dynamic parallax background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-black/40"
        style={{ y: backgroundY }}
      />
      
      {/* Floating music notes animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-red-500/20 text-2xl font-bold"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              rotate: [0, 360],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          >
            ♪
          </motion.div>
        ))}
      </div>

      {/* Progress timeline indicator */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-red-500 to-red-700 z-30"
        style={{ 
          width: `${timelineProgress.get()}%`,
          scaleX: timelineProgress 
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h2 className="section-title text-center mb-6">DISCOGRAPHY</h2>
        
        <div className="mb-12 max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-300 leading-relaxed">
            Explore Eminem's legendary catalog spanning over 25 years of hip-hop history, 
            from his underground beginnings to global dominance. Each album tells a chapter 
            of his extraordinary journey.
          </p>
        </div>
      </motion.div>
      
      {/* Enhanced Album timeline */}
      <div className="relative max-w-7xl mx-auto">
        {/* Dynamic timeline line */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 to-red-700 rounded-full shadow-lg"></div>
        
        {/* Albums grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {albums.map((album, index) => (
            <motion.div 
              key={album.id}
              className={`relative group cursor-pointer ${
                index % 2 === 0 ? 'lg:mb-20' : 'lg:mt-20'
              }`}
              onClick={() => setActiveAlbum(album === activeAlbum ? null : album)}
              onHoverStart={() => setHoveredAlbum(album.id)}
              onHoverEnd={() => setHoveredAlbum(null)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Timeline dot */}
              <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-black z-20 group-hover:scale-150 transition-all duration-300"></div>
              
              <div className="relative overflow-hidden rounded-xl bg-black border-2 border-gray-800 group-hover:border-red-500 transition-all duration-300 shadow-2xl backdrop-blur-sm">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={album.cover} 
                    alt={album.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                  
                  {/* Dynamic overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-all duration-300"></div>
                  
                  {/* Interactive controls overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <motion.button
                        className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          // Play album functionality
                        }}
                      >
                        <Play className="w-5 h-5 text-white ml-1" fill="currentColor" />
                      </motion.button>
                      
                      <motion.button
                        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all ${
                          likedAlbums.has(album.id) 
                            ? 'bg-red-600 text-white' 
                            : 'bg-black/70 text-white hover:bg-red-600'
                        }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLike(album.id);
                        }}
                      >
                        <Heart className="w-4 h-4" fill={likedAlbums.has(album.id) ? "currentColor" : "none"} />
                      </motion.button>
                      
                      <motion.button
                        className="w-12 h-12 bg-black/70 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          // Share functionality
                        }}
                      >
                        <Share2 className="w-4 h-4 text-white" />
                      </motion.button>
                    </div>
                  </div>
                  
                  {/* Album info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="heading-text text-xl text-white mb-1 drop-shadow-lg">{album.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-red-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{album.year}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-300">
                        <Music className="w-4 h-4" />
                        <span className="text-xs">{album.tracks.length} tracks</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Popularity indicator */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-black/70 rounded-full px-2 py-1">
                      <Star className="w-3 h-3 text-yellow-400" fill="currentColor" />
                      <span className="text-xs text-white">
                        {Math.floor(Math.random() * 5) + 3}.{Math.floor(Math.random() * 10)}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced hover effect */}
                {hoveredAlbum === album.id && (
                  <motion.div
                    className="absolute inset-0 border-2 border-red-500 rounded-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{
                      boxShadow: '0 0 30px rgba(239, 68, 68, 0.6)',
                    }}
                  />
                )}
                      <span className="text-sm font-semibold">{album.year}</span>
                    </div>
                  </div>
                </div>
                
                {/* Album stats */}
                <div className="p-4 bg-gray-900">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Music className="w-4 h-4" />
                      <span className="text-sm">{album.tracks.length} tracks</span>
                    </div>
                    <motion.button
                      className="flex items-center gap-1 text-red-500 text-sm hover:text-red-400 transition-colors"
                      whileHover={{ x: 2 }}
                    >
                      Details
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
              
              {/* Animated vinyl record */}
              <motion.div 
                className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-black border-2 border-red-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-black"></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Enhanced Album details modal */}
        <AnimatePresence>
          {activeAlbum && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="mt-12 bg-black bg-opacity-95 backdrop-blur-sm p-8 rounded-2xl border border-red-600 border-opacity-30 shadow-2xl max-w-6xl mx-auto"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <motion.img 
                    src={activeAlbum.cover} 
                    alt={activeAlbum.title}
                    className="w-full h-auto rounded-xl shadow-2xl border-2 border-red-600 border-opacity-50" 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Album actions */}
                  <div className="mt-6 space-y-3">
                    <motion.button
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Play className="w-5 h-5" fill="currentColor" />
                      Play Album
                    </motion.button>
                    
                    <div className="flex gap-3">
                      <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg transition-colors">
                        Add to Playlist
                      </button>
                      <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg transition-colors">
                        Share
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="heading-text text-3xl lg:text-4xl text-red-500 mb-2">{activeAlbum.title}</h3>
                      <div className="flex items-center gap-4 text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5" />
                          <span className="text-lg">{activeAlbum.year}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Music className="w-5 h-5" />
                          <span>{activeAlbum.tracks.length} tracks</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-5 h-5" />
                          <span>Platinum</span>
                        </div>
                      </div>
                    </div>
                    
                    <motion.button
                      className="text-gray-400 hover:text-white text-2xl"
                      onClick={() => setActiveAlbum(null)}
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      ×
                    </motion.button>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-8 text-lg">{activeAlbum.description}</p>
                  
                  <div>
                    <h4 className="heading-text text-xl mb-6 text-red-500 flex items-center gap-2">
                      <Music className="w-5 h-5" />
                      TRACKLIST
                    </h4>
                    <div className="max-h-64 overflow-y-auto custom-scrollbar">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {activeAlbum.tracks.map((track, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 hover:bg-opacity-50 transition-all duration-200 group cursor-pointer"
                            whileHover={{ x: 5 }}
                          >
                            <span className="text-red-500 font-bold w-6 text-center">{index + 1}</span>
                            <span className="group-hover:text-white transition-colors">{track}</span>
                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                              <Play className="w-4 h-4 text-red-500" />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DiscographyTimeline;