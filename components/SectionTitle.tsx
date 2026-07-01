"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto mb-14 flex justify-center"
    >
      <div className="relative px-3 py-1">
        <span className="absolute -left-1 -top-1 h-3 w-3 border-l border-t border-accent/70" />
        <span className="absolute -right-1 -bottom-1 h-3 w-3 border-b border-r border-accent/70" />
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
      </div>
    </motion.div>
  );
}
