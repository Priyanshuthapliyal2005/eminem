import React, { useState } from 'react';

interface Award {
  id: number;
  name: string;
  count: number;
  description: string;
  image: string;
  years: string[];
}

const awards: Award[] = [
  {
    id: 1,
    name: "Grammy Awards",
    count: 15,
    description: "Eminem has won 15 Grammy Awards, including Best Rap Album for The Slim Shady LP, The Marshall Mathers LP, The Eminem Show, Relapse, Recovery, and The Marshall Mathers LP 2.",
    image: "https://images.pexels.com/photos/761543/pexels-photo-761543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    years: ["2000", "2001", "2003", "2004", "2010", "2011", "2015"]
  },
  {
    id: 2,
    name: "Academy Award",
    count: 1,
    description: "Eminem won an Oscar for Best Original Song for 'Lose Yourself' from the film 8 Mile, making him the first hip-hop artist to win this prestigious award.",
    image: "https://images.pexels.com/photos/104733/pexels-photo-104733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    years: ["2003"]
  },
  {
    id: 3,
    name: "MTV Video Music Awards",
    count: 13,
    description: "Eminem has won 13 MTV Video Music Awards throughout his career for iconic videos like 'The Real Slim Shady', 'Without Me', and 'Lose Yourself'.",
    image: "https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    years: ["2000", "2002", "2003", "2010", "2011"]
  },
  {
    id: 4,
    name: "Billboard Music Awards",
    count: 17,
    description: "Eminem has received 17 Billboard Music Awards, recognizing his commercial success and chart-topping achievements across multiple albums.",
    image: "https://images.pexels.com/photos/5750162/pexels-photo-5750162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    years: ["2001", "2003", "2011", "2014", "2018"]
  },
  {
    id: 5,
    name: "Rock and Roll Hall of Fame",
    count: 1,
    description: "Inducted into the Rock and Roll Hall of Fame in 2022, Eminem became one of the few hip-hop artists to receive this honor, cementing his legacy in music history.",
    image: "https://images.pexels.com/photos/4723520/pexels-photo-4723520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    years: ["2022"]
  }
];

const AwardsWall: React.FC = () => {
  const [activeAward, setActiveAward] = useState<Award | null>(null);

  return (
    <section id="awards" className="section-container concrete-bg">
      <h2 className="section-title">AWARDS WALL</h2>
      
      <div className="mb-12 max-w-3xl mx-auto text-center">
        <p className="text-lg md:text-xl">
          With over 40 major awards including Grammys, an Oscar, and a Rock Hall induction, Eminem stands as one of music's most decorated artists.
        </p>
      </div>
      
      {/* Awards display */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {awards.map((award) => (
          <div
            key={award.id}
            className="relative group cursor-pointer"
            onClick={() => setActiveAward(award === activeAward ? null : award)}
          >
            <div className="aspect-square overflow-hidden rounded-lg bg-black border-2 border-transparent group-hover:border-primary transition-all duration-300">
              <div className="relative h-full">
                <img 
                  src={award.image} 
                  alt={award.name}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="heading-text text-base md:text-lg text-white">{award.name}</h3>
                  <div className="flex items-center gap-1">
                    <span className="text-primary text-2xl font-bold">{award.count}</span>
                    <span className="text-gray-300 text-sm">won</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 3D effect on hover */}
            <div className="absolute inset-0 border-2 border-primary rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:translate-x-2 pointer-events-none"></div>
          </div>
        ))}
      </div>
      
      {/* Award details modal */}
      {activeAward && (
        <div className="mt-12 bg-black bg-opacity-80 p-6 rounded-lg border border-gray-800">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <img 
                src={activeAward.image} 
                alt={activeAward.name}
                className="w-full h-auto rounded-lg shadow-lg" 
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="heading-text text-2xl md:text-3xl text-primary mb-2">{activeAward.name}</h3>
              <p className="text-xl mb-4">
                <span className="text-white font-bold">{activeAward.count}</span> 
                <span className="text-gray-400"> awards</span>
              </p>
              <p className="mb-6 text-gray-300">{activeAward.description}</p>
              
              <h4 className="heading-text text-lg mb-2">YEARS AWARDED:</h4>
              <div className="flex flex-wrap gap-2">
                {activeAward.years.map((year, index) => (
                  <span key={index} className="bg-primary bg-opacity-20 text-primary px-3 py-1 rounded">
                    {year}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AwardsWall;