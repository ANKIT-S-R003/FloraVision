"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Star, StarHalf, ChevronRight } from "lucide-react";
import Button from "./Button";

const DOTS = [0, 1, 2];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-24 pt-36 lg:pt-44"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-bg/10" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <h1 className="text-6xl font-semibold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
            Earth&apos;s
            <br />
            Exhale
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-secondary sm:text-base">
            &ldquo;Earth Exhale&rdquo; symbolizes the purity and vitality of
            the Earth&apos;s natural environment and its essential role in
            sustaining life.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="primary">Buy Now</Button>
            <button className="flex items-center gap-2 text-sm text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60">
                <Play size={13} fill="currentColor" />
              </span>
              Live Demo...
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="glass mt-16 max-w-xs rounded-xl2 p-5"
          >
            <div className="flex items-center gap-3">
              <div className="image-placeholder h-10 w-10 shrink-0 rounded-full text-[7px]">
                IMG
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  Ronnie Hamill
                </p>
                <div className="mt-0.5 flex items-center gap-0.5 text-accent">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" stroke="none" />
                  ))}
                  <StarHalf size={12} fill="currentColor" stroke="none" />
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-secondary">
              I can&apos;t express how thrilled I am with my new natural
              plants! They bring such a fresh and vibrant energy to my home.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="glass relative rounded-xl3 p-6 shadow-glass sm:p-8"
        >
          <div className="relative mb-6 h-72 w-full sm:h-96">
            <Image
              src="/images/plant1.png"
              alt="Aglaonema plant in a speckled pot"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-xs uppercase tracking-wide text-accent">
            Indoor Plant
          </p>
          <div className="mt-1 flex items-center justify-between">
            <h3 className="text-2xl font-medium text-white">
              Aglaonema plant
            </h3>
            <ChevronRight size={20} className="text-white" />
          </div>
          <div className="mt-5 flex items-center justify-between">
            <Button variant="primary" className="px-5 py-2.5 text-xs">
              Buy Now
            </Button>
            <div className="flex items-center gap-2">
              {DOTS.map((d) => (
                <span
                  key={d}
                  className={`h-1.5 rounded-full transition-all ${
                    d === 0 ? "w-5 bg-white" : "w-1.5 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
