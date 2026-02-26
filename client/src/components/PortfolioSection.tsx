// Design: Neo-Tokyo Cyberpunk — masonry grid, neon tab bar, glow hover, lightbox, video player
import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, type Category, type PhotoItem, type VideoItem } from "@/data/portfolio";
import Lightbox from "./Lightbox";

const ITEMS_PER_PAGE = 12;

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<Category>("food");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const currentCategory = useMemo(() => categories.find(c => c.id === activeTab), [activeTab]);
  const currentData = useMemo(() => (currentCategory?.data || []) as (PhotoItem | VideoItem)[], [currentCategory]);
  const isVideoCategory = currentCategory?.type === "videos";
  
  const visibleItems = useMemo(() => currentData.slice(0, visibleCount), [currentData, visibleCount]);
  const hasMore = visibleCount < currentData.length;

  const handleTabChange = (tab: Category) => {
    setActiveTab(tab);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % currentData.length);
  }, [currentData.length]);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + currentData.length) % currentData.length);
  }, [currentData.length]);

  return (
    <section id="portfolio" className="relative py-20 md:py-32">
      {/* Section header */}
      <div className="container mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#00f0ff]" />
            <span className="font-[Orbitron] text-[10px] tracking-[0.4em] text-[#00f0ff]/60">SHOWCASE</span>
          </div>
          <h2 className="font-[Orbitron] text-2xl md:text-4xl font-bold tracking-[0.1em] text-white mb-2">
            PORT<span className="neon-text-cyan">FOLIO</span>
          </h2>
          <p className="font-[Rajdhani] text-white/40 text-lg max-w-xl">
            Explore AI-generated content across food photography, beauty visuals, and animated creations.
          </p>
        </motion.div>
      </div>

      {/* Tab bar */}
      <div className="container mb-10">
        <div className="flex flex-wrap gap-2 md:gap-0 md:inline-flex border border-[#00f0ff]/15 bg-[#050508]/50 backdrop-blur-sm">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleTabChange(cat.id)}
              className={`relative font-[Orbitron] text-[10px] md:text-xs tracking-[0.15em] px-4 md:px-6 py-3 transition-all duration-500 flex items-center gap-2 ${
                activeTab === cat.id
                  ? "text-[#00f0ff] bg-[#00f0ff]/5"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {cat.label}
              <span className={`text-[9px] px-1.5 py-0.5 ${
                activeTab === cat.id
                  ? "bg-[#00f0ff]/15 text-[#00f0ff]"
                  : "bg-white/5 text-white/30"
              }`}>
                {cat.count}
              </span>
              {activeTab === cat.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#00f0ff]"
                  style={{ boxShadow: "0 0 10px #00f0ff" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {isVideoCategory ? (
              // Video Grid
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {visibleItems.map((item, i) => {
                  const video = item as VideoItem;
                  return (
                    <motion.div
                      key={video.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.15 }}
                      className="group relative border border-[#ff00aa]/20 bg-[#0a0a12] overflow-hidden hover:border-[#ff00aa]/50 transition-all duration-500"
                      style={{
                        boxShadow: "0 0 0px rgba(255,0,170,0)"
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(255,0,170,0.15), 0 0 40px rgba(255,0,170,0.05)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0px rgba(255,0,170,0)";
                      }}
                    >
                      <video
                        src={video.url}
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full aspect-video object-cover"
                        style={{ backgroundColor: "#0a0a12" }}
                      />
                      <div className="p-4 border-t border-[#ff00aa]/10">
                        <h3 className="font-[Orbitron] text-xs tracking-[0.15em] text-[#ff00aa]/80">{video.title}</h3>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
              {/* Masonry Grid */}
              <div className="masonry-grid">
                {visibleItems.map((photo, i) => (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.5) }}
                    className="group relative cursor-pointer border border-[#00f0ff]/10 overflow-hidden bg-[#0a0a12] hover:border-[#00f0ff]/40 transition-all duration-500"
                    onClick={() => openLightbox(i)}
                    style={{
                      boxShadow: "0 0 0px rgba(0,240,255,0)"
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 15px rgba(0,240,255,0.12), 0 0 30px rgba(0,240,255,0.04)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0px rgba(0,240,255,0)";
                    }}
                  >
                    <img
                      src={photo.url}
                      alt={`AI generated ${activeTab} content`}
                      className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3">
                      <span className="font-[Orbitron] text-[9px] tracking-[0.2em] text-[#00f0ff]/70">
                        VIEW FULL SIZE
                      </span>
                    </div>
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#00f0ff]/0 group-hover:border-[#00f0ff]/40 transition-all duration-500" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#00f0ff]/0 group-hover:border-[#00f0ff]/40 transition-all duration-500" />
                  </motion.div>
                ))}
              </div>

              {/* Load More */}
              {hasMore && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-center mt-12"
                >
                  <button
                    onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
                    className="font-[Orbitron] text-[10px] tracking-[0.25em] px-10 py-3 border border-[#00f0ff]/30 text-[#00f0ff]/70 hover:border-[#00f0ff] hover:text-[#00f0ff] hover:bg-[#00f0ff]/5 transition-all duration-500 relative group"
                  >
                    LOAD MORE
                    <span className="ml-3 font-[Rajdhani] text-xs text-white/30">
                      ({visibleCount}/{currentData.length})
                    </span>
                    <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#00f0ff] group-hover:w-full transition-all duration-700" />
                  </button>
                </motion.div>
              )}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox — only show for photo categories */}
      {!isVideoCategory && (
        <Lightbox
          images={currentData as PhotoItem[]}
          currentIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </section>
  );
}
