import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ArrowUpRight,
  Rocket,
  Monitor,
  Smartphone,
  Palette,
  ShoppingCart,
} from "lucide-react";

import TempSeo from "./TempSeo";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    icon: Monitor,
    name: "Social Media Web App",
    type: "WEB APP • 2026",
    desc: "Realtime social platform with messaging, posts, profiles and modern interactions.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    accent: "from-cyan-500/20 to-blue-500/5",
    demo: "#",
  },

  {
    number: "02",
    icon: Smartphone,
    name: "Rental Room Platform",
    type: "MOBILE APP • 2026",
    desc: "Smart booking experience for rooms, stays and property management.",
    tags: ["React Native", "Expo", "Supabase"],
    accent: "from-violet-500/20 to-fuchsia-500/5",
    demo: "#",
  },

  {
    number: "03",
    icon: Palette,
    name: "Designer Portfolio",
    type: "MARKETING • 2026",
    desc: "Creative immersive portfolio with smooth animations and storytelling.",
    tags: ["Astro", "GSAP", "Framer Motion"],
    accent: "from-sky-500/20 to-cyan-500/5",
    demo: "#",
  },

  {
    number: "04",
    icon: ShoppingCart,
    name: "GrowShop Commerce",
    type: "E-COMMERCE • 2026",
    desc: "Fast headless commerce experience focused on conversions and speed.",
    tags: ["Shopify", "Hydrogen", "Edge"],
    accent: "from-pink-500/20 to-violet-500/5",
    demo: "#",
  },
];

export function Work() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".project-item", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",

        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });

      // FLOATING NODE
      if (window.innerWidth >= 1024) {
        gsap.to(".floating-node", {
          y: -10,
          repeat: -1,
          yoyo: true,
          duration: 2,
          ease: "sine.inOut",
        });
      }
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <TempSeo
        title="Projects | AdamyaTech"
        description="Premium modern digital experiences crafted by AdamyaTech."
      />

      <section
        id="work"
        ref={sectionRef}
        className="relative overflow-hidden py-24 md:py-36"
      >
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[#020617]" />

        {/* TOP LIGHT */}
        <div
          className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2

          w-[380px]
          h-[380px]

          bg-cyan-500/10
          blur-[90px]

          pointer-events-none
          "
        />

        <div className="max-w-[1320px] mx-auto px-5 md:px-8">
          {/* HEADING */}
          <div
            className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between

            gap-10

            mb-20 md:mb-28
            "
          >
            <div className="max-w-3xl">
              <p className="text-cyan-400 font-mono text-sm mb-5">
                // selected work
              </p>

              <h2
                className="
                text-4xl
                sm:text-5xl
                md:text-7xl

                font-bold
                leading-[1]
                "
              >
                Featured{" "}

                <span
                  className="
                  italic
                  font-light

                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-cyan-400
                  via-violet-500
                  to-pink-500
                  "
                  style={{
                    fontFamily: '"Instrument Serif", serif',
                  }}
                >
                  projects
                </span>
              </h2>
            </div>

            <p
              className="
              max-w-md
              text-muted-foreground
              leading-relaxed
              "
            >
              Carefully designed digital experiences blending
              performance, interaction and modern aesthetics.
            </p>
          </div>

          {/* TIMELINE */}
          <div className="relative">
            {/* CENTER LINE */}
            <div
              className="
              hidden lg:block

              absolute
              left-1/2
              top-0
              bottom-0

              w-px

              bg-gradient-to-b
              from-cyan-400/40
              via-violet-500/40
              to-pink-500/40
              "
            />

            {/* CARDS */}
            <div className="flex flex-col gap-16 md:gap-20">
              {projects.map((project, i) => {
                const Icon = project.icon;

                return (
                  <div
                    key={project.name}
                    className={`
                    project-item

                    relative

                    flex
                    justify-center

                    ${
                      i % 2 === 0
                        ? "lg:justify-start"
                        : "lg:justify-end"
                    }
                    `}
                  >
                    {/* FLOATING NODE */}
                    <div
                      className="
                      floating-node

                      hidden lg:block

                      absolute
                      left-1/2
                      top-1/2

                      -translate-x-1/2
                      -translate-y-1/2

                      w-5
                      h-5

                      rounded-full

                      bg-cyan-400

                      shadow-[0_0_20px_#22d3ee]

                      z-20
                      "
                    />

                    {/* CARD */}
                    <div
                      className="
                      relative

                      w-full
                      lg:w-[46%]

                      rounded-[28px]

                      overflow-hidden

                      border border-white/10

                      bg-white/[0.03]

                      backdrop-blur-md

                      group

                      transition-all
                      duration-300

                      hover:border-cyan-400/30
                      hover:-translate-y-1
                      "
                    >
                      {/* TOP VISUAL */}
                      <div
                        className={`
                        relative

                        h-[180px]
                        md:h-[220px]

                        overflow-hidden

                        bg-gradient-to-br ${project.accent}
                        `}
                      >
                        {/* GRID */}
                        <div className="absolute inset-0 grid-bg opacity-20" />

                        {/* GLOW */}
                        <div
                          className="
                          absolute
                          -right-16
                          -bottom-16

                          w-40
                          h-40

                          rounded-full

                          bg-white/10

                          blur-3xl
                          "
                        />

                        {/* NUMBER */}
                        <div
                          className="
                          absolute
                          top-5
                          left-5

                          text-5xl
                          md:text-6xl

                          font-bold

                          text-white/10
                          "
                        >
                          {project.number}
                        </div>

                        {/* ICON */}
                        <div
                          className="
                          absolute
                          bottom-5
                          left-5

                          w-14
                          h-14

                          rounded-2xl

                          border border-white/10

                          bg-white/5

                          backdrop-blur-sm

                          flex items-center justify-center
                          "
                        >
                          <Icon
                            size={28}
                            className="text-cyan-300"
                          />
                        </div>

                        {/* TYPE */}
                        <div className="absolute top-5 right-5">
                          <span
                            className="
                            text-[10px]
                            tracking-[0.18em]

                            px-3 py-1.5
                            rounded-full

                            border border-white/10

                            bg-black/20
                            backdrop-blur-sm
                            "
                          >
                            {project.type}
                          </span>
                        </div>
                      </div>

                      {/* CONTENT */}
                      <div className="p-6 md:p-8">
                        {/* COMING SOON */}
                        <div className="mb-5">
                          <span
                            className="
                            inline-flex
                            items-center
                            gap-2

                            text-xs

                            px-3 py-1.5
                            rounded-full

                            bg-cyan-400
                            text-black
                            "
                          >
                            <Rocket size={12} />
                            Coming Soon
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
                          {project.name}
                        </h3>

                        {/* DESC */}
                        <p
                          className="
                          text-sm
                          md:text-base

                          text-muted-foreground
                          leading-relaxed

                          mb-6
                          "
                        >
                          {project.desc}
                        </p>

                        {/* TAGS */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="
                              px-3 py-1

                              rounded-full

                              bg-white/8

                              text-xs
                              "
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* BUTTON */}
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                          inline-flex
                          items-center
                          gap-2

                          text-cyan-400

                          hover:gap-4

                          transition-all
                          duration-300
                          "
                        >
                          View Project

                          <ArrowUpRight size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* MOBILE LINE */}
            <div
              className="
              absolute
              left-1/2
              top-0
              -translate-x-1/2

              w-px
              h-full

              bg-gradient-to-b
              from-cyan-400/20
              via-violet-500/20
              to-pink-500/20

              lg:hidden
              "
            />
          </div>
        </div>
      </section>
    </>
  );
}