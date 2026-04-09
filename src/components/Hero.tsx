import { motion } from "motion/react";
import { MapPin, Calendar, LayoutGrid, Search } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-24 pt-16 pb-32 lg:pt-24 lg:pb-48 overflow-hidden">
      {/* Immersive Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-20%,rgba(51,168,216,0.1),transparent_50%)]" />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px] -z-10" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px] -z-10" 
      />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative mb-12 lg:mb-24">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-semibold mb-6 backdrop-blur-sm border border-brand-orange/20"
          >
            🌎 Explore the world with Eezeal
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-tight mb-6"
          >
            Elevate Your <br />
            <span className="text-gradient">Travel Experience</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-brand-gray mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            Welcome to Eezeal Travels, a professional travel agency dedicated to providing seamless travel planning and exceptional customer service
            {/* Crafting seamless journeys for the modern traveler. From visa documentation to luxury stays, we handle the details so you can focus on the memories. */}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-5 relative z-30"
          >
            <button className="px-10 py-4 bg-brand-orange text-white font-bold rounded-full hover:bg-brand-blue transition-all shadow-[0_10px_30px_-10px_rgba(51,168,216,0.5)] hover:shadow-[0_15px_35px_-10px_rgba(26,143,191,0.6)] hover:-translate-y-1">
              Book a Trip Now
            </button>
            <button className="px-10 py-4 bg-white text-brand-dark border border-gray-100 font-bold rounded-full hover:bg-gray-50 transition-all hover:shadow-lg hover:-translate-y-1">
              Explore Services
            </button>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 relative flex justify-center lg:justify-end"
        >
          <div className="relative group">
            {/* Decorative Orbitals */}
            <div className="absolute inset-0 -m-8 border-2 border-dashed border-brand-orange/20 rounded-full animate-[spin_20s_linear_infinite] -z-10" />
            <div className="absolute inset-0 -m-16 border border-dashed border-brand-blue/10 rounded-full animate-[spin_30s_linear_infinite_reverse] -z-10" />
            
            <div className="relative w-full max-w-[500px] aspect-square rounded-[3rem] bg-gradient-to-br from-brand-orange-light to-white p-4 shadow-premium">
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800&h=800" 
                alt="Happy traveler" 
                className="w-full h-full object-cover rounded-[2.5rem] grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Mini Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 p-4 glass-morphism rounded-2xl flex items-center gap-3 shadow-xl"
              >
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">✓</div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-brand-gray tracking-wider">Visa Secured</p>
                  <p className="text-sm font-bold text-brand-dark">Documentation Ready</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Search Bar - Positioned outside the flex to prevent overlap */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="lg:absolute lg:bottom-24 left-0 right-0 max-w-5xl mx-auto w-full glass-morphism rounded-[2.5rem] p-6 shadow-premium z-20 mt-4 lg:mt-0 px-6 container"
      >
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-2">
          
          <div className="flex-1 w-full flex items-center gap-4 px-4 lg:px-6">
            <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
              <MapPin size={22} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Destination</span>
              <input type="text" placeholder="Where to?" className="text-base font-bold text-brand-dark outline-none placeholder:text-gray-300 bg-transparent" />
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-gray-200/50" />

          <div className="flex-1 w-full flex items-center gap-4 px-4 lg:px-6 text-left">
            <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
              <Calendar size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Travel Date</span>
              <input type="text" placeholder="Select Date" className="text-base font-bold text-brand-dark outline-none placeholder:text-gray-300 bg-transparent" />
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-gray-200/50" />

          <div className="flex-1 w-full flex items-center gap-4 px-4 lg:px-6 text-left">
            <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
              <LayoutGrid size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Service</span>
              <select className="text-base font-bold text-brand-dark outline-none bg-transparent cursor-pointer appearance-none pr-4">
                <option>Flight Booking</option>
                <option>Visa Assistance</option>
                <option>Hotel</option>
                <option>Holiday Package</option>
              </select>
            </div>
          </div>

          <div className="w-full md:w-auto md:ml-4">
            <button className="w-full md:w-auto px-10 py-5 bg-brand-dark text-white rounded-[1.5rem] font-bold hover:bg-brand-orange transition-all flex items-center justify-center gap-3 shadow-xl">
              <Search size={22} />
              <span>Search</span>
            </button>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
