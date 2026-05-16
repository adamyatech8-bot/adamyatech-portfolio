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

       <footer className="border-t border-white/10 mt-20">
 <div className="max-w-7xl mx-auto px-6 py-8">

    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

      {/* LEFT */}
      <div className="flex items-center gap-4">

        <img
          src={logo}
          alt="AdamyaTech"
          className="h-12 w-auto"
        />

        <div>
          <h2 className="text-white text-xl font-semibold">
            AdamyaTech
          </h2>

          <p className="text-gray-400 text-sm">
            Designed & Developed by Ajay
          </p>
        </div>

      </div>

      {/* CENTER LINKS */}
      <div className="flex items-center gap-6 text-gray-400 text-sm">

        <a
          href="#home"
          className="hover:text-cyan-400 transition"
        >
          Home
        </a>

        <a
          href="#services"
          className="hover:text-cyan-400 transition"
        >
          Services
        </a>
         <a
          href="#work"
          className="hover:text-cyan-400 transition"
        >
        Work
        </a>

        <a
          href="#contact"
          className="hover:text-cyan-400 transition"
        >
          Contact
        </a>

      </div>

      {/* RIGHT */}
      <div className="flex flex-col items-center lg:items-end gap-3">

       <div className="flex items-center gap-4">

  <a
    href="https://www.instagram.com/adamyatech/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-pink-500 transition"
  >
    <FaInstagram size={20} />
  </a>

  <a
    href="https://www.youtube.com/@adamyatech"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-red-500 transition"
  >
    <FaYoutube size={20} />
  </a>

  <a
    href="https://www.linkedin.com/in/adamya-tech-091b55409"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-blue-400 transition"
  >
    <FaLinkedin size={20} />
  </a>

  <a
    href="https://github.com/adamyatech8-bot"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition"
  >
    <FaGithub size={20} />
  </a>

</div>

        <div className="text-center lg:text-right">
          <p className="text-gray-300 text-sm">
            © 2026 AdamyaTech
          </p>

          <p className="text-gray-500 text-xs mt-1">
            Crafted with care.
          </p>
        </div>

      </div>

    </div>

  </div>
</footer>
      </div>
    </section>
  );
}
