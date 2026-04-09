import { motion } from "motion/react";

const partners = [
  { name: "Emirates", icon: "✈" },
  { name: "Qatar Airways", icon: "🌍" },
  { name: "Hilton", icon: "🏨" },
  { name: "Marriott", icon: "⭐" },
  { name: "Lufthansa", icon: "🗺" },
  { name: "Air France", icon: "🌐" },
];

export function Partners() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-20 bg-gray-50/30 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent -z-10" />
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-xs font-bold uppercase tracking-[0.3em] text-brand-gray mb-12"
      >
        Traveling with world-class excellence
      </motion.p>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="flex items-center gap-3 px-6 py-3 rounded-2xl glass-morphism shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-300 group cursor-default"
          >
            <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{partner.icon}</span>
            <span className="text-base font-heading font-bold text-brand-dark opacity-70 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {partner.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
