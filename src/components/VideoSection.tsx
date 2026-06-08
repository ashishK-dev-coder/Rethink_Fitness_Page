"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function VideoSection() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <section className="py-20 md:py-32 bg-[var(--secondary)] transition-colors duration-400">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-[2px] w-6 bg-[var(--accent)]" />
              <span className="text-xs font-semibold tracking-[0.25em] text-[var(--muted)] uppercase">
                Our Story
              </span>
              <div className="h-[2px] w-6 bg-[var(--accent)]" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-[800] tracking-[-0.02em] text-[var(--foreground)] mb-5">
              WATCH THE TRANSFORMATION
            </h2>
            <p className="text-[var(--muted)] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              See how we&apos;ve transformed 1000+ lives. The science behind
              our system, explained in 10 minutes.
            </p>
          </motion.div>

          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative w-full overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-[var(--border)]"
          >
            <div className="relative pt-[56.25%]">
              {!videoPlaying ? (
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                  onClick={() => setVideoPlaying(true)}
                  role="button"
                  aria-label="Play video"
                >
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663698639650/GCtMDoRQXGjHc28ogHbyFy/gym-facility-dark-U77KW7vk2kZ9Q4SSuVX7hv.webp"
                    alt="Video Thumbnail - Gym Facility"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10 w-20 h-20 md:w-24 md:h-24 bg-[var(--accent)] rounded-full flex items-center justify-center shadow-[0_0_40px_8px] shadow-[var(--accent)]/20 transition-colors duration-300"
                  >
                    <Play className="w-7 h-7 md:w-9 md:h-9 text-[var(--accent-foreground)] ml-1" fill="currentColor" />
                  </motion.button>
                  
                  {/* Duration badge */}
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white/90 tracking-wide">
                    10:24
                  </div>
                </div>
              ) : (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Rethink Fitness - Video Sales Letter"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </motion.div>

          {/* Video Stats */}
          <div className="mt-10 md:mt-14 grid grid-cols-3 gap-3 md:gap-5">
            {[
              { value: "10 MIN", label: "Watch Time" },
              { value: "100%", label: "Science-Based" },
              { value: "FREE", label: "No Card Required" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
                className="bg-[var(--background)] p-5 md:p-7 border border-[var(--border)] text-center hover:border-[var(--accent)]/40 transition-all duration-300"
              >
                <p className="text-[var(--accent)] font-[800] text-lg md:text-2xl font-[Oswald] tracking-tight">
                  {item.value}
                </p>
                <p className="text-[11px] md:text-xs text-[var(--muted)] mt-1.5 uppercase tracking-[0.1em]">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
