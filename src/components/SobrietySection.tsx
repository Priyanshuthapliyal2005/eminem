import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Calendar, Target, Award, Quote, Users, Sparkles, TrendingUp } from 'lucide-react';

const SobrietySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);
  
  const sobrietyStats = [
    { label: "Years Sober", value: "15+", icon: Calendar, color: "green" },
    { label: "Lives Inspired", value: "Millions", icon: Users, color: "blue" },
    { label: "Recovery Songs", value: "25+", icon: Heart, color: "red" },
    { label: "Charity Donated", value: "$10M+", icon: Award, color: "yellow" }
  ];

  return (
    <section ref={containerRef} id="recovery" className="section-container bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Dynamic parallax background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-black/40"
        style={{ y: backgroundY }}
      />
      
      {/* Floating recovery symbols */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-500/20 text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-15, -75, -15],
              rotate: [0, 360],
              opacity: [0, 0.5, 0],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          >
            {['💚', '🌟', '💪', '🙏'][Math.floor(Math.random() * 4)]}
          </motion.div>
        ))}
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <img 
          src="https://images.pexels.com/photos/773358/pexels-photo-773358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Texture background"
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-center mb-8">RECOVERY & RESILIENCE</h2>
          
          <div className="mb-12 max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-300 leading-relaxed">
              From the brink of death to inspiring millions in recovery. Eminem's journey through addiction 
              and sobriety has become one of the most powerful stories of redemption in music history.
            </p>
          </div>
        </motion.div>
        
        {/* Enhanced stats grid */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {sobrietyStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-black bg-opacity-60 backdrop-blur-sm rounded-2xl p-6 border border-green-600 border-opacity-30 text-center hover:border-green-500 transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex justify-center mb-4">
                <div className={`w-16 h-16 rounded-full bg-${stat.color}-600 bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300`}>
                  <stat.icon className={`w-8 h-8 text-${stat.color}-400`} />
                </div>
              </div>
              <div className="heading-text text-2xl text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="bg-black bg-opacity-80 backdrop-blur-sm rounded-3xl border-2 border-green-600 border-opacity-30 shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ rotateX }}
          >
            <div className="p-8 md:p-12">
              {/* Main recovery story */}
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Quote className="w-8 h-8 text-green-400" />
                  <h3 className="heading-text text-2xl lg:text-3xl text-green-400">THE TURNING POINT</h3>
                  <Quote className="w-8 h-8 text-green-400" />
                </div>
                
                <blockquote className="typewriter-text text-xl md:text-2xl text-red-500 mb-8 leading-relaxed max-w-4xl mx-auto">
                  "I was a couple of months away from death. I overdosed, almost died. My organs were shutting down. My liver, kidneys, everything."
                </blockquote>
              </motion.div>
              
              {/* Recovery journey grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Recovery timeline */}
                <motion.div 
                  className="space-y-8"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="space-y-6 text-gray-300">
                    <div className="bg-gray-900 bg-opacity-50 rounded-xl p-6 border border-gray-800 hover:border-green-600 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="text-red-400 font-bold">2007 - Rock Bottom</span>
                      </div>
                      <p className="leading-relaxed">
                        Consuming up to 60 Valium and 30 Vicodin daily. Nearly died from overdose in December.
                      </p>
                    </div>
                    
                    <div className="bg-gray-900 bg-opacity-50 rounded-xl p-6 border border-gray-800 hover:border-green-600 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span className="text-yellow-400 font-bold">2008 - Recovery Begins</span>
                      </div>
                      <p className="leading-relaxed">
                        Entered rehab and achieved sobriety on April 20, 2008. The long road to recovery started.
                      </p>
                    </div>
                    
                    <div className="bg-gray-900 bg-opacity-50 rounded-xl p-6 border border-gray-800 hover:border-green-600 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-green-400 font-bold">2010 - Recovery Album</span>
                      </div>
                      <p className="leading-relaxed">
                        Released "Recovery" album, inspiring millions with raw honesty about addiction struggles.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Sobriety coin visual */}
                <motion.div 
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                >
                  <motion.div 
                    className="relative w-48 h-48 md:w-64 md:h-64 mb-8"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-green-500 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute inset-4 bg-black rounded-full border-4 border-green-500 flex items-center justify-center shadow-2xl">
                      <div className="text-center">
                        <motion.div 
                          className="heading-text text-green-400 text-5xl md:text-6xl mb-2"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          15+
                        </motion.div>
                        <div className="text-base md:text-lg text-gray-300 font-bold">YEARS SOBER</div>
                        <div className="text-xs text-gray-400 mt-2">APRIL 20, 2008</div>
                      </div>
                    </div>
                    
                    {/* Floating achievement badges */}
                    <motion.div 
                      className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center shadow-lg"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Award className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    <motion.div 
                      className="absolute -bottom-4 -left-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg"
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Heart className="w-5 h-5 text-white" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Quote */}
                  <motion.div 
                    className="text-center max-w-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <blockquote className="typewriter-text text-lg md:text-xl italic text-gray-300 mb-4">
                      "Getting clean made me grow up. I feel like all the years that I was using, I wasn't growing as a person."
                    </blockquote>
                    <div className="flex items-center justify-center gap-2 text-green-400">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-sm font-bold">- Marshall Mathers</span>
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Enhanced Personal notes - handwritten style */}
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <motion.div 
              className="transform rotate-2 bg-gray-100 p-4 shadow-2xl"
              whileHover={{ rotate: 0, scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white p-4 relative">
                <div className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="typewriter-text text-black text-sm md:text-base leading-relaxed">
                  Working out became my drug. I got an addict's brain, and when it came to running, I think I got a little carried away...
                  <div className="mt-3 text-right font-bold flex items-center justify-end gap-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    - Marshall
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="transform -rotate-1 bg-gray-100 p-4 shadow-2xl"
              whileHover={{ rotate: 0, scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white p-4 relative">
                <div className="absolute top-2 left-2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="typewriter-text text-black text-sm md:text-base leading-relaxed">
                  The kids are everything. No matter what's going on, as long as they're OK, that's all that matters.
                  <div className="mt-3 text-right font-bold flex items-center justify-end gap-2">
                    <Heart className="w-4 h-4 text-red-600" />
                    - Marshall
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SobrietySection;