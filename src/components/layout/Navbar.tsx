"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/types";
import type { Dictionary } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

type NavbarProps = {
  locale: Locale;
  dictionary: Dictionary;
};

const navItems = (locale: Locale, nav: Dictionary["nav"]) => [
  { href: `/${locale}/one-pagers`, label: nav.onePagers },
  { href: `/${locale}/pitch-deck`, label: nav.pitchDeck },
  { href: `/${locale}/demos`, label: nav.demos },
];

export function Navbar({ locale, dictionary }: NavbarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const items = navItems(locale, dictionary.nav);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border bg-sidebar/95 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href={`/${locale}`} className="shrink-0">
          <Image
            src="/images/kora-logo-dark.svg"
            alt="Kora Metrics"
            width={120}
            height={32}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-[1.125rem] left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop language switcher */}
        <div className="hidden md:block">
          <LanguageSwitcher locale={locale} />
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            className="fixed top-16 right-0 bottom-0 w-64 bg-sidebar border-l border-border z-50 p-6 flex flex-col gap-6 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-base font-medium transition-colors ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <LanguageSwitcher locale={locale} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
