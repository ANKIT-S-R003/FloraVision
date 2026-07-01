"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import Button from "./Button";
import type { Plant } from "@/constants";

type PlantCardProps = {
  plant: Plant;
  reverse?: boolean;
};

export default function PlantCard({ plant, reverse = false }: PlantCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`glass flex flex-col items-center gap-6 overflow-visible rounded-[48px] p-6 sm:flex-row sm:gap-10 sm:p-10 ${
        reverse ? "sm:flex-row-reverse" : ""
      }`}
    >
      <div className="relative -mt-10 h-56 w-44 shrink-0 sm:-mt-16 sm:h-64 sm:w-48">
        <Image
          src={plant.image}
          alt={plant.name}
          fill
          className="object-contain drop-shadow-2xl"
        />
      </div>

      <div className="flex w-full flex-col gap-3 text-left">
        <h3 className="text-xl font-medium text-white sm:text-2xl">
          {plant.name}
        </h3>
        <p className="max-w-md text-sm leading-relaxed text-secondary">
          {plant.description}
        </p>
        <span className="text-xl font-semibold text-white">
          {plant.price}
        </span>
        <div className="mt-1 flex items-center gap-3">
          <Button variant="primary" className="px-6 py-2.5 text-xs">
            Explore
          </Button>
          <button
            aria-label={`Add ${plant.name} to cart`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 text-white transition-transform hover:scale-105"
          >
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
