import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://demo.korametrics.com"),
  title: "Kora Metrics — AI-Powered Accounting & Tax Automation",
  description:
    "Suite d'outils IA pour l'automatisation comptable et fiscale en Afrique. SYSCOHADA · OHADA · Sénégal.",
  openGraph: {
    title: "Kora Metrics",
    description: "AI-Powered Accounting & Tax Automation for Africa",
    url: "https://demo.korametrics.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kora Metrics",
    description: "AI-Powered Accounting & Tax Automation for Africa",
  },
  icons: {
    icon: "/images/k-dark.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
