"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, ShoppingCart } from "lucide-react";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";
import { NAV_LINKS } from "@/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "glass shadow-glass" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <div className="flex items-center gap-2">
          <div className="relative h-9 w-9 shrink-0">
            <Image src="/images/logo.png" alt="FloraVision logo" fill className="object-contain" />
          </div>
          <span className="text-base font-medium text-white">FloraVision.</span>
        </div>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 text-sm text-secondary transition-colors hover:text-white"
            >
              {link.label}
              {link.hasDropdown && <ChevronDown size={14} />}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <SearchBar />
          <button
            aria-label="Cart"
            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
          >
            <ShoppingCart size={18} />
          </button>
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 md:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
