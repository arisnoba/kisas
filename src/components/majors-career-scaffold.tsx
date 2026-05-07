import type { LucideIcon } from 'lucide-react';
import { BriefcaseBusiness, Clapperboard, Cpu, Drama, Hotel, Lightbulb, Music, Paintbrush, Sparkles, Trophy, Video } from 'lucide-react';
import majorsCareerHero from '../../public/assets/images/majors-career/hero-background.png';
import { HomeFooter } from '@/components/home-footer';
import { HomeHeader } from '@/components/home-header';
import { CareerDistributionDonut, CareerSalaryBar } from '@/components/majors-career-motion';
import { SubPageHero } from '@/components/sub-page-hero';
import { TextLines } from '@/components/text-lines';
import type { Locale } from '@/i18n/config';
import { homeDictionaries } from '@/i18n/pages/home';
import type { MajorCareerDictionary, MajorCareerIcon } from '@/i18n/pages/majors-career';

type MajorsCareerScaffoldProps = {
	dictionary: MajorCareerDictionary;
	locale: Locale;
};

const assets = {
	hero: majorsCareerHero,
	logo: '/assets/images/home/kisas-logo.svg',
};

const majorIcons: Record<MajorCareerIcon, LucideIcon> = {
	media: Clapperboard,
	film: Video,
	music: Music,
	performance: Drama,
	design: Paintbrush,
	business: BriefcaseBusiness,
	tourism: Hotel,
	beauty: Sparkles,
	esports: Trophy,
	computer: Cpu,
	animation: Lightbulb,
};

function getMajorsCareerNav(locale: Locale) {
	const nav = homeDictionaries[locale].nav;

	return {
		...nav,
		localeSwitch: {
			...nav.localeSwitch,
			href: locale === 'zh' ? '/majors-career' : '/zh/majors-career',
		},
	};
}

function MajorCard({ item }: { item: MajorCareerDictionary['majors']['items'][number] }) {
	const Icon = majorIcons[item.icon];

	return (
		<article className="majors-career-major-card">
			<Icon aria-hidden="true" size={24} strokeWidth={1.8} />
			<div>
				<h3>{item.title}</h3>
				<p>{item.description}</p>
			</div>
		</article>
	);
}

function DistributionPanel({ outcomes }: { outcomes: MajorCareerDictionary['outcomes'] }) {
	return (
		<article className="majors-career-distribution-card">
			<div className="majors-career-panel-heading">
				<h2>
					<TextLines className="block" lines={outcomes.distributionTitleLines} />
				</h2>
				<p>{outcomes.distributionDescription}</p>
			</div>

			<CareerDistributionDonut centerLines={outcomes.distributionCenterLines} items={outcomes.distributionItems} />

			<div className="majors-career-distribution-list">
				{outcomes.distributionItems.map(item => (
					<div className="majors-career-distribution-row" key={item.label}>
						<span>
							<i className={`majors-career-dot majors-career-dot-${item.color}`} />
							{item.label}
						</span>
						<strong>{item.value}</strong>
					</div>
				))}
			</div>
		</article>
	);
}

function SalaryPanel({ outcomes }: { outcomes: MajorCareerDictionary['outcomes'] }) {
	return (
		<article className="majors-career-salary-card">
			<div className="majors-career-panel-heading majors-career-panel-heading-blue">
				<h2>{outcomes.salaryTitle}</h2>
				<p>
					<TextLines className="block" lines={outcomes.salaryDescriptionLines} />
				</p>
			</div>

			<div className="majors-career-salary-list">
				{outcomes.salaryRows.map((row, index) => (
					<div className="majors-career-salary-row" key={row.value}>
						<p>
							<TextLines className="block" lines={row.labelLines} />
						</p>
						<div className="majors-career-salary-track">
							<CareerSalaryBar className={row.emphasis ? 'majors-career-salary-bar-emphasis' : ''} delay={index * 0.12} percent={row.percent} value={row.value} />
						</div>
					</div>
				))}
			</div>

			<div className="majors-career-growth-note">
				<h3>{outcomes.growthTitle}</h3>
				<p>
					<TextLines className="block" lines={outcomes.growthDescriptionLines} />
				</p>
			</div>
		</article>
	);
}

export function MajorsCareerScaffold({ dictionary, locale }: MajorsCareerScaffoldProps) {
	const siteDictionary = homeDictionaries[locale];
	const nav = getMajorsCareerNav(locale);
	const activeHref = locale === 'zh' ? '/zh/majors-career' : '/majors-career';
	const heroDescription = [...dictionary.hero.descriptionLines, '', ...dictionary.hero.outcomeLines].join('\n');

	return (
		<main className="majors-career-page home-page bg-white text-[#10367d]" lang={locale}>
			<HomeHeader activeHref={activeHref} logo={assets.logo} locale={locale} nav={nav} />
			<SubPageHero
				backgroundImage={{ src: assets.hero, className: 'majors-career-hero-image' }}
				description={heroDescription}
				descriptionClassName="majors-career-hero-outcomes"
				headingClassName="majors-career-hero-heading"
				innerClassName="majors-career-hero-inner"
				overlayClassName="majors-career-hero-overlay"
				sectionClassName="majors-career-hero"
				titleLines={dictionary.hero.titleLines}
			/>

			<section className="majors-career-fields" aria-labelledby="majors-career-fields-title">
				<div className="container majors-career-fields-inner">
					<h2 id="majors-career-fields-title">
						<TextLines className="block" lines={dictionary.majors.titleLines} />
					</h2>
					<div className="majors-career-major-grid">
						{dictionary.majors.items.map(item => (
							<MajorCard item={item} key={item.title} />
						))}
					</div>
				</div>
			</section>

			<section className="majors-career-outcomes" aria-labelledby="majors-career-outcomes-title">
				<h2 className="sr-only" id="majors-career-outcomes-title">
					{dictionary.outcomes.distributionTitleLines.join(' ')}
				</h2>
				<div className="container majors-career-outcomes-inner">
					<DistributionPanel outcomes={dictionary.outcomes} />
					<SalaryPanel outcomes={dictionary.outcomes} />
				</div>
			</section>

			<HomeFooter footer={siteDictionary.footer} logo={assets.logo} />
		</main>
	);
}
