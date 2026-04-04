"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";

type FullscreenPdfModalProps = {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  title: string;
  downloadLabel: string;
  closeLabel: string;
};

export function FullscreenPdfModal({
  isOpen,
  onClose,
  src,
  title,
  downloadLabel,
  closeLabel,
}: FullscreenPdfModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col bg-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          {/* Header bar */}
          <div
            className="flex items-center justify-between px-4 py-3 md:px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="truncate text-lg font-semibold text-foreground">
              {title}
            </h2>
            <div className="flex items-center gap-2">
              <a
                href={src}
                download
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-muted hover:border-primary/30"
              >
                <Download size={16} />
                <span className="hidden sm:inline">{downloadLabel}</span>
              </a>
              <button
                onClick={onClose}
                aria-label={closeLabel}
                className="inline-flex items-center justify-center rounded-full border border-border bg-card p-2 text-foreground transition-all duration-300 hover:bg-muted hover:border-primary/30"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* PDF iframe — pointer-events-none so clicks pass through to backdrop */}
          <div
            className="flex-1 px-4 pb-4 md:px-6 md:pb-6"
          >
            <motion.div
              className="h-full w-full overflow-hidden rounded-xl border border-border bg-muted"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`${src}#toolbar=0&navpanes=0`}
                title={title}
                className="h-full w-full border-0"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
