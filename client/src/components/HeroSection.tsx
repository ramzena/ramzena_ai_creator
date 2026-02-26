// Design: Neo-Tokyo Cyberpunk — full-bleed hero with neon text, scan-line effect, diagonal split
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/6y6huofzlQlUH3NN9kuH20/sandbox/1uhXVVBlARYCKxngRUQSi1-img-1_1772119417000_na1fn_aGVyby1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNnk2aHVvZnpsUWxVSDNOTjlrdUgyMC9zYW5kYm94LzF1aFhWVkJsQVJZQ0t4bmdSVVFTaTEtaW1nLTFfMTc3MjExOTQxNzAwMF9uYTFmbl9hR1Z5YnkxaVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=BhC9W~tR7RJVPp2wVQwdEvjxhlhKW0JAnX8XX6a4P4a7Vgxwo1~LcgjP~qXZhO3OMhdKSYlQBVGsWxrXbXfPoF9ckSh0075HF1wYCI7Nesy8GTwwPf~F4-GsZl~Qy8ghTslUBJcsUNPvHvsMpVlTkA7LBLQOsCJ~80PAPOuaceQ8P4V-66Ce-w6JvSnfSIMsQRpz~z8HH3owtgw8qt0QC4ljfutnzaTHwOkQ1b9vuPTMs2fkViL99z0wuh67OB3Tt2sxYUK~NuXB5M47HFBHwXSot00CwhMaqEW7PWBDxN~BA1PT1Owv6E8NJiBJVjUMATcaI~PFKwfQGEmnXi~YGA__";

export default function HeroSection() {
  const scrollToPortfolio = () => {
    document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.4) saturate(1.3)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/60 via-[#050508]/30 to-[#050508]" />
      </div>

      {/* Scan line overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,240,255,0.1) 2px, rgba(0,240,255,0.1) 4px)",
            animation: "scanline 8s linear infinite",
          }}
        />
      </div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-[#00f0ff]/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-[#ff00aa]/30" />
      <div className="absolute bottom-24 left-8 w-16 h-16 border-b border-l border-[#ff00aa]/30" />
      <div className="absolute bottom-24 right-8 w-16 h-16 border-b border-r border-[#00f0ff]/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-[Rajdhani] text-[#00f0ff]/70 text-sm md:text-base tracking-[0.4em] mb-4 uppercase">
            AI-Powered Visual Content
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-[Orbitron] text-3xl sm:text-5xl md:text-7xl font-bold tracking-[0.1em] mb-6 leading-tight"
        >
          <span className="text-white">DIGITAL</span>
          <br />
          <span className="neon-text-cyan">CREATOR</span>
          <br />
          <span className="neon-text-magenta">STUDIO</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-[Rajdhani] text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Crafting hyper-realistic AI-generated visuals for food, cosmetics, and animation.
          Where artificial intelligence meets artistic vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={scrollToPortfolio}
            className="font-[Orbitron] text-xs tracking-[0.2em] px-8 py-3 border border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff]/10 transition-all duration-500 relative group"
            style={{ boxShadow: "0 0 15px rgba(0,240,255,0.1)" }}
          >
            <span className="relative z-10">VIEW PORTFOLIO</span>
            <div className="absolute inset-0 bg-[#00f0ff]/0 group-hover:bg-[#00f0ff]/5 transition-all duration-500" />
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="font-[Orbitron] text-xs tracking-[0.2em] px-8 py-3 border border-[#ff00aa]/50 text-[#ff00aa]/80 hover:border-[#ff00aa] hover:text-[#ff00aa] hover:bg-[#ff00aa]/10 transition-all duration-500"
          >
            GET IN TOUCH
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToPortfolio}
      >
        <span className="font-[Orbitron] text-[10px] tracking-[0.3em] text-[#00f0ff]/40">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-[#00f0ff]/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
