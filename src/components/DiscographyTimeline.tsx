import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Calendar, Music, Award, ChevronRight } from 'lucide-react';

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

  return (
    <section id="discography" className="section-container concrete-bg">
      <h2 className="section-title">DISCOGRAPHY</h2>
      
      <div className="mb-8 max-w-3xl mx-auto">
        <p className="text-center text-lg">
          Explore Eminem's legendary catalog spanning over 25 years of hip-hop history, from his underground beginnings to global dominance.
        </p>
      </div>
      
      {/* Album timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
        
        {/* Albums slider */}
        <div className="overflow-x-auto pb-8 md:pb-0">
          <div className="flex md:flex-wrap md:justify-center gap-6 min-w-max md:min-w-0 px-4">
            {albums.map((album) => (
              <div 
                key={album.id}
                className="relative flex-shrink-0 w-48 group cursor-pointer"
                onClick={() => setActiveAlbum(album === activeAlbum ? null : album)}
              >
                <div className="relative overflow-hidden rounded-lg bg-black border-2 border-transparent group-hover:border-primary transition-all duration-300">
                  <img 
                    src={album.cover} 
                    alt={album.title} 
                    className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                    <h3 className="heading-text text-lg text-white">{album.title}</h3>
                    <p className="text-gray-300 text-sm">{album.year}</p>
                  </div>
                </div>
                
                {/* Animated record */}
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-black border-2 border-primary flex items-center justify-center overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="record w-full h-full bg-black">
                    <div className="h-full w-full bg-primary opacity-50 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-black"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Album details */}
        {activeAlbum && (
          <div className="mt-8 bg-black bg-opacity-80 p-6 rounded-lg border border-gray-800 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src={activeAlbum.cover} 
                  alt={activeAlbum.title}
                  className="w-full h-auto rounded-lg shadow-lg" 
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="heading-text text-2xl md:text-3xl text-primary mb-2">{activeAlbum.title}</h3>
                <p className="text-gray-400 mb-4">{activeAlbum.year}</p>
                <p className="mb-4">{activeAlbum.description}</p>
                
                <h4 className="heading-text text-xl mb-2">TRACKLIST:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                  {activeAlbum.tracks.map((track, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-primary">{index + 1}.</span>
                      <span>{track}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DiscographyTimeline;