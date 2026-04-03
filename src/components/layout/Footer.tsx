import Image from "next/image";
import { Mail, Globe, MessageCircle } from "lucide-react";
import type { Locale } from "@/types";
import type { Dictionary } from "@/lib/i18n";
import { CONTACT } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";

type FooterProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Footer({ locale, dictionary }: FooterProps) {
  return (
    <footer className="border-t border-border bg-sidebar">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <Image
              src="/images/kora-logo-dark.svg"
              alt="Kora Metrics"
              width={100}
              height={26}
            />
            <p className="text-sm text-muted-foreground">
              {dictionary.footer.rights}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={CONTACT.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Website"
            >
              <Globe size={18} />
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </div>

          <Badge>{dictionary.footer.event}</Badge>
        </div>
      </div>
    </footer>
  );
}
