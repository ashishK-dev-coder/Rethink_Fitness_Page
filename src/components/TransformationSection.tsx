"use client";

import { motion } from "framer-motion";

const phases = [
  {
    num: "01",
    phase: "ASSESS",
    desc: "Identify your bottlenecks with our proprietary assessment. We dig deep to understand your unique situation.",
  },
  {
    num: "02",
    phase: "REBUILD",
    desc: "Fast-track fat loss, energy optimization, inflammation reset, and identity restructuring.",
  },
  {
    num: "03",
    phase: "OPTIMIZE",
    desc: "Get abs, eliminate pain, and regain control over your body and output.",
  },
  {
    num: "04",
    phase: "MAXIMIZE",
    desc: "Advanced methods to minimize time and effort while achieving goals you never dreamed possible.",
  },
];

export default function TransformationSection() {
  return (
    <section id="results" className="py-20 md:py-32 bg-[var(--secondary)] relative overflow-hidden transition-colors duration-400">
      {/* Accent side line */}
      <div className="absolute right-0 top-0 w-[3px] h-full bg-[var(--accent)]/20 transition-colors duration-300" />

      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-[2px] w-8 bg-[var(--accent)]" />
            <span className="text-xs font-semibold tracking-[0.25em] text-[var(--muted)] uppercase">
              The Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-[800] tracking-[-0.02em] text-[var(--foreground)]">
            THE <span className="text-[var(--accent)]">TRANSFORMATION</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 relative"
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663698639650/GCtMDoRQXGjHc28ogHbyFy/transformation-split-hgawpuoqhp6pakMYHuCJKr.webp"
              alt="Before and After Transformation"
              className="w-full h-auto shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]"
            />
            {/* Decorative corners */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-[3px] border-l-[3px] border-[var(--accent)] transition-colors duration-300" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-[3px] border-r-[3px] border-[var(--accent)]/40 transition-colors duration-300" />
          </motion.div>

          {/* Phases */}
          <div className="order-1 lg:order-2 space-y-0">
            {phases.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.12 * idx }}
                className="group border-b border-[var(--border)] last:border-b-0 py-6 md:py-8"
              >
                <div className="flex items-start gap-5">
                  {/* Number */}
                  <span className="text-3xl md:text-4xl font-[800] font-[Oswald] text-[var(--border)] group-hover:text-[var(--accent)] transition-colors duration-300 leading-none select-none">
                    {item.num}
                  </span>
                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-base md:text-lg font-[700] text-[var(--foreground)] tracking-[0.05em] mb-1.5 group-hover:text-[var(--accent)] transition-colors duration-300">
                      {item.phase}
                    </h3>
                    <p className="text-[var(--muted)] leading-[1.7] text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
