import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import {
  Code2,
  Smartphone,
  Palette,
  Zap,
  Rocket,
  ShieldCheck,
} from "lucide-react";

import TempSeo from "./TempSeo";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const services = [
  {
    icon: Code2,
    num: "01",
    title: "Web Development",
    desc: "Modern websites built with React, Next.js and TypeScript.",
    skills: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: Smartphone,
    num: "02",
    title: "Mobile Apps",
    desc: "Cross-platform mobile apps with smooth native feel.",
    skills: ["React Native", "Expo", "Android"],
  },
  {
    icon: Palette,
    num: "03",
    title: "UI / UX Design",
    desc: "Beautiful interfaces focused on user experience.",
    skills: ["Figma", "Framer", "Motion"],
  },
  {
    icon: Zap,
    num: "04",
    title: "Performance",
    desc: "Ultra-fast optimized websites with strong SEO.",
    skills: ["SEO", "Lighthouse", "Speed"],
  },
  {
    icon: Rocket,
    num: "05",
    title: "Deployment",
    desc: "Production-ready cloud deployment & scaling.",
    skills: ["Vercel", "CI/CD", "Cloud"],
  },
  {
    icon: ShieldCheck,
    num: "06",
    title: "Maintenance",
    desc: "Long-term support, security updates and fixes.",
    skills: ["Security", "Support", "Updates"],
  },
];

export function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;

    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      // =========================
      // CARDS REVEAL
      // =========================

      gsap.from(".service-card", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        force3D: true,

        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      // =========================
      // DESKTOP ONLY PATH
      // =========================

      if (!isDesktop) return;

      const path = document.querySelector("#journeyPath");
      const glowBall = document.querySelector("#glowBall");

      if (!path || !glowBall) return;

      const pathLength = path.getTotalLength();

      // PERFORMANCE SAFE INITIAL STATE
      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
        willChange: "stroke-dashoffset",
      });

      gsap.set(glowBall, {
        xPercent: -50,
        yPercent: -50,
        willChange: "transform",
        force3D: true,
      });

      // SINGLE TIMELINE
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 22%",
          end: "bottom bottom",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      // PATH DRAW
      tl.to(
        path,
        {
          strokeDashoffset: 0,
          ease: "none",
        },
        0
      );

      // BALL PERFECTLY SYNCED
      tl.to(
        glowBall,
        {
          motionPath: {
            path: path,
            align: path,
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
          },

          ease: "none",
        },
        0
      );
    }, section);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      ctx.revert();
    };
  }, []);

  return (
    <>
      <TempSeo
        title="Services | AdamyaTech"
        description="Premium web development, UI/UX, mobile apps and performance optimization services."
      />

      <section
        id="services"
        ref={sectionRef}
        className="
        relative
        overflow-hidden
        py-24 md:py-36
        "
      >
        {/* LIGHT BACKGROUND */}
        <div
          className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.08),transparent_55%)]
          "
        />

        {/* OPTIMIZED GLOW */}
        <div
          className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2

          w-[420px]
          h-[420px]

          bg-cyan-500/10
          blur-[90px]

          pointer-events-none
          "
        />

        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          {/* HEADING */}
          <div className="max-w-4xl mb-24 md:mb-36">
            <p className="text-primary font-mono text-sm mb-4">
              // services
            </p>

            <h2
              className="
              text-4xl
              sm:text-5xl
              md:text-7xl

              font-bold
              leading-tight
              "
            >
              Digital experiences
              <br />

              <span
                className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-cyan-400
                via-violet-500
                to-pink-500
                italic
                "
                style={{
                  fontFamily: '"Instrument Serif", serif',
                }}
              >
                engineered to stand out
              </span>
            </h2>
          </div>

          {/* MAIN */}
          <div className="relative">
            {/* SVG PATH */}
            <svg
              className="
              absolute
              left-1/2
              top-0
              -translate-x-1/2

              h-full
              w-[760px]

              z-0
              hidden lg:block
              "
              viewBox="0 0 850 2800"
              fill="none"
            >
              <defs>
                <linearGradient
                  id="lineGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>

              <path
                id="journeyPath"
                d="
                M425 0
                C700 250 150 550 425 900
                C700 1250 150 1550 425 1900
                C700 2250 150 2500 425 2750
                "
                stroke="url(#lineGradient)"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>

            {/* GLOW BALL */}
            <div
              id="glowBall"
              className="
              absolute
              top-0
              left-0

              w-6
              h-6

              rounded-full

              bg-violet-500

              shadow-[0_0_20px_#8b5cf6]

              z-20
              hidden lg:block
              "
            />

            {/* SERVICES */}
            <div className="relative z-10 flex flex-col gap-20 lg:gap-44">
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className={`
                    service-card
                    flex
                    justify-center

                    ${
                      i % 2 === 0
                        ? "lg:justify-start"
                        : "lg:justify-end"
                    }
                  `}
                >
                  <div
                    className="
                    relative
                    overflow-hidden

                    w-full
                    max-w-[500px]

                    rounded-[28px]

                    border border-white/10

                    bg-white/[0.03]

                    backdrop-blur-md

                    p-6 sm:p-8 md:p-9

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-violet-500/30

                    group
                    "
                  >
                    {/* SMALL GLOW */}
                    <div
                      className="
                      absolute
                      -top-16
                      -right-16

                      w-40
                      h-40

                      rounded-full

                      bg-violet-500/10

                      blur-3xl

                      opacity-0
                      group-hover:opacity-100

                      transition-opacity
                      duration-300
                      "
                    />

                    {/* TOP */}
                    <div className="relative z-10 flex items-center justify-between mb-6">
                      <div
                        className="
                        p-4
                        rounded-2xl

                        bg-gradient-to-br
                        from-cyan-400/15
                        to-violet-500/15

                        text-cyan-300
                        "
                      >
                        <s.icon size={26} />
                      </div>

                      <span className="text-white/40 font-mono text-sm">
                        {s.num}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3
                      className="
                      text-2xl
                      md:text-3xl

                      font-bold

                      mb-4
                      "
                    >
                      {s.title}
                    </h3>

                    {/* DESC */}
                    <p
                      className="
                      text-sm
                      md:text-base

                      text-muted-foreground
                      leading-relaxed

                      mb-7
                      "
                    >
                      {s.desc}
                    </p>

                    {/* SKILLS */}
                    <div className="flex flex-wrap gap-2">
                      {s.skills.map((sk) => (
                        <span
                          key={sk}
                          className="
                          px-3 py-1

                          rounded-full

                          bg-white/8

                          text-xs
                          md:text-sm
                          "
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE LINE */}
            <div
              className="
              absolute
              left-1/2
              top-0
              -translate-x-1/2

              w-[2px]
              h-full

              bg-gradient-to-b
              from-cyan-400
              via-violet-500
              to-pink-500

              opacity-15

              lg:hidden
              "
            />
          </div>
        </div>
      </section>
    </>
  );
}