"use client";

import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";
import type { Review } from "@/constants";

type ReviewCardProps = {
  review: Review;
};

export default function ReviewCard({ review }: ReviewCardProps) {
  const fullStars = Math.floor(review.rating);
  const hasHalf = review.rating % 1 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="glass flex flex-col gap-4 rounded-[40px] p-6 transition-shadow duration-300 hover:shadow-glow"
    >
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <div className="image-placeholder h-full w-full text-[7px]">
            IMG
          </div>
        </div>
        <div>
          <p className="text-base font-medium text-white">{review.name}</p>
          <div className="mt-0.5 flex items-center gap-0.5 text-accent">
            {Array.from({ length: fullStars }).map((_, i) => (
              <Star key={i} size={13} fill="currentColor" stroke="none" />
            ))}
            {hasHalf && <StarHalf size={13} fill="currentColor" stroke="none" />}
          </div>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-secondary">{review.text}</p>
    </motion.div>
  );
}
