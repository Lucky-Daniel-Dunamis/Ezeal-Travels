import { motion } from "motion/react";
import { Plane, Building2, FileText, ShieldCheck, Car, Briefcase, Star, CheckCircle2 } from "lucide-react";

const features = [
  { icon: Plane, label: "Flight Booking" },
  { icon: Building2, label: "Hotel Stays" },
  { icon: FileText, label: "Visa Support" },
  { icon: ShieldCheck, label: "Travel Insurance" },
  { icon: Car, label: "Airport Pickup" },
  { icon: Briefcase, label: "Corporate Travel" },
];

const highlights = [
  "Transparent pricing, no hidden fees",
  "24/7 customer support",
  "Trusted by 2,000+ happy clients",
];

export function SplitFeature() {
  return (
    <section id="about" className="w-full px-6 md:px-12 lg:px-24 py-24 bg-gray-50/50">
      <div className="flex flex-col lg:flex-row items-center gap-16">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="relative w-full max-w-[500px] mx-auto aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-orange/10">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800&h=1000"
              alt="Traveler exploring"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-orange-light rounded-full flex items-center justify-center flex-shrink-0">
                <Star size={22} className="text-brand-orange fill-brand-orange" />
              </div>
              <div>
                <p className="font-heading font-bold text-brand-dark">World Class Agency</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-brand-orange text-sm tracking-wider">★★★★★</span>
                  <span className="text-xs text-brand-gray ml-1">5.0 rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative dots */}
          <div className="absolute -top-6 -left-6 w-28 h-28 bg-[radial-gradient(#33A8D840_2px,transparent_2px)] [background-size:14px_14px] -z-10" />
          {/* Floating stat bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute -right-4 top-12 bg-white rounded-2xl px-4 py-3 shadow-lg border border-gray-100 hidden lg:block"
          >
            <p className="text-2xl font-bold font-heading text-brand-orange">700+</p>
            <p className="text-xs text-brand-gray">Trips Completed</p>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3 block"
          >
            Why Choose Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-brand-dark mb-5 leading-tight"
          >
            Explore all corners of <br /> the world with us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-brand-gray mb-6 leading-relaxed max-w-lg"
          >
            Experience reliability, professionalism, and exceptional customer satisfaction. We provide transparent pricing and expert guidance for smooth, safe, and memorable journeys.
          </motion.p>

          {/* Highlights */}
          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-2.5 mb-10"
          >
            {highlights.map((item, i) => (
              <li key={i} className="flex items-center gap-2.5 text-sm text-brand-dark font-medium">
                <CheckCircle2 size={18} className="text-brand-orange flex-shrink-0" />
                {item}
              </li>
            ))}
          </motion.ul>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 + index * 0.06 }}
                  className="flex items-center gap-3 p-3.5 rounded-xl hover:bg-white hover:shadow-md hover:shadow-brand-orange/5 transition-all duration-300 border border-transparent hover:border-gray-100 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    <Icon size={19} />
                  </div>
                  <span className="font-medium text-brand-dark text-sm">{feature.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
