"use client";

import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const programs = [
  {
    title: "FOUNDATION",
    subtitle: "Start Strong",
    price: "$199",
    period: "/month",
    features: [
      "Personalized Assessment",
      "Workout Programming",
      "Nutrition Guidance",
      "Monthly Check-ins",
    ],
    highlighted: false,
  },
  {
    title: "ELITE",
    subtitle: "Most Popular",
    price: "$399",
    period: "/month",
    features: [
      "Everything in Foundation",
      "Weekly Coaching Calls",
      "24/7 Priority Support",
      "Advanced Diagnostics",
      "Community Access",
    ],
    highlighted: true,
  },
  {
    title: "LEGACY",
    subtitle: "Maximum Results",
    price: "$699",
    period: "/month",
    features: [
      "Everything in Elite",
      "1-on-1 Training Sessions",
      "Custom Meal Plans",
      "Lifestyle Optimization",
      "Lifetime Membership",
    ],
    highlighted: false,
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-20 md:py-32">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 md:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-[2px] w-6 bg-[var(--accent)]" />
            <span className="text-xs font-semibold tracking-[0.25em] text-[var(--muted)] uppercase">
              Pricing
            </span>
            <div className="h-[2px] w-6 bg-[var(--accent)]" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-[800] tracking-[-0.02em] text-[var(--foreground)]">
            OUR <span className="text-[var(--accent)]">PROGRAMS</span>
          </h2>
          <p className="text-[var(--muted)] text-base mt-4 max-w-md mx-auto leading-relaxed">
            Choose the level that matches your ambition. Upgrade anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 * idx }}
              className={`relative flex flex-col p-7 md:p-9 border transition-all duration-300 ${
                program.highlighted
                  ? "bg-[var(--accent)] border-[var(--accent)] shadow-[0_20px_60px_-15px] shadow-[var(--accent)]/25 md:scale-[1.03] z-10"
                  : "bg-[var(--secondary)] border-[var(--border)] hover:border-[var(--accent)]/30"
              }`}
            >
              {/* Subtitle badge */}
              <span
                className={`text-[10px] font-semibold tracking-[0.2em] uppercase mb-4 ${
                  program.highlighted ? "text-[var(--accent-foreground)]/70" : "text-[var(--accent)]"
                }`}
              >
                {program.subtitle}
              </span>

              <h3
                className={`text-xl md:text-2xl font-[700] tracking-wide mb-1 ${
                  program.highlighted ? "text-[var(--accent-foreground)]" : "text-[var(--foreground)]"
                }`}
              >
                {program.title}
              </h3>

              <div className="mb-7 mt-4">
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-4xl md:text-5xl font-[800] font-[Oswald] tracking-tight ${
                      program.highlighted ? "text-[var(--accent-foreground)]" : "text-[var(--foreground)]"
                    }`}
                  >
                    {program.price}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      program.highlighted ? "text-[var(--accent-foreground)]/60" : "text-[var(--muted)]"
                    }`}
                  >
                    {program.period}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className={`h-[1px] w-full mb-6 ${program.highlighted ? "bg-[var(--accent-foreground)]/20" : "bg-[var(--border)]"}`} />

              <ul className="space-y-3.5 mb-8 flex-1">
                {program.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3">
                    <Check
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        program.highlighted ? "text-[var(--accent-foreground)]" : "text-[var(--accent)]"
                      }`}
                      strokeWidth={2.5}
                    />
                    <span
                      className={`text-sm leading-snug ${
                        program.highlighted ? "text-[var(--accent-foreground)]/90" : "text-[var(--muted)]"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full flex items-center justify-center gap-2 font-semibold text-sm tracking-wide py-4 transition-all duration-200 hover:translate-y-[-1px] active:translate-y-[1px] ${
                  program.highlighted
                    ? "bg-[var(--background)] text-[var(--accent)] shadow-[0_4px_15px_-3px_rgba(0,0,0,0.3)]"
                    : "bg-[var(--accent)] text-[var(--accent-foreground)] shadow-[0_4px_15px_-3px] shadow-[var(--accent)]/20"
                }`}
              >
                GET STARTED
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
