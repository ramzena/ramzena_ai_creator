// Design: Neo-Tokyo Cyberpunk — asymmetric layout, neon accents, neural network bg
import { motion } from "framer-motion";
import { Sparkles, Camera, Film, Palette } from "lucide-react";

const ABOUT_BG = "https://private-us-east-1.manuscdn.com/sessionFile/6y6huofzlQlUH3NN9kuH20/sandbox/1uhXVVBlARYCKxngRUQSi1-img-2_1772119415000_na1fn_YWJvdXQtYmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNnk2aHVvZnpsUWxVSDNOTjlrdUgyMC9zYW5kYm94LzF1aFhWVkJsQVJZQ0t4bmdSVVFTaTEtaW1nLTJfMTc3MjExOTQxNTAwMF9uYTFmbl9ZV0p2ZFhRdFltYy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=knpQCF5jRs0ucY9ZK4VhmPzjtrish2DkMe7LRoob-64D~2VRMocR3hMfnEjewmJBUv9oFM49ZPM9XYVI1aHacO4YQXcGrV8KOdrdkiuaM65v2jDK0oZrCRk4NiNY0cBjPjuX~NOJ53npKlOeBUdqRFro~YD~wejiDMfc2vOYxhthVyaYv1K2M3BQeEZhHifqGYf1ZpMAMKcRW1q~V4sVi0N7BfUlBp8TeMK9ZFhg~-Kv6cKtvkPkJP9Rz9trCtV6qZao4w89OPGOBYseS68uzzmMKk5t~Hwccg0~YapsD-v7Uf30ImmDOKsBBiyv5~Vb3hYQ3E3vEUslT~AwevF0yA__";

const services = [
  {
    icon: Camera,
    title: "Food Photography",
    desc: "Hyper-realistic AI-generated food and beverage imagery for brands and marketing campaigns.",
    color: "#00f0ff",
  },
  {
    icon: Palette,
    title: "Beauty & Cosmetics",
    desc: "Stunning product visuals and model compositions for the beauty and perfumery industry.",
    color: "#ff00aa",
  },
  {
    icon: Film,
    title: "AI Animation",
    desc: "Bringing static concepts to life with AI-powered animated content and motion design.",
    color: "#00f0ff",
  },
  {
    icon: Sparkles,
    title: "Custom AI Art",
    desc: "Bespoke AI-generated visuals tailored to your brand identity and creative vision.",
    color: "#ff00aa",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={ABOUT_BG}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.15) saturate(0.8)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050508] via-[#050508]/80 to-[#050508]/60" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#ff00aa]" />
              <span className="font-[Orbitron] text-[10px] tracking-[0.4em] text-[#ff00aa]/60">ABOUT</span>
            </div>
            <h2 className="font-[Orbitron] text-2xl md:text-4xl font-bold tracking-[0.1em] text-white mb-6">
              THE <span className="neon-text-magenta">VISION</span>
            </h2>
            <div className="space-y-4 font-[Rajdhani] text-white/50 text-lg leading-relaxed">
              <p>
                We are a digital creative studio specializing in AI-generated visual content.
                Our work bridges the gap between artificial intelligence and artistic expression,
                producing imagery that is indistinguishable from traditional photography.
              </p>
              <p>
                From mouth-watering food compositions to luxurious beauty campaigns and
                mesmerizing animations, every piece is crafted with precision using
                cutting-edge AI technology and refined artistic direction.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-[#00f0ff]/10">
              <div>
                <div className="font-[Orbitron] text-2xl md:text-3xl font-bold neon-text-cyan">132+</div>
                <div className="font-[Rajdhani] text-white/30 text-sm mt-1">AI Visuals</div>
              </div>
              <div>
                <div className="font-[Orbitron] text-2xl md:text-3xl font-bold neon-text-magenta">3</div>
                <div className="font-[Rajdhani] text-white/30 text-sm mt-1">Animations</div>
              </div>
              <div>
                <div className="font-[Orbitron] text-2xl md:text-3xl font-bold neon-text-cyan">2</div>
                <div className="font-[Rajdhani] text-white/30 text-sm mt-1">Categories</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Services */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="group p-6 border bg-[#0a0a12]/80 backdrop-blur-sm transition-all duration-500 hover:bg-[#0a0a12]"
                style={{
                  borderColor: `${service.color}15`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${service.color}40`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${service.color}10`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${service.color}15`;
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <service.icon
                  size={24}
                  className="mb-4 transition-all duration-500"
                  style={{ color: `${service.color}80` }}
                />
                <h3 className="font-[Orbitron] text-[11px] tracking-[0.15em] text-white/90 mb-2">
                  {service.title.toUpperCase()}
                </h3>
                <p className="font-[Rajdhani] text-white/35 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
