import { motion } from "motion/react";
import { Star, ShieldCheck, Globe, Hotel, Plane } from "lucide-react";

const services = [
  {
    title: "Flight Booking",
    desc: "Seamless international & local flights",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600&h=400",
    rating: "4.9",
    icon: Plane
  },
  {
    title: "Visa Assistance",
    desc: "Expert documentation guidance",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600&h=400",
    rating: "4.8",
    icon: ShieldCheck
  },
  {
    title: "Hotel Reservations",
    desc: "Premium stays worldwide",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600&h=400",
    rating: "4.9",
    icon: Hotel
  },
  {
    title: "Holiday Packages",
    desc: "Curated memorable journeys",
    image: "https://images.unsplash.com/photo-1499678329028-101435549a4e?auto=format&fit=crop&q=80&w=600&h=400",
    rating: "5.0",
    icon: Globe
  }
];

export function FeaturedServices() {
  return (
    <section id="services" className="w-full px-6 md:px-12 lg:px-24 py-24 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px] -z-10" />
      
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div className="max-w-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-3 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-brand-dark mb-4">Featured Services</h2>
          <p className="text-lg text-brand-gray">Everything you need for a perfect trip across the globe.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-200 text-brand-dark font-semibold hover:border-brand-orange hover:text-brand-orange transition-all group">
          View all services
          <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-premium transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 flex items-center gap-1 glass-morphism px-3 py-1.5 rounded-full">
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-xs font-bold text-brand-dark">{service.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 w-12 h-12 glass-morphism rounded-2xl flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform duration-500">
                  <Icon size={24} />
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-heading font-bold text-xl text-brand-dark mb-2 group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-brand-gray leading-relaxed mb-4">
                  {service.desc}
                </p>
                <button className="text-xs font-bold uppercase tracking-widest text-brand-orange flex items-center gap-1 group/btn">
                  Learn More
                  <span className="group-hover/btn:translate-x-1 transition-transform inline-block">→</span>
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
