// Design: Neo-Tokyo Cyberpunk — Resume section with neon accents, grid layouts, glowing cards
import { motion } from "framer-motion";
import {
  Film, Sparkles, Mic, ShoppingBag, BookOpen,
  Wrench, GraduationCap, Globe, Award, ChevronRight,
  Clapperboard, Baby, Music, Megaphone, PenTool,
  Layers, Zap, Shield
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const creationCategories = [
  {
    icon: Clapperboard,
    title: "Cinematic & Narrative Video",
    items: ["Vertical short dramas", "Cinematic trailers", "Dark romance series", "Historical/military films"],
    color: "#00f0ff",
  },
  {
    icon: Baby,
    title: "Children's & Educational",
    items: ["Animated series", "Educational content", "Complete pipeline"],
    color: "#ff00aa",
  },
  {
    icon: Music,
    title: "Music Videos & Audio",
    items: ["AI music videos", "Original music", "Voice acting", "Full audio production"],
    color: "#00f0ff",
  },
  {
    icon: Megaphone,
    title: "Commercial & Brand",
    items: ["Brand storytelling", "AI product photography", "Promotional videos", "Lip-sync videos"],
    color: "#ff00aa",
  },
  {
    icon: PenTool,
    title: "Storytelling & Screenwriting",
    items: ["170+ published novels = 170 IPs", "Original screenplays", "Episodic structure"],
    color: "#00f0ff",
  },
];

const pipelineSteps = [
  "Concept & Script",
  "Storyboard & Visual Direction",
  "AI Image & Video Generation",
  "Voice & Music",
  "Editing & Post-Production",
  "Final Delivery",
];

const toolCategories = [
  { label: "AI Video", tools: "Kling AI, Veo 3, Runway ML, Pika Labs, HeyGen" },
  { label: "AI Image", tools: "Midjourney, DALL-E, Flux, Leonardo AI" },
  { label: "Music & Audio", tools: "Suno AI, ElevenLabs, Custom Voice Cloning" },
  { label: "Video Editing", tools: "DaVinci Resolve, CapCut, Adobe Premiere Pro" },
  { label: "AI & Prompt", tools: "Claude AI, ChatGPT, Complex Prompt Systems" },
  { label: "Writing", tools: "Novel Writing, Screenplay Adaptation, Episodic Structure" },
  { label: "Visual Arts", tools: "Traditional Drawing, Digital Illustration, Composition" },
];

const background = [
  {
    period: "2005–Present",
    title: "Bestselling Author & Screenwriter",
    desc: "170+ novels, 500,000+ readers, 8-12 novels/year",
    color: "#ff00aa",
  },
  {
    period: "2024–Present",
    title: "AI Content Creator & Producer",
    desc: "200+ projects, proprietary prompt engineering systems",
    color: "#00f0ff",
  },
  {
    period: "2023–Present",
    title: "Creative Writer & AI Specialist on Upwork",
    desc: "5-star rated freelancer",
    color: "#ff00aa",
  },
];

const whyChooseMe = [
  { icon: BookOpen, text: "170 novels = 170 ready-made IPs for vertical series adaptation" },
  { icon: Zap, text: "Every chapter ending is a cliffhanger" },
  { icon: Layers, text: "Writer + AI Producer in one person" },
  { icon: Sparkles, text: "Fine arts education for visual composition" },
  { icon: Award, text: "200+ projects delivered" },
  { icon: Shield, text: "War-zone resilience: relocated family of 7 while maintaining full creative output" },
];

export default function ResumeSection() {
  return (
    <section id="resume" className="relative py-20 md:py-32 overflow-hidden bg-[#050508]">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#00f0ff 1px, transparent 1px), linear-gradient(90deg, #00f0ff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-[#00f0ff]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-[#ff00aa]/5 rounded-full blur-[120px]" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div {...fadeUp} className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#00f0ff]" />
            <span className="font-[Orbitron] text-[10px] tracking-[0.4em] text-[#00f0ff]/60">
              CURRICULUM VITAE
            </span>
          </div>
          <h2 className="font-[Orbitron] text-2xl md:text-4xl font-bold tracking-[0.1em] text-white mb-4">
            AI VIDEO <span className="neon-text-magenta">CREATOR</span> &{" "}
            <span className="neon-text-cyan">PRODUCER</span>
          </h2>
          <p className="font-[Rajdhani] text-white/40 text-lg max-w-2xl">
            Screenwriter | Audio & Voice Production | AI Content Strategist
          </p>
          <p className="font-[Rajdhani] text-white/30 text-sm mt-2">
            Remote, Ukraine | Full-time available | International contracts
          </p>
        </motion.div>

        {/* Profile */}
        <motion.div
          {...fadeUp}
          className="mb-20 p-6 md:p-8 border border-[#00f0ff]/15 bg-[#0a0a14]/60 relative"
        >
          <div className="absolute top-0 left-0 w-16 h-[1px] bg-[#00f0ff]" />
          <div className="absolute top-0 left-0 w-[1px] h-16 bg-[#00f0ff]" />
          <div className="absolute bottom-0 right-0 w-16 h-[1px] bg-[#ff00aa]" />
          <div className="absolute bottom-0 right-0 w-[1px] h-16 bg-[#ff00aa]" />
          <h3 className="font-[Orbitron] text-xs tracking-[0.3em] text-[#00f0ff]/70 mb-4">
            PROFILE
          </h3>
          <p className="font-[Rajdhani] text-white/60 text-lg leading-relaxed">
            One-person AI production studio with <span className="text-[#00f0ff]">200+ completed video projects</span> across{" "}
            <span className="text-[#00f0ff]">10+ content niches</span>. Full pipeline from concept to final cut:
            screenwriting, AI visual generation, voice acting, original music, sound design, editing, and
            post-production. <span className="text-[#ff00aa]">20 years of professional storytelling</span> (170+ published
            novels, 500,000+ readers) combined with cutting-edge AI production skills. Fine arts degree (visual
            composition, color theory, cinematic framing).
          </p>
        </motion.div>

        {/* What I Create */}
        <motion.div {...fadeUp} className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Film size={18} className="text-[#00f0ff]" />
            <h3 className="font-[Orbitron] text-sm md:text-base tracking-[0.2em] text-white">
              WHAT I CREATE <span className="text-[#00f0ff]/50 text-xs">(200+ Projects)</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {creationCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                {...stagger}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-5 border border-white/5 bg-[#0a0a14]/40 hover:border-[color:var(--accent)]/30 transition-all duration-500 relative overflow-hidden"
                style={{ "--accent": cat.color } as React.CSSProperties}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${cat.color}08, transparent 70%)`,
                  }}
                />
                <div className="relative z-10">
                  <cat.icon
                    size={20}
                    className="mb-3 transition-colors duration-300"
                    style={{ color: `${cat.color}99` }}
                  />
                  <h4 className="font-[Orbitron] text-[11px] tracking-[0.15em] text-white/90 mb-3">
                    {cat.title}
                  </h4>
                  <ul className="space-y-1.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <ChevronRight
                          size={12}
                          className="mt-1 flex-shrink-0"
                          style={{ color: `${cat.color}60` }}
                        />
                        <span className="font-[Rajdhani] text-white/40 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Production Pipeline */}
        <motion.div {...fadeUp} className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Layers size={18} className="text-[#ff00aa]" />
            <h3 className="font-[Orbitron] text-sm md:text-base tracking-[0.2em] text-white">
              FULL PRODUCTION PIPELINE
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-2 md:gap-0 justify-center">
            {pipelineSteps.map((step, i) => (
              <div key={step} className="flex items-center">
                <motion.div
                  {...stagger}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  className="px-4 py-3 border border-[#00f0ff]/15 bg-[#0a0a14]/60 hover:border-[#00f0ff]/40 transition-all duration-300 group"
                >
                  <span className="font-[Orbitron] text-[9px] md:text-[10px] tracking-[0.15em] text-white/60 group-hover:text-[#00f0ff] transition-colors">
                    {step}
                  </span>
                </motion.div>
                {i < pipelineSteps.length - 1 && (
                  <ChevronRight size={16} className="text-[#00f0ff]/30 mx-1 hidden md:block flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div {...fadeUp} className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Wrench size={18} className="text-[#00f0ff]" />
            <h3 className="font-[Orbitron] text-sm md:text-base tracking-[0.2em] text-white">
              TOOLS
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {toolCategories.map((tc, i) => (
              <motion.div
                key={tc.label}
                {...stagger}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-4 border border-white/5 bg-[#0a0a14]/30 hover:border-[#00f0ff]/20 transition-all duration-300"
              >
                <span className="font-[Orbitron] text-[9px] tracking-[0.2em] text-[#00f0ff]/60 block mb-2">
                  {tc.label.toUpperCase()}
                </span>
                <span className="font-[Rajdhani] text-white/50 text-sm leading-relaxed">
                  {tc.tools}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Background — Timeline */}
        <motion.div {...fadeUp} className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Award size={18} className="text-[#ff00aa]" />
            <h3 className="font-[Orbitron] text-sm md:text-base tracking-[0.2em] text-white">
              PROFESSIONAL BACKGROUND
            </h3>
          </div>
          <div className="relative pl-6 border-l border-white/10 space-y-8">
            {background.map((item, i) => (
              <motion.div
                key={item.title}
                {...stagger}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute -left-[31px] top-1 w-3 h-3 border-2 bg-[#050508]"
                  style={{ borderColor: item.color }}
                />
                <span
                  className="font-[Orbitron] text-[10px] tracking-[0.2em] block mb-1"
                  style={{ color: `${item.color}99` }}
                >
                  {item.period}
                </span>
                <h4 className="font-[Orbitron] text-xs tracking-[0.1em] text-white/90 mb-1">
                  {item.title}
                </h4>
                <p className="font-[Rajdhani] text-white/40 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education & Languages — side by side */}
        <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {/* Education */}
          <div className="p-6 border border-[#00f0ff]/10 bg-[#0a0a14]/40">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap size={18} className="text-[#00f0ff]" />
              <h3 className="font-[Orbitron] text-xs tracking-[0.2em] text-white/80">EDUCATION</h3>
            </div>
            <p className="font-[Rajdhani] text-white/60 text-base leading-relaxed">
              Kharkiv National Pedagogical University
            </p>
            <p className="font-[Rajdhani] text-white/40 text-sm">
              Faculty of Art / Fine Arts, 2002
            </p>
          </div>
          {/* Languages */}
          <div className="p-6 border border-[#ff00aa]/10 bg-[#0a0a14]/40">
            <div className="flex items-center gap-3 mb-4">
              <Globe size={18} className="text-[#ff00aa]" />
              <h3 className="font-[Orbitron] text-xs tracking-[0.2em] text-white/80">LANGUAGES</h3>
            </div>
            <div className="space-y-2">
              {[
                { lang: "Russian", level: "Native" },
                { lang: "Ukrainian", level: "Native" },
                { lang: "English", level: "Professional Working" },
              ].map((l) => (
                <div key={l.lang} className="flex justify-between items-center">
                  <span className="font-[Rajdhani] text-white/60">{l.lang}</span>
                  <span className="font-[Orbitron] text-[9px] tracking-[0.15em] text-[#ff00aa]/60">
                    {l.level.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Why Clients Choose Me */}
        <motion.div {...fadeUp}>
          <div className="flex items-center gap-3 mb-8">
            <Sparkles size={18} className="text-[#00f0ff]" />
            <h3 className="font-[Orbitron] text-sm md:text-base tracking-[0.2em] text-white">
              WHY CLIENTS CHOOSE ME
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyChooseMe.map((item, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 border border-white/5 bg-[#0a0a14]/30 hover:border-[#00f0ff]/20 transition-all duration-500 group"
              >
                <div className="w-9 h-9 border border-[#00f0ff]/20 flex items-center justify-center flex-shrink-0 group-hover:border-[#00f0ff]/50 transition-colors duration-300">
                  <item.icon size={16} className="text-[#00f0ff]/50 group-hover:text-[#00f0ff] transition-colors" />
                </div>
                <p className="font-[Rajdhani] text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
