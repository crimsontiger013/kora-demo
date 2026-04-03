"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

type VideoPlaceholderProps = {
  comingSoonText: string;
};

export function VideoPlaceholder({ comingSoonText }: VideoPlaceholderProps) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Play size={64} className="text-primary opacity-50" />
        </motion.div>
        <span className="rounded-full bg-background/60 px-4 py-1.5 text-sm font-medium text-foreground backdrop-blur-sm">
          {comingSoonText}
        </span>
      </div>
    </div>
  );
}
