import type { Metadata } from "next";
import { HomeScaffold } from "@/components/home-scaffold";
import { homeDictionaries } from "@/i18n/pages/home";

const metadataDictionary = homeDictionaries.zh.metadata;

export const metadata: Metadata = {
  title: metadataDictionary.title,
  description: metadataDictionary.description,
  alternates: {
    canonical: "/zh",
    languages: {
      en: "/",
      zh: "/zh",
    },
  },
};

export default function ChineseHome() {
  return <HomeScaffold dictionary={homeDictionaries.zh} locale="zh" />;
}
