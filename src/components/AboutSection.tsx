"use client";

import { motion } from "framer-motion";
import { Target, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "PROVEN SYSTEM",
    desc: "Our proprietary 10-point diagnostic identifies your exact bottlenecks. No generic programs. No wasted time.",
  },
  {
    icon: Shield,
    title: "RESULTS GUARANTEED",
    desc: "Get visible results in 12 months or we coach you free until you do. That's our commitment to your success.",
  },
  {
    icon: Zap,
    title: "BUILT FOR BUSY PEOPLE",
    desc: "Efficient programming for executives, entrepreneurs, and high performers. No 2-hour gym sessions required.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24">
          {/* Left - Header */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-8 bg-[var(--accent)]" />
                <span className="text-xs font-semibold tracking-[0.25em] text-[var(--muted)] uppercase">
                  Why Us
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-[800] tracking-[-0.02em] text-[var(--foreground)] leading-[0.95]">
                WHY
                <br />
                <span className="text-[var(--accent)]">RETHINK</span>
                <br />
                FITNESS
              </h2>
              <p className="text-[var(--muted)] text-base leading-relaxed mt-6 max-w-sm">
                We don&apos;t believe in one-size-fits-all. Every body is different, 
                and our approach reflects that.
              </p>
            </motion.div>
          </div>

          {/* Right - Features */}
          <div className="space-y-0">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * idx }}
                className="group border-b border-[var(--border)] last:border-b-0 py-8 md:py-10"
              >
                <div className="flex gap-5 md:gap-7">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-11 h-11 bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center group-hover:bg-[var(--accent)]/20 group-hover:border-[var(--accent)]/40 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-[var(--accent)]" strokeWidth={2} />
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-[700] text-[var(--foreground)] tracking-wide mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[var(--muted)] leading-[1.7] text-sm md:text-[15px]">
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
