import { motion } from "motion/react";
import { Globe, BookCheck, Hotel, Users } from "lucide-react";

const stats = [
  { value: "24+", label: "Countries Covered", icon: Globe },
  { value: "700+", label: "Successful Bookings", icon: BookCheck },
  { value: "200+", label: "Hotel Partners", icon: Hotel },
  { value: "2k+", label: "Happy Clients", icon: Users },
];

export function Stats() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-20 relative">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative glass-morphism rounded-[2.5rem] p-8 md:p-10 flex flex-col items-center justify-center text-center shadow-premium hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <Icon size={32} className="text-brand-orange" />
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold font-heading text-brand-dark mb-2 tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-sm md:text-base font-bold text-brand-gray uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
