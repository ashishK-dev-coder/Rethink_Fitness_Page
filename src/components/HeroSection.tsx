"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 relative overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/[0.03] to-transparent pointer-events-none" />
      
      {/* Accent side bar */}
      <div className="absolute left-0 top-24 w-[3px] h-48 bg-[var(--accent)] transition-colors duration-300" />

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="space-y-10"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <div className="h-[2px] w-8 bg-[var(--accent)]" />
            <span className="text-xs font-semibold tracking-[0.25em] text-[var(--muted)] uppercase">
              Elite Fitness Coaching
            </span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[clamp(3rem,7vw,5.5rem)] font-[800] leading-[0.9] tracking-[-0.03em] text-[var(--foreground)]"
            >
              REDEFINE
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[clamp(3rem,7vw,5.5rem)] font-[800] leading-[0.9] tracking-[-0.03em]"
            >
              <span className="text-[var(--foreground)]">YOUR </span>
              <span className="text-[var(--accent)] transition-colors duration-300">LIMITS</span>
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-base md:text-lg text-[var(--muted)] leading-[1.7] max-w-md font-normal"
          >
            Transform your body in 12 months with our proven system. 
            No excuses. No shortcuts. Just results.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
          >
            <a
              href="#cta"
              className="inline-flex items-center bg-[var(--accent)] text-[var(--accent-foreground)] font-semibold text-sm tracking-[0.05em] px-8 py-4 hover:opacity-90 transition-all duration-200 hover:translate-y-[-1px] active:translate-y-[1px] shadow-[0_4px_20px_-4px] shadow-[var(--accent)]/30"
            >
              START YOUR TRANSFORMATION
            </a>
            <a
              href="#about"
              className="group inline-flex items-center gap-2 text-[var(--accent)] text-sm font-medium tracking-wide"
            >
              <span>LEARN MORE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex gap-12 pt-6 border-t border-[var(--border)]"
          >
            <div>
              <p className="text-3xl md:text-4xl font-[800] text-[var(--foreground)] font-[Oswald] tracking-tight">
                1000<span className="text-[var(--accent)]">+</span>
              </p>
              <p className="text-xs text-[var(--muted)] mt-1 tracking-wide uppercase">
                Transformations
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-[800] text-[var(--foreground)] font-[Oswald] tracking-tight">
                99<span className="text-[var(--accent)]">%</span>
              </p>
              <p className="text-xs text-[var(--muted)] mt-1 tracking-wide uppercase">
                Success Rate
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-[800] text-[var(--foreground)] font-[Oswald] tracking-tight">
                10<span className="text-[var(--accent)]">+</span>
              </p>
              <p className="text-xs text-[var(--muted)] mt-1 tracking-wide uppercase">
                Years
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative h-[400px] md:h-[520px] lg:h-[600px] w-full"
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663698639650/GCtMDoRQXGjHc28ogHbyFy/hero-athlete-dark-4LpLZgkEoBtWrwM6rfQBug.webp"
            alt="Rethink Fitness - Professional Athlete"
            className="w-full h-full object-cover"
          />
          {/* Premium overlay gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-[var(--background)]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/80 via-transparent to-transparent" />
          
          {/* Corner accent frame */}
          <div className="absolute bottom-6 right-6 w-24 h-24 border-b-[3px] border-r-[3px] border-[var(--accent)] transition-colors duration-300" />
          <div className="absolute top-6 left-6 w-16 h-16 border-t-[3px] border-l-[3px] border-[var(--accent)]/30 transition-colors duration-300" />
        </motion.div>
      </div>
    </section>
  );
}
