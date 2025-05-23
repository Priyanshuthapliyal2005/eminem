import React from 'react';

const SobrietySection: React.FC = () => {
  return (
    <section id="recovery" className="section-container bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <img 
          src="https://images.pexels.com/photos/773358/pexels-photo-773358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Texture background"
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="relative z-10">
        <h2 className="section-title">RECOVERY & RESILIENCE</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-dark bg-opacity-80 p-6 md:p-10 rounded-lg border border-gray-800 shadow-xl">
            <div className="typewriter-text text-xl md:text-2xl text-primary mb-6 leading-relaxed">
              "I was a couple of months away from death. I overdosed, almost died. My organs were shutting down. My liver, kidneys, everything."
            </div>
            
            <div className="space-y-6 text-gray-300">
              <p className="leading-relaxed">
                In 2007, Marshall Mathers faced his darkest hour, consuming as many as 60 Valium and 30 Vicodin daily. After nearly dying from an overdose in December of that year, he entered rehab in 2008 and has remained sober since April 20, 2008.
              </p>
              
              <p className="leading-relaxed">
                His sobriety became a cornerstone of his music, inspiring albums like "Recovery" and showing fans that even at rock bottom, change is possible. The raw honesty in tracks like "Not Afraid" and "Going Through Changes" resonated with millions facing similar struggles.
              </p>
            </div>
            
            {/* Sobriety coin visual */}
            <div className="mt-10 flex justify-center">
              <div className="relative w-40 h-40 md:w-48 md:h-48">
                <div className="absolute inset-0 bg-primary rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-2 bg-dark rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="heading-text text-primary text-5xl md:text-6xl">15+</div>
                    <div className="text-sm md:text-base text-gray-300">YEARS SOBER</div>
                    <div className="text-xs text-gray-400 mt-1">APRIL 20, 2008</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quote */}
            <div className="mt-10 text-center">
              <blockquote className="typewriter-text text-lg md:text-xl italic text-gray-300">
                "Getting clean made me grow up. I feel like all the years that I was using, I wasn't growing as a person."
              </blockquote>
            </div>
          </div>
          
          {/* Personal notes - handwritten style */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="transform rotate-2 bg-gray-100 p-3 shadow-xl">
              <div className="bg-white p-4">
                <div className="typewriter-text text-black text-sm md:text-base leading-relaxed">
                  Working out became my drug. I got an addict's brain, and when it came to running, I think I got a little carried away...
                  <div className="mt-2 text-right">- Marshall</div>
                </div>
              </div>
            </div>
            
            <div className="transform -rotate-1 bg-gray-100 p-3 shadow-xl">
              <div className="bg-white p-4">
                <div className="typewriter-text text-black text-sm md:text-base leading-relaxed">
                  The kids are everything. No matter what's going on, as long as they're OK, that's all that matters.
                  <div className="mt-2 text-right">- Marshall</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobrietySection;