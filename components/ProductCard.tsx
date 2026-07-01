"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import type { Plant } from "@/constants";

type ProductCardProps = {
  plant: Plant;
};

export default function ProductCard({ plant }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.015 }}
      className="glass relative flex flex-col gap-4 overflow-visible rounded-[40px] p-6 pt-2 transition-shadow duration-300 hover:shadow-glow"
    >
      <div className="relative -mt-10 h-56 w-full">
        <Image
          src={plant.image}
          alt={plant.name}
          fill
          className="object-contain drop-shadow-2xl"
        />
      </div>
      <div>
        <h3 className="text-lg font-medium text-white">{plant.name}</h3>
        <p className="mt-1.5 text-xs leading-relaxed text-secondary">
          {plant.description}
        </p>
      </div>
      <div className="mt-auto flex items-center justify-between pt-2">
        <span className="text-base font-semibold text-white">
          {plant.price}
        </span>
        <button
          aria-label={`Add ${plant.name} to cart`}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-cardBorder text-white transition-colors hover:bg-accent hover:text-bg"
        >
          <ShoppingCart size={15} />
        </button>
      </div>
    </motion.div>
  );
}
