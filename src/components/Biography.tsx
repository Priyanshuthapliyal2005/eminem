import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, Star, Award, Heart, ChevronRight, Play, Users } from 'lucide-react';

interface BiographySection {
  id: number;
  title: string;
  period: string;
  content: string;
  image: string;
  achievements: string[];
  keyMoment: string;
}

const biographySections: BiographySection[] = [
  {
    id: 1,
    title: "Early Life",
    period: "1972-1996",
    content: "Marshall Bruce Mathers III was born on October 17, 1972, in St. Joseph, Missouri. Raised by a single mother in Detroit, Michigan, young Marshall faced poverty, bullying, and constant relocation between Michigan and Missouri. His love for hip-hop began early, with Marshall creating alter-ego 'M&M' (later Eminem) while battling in Detroit's underground rap scene. Despite dropping out of Lincoln High School at 17, he worked tirelessly to hone his skills in a genre dominated by Black artists.",
    image: "https://images.pexels.com/photos/14417034/pexels-photo-14417034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    achievements: ["First rap battle win at age 14", "Created M&M persona", "Competed in Detroit underground scene"],
    keyMoment: "1997 Rap Olympics - 2nd place finish that changed everything"
  },
  {
    id: 2,
    title: "Rise to Fame",
    period: "1997-2000",
    content: "After releasing independent debut 'Infinite' in 1996, Eminem developed his controversial 'Slim Shady' persona, catching Dr. Dre's attention at the 1997 Rap Olympics. Their partnership launched 'The Slim Shady LP' in 1999, introducing the world to Eminem's technical skill, dark humor, and unfiltered approach. 'The Marshall Mathers LP' followed in 2000, selling 1.76 million copies in its first week, making it the fastest-selling rap album in history at that time. The controversy surrounding his lyrics only fueled his meteoric rise.",
    image: "https://images.pexels.com/photos/5282269/pexels-photo-5282269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    achievements: ["First white rapper to win Grammy for Best Rap Album", "The Slim Shady LP went triple platinum", "Created Slim Shady persona"],
    keyMoment: "Meeting Dr. Dre - 'When I heard Em, I didn't even know he was white'"
  },
  {
    id: 3,
    title: "Hollywood & Hiatus",
    period: "2001-2008",
    content: "Eminem's 2002 semi-autobiographical film '8 Mile' was a critical and commercial success, with 'Lose Yourself' becoming the first rap song to win an Academy Award for Best Original Song. His success continued with 'The Eminem Show' and 'Encore,' but personal struggles intensified. Following the murder of his best friend Proof in 2006, Eminem retreated from the public eye, battling addiction to prescription medication and nearly dying from an overdose in December 2007.",
    image: "https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    achievements: ["First rapper to win Academy Award", "8 Mile grossed $242 million worldwide", "The Eminem Show debuted at #1"],
    keyMoment: "December 2007 - Near-fatal overdose becomes turning point"
  },
  {
    id: 4,
    title: "Comeback & Legacy",
    period: "2009-Present",
    content: "After rehabilitation, Eminem returned with 'Relapse' (2009) and 'Recovery' (2010), the latter becoming the best-selling album of 2010 worldwide. 'The Marshall Mathers LP 2' (2013) won him his sixth Grammy for Best Rap Album. Despite changing hip-hop landscapes, Eminem continued releasing chart-topping albums including 'Revival' (2017), 'Kamikaze' (2018), 'Music to Be Murdered By' (2020), and 'The Death of Slim Shady' (2023). With over 220 million records sold worldwide, Eminem's influence extends beyond music to business ventures including Shady Records and his charitable Marshall Mathers Foundation.",
    image: "https://images.pexels.com/photos/6177613/pexels-photo-6177613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    achievements: ["15+ years sober", "220+ million records sold worldwide", "Rock & Roll Hall of Fame inductee"],
    keyMoment: "2022 - Rock & Roll Hall of Fame induction speech brings tears"
  }
];

const Biography: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(1);
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} id="biography" className="section-container bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Dynamic parallax background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-black/40"
        style={{ y: backgroundY }}
      />
      
      {/* Floating story elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-red-500/10 text-lg font-bold"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -80, -20],
              rotate: [0, 180],
              opacity: [0, 0.3, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          >
            {['♪', '★', '◆', '▲'][Math.floor(Math.random() * 4)]}
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
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-center mb-6">THE MARSHALL MATHERS STORY</h2>
          
          <div className="mb-12 max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-300 leading-relaxed">
              From trailer parks to Grammy stages, follow the extraordinary journey of Marshall Bruce Mathers III. 
              A story of perseverance, controversy, addiction, recovery, and ultimately, legendary status in hip-hop history.
            </p>
          </div>
        </motion.div>
        
        {/* Enhanced Biography tabs navigation */}
        <motion.div 
          className="flex flex-wrap justify-center mb-12 border-b border-red-600 border-opacity-30 bg-black bg-opacity-50 backdrop-blur-sm rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {biographySections.map((section, index) => (
            <motion.button
              key={section.id}
              className={`heading-text px-6 py-4 mx-2 mb-4 text-lg md:text-xl transition-all duration-300 rounded-lg border-2 relative overflow-hidden ${
                activeSection === section.id 
                  ? 'text-white border-red-600 bg-red-600 shadow-lg shadow-red-600/50' 
                  : 'text-gray-400 border-transparent hover:text-white hover:border-red-600 hover:border-opacity-50'
              }`}
              onClick={() => setActiveSection(section.id)}
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{section.title}</span>
                </div>
                <span className="text-sm opacity-70">{section.period}</span>
              </div>
              
              {/* Animated background */}
              {activeSection === section.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 -z-10"
                  layoutId="activeTab"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Enhanced Biography content */}
        <AnimatePresence mode="wait">
          {biographySections.map((section) => (
            activeSection === section.id && (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, x: 300, rotateY: 90 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -300, rotateY: -90 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="max-w-7xl mx-auto"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Enhanced Image Section */}
                  <motion.div 
                    className="relative group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative overflow-hidden rounded-2xl border-2 border-red-600 border-opacity-30 shadow-2xl">
                      <img 
                        src={section.image} 
                        alt={section.title}
                        className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      
                      {/* Dynamic overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                      
                      {/* Period badge */}
                      <motion.div 
                        className="absolute top-4 right-4 bg-red-600 px-4 py-2 rounded-full shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <span className="heading-text text-white text-sm">{section.period}</span>
                      </motion.div>
                      
                      {/* Key moment callout */}
                      <motion.div 
                        className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-80 backdrop-blur-sm rounded-xl p-4 border border-red-600 border-opacity-30"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-xs text-yellow-400 font-bold">KEY MOMENT</span>
                        </div>
                        <p className="text-white text-sm">{section.keyMoment}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Enhanced Content Section */}
                  <motion.div 
                    className="space-y-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div>
                      <motion.h3 
                        className="heading-text text-3xl lg:text-4xl text-red-500 mb-4"
                        whileHover={{ scale: 1.05, x: 10 }}
                      >
                        {section.title}
                      </motion.h3>
                      
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center gap-2 text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span>Detroit, Michigan</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Users className="w-4 h-4" />
                          <span>Millions Influenced</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="prose prose-lg prose-invert max-w-none">
                      <motion.p 
                        className="text-gray-300 leading-relaxed text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {section.content}
                      </motion.p>
                    </div>
                    
                    {/* Achievements grid */}
                    <motion.div 
                      className="mt-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <h4 className="heading-text text-xl mb-4 text-red-500 flex items-center gap-2">
                        <Award className="w-5 h-5" />
                        KEY ACHIEVEMENTS
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {section.achievements.map((achievement, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center gap-3 p-3 rounded-lg bg-gray-900 bg-opacity-50 border border-gray-800 hover:border-red-600 transition-all duration-200 group cursor-pointer"
                            whileHover={{ x: 5, scale: 1.02 }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-red-500 rounded-full group-hover:bg-yellow-400 transition-colors"></div>
                            <span className="text-gray-300 group-hover:text-white transition-colors">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                    
                    {/* Action buttons */}
                    <motion.div 
                      className="flex gap-4 mt-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                    >
                      <motion.button
                        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="w-4 h-4" />
                        Listen to Era
                      </motion.button>
                      
                      <motion.button
                        className="flex items-center gap-2 bg-transparent border border-red-600 hover:bg-red-600 hover:bg-opacity-20 text-red-500 hover:text-white px-6 py-3 rounded-lg transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ChevronRight className="w-4 h-4" />
                        Read More
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Polaroid note - enhanced easter egg */}
      <motion.div 
        className="mt-20 max-w-md mx-auto transform -rotate-3 bg-gray-100 p-4 shadow-2xl relative"
        whileHover={{ 
          rotate: 0, 
          scale: 1.05,
          boxShadow: "0 25px 50px rgba(0,0,0,0.5)"
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-white p-4 relative">
          <motion.div 
            className="absolute top-2 right-2 w-4 h-4 bg-red-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="typewriter-text text-black p-4 text-sm md:text-base leading-relaxed">
            "Sometimes I feel like rap music is almost the key to stopping racism. If everyone listened to rap, everyone would know everybody else's mindstate and would better understand each other." 
            <div className="mt-2 text-right font-bold">- Marshall, 1999</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Biography;