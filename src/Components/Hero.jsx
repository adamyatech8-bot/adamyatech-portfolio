import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ArrowDown } from "lucide-react";
import logo from "@/assets/logo.png";

const marqueeItems = [
  "React", "Next.js", "TypeScript", "React Native", "Tailwind",
  "Supabase", "Framer Motion", "Node.js", "Figma", "Three.js",
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center pt-28 pb-12 overflow-hidden">
      {/* Animated blobs */}
      <div className="absolute top-20 -left-32 w-[28rem] h-[28rem] bg-primary/30 blur-[120px] animate-blob animate-glow-pulse" />
      <div className="absolute bottom-10 -right-32 w-[32rem] h-[32rem] bg-purple-500/20 blur-[140px] animate-blob" style={{ animationDelay: "2s" }} />
      <div className="absolute inset-0 grid-bg opacity-40 md:opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      {/* Cinematic scanlines overlay (mobile) */}
      <div className="absolute inset-0 md:hidden pointer-events-none scanlines opacity-[0.18]" />
      {/* Vignette for cinematic feel */}
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(ellipse_at_center,transparent_40%,oklch(0.08_0.02_255/0.6)_100%)]" />

      <div className="container mx-auto px-6 relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-strong text-xs font-mono mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-foreground/80">Available for new projects · 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[clamp(3rem,9vw,8rem)] font-bold leading-[0.92] mb-8 text-balance"
          >
            Crafting
            <span className="inline-flex items-center gap-4 mx-3">
              <span className="inline-block h-[0.7em] w-[1.1em] rounded-full bg-gradient-primary shadow-glow align-middle animate-glow-pulse" />
            </span>
            digital
            <br />
            experiences that
            <br />
            <span className="text-gradient italic font-light" style={{ fontFamily: '"Instrument Serif", "Bricolage Grotesque", serif' }}>actually</span>
            <span className="text-gradient"> ship.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col md:flex-row md:items-end gap-8 mb-12"
          >
            <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
              Freelance developer at <span className="text-foreground font-medium">Adamya Tech</span>.
              I design and build fast, beautiful websites & mobile apps for ambitious teams worldwide.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-[1.03] active:scale-100 transition-transform"
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass-strong font-medium hover:border-primary/50 transition-colors"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        </div>

        <motion.img
          src={logo}
          alt=""
          aria-hidden
          initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
          animate={{ opacity: 0.1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.8, delay: 0.4 }}
          className="hidden lg:block absolute right-[-4rem] top-1/2 -translate-y-1/2 w-[640px] animate-float pointer-events-none"
        />
      </div>

      {/* Marquee */}
      <div className="relative z-10 mt-16 border-y border-border/50 py-5 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center gap-12 text-2xl md:text-3xl font-display font-medium">
              <span className="text-foreground/50 hover:text-primary transition-colors">{item}</span>
              <Sparkles size={16} className="text-primary/60" />
            </div>
          ))}
        </div>
      </div>

      <motion.a
        href="#work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-xs font-mono text-muted-foreground"
      >
        <span>scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
