import { notFound } from "next/navigation";
import type { Locale } from "@/types";
import { locales } from "@/types";
import { getDictionary } from "@/lib/i18n";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GridBackground } from "@/components/ui/GridBackground";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale as Locale);

  return (
    <>
      <GridBackground />
      <Navbar locale={locale as Locale} dictionary={dictionary} />
      <main className="relative z-10 min-h-screen pt-16">{children}</main>
      <Footer locale={locale as Locale} dictionary={dictionary} />
    </>
  );
}
