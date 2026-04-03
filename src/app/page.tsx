"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GridBackground } from "@/components/ui/GridBackground";
import { RadialGlow } from "@/components/ui/RadialGlow";

export default function SplashPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <GridBackground />
      <RadialGlow className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 flex flex-col items-center gap-8 px-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src="/images/kora-logo-dark.svg"
            alt="Kora Metrics"
            width={240}
            height={64}
            priority
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-lg text-muted-foreground md:text-xl"
        >
          AI-Powered Finance & Tax Automation
        </motion.p>

        {/* Language buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-4"
        >
          {[
            { label: "Français", locale: "fr" },
            { label: "English", locale: "en" },
          ].map((btn) => (
            <motion.button
              key={btn.locale}
              onClick={() => router.push(`/${btn.locale}`)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full border border-border bg-card px-8 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-[#253047] hover:border-primary/30"
            >
              {btn.label}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Bottom event text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-6 text-xs text-muted-foreground"
      >
        GITEX Africa 2026 · Marrakech
      </motion.p>
    </div>
  );
}
