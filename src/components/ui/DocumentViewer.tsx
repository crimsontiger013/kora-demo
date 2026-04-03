"use client";

import { useState } from "react";
import { Download, Maximize2 } from "lucide-react";
import { FullscreenPdfModal } from "./FullscreenPdfModal";

type DocumentViewerProps = {
  src: string;
  title: string;
  height?: string;
  downloadLabel: string;
  expandLabel?: string;
  closeLabel?: string;
};

export function DocumentViewer({
  src,
  title,
  height = "500px",
  downloadLabel,
  expandLabel,
  closeLabel,
}: DocumentViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="space-y-4">
      <div
        className="overflow-hidden rounded-xl border border-border bg-muted"
        style={{ height }}
      >
        <iframe
          src={`${src}#toolbar=0`}
          title={title}
          className="h-full w-full border-0"
          loading="lazy"
        />
      </div>
      <div className="flex items-center gap-2">
        <a
          href={src}
          download
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:bg-[#253047] hover:border-primary/30"
        >
          <Download size={16} />
          {downloadLabel}
        </a>
        {expandLabel && closeLabel && (
          <button
            onClick={() => setIsFullscreen(true)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:bg-[#253047] hover:border-primary/30"
          >
            <Maximize2 size={16} />
            {expandLabel}
          </button>
        )}
      </div>

      {expandLabel && closeLabel && (
        <FullscreenPdfModal
          isOpen={isFullscreen}
          onClose={() => setIsFullscreen(false)}
          src={src}
          title={title}
          downloadLabel={downloadLabel}
          closeLabel={closeLabel}
        />
      )}
    </div>
  );
}
