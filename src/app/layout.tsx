import type { Metadata } from "next";
import {
  Newsreader,
  Noto_Sans,
  Noto_Sans_SC,
  Noto_Serif_SC,
} from "next/font/google";
import { homeDictionaries } from "@/i18n/pages/home";
import "./globals.css";
import "@/styles/index.scss";

const metadataDictionary = homeDictionaries.en.metadata;

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSansSc = Noto_Sans_SC({
  weight: ["400", "500", "700", "800"],
  variable: "--font-noto-sans-sc",
  display: "swap",
  preload: false,
});

const notoSerifSc = Noto_Serif_SC({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto-serif-sc",
  display: "swap",
  preload: false,
});

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
    <html
      lang="en"
      className={`${newsreader.variable} ${notoSans.variable} ${notoSansSc.variable} ${notoSerifSc.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
