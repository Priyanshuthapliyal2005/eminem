import React, { useState } from 'react';

interface MediaItem {
  id: number;
  type: 'video' | 'image';
  thumbnail: string;
  title: string;
  description: string;
  source: string;
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: 'video',
    thumbnail: "https://images.pexels.com/photos/2426085/pexels-photo-2426085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Lose Yourself (8 Mile)",
    description: "From the 8 Mile soundtrack, this Oscar-winning track became Eminem's biggest hit and an anthem for perseverance.",
    source: "https://player.vimeo.com/external/368244127.sd.mp4?s=12a14051e6417ed5c970d7bad32374de3216afb2&profile_id=164&oauth2_token_id=57447761"
  },
  {
    id: 2,
    type: 'video',
    thumbnail: "https://images.pexels.com/photos/1336842/pexels-photo-1336842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Rap God (Official Video)",
    description: "Showcasing Eminem's technical mastery with one of the fastest verses in rap history.",
    source: "https://player.vimeo.com/external/368244127.sd.mp4?s=12a14051e6417ed5c970d7bad32374de3216afb2&profile_id=164&oauth2_token_id=57447761"
  },
  {
    id: 3,
    type: 'video',
    thumbnail: "https://images.pexels.com/photos/1540627/pexels-photo-1540627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "The Real Slim Shady (Live at Grammy Awards)",
    description: "Iconic performance with an army of Slim Shady lookalikes that shocked audiences worldwide.",
    source: "https://player.vimeo.com/external/368244127.sd.mp4?s=12a14051e6417ed5c970d7bad32374de3216afb2&profile_id=164&oauth2_token_id=57447761"
  },
  {
    id: 4,
    type: 'image',
    thumbnail: "https://images.pexels.com/photos/2426086/pexels-photo-2426086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Detroit Concert (2018)",
    description: "Performing for his hometown crowd during the Revival Tour.",
    source: "https://images.pexels.com/photos/2426086/pexels-photo-2426086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    type: 'image',
    thumbnail: "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Studio Session (2020)",
    description: "Working on Music to Be Murdered By in the recording studio.",
    source: "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 6,
    type: 'image',
    thumbnail: "https://images.pexels.com/photos/1267325/pexels-photo-1267325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Rock & Roll Hall of Fame (2022)",
    description: "Eminem's induction ceremony into the Rock & Roll Hall of Fame.",
    source: "https://images.pexels.com/photos/1267325/pexels-photo-1267325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const MultimediaGallery: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  return (
    <section className="section-container concrete-bg">
      <h2 className="section-title">MULTIMEDIA</h2>
      
      <div className="mb-8 max-w-3xl mx-auto text-center">
        <p className="text-lg">
          Explore iconic music videos, live performances, and rare footage from throughout Eminem's legendary career.
        </p>
      </div>
      
      {/* Media grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaItems.map((item) => (
          <div 
            key={item.id}
            className="bg-black bg-opacity-60 rounded-lg overflow-hidden border border-gray-800 group cursor-pointer"
            onClick={() => setSelectedMedia(item)}
          >
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={item.thumbnail} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary bg-opacity-80 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-4">
              <h3 className="heading-text text-lg text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Media modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full bg-dark rounded-lg overflow-hidden shadow-2xl">
            <div className="relative">
              {selectedMedia.type === 'video' ? (
                <video 
                  src={selectedMedia.source}
                  controls
                  autoPlay
                  className="w-full aspect-video object-cover"
                />
              ) : (
                <img 
                  src={selectedMedia.source}
                  alt={selectedMedia.title}
                  className="w-full aspect-video object-cover"
                />
              )}
              
              <button 
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black bg-opacity-60 flex items-center justify-center"
                onClick={() => setSelectedMedia(null)}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="heading-text text-2xl text-white mb-2">{selectedMedia.title}</h3>
              <p className="text-gray-300">{selectedMedia.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MultimediaGallery;