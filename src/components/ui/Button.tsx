"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  download?: boolean;
  className?: string;
  onClick?: () => void;
};

export function Button({
  children,
  href,
  variant = "primary",
  download,
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300";
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline:
      "border border-border text-foreground hover:bg-muted hover:border-primary/30",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  if (href && download) {
    return (
      <motion.a href={href} download className={styles} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  if (href) {
    return (
      <Link href={href} className="inline-block">
        <motion.span className={styles} {...motionProps}>
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button className={styles} onClick={onClick} {...motionProps}>
      {children}
    </motion.button>
  );
}
