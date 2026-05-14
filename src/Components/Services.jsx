import { motion } from "framer-motion";
import { Code2, Smartphone, Palette, Zap } from "lucide-react";
import TempSeo from "./TempSeo";

const services = [
  {
    icon: Code2,
    num: "01",
    title: "Web Development",
    desc: "Modern, blazing-fast websites built with React, Next.js, and TypeScript. SEO-ready and pixel-perfect.",
    skills: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: Smartphone,
    num: "02",
    title: "Mobile Apps",
    desc: "Cross-platform iOS & Android apps using React Native and Expo. One codebase, native feel.",
    skills: ["React Native", "Expo", "Swift"],
  },
  {
    icon: Palette,
    num: "03",
    title: "UI / UX Design",
    desc: "Distinctive interfaces that turn visitors into customers. From wireframes to interactive prototypes.",
    skills: ["Figma", "Framer", "Motion"],
  },
  {
    icon: Zap,
    num: "04",
    title: "Performance & SEO",
    desc: "Audits, optimizations and Core Web Vitals tuning so your product loads instantly and ranks well.",
    skills: ["Lighthouse", "CWV", "Edge"],
  },
];

export function Services() {
  return (
    <>
      <TempSeo
        title="Services | AdamyaTech"
        description="Explore website development, mobile app development, frontend engineering, UI/UX design, and scalable digital services by AdamyaTech."
      />

      <section id="services" className="py-32 relative">
        <div className="container mx-auto px-6">

          {/* Heading */}
          <div className="max-w-3xl mb-20">
            <p className="text-primary font-mono text-sm mb-4">
              // what i do
            </p>

            <h2 className="text-5xl md:text-7xl font-bold text-balance">
              Services crafted
              <br />
              for{" "}
              <span
                className="text-gradient italic font-light"
                style={{ fontFamily: '"Instrument Serif", serif' }}
              >
                impact
              </span>
              .
            </h2>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative p-10 rounded-3xl border-gradient 
                overflow-hidden backdrop-blur-sm
                hover:-translate-y-2 transition-all duration-500"
              >
                {/* Hover Gradient Fill */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100
                  transition-all duration-500
                  bg-gradient-to-br   from-cyan-400/[0.12] via-blue-500/[0.20] to-violet-500/[0.28]"
                />

                {/* Glow Effect */}
                <div
                  className="absolute -right-20 -top-20 w-48 h-48 rounded-full
                  bg-primary/10 blur-3xl opacity-0
                  group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Top */}
                <div className="relative z-10 flex items-start justify-between mb-8">
                  <div
                    className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary
                    group-hover:bg-gradient-primary
                    group-hover:text-primary-foreground
                    group-hover:shadow-glow
                    transition-all duration-500"
                  >
                    <s.icon size={26} />
                  </div>

                  <span className="font-mono text-sm text-muted-foreground/60">
                    {s.num}
                  </span>
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-3xl font-semibold mb-3">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-muted-foreground leading-relaxed mb-6">
                  {s.desc}
                </p>

                {/* Skills */}
                <div className="relative z-10 flex flex-wrap gap-2">
                  {s.skills.map((sk) => (
                    <span
                      key={sk}
                      className="text-xs font-mono px-2.5 py-1 rounded-md
                      bg-secondary/60 text-muted-foreground"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}