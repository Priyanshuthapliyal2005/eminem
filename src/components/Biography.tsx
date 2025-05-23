import React, { useState } from 'react';

interface BiographySection {
  id: number;
  title: string;
  period: string;
  content: string;
  image: string;
}

const biographySections: BiographySection[] = [
  {
    id: 1,
    title: "Early Life",
    period: "1972-1996",
    content: "Marshall Bruce Mathers III was born on October 17, 1972, in St. Joseph, Missouri. Raised by a single mother in Detroit, Michigan, young Marshall faced poverty, bullying, and constant relocation between Michigan and Missouri. His love for hip-hop began early, with Marshall creating alter-ego 'M&M' (later Eminem) while battling in Detroit's underground rap scene. Despite dropping out of Lincoln High School at 17, he worked tirelessly to hone his skills in a genre dominated by Black artists.",
    image: "https://images.pexels.com/photos/14417034/pexels-photo-14417034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    title: "Rise to Fame",
    period: "1997-2000",
    content: "After releasing independent debut 'Infinite' in 1996, Eminem developed his controversial 'Slim Shady' persona, catching Dr. Dre's attention at the 1997 Rap Olympics. Their partnership launched 'The Slim Shady LP' in 1999, introducing the world to Eminem's technical skill, dark humor, and unfiltered approach. 'The Marshall Mathers LP' followed in 2000, selling 1.76 million copies in its first week, making it the fastest-selling rap album in history at that time. The controversy surrounding his lyrics only fueled his meteoric rise.",
    image: "https://images.pexels.com/photos/5282269/pexels-photo-5282269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    title: "Hollywood & Hiatus",
    period: "2001-2008",
    content: "Eminem's 2002 semi-autobiographical film '8 Mile' was a critical and commercial success, with 'Lose Yourself' becoming the first rap song to win an Academy Award for Best Original Song. His success continued with 'The Eminem Show' and 'Encore,' but personal struggles intensified. Following the murder of his best friend Proof in 2006, Eminem retreated from the public eye, battling addiction to prescription medication and nearly dying from an overdose in December 2007.",
    image: "https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    title: "Comeback & Legacy",
    period: "2009-Present",
    content: "After rehabilitation, Eminem returned with 'Relapse' (2009) and 'Recovery' (2010), the latter becoming the best-selling album of 2010 worldwide. 'The Marshall Mathers LP 2' (2013) won him his sixth Grammy for Best Rap Album. Despite changing hip-hop landscapes, Eminem continued releasing chart-topping albums including 'Revival' (2017), 'Kamikaze' (2018), 'Music to Be Murdered By' (2020), and 'The Death of Slim Shady' (2023). With over 220 million records sold worldwide, Eminem's influence extends beyond music to business ventures including Shady Records and his charitable Marshall Mathers Foundation.",
    image: "https://images.pexels.com/photos/6177613/pexels-photo-6177613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const Biography: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(1);

  return (
    <section id="biography" className="section-container bg-black">
      <h2 className="section-title">BIOGRAPHY</h2>
      
      {/* Biography tabs navigation */}
      <div className="flex flex-wrap justify-center mb-8 border-b border-gray-800">
        {biographySections.map((section) => (
          <button
            key={section.id}
            className={`heading-text px-4 py-2 text-lg md:text-xl transition-all ${
              activeSection === section.id ? 'text-primary border-b-2 border-primary' : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveSection(section.id)}
          >
            {section.title}
          </button>
        ))}
      </div>
      
      {/* Biography content */}
      {biographySections.map((section) => (
        <div
          key={section.id}
          className={`transition-opacity duration-500 ${
            activeSection === section.id ? 'opacity-100' : 'hidden opacity-0'
          }`}
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="relative">
                <img 
                  src={section.image} 
                  alt={section.title}
                  className="w-full h-auto rounded-lg" 
                />
                <div className="absolute top-0 right-0 bg-primary px-3 py-1 heading-text">
                  {section.period}
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="typewriter-text mb-6 text-xl md:text-2xl text-primary">
                {section.title}
              </div>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-300">{section.content}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Polaroid note - easter egg */}
      <div className="mt-16 max-w-md mx-auto transform -rotate-3 bg-gray-100 p-3 shadow-xl">
        <div className="bg-white p-2">
          <div className="typewriter-text text-black p-4 text-sm md:text-base leading-relaxed">
            "Sometimes I feel like rap music is almost the key to stopping racism. If everyone listened to rap, everyone would know everybody else's mindstate and would better understand each other." 
            <div className="mt-2 text-right">- Marshall, 1999</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;