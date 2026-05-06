import Image from 'next/image';
import { Clapperboard, Languages, Music, ChevronRight } from 'lucide-react';
import { HomeFooter } from '@/components/home-footer';
import { HomeHeader } from '@/components/home-header';
import { KisasButton } from '@/components/ui/kisas-button';
import type { AboutDictionary } from '@/i18n/pages/about';
import { homeDictionaries } from '@/i18n/pages/home';
import type { Locale } from '@/i18n/config';

type AboutScaffoldProps = {
	dictionary: AboutDictionary;
	locale: Locale;
};

const assets = {
	heroBackground: '/assets/images/about/hero-background.png',
	pricingBackground: '/assets/images/about/pricing-background.png',
	logo: '/assets/images/home/kisas-logo.svg',
};

function TextLines({ lines, className }: { lines: string[]; className?: string }) {
	return (
		<>
			{lines.map(line => (
				<span className={className} key={line}>
					{line}
				</span>
			))}
		</>
	);
}

function getAboutNav(locale: Locale) {
	const nav = homeDictionaries[locale].nav;

	return {
		...nav,
		localeSwitch: {
			...nav.localeSwitch,
			href: locale === 'zh' ? '/about' : '/zh/about',
		},
	};
}

function AudienceIcon({ icon }: { icon: AboutDictionary['audience']['items'][number]['icon'] }) {
	const Icon = icon === 'music' ? Music : icon === 'media' ? Clapperboard : Languages;

	return <Icon aria-hidden="true" size={24} strokeWidth={1.8} />;
}

export function AboutScaffold({ dictionary, locale }: AboutScaffoldProps) {
	const siteDictionary = homeDictionaries[locale];
	const nav = getAboutNav(locale);
	const activeHref = locale === 'zh' ? '/zh/about' : '/about';

	return (
		<main className="about-page home-page bg-white text-[#10367d]" lang={locale}>
			<section className="about-hero">
				<Image priority src={assets.heroBackground} alt="" fill className="about-hero-background" sizes="100vw" />
				<div className="about-hero-overlay" />
				<HomeHeader activeHref={activeHref} logo={assets.logo} locale={locale} nav={nav} />

				<div className="container about-hero-inner">
					<div className="about-hero-heading">
						<h1>
							<TextLines className="block" lines={dictionary.hero.titleLines} />
						</h1>
						<p>
							<TextLines className="block" lines={dictionary.hero.subtitleLines} />
						</p>
					</div>
					<p className="about-hero-description">{dictionary.hero.description}</p>
				</div>
			</section>

			<section className="about-steps" aria-labelledby="about-steps-title">
				<div className="container about-steps-inner">
					<div className="about-steps-overview">
						<h2 id="about-steps-title">
							<TextLines className="block" lines={dictionary.steps.titleLines} />
						</h2>
						<p>{dictionary.steps.description}</p>
					</div>
					<div className="about-step-track" aria-label="Program steps">
						{dictionary.steps.items.map(step => (
							<article className={`about-step-card about-step-card-${step.shape}`} key={step.number}>
								<div className="about-step-card-content">
									<p className="about-step-number">{step.number}</p>
									<h3>
										<TextLines className="block" lines={step.titleLines} />
									</h3>
									<p>{step.description}</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="about-audience" aria-labelledby="about-audience-title">
				<div className="container about-audience-inner">
					<h2 id="about-audience-title">
						<TextLines className="block" lines={dictionary.audience.titleLines} />
					</h2>
					<div className="about-audience-grid">
						{dictionary.audience.items.map(item => (
							<article className="about-audience-item" key={item.title}>
								<div className="about-audience-icon">
									<AudienceIcon icon={item.icon} />
								</div>
								<h3>{item.title}</h3>
								<p>{item.description}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="about-packages" aria-labelledby="about-packages-title">
				<Image src={assets.pricingBackground} alt="" fill className="about-packages-background" sizes="100vw" />
				<div className="about-packages-overlay" />
				<div className="container about-packages-inner">
					<div className="about-packages-heading">
						<h2 id="about-packages-title">
							<TextLines className="block" lines={dictionary.packages.titleLines} />
						</h2>
						<div className="about-packages-aside">
							<p>
								<TextLines className="block" lines={dictionary.packages.descriptionLines} />
							</p>
							<KisasButton href={locale === 'zh' ? '/zh/majors-career' : '/majors-career'} icon={<ChevronRight aria-hidden="true" size={18} strokeWidth={1.8} />} variant="outline">
								{dictionary.packages.cta}
							</KisasButton>
						</div>
					</div>
					<div className="about-package-grid">
						{dictionary.packages.items.map(item => (
							<article className={`about-package-card about-package-card-${item.variant}`} key={item.label}>
								<p className="about-package-label">{item.label}</p>
								<h3>
									<TextLines className="block" lines={item.titleLines} />
								</h3>
								<p>{item.description}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<HomeFooter footer={siteDictionary.footer} logo={assets.logo} />
		</main>
	);
}
