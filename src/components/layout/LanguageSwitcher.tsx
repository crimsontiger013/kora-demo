"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/types";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(target: Locale) {
    if (target === locale) return;
    const newPath = pathname.replace(`/${locale}`, `/${target}`);
    router.push(newPath);
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-border p-0.5">
      {(["fr", "en"] as const).map((lang) => (
        <button
          key={lang}
          onClick={() => switchLocale(lang)}
          className={`rounded-full px-3 py-1 text-xs font-medium uppercase transition-all duration-200 ${
            locale === lang
              ? "bg-primary text-white"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
