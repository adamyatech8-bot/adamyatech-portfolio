import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Send } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import logo from "@/assets/logo.png";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
// const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
// const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
// const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      // Mail to Admin
      await emailjs.send(
        "service_6m2qb1a",
        "template_eq2iwik",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "21pWFWEiKsVX0LUsU"
      );

      // Auto Reply to User
      await emailjs.send(
        "service_6m2qb1a",
        "template_e7ycp5p",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "21pWFWEiKsVX0LUsU"
      );

      alert("Email Sent Successfully");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed To Send Email");
    }

    setLoading(false);
  };
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border-gradient p-8 md:p-16 text-center"
        >
          <div className="absolute inset-0 opacity-80" style={{ background: "var(--gradient-mesh)" }} />
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-primary/20 blur-[120px] animate-glow-pulse" />

          <div className="relative z-10">
            <p className="text-primary font-mono text-sm mb-4">// let's build</p>
            <h2 className="text-4xl md:text-7xl font-bold mb-6 text-balance">
              Have an idea? <br />
              <span className="text-gradient italic font-light" style={{ fontFamily: '"Instrument Serif", serif' }}>
                Let's make it real.
              </span>
            </h2>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Drop your details below and I'll get back to you shortly.
            </p>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="max-w-xl mx-auto text-left space-y-4 mb-10"
            >
              <div>
                <label className="block text-xs font-mono text-muted-foreground mb-2">
      // your name
                </label>
                <input
                  name="name"
                  placeholder="Name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl glass border border-border"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-muted-foreground mb-2">
      // your email
                </label>
                <input
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl glass border border-border"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-muted-foreground mb-2">
      // your message
                </label>
                <textarea
                  name="message"
                  placeholder="Type your message here ."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl glass border border-border resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-gradient-primary text-primary-foreground"
              >
                {loading ? "Sending..." : (
                  <>
                    Send message <Send size={18} />
                  </>
                )}
              </button>


            </form>


            <a href="mailto:hello@adamyatech8.com" className="inline-flex items-center gap-3">
              <Mail size={16} />
              hello@adamyatech8.com
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>

       <footer className="relative mt-32 overflow-hidden border-t border-white/10">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,183,255,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,89,255,0.10),transparent_35%)]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Blur Effects */}
      <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-blue-600/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

        {/* =========================
            TOP CTA
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
          mb-16
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-8
          md:p-12
          flex
          flex-col
          lg:flex-row
          items-start
          lg:items-center
          justify-between
          gap-8
          "
        >
          <div>
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
              Let’s Build Something
            </p>

            <h2
              className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-black
              leading-tight
              max-w-2xl
              "
            >
              Have an idea?
              <span
                className="
                block
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-cyan-300
                via-blue-400
                to-cyan-500
                "
              >
                Let’s turn it into reality.
              </span>
            </h2>
          </div>

          <a
            href="#contact"
            className="
            group
            shrink-0
            px-7
            py-4
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
            Start Project

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
        </motion.div>

        {/* =========================
            MAIN FOOTER
        ========================== */}

        <div
          className="
          flex
          flex-col
          xl:flex-row
          items-start
          xl:items-center
          justify-between
          gap-12
          "
        >
          
          {/* =========================
              LEFT
          ========================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-md"
          >
            <div className="flex items-center gap-4">
              
              <div
                className="
                p-3
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                "
              >
                <img
                  src={logo}
                  alt="AdamyaTech"
                  className="h-10 w-auto"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  AdamyaTech
                </h2>

                <p className="text-sm text-primary">
                  Designed & Developed by Ajay
                </p>
              </div>

            </div>

            <p
              className="
              mt-6
              text-gray-400
              leading-relaxed
              text-sm
              md:text-base
              "
            >
              Building immersive digital experiences with modern
              UI/UX, smooth animations, scalable systems, and
              performance-focused development.
            </p>
          </motion.div>

          {/* =========================
              CENTER LINKS
          ========================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
            flex
            flex-wrap
            items-center
            gap-4
            md:gap-8
            "
          >
            {[
              { name: "Home", href: "#home" },
              { name: "Services", href: "#services" },
              { name: "Work", href: "#work" },
              { name: "About", href: "#about" },
              { name: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                relative
                text-gray-400
                hover:text-white
                transition-all
                duration-300
                text-sm
                md:text-base
                group
                "
              >
                {link.name}

                <span
                  className="
                  absolute
                  left-0
                  -bottom-1
                  h-[1px]
                  w-0
                  bg-primary
                  transition-all
                  duration-300
                  group-hover:w-full
                  "
                />
              </a>
            ))}
          </motion.div>

          {/* =========================
              RIGHT
          ========================== */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
            flex
            flex-col
            items-start
            xl:items-end
            gap-6
            "
          >
            
            {/* Socials */}
            <div className="flex items-center gap-4">
              
              {[
                {
                  icon: <FaInstagram size={18} />,
                  href: "https://www.instagram.com/adamyatech/",
                },
                {
                  icon: <FaYoutube size={18} />,
                  href: "https://www.youtube.com/@adamyatech",
                },
                {
                  icon: <FaLinkedin size={18} />,
                  href: "https://www.linkedin.com/in/adamya-tech-091b55409",
                },
                {
                  icon: <FaGithub size={18} />,
                  href: "https://github.com/adamyatech8-bot",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:text-primary
                  hover:border-primary/40
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  "
                >
                  {social.icon}
                </a>
              ))}

            </div>

            {/* Copyright */}
            <div className="text-left xl:text-right">
              <p className="text-white text-sm">
                © 2026 AdamyaTech
              </p>

              <p className="text-gray-500 text-xs mt-1">
                Crafted with passion, precision & clean code.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </footer>
      </div>
    </section>
  );
}
