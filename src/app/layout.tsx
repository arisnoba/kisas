import type { Metadata } from "next";
import { homeDictionaries } from "@/i18n/pages/home";
import "./globals.css";
import "@/styles/index.scss";

const metadataDictionary = homeDictionaries.en.metadata;

export const metadata: Metadata = {
  title: metadataDictionary.title,
  description: metadataDictionary.description,
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      zh: "/zh",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
