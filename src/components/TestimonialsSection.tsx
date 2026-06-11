"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import contentData from "@/data/content.json";
import SectionCorners from "./SectionCorners";

export default function TestimonialsSection() {
  const { testimonials } = contentData.home;
  const testimonialImages = testimonials.images;
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonialImages.length - itemsPerView);

  const next = () => setIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setIndex((prev) => Math.max(prev - 1, 0));

  return (
    <section id="testimonials" className="py-24 md:py-36 bg-[#0A0A0A] relative overflow-hidden">
      <SectionCorners />
      {/* Ghost BG text */}
      <div className="absolute inset-0 flex items-center justify-start pl-4 pointer-events-none select-none overflow-hidden">
        <span className="text-[16vw] font-[900] font-[Oswald] text-white/[0.02] tracking-tight uppercase leading-none">
          RESULTS
        </span>
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="h-[2px] w-8"
                style={{ background: "#CC0000", boxShadow: "0 0 8px rgba(204,0,0,0.8), 0 0 20px rgba(204,0,0,0.4)" }}
              />
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-glow-red">
                {testimonials.eyeBrow}
              </span>
            </div>
            <h2 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-[900] tracking-[-0.03em] text-white leading-[0.92]">
              {testimonials.headline}
            </h2>
          </motion.div>

          {/* Controls */}
          <div className="flex gap-3 pb-2">
            <button
              onClick={prev}
              disabled={index === 0}
              className="w-12 h-12 flex items-center justify-center bg-[#0C0C0C] border border-[#1C1C1C] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group"
              style={{
                transition: "border-color 0.3s, box-shadow 0.3s, background-color 0.3s",
              }}
              onMouseEnter={(e) => {
                if (index !== 0) {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(204,0,0,0.5)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 15px rgba(204,0,0,0.2), inset 0 0 10px rgba(204,0,0,0.1)";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(204,0,0,0.05)";
                }
              }}
              onMouseLeave={(e) => {
                if (index !== 0) {
                  (e.currentTarget as HTMLElement).style.borderColor = "#1C1C1C";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#0C0C0C";
                }
              }}
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-white group-hover:text-[var(--accent)] transition-colors duration-300" />
            </button>
            <button
              onClick={next}
              disabled={index === maxIndex}
              className="w-12 h-12 flex items-center justify-center bg-[#0C0C0C] border border-[#1C1C1C] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group"
              style={{
                transition: "border-color 0.3s, box-shadow 0.3s, background-color 0.3s",
              }}
              onMouseEnter={(e) => {
                if (index !== maxIndex) {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(204,0,0,0.5)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 15px rgba(204,0,0,0.2), inset 0 0 10px rgba(204,0,0,0.1)";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(204,0,0,0.05)";
                }
              }}
              onMouseLeave={(e) => {
                if (index !== maxIndex) {
                  (e.currentTarget as HTMLElement).style.borderColor = "#1C1C1C";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#0C0C0C";
                }
              }}
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-white group-hover:text-[var(--accent)] transition-colors duration-300" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-5"
            animate={{ x: `-${index * (100 / itemsPerView + (itemsPerView > 1 ? 1.5 : 0))}%` }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
          >
            {testimonialImages.map((image, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 aspect-[4/5] overflow-hidden bg-[#0C0C0C] transition-all duration-300 group"
                style={{
                  width: `calc(${100 / itemsPerView}% - ${
                    ((itemsPerView - 1) * 20) / itemsPerView
                  }px)`,
                  border: "1px solid #1C1C1C",
                  boxShadow: "0 0 20px rgba(0,0,0,0.5)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(204,0,0,0.4)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 25px rgba(204,0,0,0.2), inset 0 0 15px rgba(204,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#1C1C1C";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(0,0,0,0.5)";
                }}
              >
                <img
                  src={image}
                  alt={`Client Transformation ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress indicator */}
        <div className="mt-10 flex items-center gap-4">
          <div className="flex-1 h-[1px] bg-[#1C1C1C] relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 bottom-0"
              style={{
                background: "linear-gradient(90deg, transparent, #CC0000, #FF5555, #CC0000, transparent)",
                backgroundSize: "200% 100%",
                boxShadow: "0 0 8px rgba(204,0,0,0.6)",
                animation: "shimmer 3s linear infinite",
              }}
              animate={{
                width: `${(1 / testimonialImages.length) * 100}%`,
                x: `${index * 100}%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <span className="text-[11px] text-[var(--muted)] font-bold tracking-[0.2em] tabular-nums">
            {String(index + 1).padStart(2, "0")} / {String(maxIndex + 1).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
