import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const stats = [
  { num: "4", label: "Projects working" },
  { num: "3+", label: "Years experience" },
  { num: "10+", label: "Happy clients" },
  { num: "∞", label: "Cups of coffee" },
];

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Node.js",
  "Tailwind",
  "Supabase",
  "PostgreSQL",
  "Framer Motion",
  "Figma",
];

export function About() {
  return (
    <>
      <SEO
        title="About | AdamyaTech"
        description="Learn about AdamyaTech, a modern tech portfolio focused on scalable applications, premium UI/UX, and performance-driven development."
      />

      <section id="about" className="py-32 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 blur-[100px] rounded-full -translate-y-1/2" />

        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              <p className="text-primary font-mono text-sm mb-4">
                // about
              </p>

              <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Developer.
                <br />

                <span
                  className="text-gradient italic font-light"
                  style={{ fontFamily: '"Instrument Serif", serif' }}
                >
                  Designer.
                </span>

                <br />
                Problem solver.
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-xl">
                I'm the founder of Adamya Tech — a one-person studio that helps
                founders and teams ship beautiful digital products. From scrappy
                MVPs to polished production apps, I love turning ideas into
                things people actually use.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
                When I'm not coding, you'll find me exploring new design trends,
                contributing to open source, or sketching the next side project.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3">
                {stack.map((t) => (
                  <span
                    key={t}
                    className="px-4 py-2 rounded-full glass text-sm font-mono
                    hover:border-primary/50 hover:text-primary
                    transition-all duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 grid grid-cols-2 gap-6"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="p-8 rounded-3xl border-gradient
                  hover:-translate-y-2 hover:scale-[1.02]
                  transition-all duration-300"
                >
                  <div className="text-5xl md:text-6xl font-bold text-gradient mb-3">
                    {s.num}
                  </div>

                  <div className="text-sm text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}