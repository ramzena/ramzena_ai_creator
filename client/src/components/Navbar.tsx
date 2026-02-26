// Design: Neo-Tokyo Cyberpunk — floating navbar with neon accents, Orbitron font
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-[#050508]/90 backdrop-blur-md border-b border-[#00f0ff]/10"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button onClick={() => handleClick("#hero")} className="flex items-center gap-2 group">
          <div className="w-8 h-8 border border-[#00f0ff] flex items-center justify-center relative overflow-hidden group-hover:border-[#ff00aa] transition-colors duration-500">
            <span className="font-[Orbitron] text-[#00f0ff] text-xs font-bold group-hover:text-[#ff00aa] transition-colors duration-500">AI</span>
            <div className="absolute inset-0 bg-[#00f0ff]/5 group-hover:bg-[#ff00aa]/5 transition-colors duration-500" />
          </div>
          <span className="font-[Orbitron] text-sm tracking-[0.2em] text-white/90 hidden sm:block">
            CREATOR
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="font-[Orbitron] text-xs tracking-[0.2em] text-white/60 hover:text-[#00f0ff] transition-all duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00f0ff] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden text-[#00f0ff] p-2"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#050508]/95 backdrop-blur-md border-b border-[#00f0ff]/10"
        >
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="font-[Orbitron] text-xs tracking-[0.2em] text-white/60 hover:text-[#00f0ff] transition-colors py-2 text-left"
              >
                {link.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
