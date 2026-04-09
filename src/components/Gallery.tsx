import { motion } from "motion/react";
import { Camera } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800&h=1000",
    className: "col-span-1 row-span-2",
    label: "Mountain Escape",
    location: "Alps, Europe",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800&h=600",
    className: "col-span-1 row-span-1",
    label: "Tropical Paradise",
    location: "Maldives",
  },
  {
    src: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800&h=600",
    className: "col-span-1 row-span-1",
    label: "City of Lights",
    location: "Paris, France",
  },
  {
    src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800&h=600",
    className: "col-span-1 row-span-1",
    label: "Desert Luxury",
    location: "Dubai, UAE",
  },
  {
    src: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=800&h=1000",
    className: "col-span-1 row-span-2",
    label: "Beach Vibes",
    location: "Bali, Indonesia",
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800&h=600",
    className: "col-span-1 row-span-1",
    label: "Lake Serenity",
    location: "Scandinavia",
  },
];

export function Gallery() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-20">
      <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-2 block">
            Captured Moments
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-2">
            Travel Gallery
          </h2>
          <p className="text-brand-gray">Inspiring destinations from around the world.</p>
        </div>
        <button className="flex items-center gap-1.5 text-brand-orange font-medium hover:text-brand-blue transition-colors group">
          View all
          <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[200px] md:auto-rows-[260px]">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group relative rounded-2xl overflow-hidden cursor-pointer ${img.className}`}
          >
            {/* Photo */}
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />

            {/* Gradient overlay — always visible at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Hover overlay tint */}
            <div className="absolute inset-0 bg-brand-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            {/* Camera icon on hover */}
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 shadow-md">
              <Camera size={14} className="text-brand-orange" />
            </div>

            {/* Label — slides up from bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white font-heading font-semibold text-sm md:text-base leading-tight">
                {img.label}
              </p>
              <p className="text-white/70 text-xs mt-0.5">{img.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
