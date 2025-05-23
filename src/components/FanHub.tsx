import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Share2, MessageCircle, Star, Users, Trophy, Award, Zap, Crown, Camera, Palette, Music } from 'lucide-react';

interface FanArt {
  id: number;
  title: string;
  artist: string;
  image: string;
  likes: number;
  category: 'digital' | 'traditional' | 'graffiti' | 'photography';
}

const fanArtworks: FanArt[] = [
  {
    id: 1,
    title: "Detroit Legend",
    artist: "EmFan313",
    image: "https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: 2453,
    category: 'digital'
  },
  {
    id: 2,
    title: "Rap God Portrait",
    artist: "SlimShadyFanatic",
    image: "https://images.pexels.com/photos/2218839/pexels-photo-2218839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: 1876,
    category: 'traditional'
  },
  {
    id: 3,
    title: "Recovery Era",
    artist: "MarshallMatters",
    image: "https://images.pexels.com/photos/1629212/pexels-photo-1629212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: 3201,
    category: 'photography'
  },
  {
    id: 4,
    title: "The Real Slim",
    artist: "RapBattleQueen",
    image: "https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: 1587,
    category: 'graffiti'
  },
  {
    id: 5,
    title: "8 Mile Memories",
    artist: "DetroitNative",
    image: "https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: 2890,
    category: 'digital'
  },
  {
    id: 6,
    title: "Lose Yourself",
    artist: "HipHopArtist99",
    image: "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: 4102,
    category: 'traditional'
  }
];

interface FanComment {
  id: number;
  name: string;
  comment: string;
  date: string;
  likes: number;
  avatar: string;
}

const fanComments: FanComment[] = [
  {
    id: 1,
    name: "MusicMaster99",
    comment: "Been listening since The Slim Shady LP. No one can touch Em's lyrical ability! The way he tells stories through his music is absolutely incredible.",
    date: "2 hours ago",
    likes: 234,
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
  },
  {
    id: 2,
    name: "DetroitFan313",
    comment: "The way he came back from addiction is inspirational. Recovery helped me through some dark times. Em's music saved my life literally.",
    date: "5 hours ago",
    likes: 189,
    avatar: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
  },
  {
    id: 3,
    name: "RapGodWorship",
    comment: "That verse in Rap God where he spits 97 words in 15 seconds still blows my mind every time! Technical perfection.",
    date: "Yesterday",
    likes: 456,
    avatar: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
  },
  {
    id: 4,
    name: "8MileRoad",
    comment: "Grew up on 8 Mile too. Em represents Detroit like no other artist. GOAT status confirmed. The city runs through his veins.",
    date: "2 days ago",
    likes: 321,
    avatar: "https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
  }
];

const FanHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'artwork' | 'comments' | 'stats'>('artwork');
  const [likedArt, setLikedArt] = useState<number[]>([]);
  const [likedComments, setLikedComments] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleLike = (id: number) => {
    if (likedArt.includes(id)) {
      setLikedArt(likedArt.filter(artId => artId !== id));
    } else {
      setLikedArt([...likedArt, id]);
    }
  };

  const handleCommentLike = (id: number) => {
    if (likedComments.includes(id)) {
      setLikedComments(likedComments.filter(commentId => commentId !== id));
    } else {
      setLikedComments([...likedComments, id]);
    }
  };

  const filteredArtworks = selectedCategory === 'all' 
    ? fanArtworks 
    : fanArtworks.filter(art => art.category === selectedCategory);

  return (
    <section id="fans" className="section-container bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Dynamic background particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-500 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center mb-4">FAN UNIVERSE</h2>
          <p className="text-center text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
            Join the global community of Eminem fans. Share your art, connect with others, and celebrate the legacy together.
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Tabs */}
          <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-xl border border-red-600 border-opacity-30 shadow-2xl overflow-hidden">
            <div className="flex border-b border-red-600 border-opacity-30">
              {[
                { key: 'artwork', label: 'FAN ARTWORK', icon: Star },
                { key: 'comments', label: 'COMMUNITY', icon: MessageCircle },
                { key: 'stats', label: 'FAN STATS', icon: Trophy }
              ].map(({ key, label, icon: Icon }) => (
                <button 
                  key={key}
                  className={`heading-text flex-1 py-6 text-center text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                    activeTab === key 
                      ? 'bg-red-600 text-white shadow-lg' 
                      : 'bg-transparent text-gray-400 hover:text-white hover:bg-red-600 hover:bg-opacity-20'
                  }`}
                  onClick={() => setActiveTab(key as any)}
                >
                  <Icon size={20} />
                  {label}
                </button>
              ))}
            </div>
            
            {/* Tab content */}
            <div className="p-8">
              {activeTab === 'artwork' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Category Filter */}
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {['all', 'digital', 'traditional', 'graffiti', 'photography'].map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full transition-all duration-300 ${
                          selectedCategory === category
                            ? 'bg-red-600 text-white'
                            : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                        }`}
                      >
                        {category.toUpperCase()}
                      </button>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredArtworks.map((art, index) => (
                      <motion.div 
                        key={art.id} 
                        className="bg-black bg-opacity-70 rounded-xl overflow-hidden border border-gray-800 group hover:border-red-500 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                      >
                        <div className="relative aspect-video overflow-hidden">
                          <img 
                            src={art.image} 
                            alt={art.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                          />
                          <div className="absolute top-2 right-2">
                            <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                              {art.category.toUpperCase()}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="heading-text text-xl text-white mb-1">{art.title}</h3>
                          <p className="text-red-400 text-sm mb-4">by {art.artist}</p>
                          
                          <div className="flex justify-between items-center">
                            <motion.button 
                              className="flex items-center gap-2 text-sm group"
                              onClick={() => handleLike(art.id)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Heart 
                                className={`w-5 h-5 transition-all ${
                                  likedArt.includes(art.id) 
                                    ? 'text-red-500 fill-current' 
                                    : 'text-gray-400 group-hover:text-red-400'
                                }`}
                              />
                              <span className={likedArt.includes(art.id) ? 'text-red-500' : 'text-gray-400'}>
                                {art.likes + (likedArt.includes(art.id) ? 1 : 0)}
                              </span>
                            </motion.button>
                            
                            <motion.button 
                              className="flex items-center gap-2 text-gray-400 hover:text-white text-sm"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Share2 size={16} />
                              Share
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div 
                    className="mt-12 text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button className="heading-text bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg tracking-wider transition-all duration-300 rounded-lg shadow-lg">
                      SUBMIT YOUR ART
                    </button>
                  </motion.div>
                </motion.div>
              )}

              {activeTab === 'comments' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="space-y-6">
                    {fanComments.map((comment, index) => (
                      <motion.div 
                        key={comment.id} 
                        className="bg-black bg-opacity-70 rounded-xl p-6 border border-gray-800 hover:border-red-500 transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex items-start gap-4">
                          <img 
                            src={comment.avatar} 
                            alt={comment.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-red-600"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <span className="font-bold text-white text-lg">{comment.name}</span>
                                <span className="text-gray-500 text-sm ml-3">{comment.date}</span>
                              </div>
                            </div>
                            <p className="text-gray-300 leading-relaxed mb-4">{comment.comment}</p>
                            <div className="flex items-center gap-4">
                              <motion.button
                                className="flex items-center gap-2 text-sm group"
                                onClick={() => handleCommentLike(comment.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Heart 
                                  className={`w-4 h-4 transition-all ${
                                    likedComments.includes(comment.id) 
                                      ? 'text-red-500 fill-current' 
                                      : 'text-gray-400 group-hover:text-red-400'
                                  }`}
                                />
                                <span className={likedComments.includes(comment.id) ? 'text-red-500' : 'text-gray-400'}>
                                  {comment.likes + (likedComments.includes(comment.id) ? 1 : 0)}
                                </span>
                              </motion.button>
                              <button className="text-gray-400 hover:text-white text-sm">Reply</button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-8 bg-black bg-opacity-70 rounded-xl p-6 border border-gray-800">
                    <h3 className="heading-text text-xl mb-4 text-red-500">JOIN THE CONVERSATION</h3>
                    <textarea 
                      className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg p-4 focus:border-red-500 focus:outline-none resize-none"
                      rows={4}
                      placeholder="Share your thoughts about Eminem's legacy..."
                    />
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-gray-500 text-sm">Be respectful and constructive</span>
                      <motion.button 
                        className="heading-text bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 text-lg tracking-wider transition-all duration-300 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        POST
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'stats' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { icon: Users, label: 'Active Fans', value: '2.4M', color: 'red' },
                      { icon: Star, label: 'Artworks Shared', value: '15.7K', color: 'yellow' },
                      { icon: MessageCircle, label: 'Comments Posted', value: '89.2K', color: 'blue' },
                      { icon: Heart, label: 'Total Likes', value: '234.5K', color: 'pink' }
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="bg-black bg-opacity-70 rounded-xl p-6 border border-gray-800 text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, borderColor: '#ef4444' }}
                      >
                        <stat.icon className={`w-8 h-8 mx-auto mb-4 text-${stat.color}-500`} />
                        <div className="heading-text text-3xl text-white mb-2">{stat.value}</div>
                        <div className="text-gray-400">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-8 bg-black bg-opacity-70 rounded-xl p-6 border border-gray-800">
                    <h3 className="heading-text text-xl mb-4 text-red-500">RECENT ACTIVITY</h3>
                    <div className="space-y-3">
                      {[
                        'RapGodFan just shared new artwork',
                        'DetroitLegend posted a comment on Recovery discussion',
                        'SlimShadyFan liked 3 artworks',
                        'MusicLover commented on Lose Yourself tribute'
                      ].map((activity, index) => (
                        <div key={index} className="flex items-center gap-3 text-gray-300">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FanHub;