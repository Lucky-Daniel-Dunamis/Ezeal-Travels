import { motion } from "motion/react";
import { Send } from "lucide-react";

export function Newsletter() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full rounded-[3.5rem] bg-brand-dark overflow-hidden p-8 md:p-16 lg:p-24 shadow-premium"
      >
        {/* Immersive Background Gradients */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-orange/20 to-transparent -z-10" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[radial-gradient(circle_at_0%_100%,rgba(51,168,216,0.15),transparent_50%)] -z-10" />
        <motion.div 
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute -top-12 -right-12 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -z-10" 
        />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange mb-6 block">Stay Inspired</span>
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-8 leading-tight">
            Ready to start your <br /> next adventure?
          </h2>
          <p className="text-white/60 text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
            Join our community of travelers and receive exclusive deals, travel guides, and inspiration right in your inbox.
          </p>

          <form className="flex flex-col sm:flex-row items-center gap-4 bg-white/5 p-2 rounded-3xl border border-white/10 backdrop-blur-md max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full px-8 py-4 bg-transparent text-white outline-none placeholder:text-white/30 text-lg font-medium"
            />
            <button className="w-full sm:w-auto px-10 py-4 bg-brand-orange text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-white hover:text-brand-dark transition-all shadow-xl group">
              Subscribe
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
          
          <p className="text-white/30 text-xs mt-8">
            * We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
