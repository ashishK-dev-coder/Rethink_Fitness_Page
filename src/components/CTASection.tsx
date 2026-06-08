"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section id="cta" className="py-24 md:py-36 bg-[var(--accent)] relative overflow-hidden transition-colors duration-400">
      {/* Geometric pattern background */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] border border-[var(--accent-foreground)] rotate-45 rounded-3xl" />
        <div className="absolute bottom-[-30%] right-[-5%] w-[400px] h-[400px] border border-[var(--accent-foreground)] rotate-12 rounded-3xl" />
        <div className="absolute top-[20%] right-[20%] w-[200px] h-[200px] border border-[var(--accent-foreground)] rotate-[-20deg] rounded-xl" />
      </div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-[800] tracking-[-0.02em] text-[var(--accent-foreground)] leading-[0.95]">
            READY TO
            <br />
            TRANSFORM?
          </h2>

          <p className="text-lg md:text-xl text-[var(--accent-foreground)]/80 max-w-lg mx-auto leading-relaxed font-light">
            Your transformation starts today. Join 1,000+ people who have already
            rethought their fitness journey.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[var(--background)] text-[var(--accent)] font-semibold text-sm tracking-wide px-9 py-4.5 hover:opacity-90 transition-all duration-200 hover:translate-y-[-1px] active:translate-y-[1px] shadow-[0_8px_30px_-5px_rgba(0,0,0,0.4)]"
            >
              START FREE CONSULTATION
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="text-[var(--accent-foreground)]/50 text-xs tracking-wide pt-2">
            No credit card required · Cancel anytime · Results guaranteed
          </p>
        </motion.div>
      </div>
    </section>
  );
}
