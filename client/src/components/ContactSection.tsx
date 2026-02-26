// Design: Neo-Tokyo Cyberpunk — minimal contact form with neon accents
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Instagram, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const CONTACT_BG = "https://private-us-east-1.manuscdn.com/sessionFile/6y6huofzlQlUH3NN9kuH20/sandbox/1uhXVVBlARYCKxngRUQSi1-img-3_1772119406000_na1fn_Y29udGFjdC1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNnk2aHVvZnpsUWxVSDNOTjlrdUgyMC9zYW5kYm94LzF1aFhWVkJsQVJZQ0t4bmdSVVFTaTEtaW1nLTNfMTc3MjExOTQwNjAwMF9uYTFmbl9ZMjl1ZEdGamRDMWlady5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Bs1QfvoXb7YR5RwLJo-nrA3dR1sGbnrILYL-6SgJACSt0G8tTcZQ5Z6gAaqoE1TUp4GKmF1qn6AJGkFUy1ZOmbzM~HFHfS1ku~sjcT1LOMzGSjVF3-h52alwwxLoeTlnCJ3rqE8jz5l41ag3jQIJPVZY54RWpcW2DMk-7ky-T7QRp4MumYHPQ-j33qzGVabE2qiKxOB22IPX0iFog5Bm8IrkO08d-o1Fi4Su--JRpPlhUbRGBM9LtDE3knJP-0KekhdPOALwgJ0taZLQZFQnUrQ5pVvPt6z8t3peqq4-VGyoE0Mc-ddq86RVjbdccL8z3enB2sOm45TboheHbw7mUQ__";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.", {
      style: {
        background: "#0a0a12",
        border: "1px solid rgba(0,240,255,0.2)",
        color: "#00f0ff",
        fontFamily: "Rajdhani",
      },
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={CONTACT_BG}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.12) saturate(0.7)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/85 to-[#050508]/70" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#00f0ff]" />
              <span className="font-[Orbitron] text-[10px] tracking-[0.4em] text-[#00f0ff]/60">CONNECT</span>
            </div>
            <h2 className="font-[Orbitron] text-2xl md:text-4xl font-bold tracking-[0.1em] text-white mb-6">
              GET IN <span className="neon-text-cyan">TOUCH</span>
            </h2>
            <p className="font-[Rajdhani] text-white/40 text-lg leading-relaxed mb-10 max-w-md">
              Ready to bring your creative vision to life with AI? Let's discuss your project
              and explore the possibilities of AI-generated content.
            </p>

            {/* Contact links */}
            <div className="space-y-4">
              <a
                href="mailto:hello@aicreator.studio"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 border border-[#00f0ff]/20 flex items-center justify-center group-hover:border-[#00f0ff]/50 transition-all duration-500">
                  <Mail size={16} className="text-[#00f0ff]/60 group-hover:text-[#00f0ff]" />
                </div>
                <span className="font-[Rajdhani] text-white/40 group-hover:text-white/70 transition-colors">
                  hello@aicreator.studio
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 group"
                onClick={(e) => { e.preventDefault(); toast("Feature coming soon"); }}
              >
                <div className="w-10 h-10 border border-[#ff00aa]/20 flex items-center justify-center group-hover:border-[#ff00aa]/50 transition-all duration-500">
                  <Instagram size={16} className="text-[#ff00aa]/60 group-hover:text-[#ff00aa]" />
                </div>
                <span className="font-[Rajdhani] text-white/40 group-hover:text-white/70 transition-colors">
                  @ai.creator.studio
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 group"
                onClick={(e) => { e.preventDefault(); toast("Feature coming soon"); }}
              >
                <div className="w-10 h-10 border border-[#00f0ff]/20 flex items-center justify-center group-hover:border-[#00f0ff]/50 transition-all duration-500">
                  <MessageCircle size={16} className="text-[#00f0ff]/60 group-hover:text-[#00f0ff]" />
                </div>
                <span className="font-[Rajdhani] text-white/40 group-hover:text-white/70 transition-colors">
                  Telegram
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-[Orbitron] text-[10px] tracking-[0.2em] text-[#00f0ff]/50 block mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-[#0a0a12]/80 border border-[#00f0ff]/15 px-4 py-3 font-[Rajdhani] text-white/80 focus:border-[#00f0ff]/50 focus:outline-none transition-all duration-300 placeholder:text-white/15"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-[Orbitron] text-[10px] tracking-[0.2em] text-[#00f0ff]/50 block mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-[#0a0a12]/80 border border-[#00f0ff]/15 px-4 py-3 font-[Rajdhani] text-white/80 focus:border-[#00f0ff]/50 focus:outline-none transition-all duration-300 placeholder:text-white/15"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="font-[Orbitron] text-[10px] tracking-[0.2em] text-[#00f0ff]/50 block mb-2">
                  MESSAGE
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full bg-[#0a0a12]/80 border border-[#00f0ff]/15 px-4 py-3 font-[Rajdhani] text-white/80 focus:border-[#00f0ff]/50 focus:outline-none transition-all duration-300 resize-none placeholder:text-white/15"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="font-[Orbitron] text-[10px] tracking-[0.25em] px-8 py-3 border border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff]/10 transition-all duration-500 flex items-center gap-3 group"
                style={{ boxShadow: "0 0 10px rgba(0,240,255,0.08)" }}
              >
                SEND MESSAGE
                <Send size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
