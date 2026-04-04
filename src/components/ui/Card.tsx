"use client";

import { motion } from "framer-motion";

type CardProps = {
  children: React.ReactNode;
  borderTopColor?: string;
  className?: string;
  hover?: boolean;
};

export function Card({
  children,
  borderTopColor,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <motion.div
      className={`card-elevated rounded-2xl border border-border bg-card p-6 transition-all duration-300 ${
        hover ? "hover:bg-muted/50 hover:border-primary/30" : ""
      } ${className}`}
      style={borderTopColor ? { borderTopWidth: 4, borderTopColor } : undefined}
      whileHover={hover ? { y: -2 } : undefined}
    >
      {children}
    </motion.div>
  );
}
