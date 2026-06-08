"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSelector from "./ThemeSelector";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border)]/50">
      <div className="container flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-[var(--accent)] flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_15px_-2px] group-hover:shadow-[var(--accent)]/40">
            <svg viewBox="0 0 100 100" className="w-5 h-5 text-[var(--accent-foreground)]">
              <polygon
                points="30,20 70,20 50,50 70,80 30,80 50,50"
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="text-base font-[700] tracking-[0.15em] font-[Oswald] hidden sm:inline text-[var(--foreground)]">
            RETHINK
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {["about", "programs", "results", "testimonials"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-[13px] font-medium tracking-[0.08em] text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200 uppercase"
            >
              {item === "testimonials" ? "STORIES" : item}
            </a>
          ))}

          <div className="w-[1px] h-5 bg-[var(--border)] mx-1" />

          {/* Theme Selector */}
          <ThemeSelector />

          <a
            href="#cta"
            className="bg-[var(--accent)] text-[var(--accent-foreground)] font-semibold text-[13px] tracking-[0.05em] px-5 py-2.5 hover:opacity-90 transition-all duration-200 hover:translate-y-[-1px] shadow-[0_2px_10px_-2px] shadow-[var(--accent)]/30"
          >
            JOIN NOW
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeSelector />
          <button
            className="p-2 text-[var(--foreground)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[var(--secondary)] border-t border-[var(--border)] overflow-hidden"
          >
            <div className="container py-6 space-y-1">
              {[
                { href: "#about", label: "ABOUT" },
                { href: "#programs", label: "PROGRAMS" },
                { href: "#results", label: "RESULTS" },
                { href: "#testimonials", label: "STORIES" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-[13px] font-medium tracking-[0.08em] py-3 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors border-b border-[var(--border)]/50 last:border-b-0"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#cta"
                  className="block w-full bg-[var(--accent)] text-[var(--accent-foreground)] text-center font-semibold text-[13px] tracking-[0.05em] px-6 py-3.5 hover:opacity-90 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  JOIN NOW
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
