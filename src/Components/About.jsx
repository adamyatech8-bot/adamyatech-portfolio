
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import TempSeo from "./TempSeo";

const stats = [
  { num: "4", label: "Projects shipped" },
  { num: "3+", label: "Years experience" },
  { num: "10+", label: "Happy clients" },
  { num: "∞", label: "Ideas brewing" },
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

const floatingWords = [
  "Creative",
  "Modern",
  "Interactive",
  "Premium",
  "Fast",
];

export function About() {
  /* =========================
     Typing Animation
  ========================== */

  const words = ["Developer.", "Designer.", "Innovator."];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(currentWord.substring(0, subIndex + 1));
          setSubIndex((prev) => prev + 1);

          if (subIndex === currentWord.length) {
            setTimeout(() => {
              setDeleting(true);
            }, 1000);
          }
        } else {
          setText(currentWord.substring(0, subIndex - 1));
          setSubIndex((prev) => prev - 1);

          if (subIndex === 0) {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      deleting ? 45 : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <>
      <TempSeo
        title="About | AdamyaTech"
        description="Learn about AdamyaTech, a modern tech portfolio focused on scalable applications, premium UI/UX, and performance-driven development."
      />

      <section
        id="about"
        className="relative overflow-hidden py-24 md:py-32"
      >
        {/* =========================
            BACKGROUND
        ========================== */}

        {/* Main Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,183,255,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,89,255,0.15),transparent_35%)]" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* Blur Orbs */}
        <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-600/10 blur-[120px] rounded-full" />

        {/* =========================
            CONTENT
        ========================== */}

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            
            {/* =========================
                LEFT CONTENT
            ========================== */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              {/* Small Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-white/[0.03] backdrop-blur-md mb-8">
                <Sparkles className="w-4 h-4 text-primary" />

                <span className="text-sm text-primary font-medium tracking-wide">
                  About AdamyaTech
                </span>
              </div>

              {/* =========================
                  TYPING HEADING
              ========================== */}

              <div className="relative">
                <h2
                  className="
                  text-5xl
                  sm:text-6xl
                  md:text-7xl
                  lg:text-8xl
                  font-black
                  leading-[0.95]
                  tracking-tight
                  min-h-[140px]
                  sm:min-h-[170px]
                  md:min-h-[220px]
                  "
                >
                  <span
                    className="
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-r
                    from-white
                    via-cyan-100
                    to-cyan-400
                    "
                  >
                    {text}
                  </span>

                  {/* Cursor */}
                  <span className="animate-pulse text-primary">|</span>
                </h2>

                {/* Floating Text */}
                <div className="hidden md:block absolute -right-10 top-10">
                  {floatingWords.map((word, i) => (
                    <motion.div
                      key={word}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 0.15, x: 0 }}
                      transition={{
                        delay: i * 0.15,
                        duration: 0.8,
                      }}
                      className="
                      text-4xl
                      font-black
                      uppercase
                      tracking-widest
                      text-white
                      "
                    >
                      {word}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="
                mt-8
                text-lg
                md:text-xl
                text-muted-foreground
                leading-relaxed
                max-w-2xl
                "
              >
                I build modern digital experiences with a strong focus on
                performance, animation, and premium UI design. From MVPs to
                scalable products — I turn ideas into immersive experiences that
                people actually remember.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4 mt-10"
              >
                <a
                  href="#work"
                  className="
                  group
                  px-6
                  py-3
                  rounded-full
                  bg-primary
                  text-primary-foreground
                  font-medium
                  flex
                  items-center
                  gap-2
                  hover:scale-105
                  transition-all
                  duration-300
                  "
                >
                  View Projects

                  <ArrowUpRight
                    className="
                    w-4
                    h-4
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    transition-all
                    duration-300
                    "
                  />
                </a>

                <a
                  href="#contact"
                  className="
                  px-6
                  py-3
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-md
                  hover:border-primary/40
                  hover:bg-primary/5
                  transition-all
                  duration-300
                  "
                >
                  Let’s Connect
                </a>
              </motion.div>

              {/* =========================
                  TECH STACK
              ========================== */}

              <div className="flex flex-wrap gap-3 mt-14">
                {stack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    className="
                    px-5
                    py-2
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-md
                    text-sm
                    font-medium
                    hover:border-primary/40
                    hover:text-primary
                    hover:-translate-y-1
                    transition-all
                    duration-300
                    "
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* =========================
                RIGHT STATS
            ========================== */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="grid grid-cols-2 gap-5">
                {stats.map((item, i) => (
                  <motion.div
                    key={item.label}
                    whileHover={{
                      y: -8,
                      scale: 1.03,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    p-8
                    "
                  >
                    {/* Hover Glow */}
                    <div
                      className="
                      absolute
                      inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                      bg-gradient-to-br
                      from-cyan-500/10
                      to-blue-500/10
                      "
                    />

                    {/* Border Glow */}
                    <div
                      className="
                      absolute
                      inset-0
                      rounded-3xl
                      border
                      border-primary/0
                      group-hover:border-primary/30
                      transition-all
                      duration-500
                      "
                    />

                    <div className="relative z-10">
                      <div
                        className="
                        text-5xl
                        md:text-6xl
                        font-black
                        text-transparent
                        bg-clip-text
                        bg-gradient-to-b
                        from-white
                        to-white/60
                        mb-4
                        "
                      >
                        {item.num}
                      </div>

                      <p className="text-muted-foreground text-sm md:text-base">
                        {item.label}
                      </p>
                    </div>

                    {/* Background Number */}
                    <div
                      className="
                      absolute
                      -bottom-6
                      -right-2
                      text-[100px]
                      font-black
                      text-white/[0.03]
                      leading-none
                      "
                    >
                      0{i + 1}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Extra Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="
                mt-6
                p-6
                rounded-3xl
                border
                border-white/10
                bg-gradient-to-br
                from-primary/10
                to-transparent
                backdrop-blur-xl
                "
              >
                <p
                  className="
                  text-sm
                  uppercase
                  tracking-[0.2em]
                  text-primary
                  mb-3
                  "
                >
                  Current Focus
                </p>

                <h3 className="text-2xl font-bold mb-3">
                  Building immersive web experiences.
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  Crafting smooth, modern, and highly interactive products with
                  React, animations, and scalable backend systems.
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}