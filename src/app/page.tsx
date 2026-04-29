import { HomeScaffold } from "@/components/home-scaffold";
import { homeDictionaries } from "@/i18n/pages/home";

export default function Home() {
  return <HomeScaffold dictionary={homeDictionaries.en} />;
}
