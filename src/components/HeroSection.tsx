import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Howl } from 'howler';

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const backgroundMusic = new Howl({
    src: ['https://audio-samples.github.io/samples/mp3/loop.mp3'],
    loop: true,
    volume: 0.1,
    html5: true
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }

    // Start playing background music when in view
    if (inView) {
      backgroundMusic.play();
    }

    return () => {
      backgroundMusic.unload();
    };
  }, [inView]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden" ref={ref}>
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-black to-gray-900 opacity-80"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://player.vimeo.com/external/368244127.sd.mp4?s=12a14051e6417ed5c970d7bad32374de3216afb2&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black z-10"></div>
      
      {/* Content */}
      <motion.div 
        className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-5xl">
          <motion.h1 
            className="heading-text text-5xl md:text-7xl lg:text-8xl mb-4 text-white tracking-wider"
            animate={{ 
              textShadow: [
                "0 0 7px #fff",
                "0 0 10px #fff",
                "0 0 21px #fff",
                "0 0 42px var(--primary)",
                "0 0 82px var(--primary)",
                "0 0 92px var(--primary)",
                "0 0 102px var(--primary)",
                "0 0 151px var(--primary)"
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <span className="glitch-effect" data-text="EMINEM">EMINEM</span>
          </motion.h1>
          
          <motion.div 
            className="graffiti-text text-xl md:text-3xl text-primary mb-8 opacity-90"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            The Legacy of Marshall Mathers
          </motion.div>
          
          <motion.p 
            className="typewriter-text text-lg md:text-2xl max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            "You better lose yourself in the music, the moment<br />
            You own it, you better never let it go..."
          </motion.p>
          
          <motion.div 
            className="mt-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="button-primary">
              EXPLORE THE LEGACY
            </button>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 10, 0],
            opacity: [1, 0.5, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;