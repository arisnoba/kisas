'use client';

import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { useMemo, useState } from 'react';
import { HomeFooter } from '@/components/home-footer';
import { SubPageHero } from '@/components/sub-page-hero';
import { TextLines } from '@/components/text-lines';
import { KisasButton } from '@/components/ui/kisas-button';
import type { Locale } from '@/i18n/config';
import { homeDictionaries } from '@/i18n/pages/home';
import type { UniversitiesDictionary, UniversityCategory, UniversityCard } from '@/i18n/pages/universities';

type UniversitiesScaffoldProps = {
	dictionary: UniversitiesDictionary;
	locale: Locale;
};

const assets = {
	hero: '/assets/images/universities/hero-foreground.png',
	logo: '/assets/images/home/kisas-logo.svg',
};

function getUniversitiesNav(locale: Locale) {
	const nav = homeDictionaries[locale].nav;

	return {
		...nav,
		links: nav.links.map(link => {
			if (link.href === '#universities' || link.href === '/universities' || link.href === '/zh/universities') {
				return {
					...link,
					href: locale === 'zh' ? '/zh/universities' : '/universities',
				};
			}

			if (link.href === '#students') {
				return {
					...link,
					href: locale === 'zh' ? '/zh#students' : '/#students',
				};
			}

			return link;
		}),
		localeSwitch: {
			...nav.localeSwitch,
			href: locale === 'zh' ? '/universities' : '/zh/universities',
		},
	};
}

function CardDetails({ card, locale }: { card: UniversityCard; locale: Locale }) {
	const labels =
		locale === 'zh'
			? {
					majors: '专业方向',
					requirements: '入学要求',
					tuition: '参考学费',
				}
			: {
					majors: 'Majors',
					requirements: 'Admission Requirements',
					tuition: 'Reference Tuition',
				};
	const items = [
		{ label: labels.majors, value: card.majors },
		{ label: labels.requirements, value: card.requirements },
		{ label: labels.tuition, value: card.tuition },
	];

	return (
		<div className="universities-card-details">
			{items.map(item => (
				<div key={item.label}>
					<dt>{item.label}</dt>
					<dd>{item.value}</dd>
				</div>
			))}
		</div>
	);
}

export function UniversitiesScaffold({ dictionary, locale }: UniversitiesScaffoldProps) {
	const [activeCategory, setActiveCategory] = useState<UniversityCategory>('all');
	const siteDictionary = homeDictionaries[locale];
	const nav = getUniversitiesNav(locale);
	const activeHref = locale === 'zh' ? '/zh/universities' : '/universities';
	const consultationHref = locale === 'zh' ? '/zh/consultation' : '/consultation';
	const tuitionHref = locale === 'zh' ? '/zh/tuition' : '/tuition';
	const filteredCards = useMemo(() => {
		if (activeCategory === 'all') {
			return dictionary.cards;
		}

		return dictionary.cards.filter(card => card.category === activeCategory);
	}, [activeCategory, dictionary.cards]);

	return (
		<main className="universities-page home-page bg-white text-[#10367d]" lang={locale}>
			<SubPageHero
				backgroundImage={{ src: assets.hero, className: 'universities-hero-image' }}
				description={dictionary.hero.description}
				descriptionClassName="universities-hero-description"
				header={{ activeHref, logo: assets.logo, locale, nav }}
				headingClassName="universities-hero-heading"
				innerClassName="universities-hero-inner"
				overlayClassName="universities-hero-overlay"
				sectionClassName="universities-hero"
				subtitleLines={dictionary.hero.subtitleLines}
				titleLines={dictionary.hero.titleLines}
			/>

			<section className="universities-list-section" aria-labelledby="universities-list-title">
				<h2 className="sr-only" id="universities-list-title">
					Partner university options
				</h2>
				<div className="container universities-list-inner">
					<div className="universities-tabs" role="tablist" aria-label="University filters">
						{dictionary.filters.map(filter => (
							<button aria-selected={activeCategory === filter.value} className="universities-tab" key={filter.value} onClick={() => setActiveCategory(filter.value)} role="tab" type="button">
								{filter.label}
							</button>
						))}
					</div>

					<div className="universities-grid">
						{filteredCards.map(card => (
							<article className="universities-card" key={card.name}>
								<div className="universities-card-image">
									<Image src={card.image} alt="" fill sizes="(min-width: 1101px) 360px, (min-width: 721px) 50vw, 100vw" />
								</div>
								<div className="universities-card-body">
									<div className="universities-card-heading">
										<h3>{card.name}</h3>
										<span>{card.categoryLabel}</span>
									</div>
									<dl>
										<CardDetails card={card} locale={locale} />
									</dl>
									<a className="universities-card-link" href={consultationHref}>
										{locale === 'zh' ? '查看详情' : 'View Details'}
									</a>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="universities-spectrum" aria-labelledby="universities-spectrum-title">
				<div className="container universities-spectrum-inner">
					<div className="universities-spectrum-heading grid grid-cols-1 md:grid-cols-3">
						<h2 id="universities-spectrum-title" className="col-span-1 md:col-span-2">
							{dictionary.spectrum.title}
						</h2>
						<div className="universities-spectrum-aside col-span-1">
							<p>
								<TextLines className="block" lines={dictionary.spectrum.descriptionLines} />
							</p>
							<div className="universities-spectrum-actions">
								<KisasButton href={tuitionHref} icon={<ChevronRight aria-hidden="true" size={16} strokeWidth={1.8} />} shape="rect" size="nav" variant="outline">
									{dictionary.spectrum.primaryCta}
								</KisasButton>
								<KisasButton href={consultationHref} icon={<ChevronRight aria-hidden="true" size={16} strokeWidth={1.8} />} shape="rect" size="nav" variant="outline">
									{dictionary.spectrum.secondaryCta}
								</KisasButton>
							</div>
						</div>
					</div>

					<div className="universities-spectrum-grid">
						{dictionary.spectrum.categories.map(category => (
							<article className="universities-spectrum-card" key={category.titleLines.join(' ')}>
								<div className="universities-spectrum-card-inner">
									<h3>
										<TextLines className="block" lines={category.titleLines} />
									</h3>
									<p>{category.description}</p>
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
