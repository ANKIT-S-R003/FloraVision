"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
};

export default function Button({
  children,
  variant = "primary",
  icon,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-accent";

  const variants: Record<string, string> = {
    primary:
      "border border-white/70 text-white hover:bg-white hover:text-bg hover:shadow-glow",
    secondary:
      "glass text-white hover:shadow-glow hover:border-accent/60",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
      {icon}
    </button>
  );
}
