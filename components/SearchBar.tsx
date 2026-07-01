"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center">
      <button
        aria-label="Toggle search"
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
      >
        <Search size={18} />
      </button>
      {open && (
        <input
          autoFocus
          type="text"
          placeholder="Search plants..."
          aria-label="Search plants"
          className="glass ml-2 w-40 rounded-full px-4 py-2 text-xs text-white placeholder:text-secondary focus-visible:outline-accent sm:w-56"
        />
      )}
    </div>
  );
}
