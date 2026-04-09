import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

const navItems = ["Home", "Services", "About", "Packages", "Contact"];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full py-4 px-6 md:px-12 lg:px-24 flex items-center justify-between glass-morphism sticky top-0 z-50 !bg-white/70 border-b border-gray-100 shadow-sm"
      >
        {/* Logo */}
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

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-bold text-brand-gray hover:text-brand-orange transition-all relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button className="px-7 py-3 bg-brand-dark text-white text-sm font-bold rounded-full hover:bg-brand-orange transition-all shadow-lg hover:shadow-brand-orange/30 hover:-translate-y-0.5 flex items-center gap-2">
            Book Now
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-brand-dark p-2 rounded-xl hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-2xl flex flex-col md:hidden p-8"
            >
              <div className="flex items-center justify-between mb-12">
                <div
                  className="px-2 py-1 rounded-xl"
                  style={{ background: 'linear-gradient(135deg, #e8f6fd 0%, #d0ecf8 60%, #bde4f5 100%)' }}
                >
                  <img src="/logo.png" alt="Logo" className="h-10 w-auto" style={{ mixBlendMode: 'multiply' }} />
                </div>
                <button onClick={() => setMenuOpen(false)} className="p-2 rounded-full hover:bg-gray-100">
                  <X size={24} className="text-brand-dark" />
                </button>
              </div>

              <nav className="flex flex-col gap-6 mb-12">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl font-bold text-brand-dark hover:text-brand-orange transition-colors"
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>

              <button className="mt-auto w-full py-5 bg-brand-orange text-white font-bold rounded-2xl shadow-xl shadow-brand-orange/20">
                Book a Trip Now
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
