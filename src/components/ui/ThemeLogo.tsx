"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

type ThemeLogoProps = {
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
};

export function ThemeLogo({
  width = 120,
  height = 32,
  priority = false,
  className,
}: ThemeLogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Before mount, render dark logo as default (matches SSR dark default)
  const isDark = !mounted || resolvedTheme === "dark";
  const src = isDark ? "/images/kora-logo-dark.svg" : "/images/kora-logo-light.svg";

  return (
    <Image
      src={src}
      alt="Kora Metrics"
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
}
