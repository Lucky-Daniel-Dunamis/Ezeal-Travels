import { motion } from "motion/react";
import { Star, MapPin, ArrowRight, Clock, Shield } from "lucide-react";

const packages = [
  {
    title: "Maldives Private Island",
    location: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800&h=1000",
    rating: "4.9",
    duration: "7 Days",
    price: "$1,299",
    tag: "Romantic"
  },
  {
    title: "Swiss Alps Adventure",
    location: "Switzerland",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800&h=1000",
    rating: "4.8",
    duration: "10 Days",
    price: "$1,850",
    tag: "Adventure"
  },
  {
    title: "Santorini Sunset Bliss",
    location: "Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800&h=1000",
    rating: "5.0",
    duration: "6 Days",
    price: "$1,450",
    tag: "Luxury"
  }
];

export function Showcase() {
  return (
    <section id="packages" className="w-full px-6 md:px-12 lg:px-24 py-24 bg-brand-orange/[0.02]">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div className="max-w-xl text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-3 block">Curated Journeys</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-brand-dark mb-4">Travel Packages</h2>
          <p className="text-lg text-brand-gray">Hand-picked destinations for the ultimate travel experience.</p>
        </div>
        <button className="flex items-center gap-2 px-8 py-3 bg-brand-dark text-white font-bold rounded-full hover:bg-brand-orange transition-all shadow-xl group">
          Explore All Packages
          <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowRight size={18} />
          </motion.span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {packages.map((pkg, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group relative h-[600px] rounded-[3rem] overflow-hidden shadow-dreamy hover:shadow-premium transition-all duration-700"
          >
            {/* Background Image */}
            <img 
              src={pkg.image} 
              alt={pkg.title} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
              referrerPolicy="no-referrer"
            />
            
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-transparent to-black/20" />
            <div className="absolute inset-0 bg-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Top Badges */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
              <div className="glass-morphism px-4 py-2 rounded-2xl flex items-center gap-2">
                <Star size={14} className="text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-bold text-brand-dark">{pkg.rating}</span>
              </div>
              <div className="glass-morphism px-4 py-2 rounded-2xl flex items-center gap-2">
                <Shield size={14} className="text-brand-orange" />
                <span className="text-sm font-bold text-brand-orange">{pkg.tag}</span>
              </div>
            </div>

            {/* Content Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-8 pb-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center gap-2 text-white/70 text-sm mb-3">
                <MapPin size={16} className="text-brand-orange" />
                <span className="font-medium">{pkg.location}</span>
                <span className="mx-2">•</span>
                <Clock size={16} className="text-brand-orange" />
                <span className="font-medium">{pkg.duration}</span>
              </div>
              
              <h3 className="text-3xl font-bold font-heading text-white mb-2 leading-tight">
                {pkg.title}
              </h3>
              <p className="text-white/60 text-sm mb-8 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                Experience the pinnacle of {pkg.tag.toLowerCase()} with our all-inclusive {pkg.duration.toLowerCase()} guided tour.
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-white/50 text-xs block mb-1">Starting from</span>
                  <span className="text-2xl font-bold text-white tracking-tight">{pkg.price}</span>
                </div>
                <button className="px-6 py-3 bg-white text-brand-dark font-bold rounded-2xl hover:bg-brand-orange hover:text-white transition-all shadow-lg scale-95 group-hover:scale-100 duration-500">
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
