"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const testimonialImages = [
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663698639650/GCtMDoRQXGjHc28ogHbyFy/testimonial-01-eoQTuXABYgKMDnAsMW2zTh.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663698639650/GCtMDoRQXGjHc28ogHbyFy/testimonial-02-3J94QdKSs6ne5f5xBVnHXJ.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663698639650/GCtMDoRQXGjHc28ogHbyFy/testimonial-03-UmwKqVnb2KsxJnRppiKFPD.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663698639650/GCtMDoRQXGjHc28ogHbyFy/testimonial-04-dfJ4yx48uxNT9dMT7E8yDF.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663698639650/GCtMDoRQXGjHc28ogHbyFy/testimonial-05-6c73DD8MHiS9sXEigVzV4b.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663698639650/GCtMDoRQXGjHc28ogHbyFy/testimonial-06-9PY8ZCYjqrHeaU9gRHv4Ft.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663698639650/GCtMDoRQXGjHc28ogHbyFy/testimonial-07-XMPcXtvpNmibJFTtMGR587.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663698639650/GCtMDoRQXGjHc28ogHbyFy/testimonial-08-7Hboftk9B3MTZrddePi2Km.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663698639650/GCtMDoRQXGjHc28ogHbyFy/testimonial-09-enxyiuULz5wtATDZGQLwUD.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663698639650/GCtMDoRQXGjHc28ogHbyFy/testimonial-10-o99U9rzQAMfGNQypjpiEJG.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663698639650/GCtMDoRQXGjHc28ogHbyFy/testimonial-11-iA7wrW58i6CSoqNp2FbjGt.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663698639650/GCtMDoRQXGjHc28ogHbyFy/testimonial-12-QnZbAMLAnmNJkNyhAUbCVg.webp",
];

export default function TestimonialsSection() {
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
    <section id="testimonials" className="py-20 md:py-32 bg-[var(--secondary)] transition-colors duration-400">
      <div className="container">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[2px] w-8 bg-[var(--accent)]" />
              <span className="text-xs font-semibold tracking-[0.25em] text-[var(--muted)] uppercase">
                Results
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-[800] tracking-[-0.02em] text-[var(--foreground)]">
              CLIENT <span className="text-[var(--accent)]">STORIES</span>
            </h2>
          </motion.div>

          {/* Controls */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={index === 0}
              className="w-11 h-11 flex items-center justify-center bg-[var(--background)] border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-[var(--foreground)]" />
            </button>
            <button
              onClick={next}
              disabled={index === maxIndex}
              className="w-11 h-11 flex items-center justify-center bg-[var(--background)] border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-[var(--foreground)]" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-5"
            animate={{ x: `-${index * (100 / itemsPerView + 1.5)}%` }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
          >
            {testimonialImages.map((image, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 aspect-[4/5] overflow-hidden border border-[var(--border)] hover:border-[var(--accent)]/50 transition-all duration-300 group"
                style={{
                  width: `calc(${100 / itemsPerView}% - ${
                    ((itemsPerView - 1) * 20) / itemsPerView
                  }px)`,
                }}
              >
                <img
                  src={image}
                  alt={`Client Transformation ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress indicator */}
        <div className="mt-8 flex items-center gap-3">
          <div className="flex-1 h-[2px] bg-[var(--border)] overflow-hidden">
            <motion.div
              className="h-full bg-[var(--accent)]"
              animate={{ width: `${((index + itemsPerView) / testimonialImages.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <span className="text-[11px] text-[var(--muted)] font-medium tabular-nums">
            {String(index + 1).padStart(2, "0")} / {String(maxIndex + 1).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
