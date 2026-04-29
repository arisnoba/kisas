import Link from "next/link";
import type { HomeDictionary } from "@/i18n/pages/home";

type HomeScaffoldProps = {
  dictionary: HomeDictionary;
};

export function HomeScaffold({ dictionary }: HomeScaffoldProps) {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <section className="home-hero flex flex-1 items-center">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-20 md:px-10 lg:px-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-medium text-muted-foreground">
                {dictionary.eyebrow}
              </p>
              <Link
                href={dictionary.localeSwitch.href}
                className="shrink-0 border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                {dictionary.localeSwitch.label}
              </Link>
            </div>

            <div className="flex max-w-3xl flex-col gap-5">
              <h1 className="home-hero-title display-title font-semibold">
                {dictionary.titleLines.map((line) => (
                  <span className="block" key={line}>
                    {line}
                  </span>
                ))}
              </h1>
              <p className="text-lg leading-8 text-muted-foreground md:text-xl">
                {dictionary.description}
              </p>
            </div>
          </div>

          <div className="home-scaffold-card-grid grid gap-4 md:grid-cols-3">
            {dictionary.cards.map((card) => (
              <div
                key={card.title}
                className="flex min-h-36 flex-col justify-between border bg-card p-5 text-card-foreground"
              >
                <h2 className="text-base font-semibold">{card.title}</h2>
                <p className="text-sm leading-6 text-muted-foreground">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
