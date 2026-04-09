import { Instagram, Twitter, Facebook, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-6 md:px-12 lg:px-24 pt-24 pb-12 bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-orange/[0.03] to-transparent -z-10" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <div
              className="px-3 py-1.5 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #e8f6fd 0%, #d0ecf8 60%, #bde4f5 100%)",
                boxShadow: "0 2px 12px 0 rgba(51,168,216,0.13), 0 0 0 1.5px rgba(51,168,216,0.18)",
              }}
            >
              <img src="/logo.png" alt="Eezeal Travels Logo" className="h-12 w-auto" style={{ mixBlendMode: 'multiply' }} />
            </div>
          </div>
          <p className="text-brand-gray text-base leading-relaxed max-w-xs">
            Redefining the art of travel. We curate seamless journeys and unforgettable experiences for the modern explorer.
          </p>
          <div className="flex items-center gap-4">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center text-brand-dark hover:bg-brand-orange hover:text-white transition-all shadow-sm"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Links Columns */}
        <div>
          <h4 className="font-heading font-bold text-lg text-brand-dark mb-8 border-b border-brand-orange/20 pb-2 inline-block">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-4">
            {["Home", "Services", "About Us", "Packages"].map((link) => (
              <li key={link}>
                <a href="#" className="text-sm font-medium text-brand-gray hover:text-brand-orange flex items-center gap-2 group transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-lg text-brand-dark mb-8 border-b border-brand-orange/20 pb-2 inline-block">
            Support
          </h4>
          <ul className="flex flex-col gap-4">
            {["FAQ's", "Privacy Policy", "Terms", "Contact"].map((link) => (
              <li key={link}>
                <a href="#" className="text-sm font-medium text-brand-gray hover:text-brand-orange flex items-center gap-2 group transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className="glass-morphism p-8 rounded-[2rem] shadow-premium">
          <h4 className="font-heading font-bold text-lg text-brand-dark mb-6">
            Get in Touch
          </h4>
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0">
                <MapPin size={16} />
              </div>
              <p className="text-xs font-medium text-brand-gray leading-tight">123 Travel Ave, Global City, World 10012</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0">
                <Phone size={16} />
              </div>
              <p className="text-xs font-medium text-brand-gray">+1 234 567 8900</p>
            </div>
            <button className="mt-4 w-full py-4 bg-brand-orange text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-blue transition-colors shadow-lg shadow-brand-orange/20">
              Contact Us <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-gray-100 gap-6">
        <p className="text-sm font-medium text-brand-gray">
          © {currentYear} Eezeal Travels. Built for your next adventure.
        </p>
        <div className="flex items-center gap-8">
          <a href="#" className="text-xs font-bold text-brand-gray hover:text-brand-dark transition-colors uppercase tracking-widest">Privacy</a>
          <a href="#" className="text-xs font-bold text-brand-gray hover:text-brand-dark transition-colors uppercase tracking-widest">Terms</a>
          <a href="#" className="text-xs font-bold text-brand-gray hover:text-brand-dark transition-colors uppercase tracking-widest">Cookies</a>
        </div>
      </div>
    </footer>
  );
}

// Helper icons that might be missing from previous imports
function MapPin({ size }: { size: number }) { return <span>📍</span> }
function Phone({ size }: { size: number }) { return <span>📞</span> }
