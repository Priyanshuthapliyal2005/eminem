import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Award, Trophy, Star, Crown, Calendar, Users, Sparkles, Play, ChevronRight } from 'lucide-react';

interface Award {
  id: number;
  name: string;
  count: number;
  description: string;
  image: string;
  years: string[];
  significance: string;
  rarity: 'common' | 'rare' | 'legendary';
}

const awards: Award[] = [
  {
    id: 1,
    name: "Grammy Awards",
    count: 15,
    description: "Eminem has won 15 Grammy Awards, including Best Rap Album for The Slim Shady LP, The Marshall Mathers LP, The Eminem Show, Relapse, Recovery, and The Marshall Mathers LP 2.",
    image: "https://images.pexels.com/photos/761543/pexels-photo-761543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    years: ["2000", "2001", "2003", "2004", "2010", "2011", "2015"],
    significance: "Most prestigious music awards in the industry",
    rarity: 'legendary'
  },
  {
    id: 2,
    name: "Academy Award",
    count: 1,
    description: "Eminem won an Oscar for Best Original Song for 'Lose Yourself' from the film 8 Mile, making him the first hip-hop artist to win this prestigious award.",
    image: "https://images.pexels.com/photos/104733/pexels-photo-104733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    years: ["2003"],
    significance: "First rapper to win an Academy Award",
    rarity: 'legendary'
  },
  {
    id: 3,
    name: "MTV Video Music Awards",
    count: 13,
    description: "Eminem has won 13 MTV Video Music Awards throughout his career for iconic videos like 'The Real Slim Shady', 'Without Me', and 'Lose Yourself'.",
    image: "https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    years: ["2000", "2002", "2003", "2010", "2011"],
    significance: "Recognition for groundbreaking music videos",
    rarity: 'rare'
  },
  {
    id: 4,
    name: "Billboard Music Awards",
    count: 17,
    description: "Eminem has received 17 Billboard Music Awards, recognizing his commercial success and chart-topping achievements across multiple albums.",
    image: "https://images.pexels.com/photos/5750162/pexels-photo-5750162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    years: ["2001", "2003", "2011", "2014", "2018"],
    significance: "Commercial success and chart dominance",
    rarity: 'rare'
  },
  {
    id: 5,
    name: "Rock and Roll Hall of Fame",
    count: 1,
    description: "Inducted into the Rock and Roll Hall of Fame in 2022, Eminem became one of the few hip-hop artists to receive this honor, cementing his legacy in music history.",
    image: "https://images.pexels.com/photos/4723520/pexels-photo-4723520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    years: ["2022"],
    significance: "Ultimate recognition of cultural impact",
    rarity: 'legendary'
  }
];

const AwardsWall: React.FC = () => {
  const [activeAward, setActiveAward] = useState<Award | null>(null);
  const [hoveredAward, setHoveredAward] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  const getRarityColor = (rarity: 'common' | 'rare' | 'legendary') => {
    switch (rarity) {
      case 'legendary': return 'from-yellow-400 to-orange-500';
      case 'rare': return 'from-purple-400 to-blue-500';
      case 'common': return 'from-gray-400 to-gray-600';
    }
  };

  const getRarityGlow = (rarity: 'common' | 'rare' | 'legendary') => {
    switch (rarity) {
      case 'legendary': return 'shadow-yellow-500/50';
      case 'rare': return 'shadow-purple-500/50';
      case 'common': return 'shadow-gray-500/50';
    }
  };

  return (
    <section ref={containerRef} id="awards" className="section-container bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Dynamic parallax background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-transparent to-black/40"
        style={{ y: backgroundY }}
      />
      
      {/* Floating award symbols */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-500/20 text-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, -60, -10],
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
            {['🏆', '🎖️', '⭐', '👑'][Math.floor(Math.random() * 4)]}
          </motion.div>
        ))}
      </div>
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-center mb-6">HALL OF HONORS</h2>
          
          <div className="mb-12 max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-300 leading-relaxed">
              With over 40 major awards including Grammys, an Oscar, and a Rock Hall induction, 
              Eminem stands as one of music's most decorated artists. Each trophy tells a story 
              of groundbreaking achievements and cultural impact.
            </p>
          </div>
        </motion.div>
        
        {/* Enhanced Awards display */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              className="relative group cursor-pointer"
              onClick={() => setActiveAward(award === activeAward ? null : award)}
              onMouseEnter={() => setHoveredAward(award.id)}
              onMouseLeave={() => setHoveredAward(null)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              {/* Award card */}
              <div className={`aspect-square overflow-hidden rounded-2xl bg-black border-2 transition-all duration-500 ${
                hoveredAward === award.id 
                  ? `border-yellow-400 shadow-2xl ${getRarityGlow(award.rarity)}` 
                  : 'border-gray-800 hover:border-gray-600'
              }`}>
                <div className="relative h-full">
                  <img 
                    src={award.image} 
                    alt={award.name}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" 
                  />
                  
                  {/* Dynamic gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${getRarityColor(award.rarity)} opacity-20 group-hover:opacity-40 transition-all duration-300`}></div>
                  
                  {/* Award info overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                  
                  {/* Award details */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-yellow-400" />
                        <span className="text-yellow-400 text-xs font-bold uppercase tracking-wider">
                          {award.rarity}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(Math.min(award.count, 5))].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" />
                        ))}
                      </div>
                    </div>
                    
                    <h3 className="heading-text text-lg text-white mb-1 line-clamp-2">{award.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Crown className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 text-2xl font-bold">{award.count}</span>
                        <span className="text-gray-300 text-sm">won</span>
                      </div>
                      <span className="text-gray-400 text-xs">{award.years[0]} - {award.years[award.years.length - 1]}</span>
                    </div>
                  </div>
                  
                  {/* Rarity indicator */}
                  <div className="absolute top-4 right-4">
                    <motion.div 
                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${getRarityColor(award.rarity)}`}
                      animate={{ 
                        scale: hoveredAward === award.id ? [1, 1.2, 1] : 1,
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  
                  {/* Hover effect - glowing border */}
                  {hoveredAward === award.id && (
                    <motion.div
                      className={`absolute inset-0 border-2 border-yellow-400 rounded-2xl`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{
                        boxShadow: '0 0 30px rgba(250, 204, 21, 0.6)',
                      }}
                    />
                  )}
                </div>
              </div>
              
              {/* 3D floating effect */}
              <motion.div 
                className="absolute inset-0 border-2 border-yellow-400 rounded-2xl opacity-0 pointer-events-none"
                animate={{ 
                  opacity: hoveredAward === award.id ? 0.3 : 0,
                  y: hoveredAward === award.id ? -8 : 0,
                  x: hoveredAward === award.id ? 8 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Enhanced Award details modal */}
        <AnimatePresence>
          {activeAward && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ duration: 0.4, type: "spring" }}
              className="mt-16 bg-black bg-opacity-95 backdrop-blur-sm p-8 rounded-3xl border-2 border-yellow-400 border-opacity-50 shadow-2xl max-w-6xl mx-auto relative overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-transparent to-black/40"></div>
              
              <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Award image and stats */}
                  <motion.div 
                    className="space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="relative">
                      <img 
                        src={activeAward.image} 
                        alt={activeAward.name}
                        className="w-full h-80 object-cover rounded-2xl shadow-2xl border-2 border-yellow-400 border-opacity-30" 
                      />
                      
                      {/* Award statistics overlay */}
                      <div className="absolute top-4 left-4 bg-black bg-opacity-80 backdrop-blur-sm rounded-xl p-4 border border-yellow-400 border-opacity-30">
                        <div className="flex items-center gap-3 text-yellow-400 mb-2">
                          <Sparkles className="w-5 h-5" />
                          <span className="font-bold text-sm uppercase tracking-wider">{activeAward.rarity}</span>
                        </div>
                        <div className="text-white text-2xl font-bold">{activeAward.count}</div>
                        <div className="text-gray-400 text-xs">Total Awards</div>
                      </div>
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex gap-4">
                      <motion.button
                        className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="w-4 h-4" />
                        Watch Moments
                      </motion.button>
                      
                      <motion.button
                        className="flex items-center gap-2 bg-transparent border border-yellow-600 hover:bg-yellow-600 hover:bg-opacity-20 text-yellow-500 hover:text-white px-6 py-3 rounded-lg transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ChevronRight className="w-4 h-4" />
                        Full History
                      </motion.button>
                    </div>
                  </motion.div>
                  
                  {/* Award details */}
                  <motion.div 
                    className="space-y-6"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="heading-text text-3xl lg:text-4xl text-yellow-400 mb-3">{activeAward.name}</h3>
                        <div className="flex items-center gap-4 text-gray-400 mb-4">
                          <div className="flex items-center gap-2">
                            <Award className="w-5 h-5" />
                            <span className="text-lg">{activeAward.count} awards</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>{activeAward.years.length} years</span>
                          </div>
                        </div>
                        <div className="bg-yellow-600 bg-opacity-20 border border-yellow-600 border-opacity-30 rounded-lg p-3 mb-4">
                          <p className="text-yellow-300 text-sm font-semibold">{activeAward.significance}</p>
                        </div>
                      </div>
                      
                      <motion.button
                        className="text-gray-400 hover:text-white text-3xl"
                        onClick={() => setActiveAward(null)}
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        ×
                      </motion.button>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed text-lg">{activeAward.description}</p>
                    
                    <div>
                      <h4 className="heading-text text-xl mb-4 text-yellow-400 flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        YEARS AWARDED
                      </h4>
                      <div className="grid grid-cols-4 gap-3">
                        {activeAward.years.map((year, index) => (
                          <motion.div
                            key={index}
                            className="bg-yellow-600 bg-opacity-20 border border-yellow-600 border-opacity-50 text-yellow-400 px-4 py-2 rounded-lg text-center font-bold hover:bg-opacity-30 transition-all duration-200"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            {year}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Stats bar */}
                    <div className="bg-gray-900 bg-opacity-50 rounded-xl p-4 border border-gray-800">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400">Industry Recognition</span>
                        <span className="text-yellow-400 font-bold">
                          {Math.min(activeAward.count * 10, 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <motion.div 
                          className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min(activeAward.count * 10, 100)}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AwardsWall;