// Design: Neo-Tokyo Cyberpunk — minimal footer with neon accents
export default function Footer() {
  return (
    <footer className="relative border-t border-[#00f0ff]/10 bg-[#050508]">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 border border-[#00f0ff]/30 flex items-center justify-center">
            <span className="font-[Orbitron] text-[#00f0ff]/60 text-[8px] font-bold">AI</span>
          </div>
          <span className="font-[Rajdhani] text-white/20 text-sm">
            Digital Creator Studio
          </span>
        </div>
        <p className="font-[Rajdhani] text-white/15 text-sm tracking-wider">
          &copy; {new Date().getFullYear()} All rights reserved. Powered by AI.
        </p>
      </div>
    </footer>
  );
}
