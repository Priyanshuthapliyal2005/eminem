import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-red-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="relative">
        {/* Enhanced Detroit skyline silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden">
          <div className="w-full h-full bg-contain bg-bottom bg-no-repeat opacity-20" 
               style={{backgroundImage: `url('https://svgsilh.com/svg/37716.svg')`}}></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="heading-text text-4xl text-red-500 tracking-widest mb-4">
                E<span className="text-white">MINEM</span>
                <span className="block text-sm text-gray-400 tracking-normal font-normal mt-1">LEGACY</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                The ultimate fan destination celebrating the legendary career of Marshall Mathers III. 
                From Detroit to worldwide domination.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                {[
                  { icon: "facebook", path: "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" },
                  { icon: "twitter", path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
                  { icon: "instagram", path: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" },
                  { icon: "youtube", path: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" }
                ].map((social, index) => (
                  <motion.a 
                    key={social.icon}
                    href="#" 
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.path} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="heading-text text-xl text-red-500 mb-6">QUICK LINKS</h3>
              <ul className="space-y-3">
                {[
                  { href: "#home", label: "Home" },
                  { href: "#discography", label: "Discography" },
                  { href: "#biography", label: "Biography" },
                  { href: "#awards", label: "Awards" },
                  { href: "#recovery", label: "Recovery Journey" },
                  { href: "#fans", label: "Fan Universe" }
                ].map((link, index) => (
                  <motion.li 
                    key={link.href}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="heading-text text-xl text-red-500 mb-6">CONNECT</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span>Detroit, Michigan</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-red-500" />
                  <span>fans@eminemlegacy.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-red-500" />
                  <span>+1 (313) EMINEM</span>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-8 space-y-2">
                <h4 className="text-sm text-gray-500 font-semibold">COMMUNITY STATS</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Active Fans</span>
                    <span className="text-red-500 font-bold">2.4M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Countries</span>
                    <span className="text-red-500 font-bold">195</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Years Legacy</span>
                    <span className="text-red-500 font-bold">25+</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="heading-text text-xl text-red-500 mb-6">STAY UPDATED</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Get the latest news, releases, and exclusive content delivered straight to your inbox.
              </p>
              <form className="space-y-4">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300"
                  />
                </div>
                <motion.button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  SUBSCRIBE NOW
                </motion.button>
              </form>
              
              <p className="text-xs text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
          
          {/* Bottom Section */}
          <motion.div 
            className="mt-16 pt-8 border-t border-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="text-gray-500 text-sm text-center lg:text-left">
                © 2025 Eminem Legacy Fan Website. This site is not affiliated with Eminem or Shady Records.
                <br className="hidden sm:block" />
                Made with <Heart className="w-4 h-4 text-red-500 inline mx-1" /> by fans, for fans.
              </div>
              <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm text-gray-500">
                <a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-red-500 transition-colors">Contact</a>
                <a href="#" className="hover:text-red-500 transition-colors">Support</a>
              </div>
            </div>
          </motion.div>
          
          {/* Easter egg quote */}
          <motion.div 
            className="mt-8 text-center text-xs text-gray-700 opacity-40 hover:opacity-100 transition-all duration-500 cursor-default"
            whileHover={{ scale: 1.05 }}
          >
            "Success is my only option, failure's not." - Marshall Mathers
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;