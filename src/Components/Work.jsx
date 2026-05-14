import { motion } from "framer-motion";
import { ArrowUpRight, Rocket } from "lucide-react";
import TempSeo from "./TempSeo";

const projects = [
  {
    name: "Social Media Web App",
    type: "Web App · 2025",
    desc: "Modern social platform with realtime messaging, posts, and smooth interactive UI.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    color: "from-blue-500/30 via-cyan-500/20 to-transparent",
    accent: "oklch(0.74 0.19 240)",
    demo: "#",
    comingSoon: true,
  },
  {
    name: "Rental Room Booking Platform",
    type: "Mobile App · 2025",
    desc: "Smart booking experience for rooms, stays, and property management.",
    tags: ["React Native", "Expo", "Supabase"],
    color: "from-indigo-500/30 via-blue-500/20 to-transparent",
    accent: "oklch(0.65 0.22 270)",
    demo: "#",
    comingSoon: true,
  },
  {
    name: "Graphic Designer Portfolio",
    type: "Marketing · 2024",
    desc: "Creative portfolio experience with premium animations and immersive interactions.",
    tags: ["Astro", "Framer Motion", "GSAP"],
    color: "from-sky-500/30 via-blue-600/20 to-transparent",
    accent: "oklch(0.7 0.18 230)",
    demo: "#",
    comingSoon: true,
  },
  {
    name: "GrowShop E-Commerce",
    type: "E-commerce · 2024",
    desc: "Fast headless commerce experience with modern UX and personalized flows.",
    tags: ["Shopify", "Hydrogen", "Edge"],
    color: "from-cyan-500/30 via-indigo-500/20 to-transparent",
    accent: "oklch(0.75 0.16 210)",
    demo: "#",
    comingSoon: true,
  },
];

export function Work() {
  return (
    <>
      <TempSeo
        title="Projects | AdamyaTech"
        description="View previous web development, app development, UI/UX, and modern digital projects created by AdamyaTech."
      />

      <section id="work" className="py-32 relative">
        <div className="container mx-auto px-6">

          {/* Heading */}
          <div className="flex items-end justify-between flex-wrap gap-6 mb-20">
            <div>
              <p className="text-primary font-mono text-sm mb-4">
                // selected work
              </p>

              <h2 className="text-5xl md:text-7xl font-bold max-w-3xl text-balance">
                Recent{" "}
                <span
                  className="text-gradient italic font-light"
                  style={{ fontFamily: '"Instrument Serif", serif' }}
                >
                  projects
                </span>
              </h2>
            </div>

            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Premium digital products crafted with modern technologies,
              performance, and beautiful user experiences.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border-gradient hover:-translate-y-2 transition-all duration-500"
              >
                {/* Top */}
                <div
                  className={`aspect-[16/10] bg-gradient-to-br ${p.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 grid-bg opacity-40" />

                  <div
                    className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700"
                    style={{ background: p.accent }}
                  />

                  {/* Type */}
                  <div className="absolute top-6 left-6">
                    <span className="text-xs font-mono uppercase tracking-wider text-foreground/80 px-3 py-1.5 rounded-full glass-strong">
                      {p.type}
                    </span>
                  </div>

                  {/* Coming Soon Badge */}
                  {p.comingSoon && (
                    <div className="absolute top-6 right-6">
                      <span className="flex items-center gap-2 text-xs font-medium bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-glow">
                        <Rocket size={14} />
                        Coming Soon
                      </span>
                    </div>
                  )}

                  {/* Watermark */}
                  <div className="absolute bottom-6 left-6 right-24 font-display font-bold text-4xl md:text-5xl text-foreground/15 group-hover:text-foreground/30 transition-colors leading-none">
                    {p.name}
                  </div>
                </div>

                {/* Bottom */}
                <div className="p-8">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {p.name}
                  </h3>

                  <p className="text-muted-foreground mb-5 leading-relaxed">
                    {p.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary/60 text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-4">
                    {/* Live Demo */}
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-xl font-medium hover:scale-105 transition-all duration-300 shadow-glow"
                    >
                      Live Demo
                      <ArrowUpRight size={18} />
                    </a>

                    {/* Contact */}
                    <a
                      href="#contact"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Start a Project →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}