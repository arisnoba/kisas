import Image from 'next/image';
import { GraduationCap, Lightbulb, Medal, Palette } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { HomeFooter } from '@/components/home-footer';
import { HomeHeader } from '@/components/home-header';
import { SubPageHero } from '@/components/sub-page-hero';
import { TextLines } from '@/components/text-lines';
import { TuitionComparisonBar, TuitionPaybackNumber } from '@/components/tuition-motion';
import { ArrowButton } from '@/components/ui/arrow-button';
import type { Locale } from '@/i18n/config';
import { homeDictionaries } from '@/i18n/pages/home';
import type { TuitionDictionary } from '@/i18n/pages/tuition';

type TuitionScaffoldProps = {
	dictionary: TuitionDictionary;
	locale: Locale;
};

const assets = {
	logo: '/assets/images/home/kisas-logo.svg',
	heroBackground: '/assets/images/tuition/hero-background.png',
	paybackBackground: '/assets/images/tuition/payback-background.png',
};

const scholarshipIcons: Record<TuitionDictionary['scholarships']['items'][number]['icon'], LucideIcon> = {
	lightbulb: Lightbulb,
	medal: Medal,
	graduation: GraduationCap,
	palette: Palette,
};

function getTuitionNav(locale: Locale) {
	const nav = homeDictionaries[locale].nav;

	return {
		...nav,
		localeSwitch: {
			...nav.localeSwitch,
			href: locale === 'zh' ? '/tuition' : '/zh/tuition',
		},
	};
}

export function TuitionScaffold({ dictionary, locale }: TuitionScaffoldProps) {
	const siteDictionary = homeDictionaries[locale];
	const nav = getTuitionNav(locale);
	const activeHref = locale === 'zh' ? '/zh/tuition' : '/tuition';
	const consultationHref = locale === 'zh' ? '/zh/consultation' : '/consultation';

	return (
		<main className="tuition-page home-page bg-white text-[#10367d]" lang={locale}>
			<HomeHeader activeHref={activeHref} logo={assets.logo} locale={locale} nav={nav} />
			<SubPageHero
				backgroundImage={{ src: assets.heroBackground, className: 'tuition-hero-background', backgroundPosition: 'center 46%' }}
				description={dictionary.hero.description}
				descriptionClassName="tuition-hero-description"
				headingClassName="tuition-hero-heading"
				innerClassName="tuition-hero-inner"
				overlayClassName="tuition-hero-overlay"
				sectionClassName="tuition-hero"
				titleLines={dictionary.hero.titleLines}
			/>

			<section className="tuition-comparison" aria-labelledby="tuition-comparison-title">
				<div className="container tuition-comparison-inner">
					<div className="tuition-comparison-heading">
						<h2 id="tuition-comparison-title">
							<TextLines className="block" lines={dictionary.comparison.titleLines} />
						</h2>
						<p>{dictionary.comparison.description}</p>
					</div>
					<div className="tuition-comparison-chart">
						{dictionary.comparison.rows.map((row, index) => (
							<div className="tuition-comparison-row" key={row.labelLines.join('-')}>
								<p className="tuition-comparison-label">
									<TextLines className="block" lines={row.labelLines} />
								</p>
								<div className="tuition-comparison-bar-track">
									<TuitionComparisonBar className={row.emphasis ? 'tuition-comparison-bar-emphasis' : ''} delay={index * 0.08} percent={row.percent} value={row.value} />
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="tuition-overview" aria-labelledby="tuition-overview-title">
				<div className="container tuition-overview-inner">
					<div className="tuition-section-heading">
						<h2 id="tuition-overview-title">
							<TextLines className="block" lines={dictionary.overview.titleLines} />
						</h2>
						<p>
							<TextLines className="block" lines={dictionary.overview.descriptionLines} />
						</p>
					</div>
					<div className="tuition-table-wrap">
						<div className="tuition-table" role="table" aria-label={dictionary.overview.titleLines.join(' ')}>
							<div className="tuition-table-row tuition-table-head" role="row">
								{dictionary.overview.columns.map(column => (
									<div role="columnheader" key={column}>
										{column}
									</div>
								))}
							</div>
							{dictionary.overview.rows.map(row => (
								<div className="tuition-table-row" role="row" key={row.join('-')}>
									{row.map((cell, index) => (
										<div role="cell" key={`${cell}-${index}`}>
											{cell}
										</div>
									))}
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="tuition-support" aria-labelledby="tuition-scholarships-title">
				<div className="container tuition-support-inner">
					<div className="tuition-scholarships">
						<h2 id="tuition-scholarships-title">
							<TextLines className="block" lines={dictionary.scholarships.titleLines} />
						</h2>
						<div className="tuition-scholarship-grid">
							{dictionary.scholarships.items.map(item => {
								const Icon = scholarshipIcons[item.icon];

								return (
									<article className="tuition-scholarship-card" key={item.title}>
										<Icon aria-hidden="true" size={24} strokeWidth={1.8} />
										<div>
											<h3>{item.title}</h3>
											<p>
												<TextLines className="block" lines={item.descriptionLines} />
											</p>
										</div>
									</article>
								);
							})}
						</div>
					</div>

					<div className="tuition-living">
						<h2>
							<TextLines className="block" lines={dictionary.livingCosts.titleLines} />
						</h2>
						<div className="tuition-living-groups">
							{dictionary.livingCosts.groups.map(group => (
								<section className="tuition-living-group" key={group.title}>
									<h3>{group.title}</h3>
									<ul>
										{group.items.map(item => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</section>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="tuition-payback" aria-labelledby="tuition-payback-title">
				<Image src={assets.paybackBackground} alt="" fill className="tuition-payback-background" sizes="100vw" />
				<div className="tuition-payback-overlay" />
				<div className="container tuition-payback-inner">
					<div className="tuition-payback-heading">
						<h2 id="tuition-payback-title">
							<TextLines className="block" lines={dictionary.payback.titleLines} />
						</h2>
						<div className="tuition-payback-aside">
							<p>{dictionary.payback.description}</p>
							<ArrowButton href={consultationHref} variant="outline">
								{dictionary.payback.cta}
							</ArrowButton>
						</div>
					</div>
					<div className="tuition-payback-grid">
						{dictionary.payback.scenarios.map(scenario => (
							<article className={`tuition-payback-card ${scenario.featured ? 'tuition-payback-card-featured' : ''}`} key={scenario.title}>
								<div className="tuition-payback-value">
									<TuitionPaybackNumber value={scenario.value} />
									<span>{scenario.unit}</span>
								</div>
								<div className="tuition-payback-card-copy">
									<h3>{scenario.title}</h3>
									<p>
										<TextLines className="block" lines={scenario.descriptionLines} />
									</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<HomeFooter footer={siteDictionary.footer} logo={assets.logo} />
		</main>
	);
}
