"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./Button";
import SectionTitle from "./SectionTitle";

const TOTAL_SLIDES = 4;

export default function OxygenSection() {
  const [slide, setSlide] = useState(1);

  const next = () => setSlide((s) => (s % TOTAL_SLIDES) + 1);
  const prev = () => setSlide((s) => ((s - 2 + TOTAL_SLIDES) % TOTAL_SLIDES) + 1);

  return (
    <section className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="Our Best o2" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass flex flex-col overflow-hidden rounded-[32px] sm:flex-row"
        >
          <div className="relative h-64 w-full sm:h-auto sm:w-1/2">
            <Image
              src="/images/plant10.png"
              alt="Aglaonema plant, an O2-producing houseplant"
              fill
              className="object-contain p-8"
            />
          </div>

          <div className="flex w-full flex-col justify-center gap-5 p-8 sm:w-1/2 sm:p-12">
            <h3 className="text-2xl font-medium leading-snug text-white sm:text-3xl">
              We Have Small And Best O2 Plants Collection&rsquo;s
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-secondary">
              Oxygen-producing plants, often referred to as &quot;O2
              plants,&quot; are those that release oxygen into the atmosphere
              through the process of photosynthesis.
            </p>
            <p className="max-w-md text-sm leading-relaxed text-secondary">
              Many plants can help filter out pollutants and toxins from the
              air, such as formaldehyde, benzene, and trichloroethylene. This
              makes the air cleaner and healthier to breathe.
            </p>

            <div className="mt-2 flex items-center justify-between">
              <Button variant="primary" className="px-6 py-2.5 text-xs">
                Explore
              </Button>

              <div className="flex items-center gap-4">
                <span className="text-xs text-secondary">
                  {String(slide).padStart(2, "0")}/
                  {String(TOTAL_SLIDES).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    aria-label="Previous slide"
                    onClick={prev}
                    className="flex h-9 w-9 items-center justify-center text-white transition-colors hover:text-accent"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    aria-label="Next slide"
                    onClick={next}
                    className="flex h-9 w-9 items-center justify-center text-white transition-colors hover:text-accent"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {[0, 1, 2].map((d) => (
            <span
              key={d}
              className={`h-1.5 rounded-full transition-all ${
                d === 0 ? "w-6 bg-white" : "w-1.5 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
