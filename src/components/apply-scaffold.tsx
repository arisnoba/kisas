import Image from 'next/image';
import Link from 'next/link';
import { Check, ChevronRight } from 'lucide-react';
import { HomeFooter } from '@/components/home-footer';
import { HomeHeader } from '@/components/home-header';
import { SubPageHero } from '@/components/sub-page-hero';
import { TextLines } from '@/components/text-lines';
import type { Locale } from '@/i18n/config';
import type { ApplyDictionary } from '@/i18n/pages/apply';
import { homeDictionaries } from '@/i18n/pages/home';

type ApplyScaffoldProps = {
	dictionary: ApplyDictionary;
	locale: Locale;
};

const assets = {
	logo: '/assets/images/home/kisas-logo.svg',
	heroBackground: '/assets/images/apply/hero-background.png',
	beginnerBackground: '/assets/images/apply/beginner-background.png',
};

function getApplyNav(locale: Locale) {
	const nav = homeDictionaries[locale].nav;

	return {
		...nav,
		localeSwitch: {
			...nav.localeSwitch,
			href: locale === 'zh' ? '/apply' : '/zh/apply',
		},
	};
}

export function ApplyScaffold({ dictionary, locale }: ApplyScaffoldProps) {
	const siteDictionary = homeDictionaries[locale];
	const nav = getApplyNav(locale);
	const activeHref = locale === 'zh' ? '/zh/apply' : '/apply';
	const supportHref = locale === 'zh' ? '/zh/contact' : '/contact';

	return (
		<main className="apply-page home-page bg-white text-[#10367d]" lang={locale}>
			<HomeHeader activeHref={activeHref} logo={assets.logo} locale={locale} nav={nav} />
			<SubPageHero
				backgroundImage={{ src: assets.heroBackground, className: 'apply-hero-background', backgroundPosition: 'center 54%' }}
				description={dictionary.hero.description}
				innerClassName="apply-hero-inner"
				overlayClassName="apply-hero-overlay"
				sectionClassName="apply-hero"
				titleLines={dictionary.hero.titleLines}
			/>

			<section className="apply-timeline" aria-labelledby="apply-timeline-title">
				<div className="container apply-timeline-inner">
					<h2 id="apply-timeline-title">
						<TextLines className="apply-timeline-title-line block" lines={dictionary.timeline.titleLines} />
					</h2>
					<div className="apply-timeline-track">
						{dictionary.timeline.items.map(item => (
							<article className="apply-timeline-item gap-x-6 gap-y-3" key={`${item.labelLines.join('-')}-${item.details.join('-')}`}>
								<span aria-hidden="true" className={`apply-timeline-marker apply-timeline-marker-${item.shape}`} />
								<h3>
									<TextLines className="block" lines={item.labelLines} />
								</h3>
								<ul>
									{item.details.map(detail => (
										<li key={detail}>{detail}</li>
									))}
								</ul>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="apply-process" aria-labelledby="apply-process-title">
				<div className="container apply-process-inner">
					<h2 id="apply-process-title">
						<TextLines className="block" lines={dictionary.process.titleLines} />
					</h2>
					<div className="apply-process-grid">
						{dictionary.process.items.map(item => (
							<article className="apply-process-card" key={item.number}>
								<span className="apply-process-number">{item.number}</span>
								<div className="apply-process-copy">
									<h3>
										<TextLines className="block" lines={item.titleLines} />
									</h3>
									<p>{item.description}</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="apply-documents" aria-labelledby="apply-documents-title">
				<div className="container apply-documents-inner">
					<h2 id="apply-documents-title">
						<TextLines className="block" lines={dictionary.documents.titleLines} />
					</h2>

					<div className="apply-documents-layout">
						<article className="apply-document-panel apply-document-panel-common">
							<h3>
								<TextLines className="block" lines={dictionary.documents.commonTitleLines} />
							</h3>
							<ul className="apply-document-list">
								{dictionary.documents.commonItems.map(item => (
									<li key={item}>
										<Check aria-hidden="true" size={14} strokeWidth={2.2} />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</article>

						<div className="apply-document-side">
							<article className="apply-document-panel">
								<h3>
									<TextLines className="block" lines={dictionary.documents.artTitleLines} />
								</h3>
								<ul className="apply-document-list">
									{dictionary.documents.artItems.map(item => (
										<li key={item}>
											<Check aria-hidden="true" size={14} strokeWidth={2.2} />
											<span>{item}</span>
										</li>
									))}
								</ul>
							</article>

							<article className="apply-visa-panel">
								<h3>
									<TextLines className="block" lines={dictionary.documents.visaTitleLines} />
								</h3>
								<div className="apply-visa-block">
									<h4>{dictionary.documents.visaProcessingTitle}</h4>
									<p>{dictionary.documents.visaProcessingDescription}</p>
								</div>
								<div className="apply-visa-block">
									<h4>{dictionary.documents.visaReasonsTitle}</h4>
									<ul>
										{dictionary.documents.visaReasons.map(reason => (
											<li key={reason}>{reason}</li>
										))}
									</ul>
								</div>
							</article>

							<Link className="apply-support-link" href={supportHref}>
								<span>{dictionary.documents.cta}</span>
								<ChevronRight aria-hidden="true" size={18} strokeWidth={1.8} />
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="apply-beginner" aria-labelledby="apply-beginner-title">
				<Image src={assets.beginnerBackground} alt="" fill className="apply-beginner-background" sizes="100vw" />
				<div className="apply-beginner-overlay" />
				<div className="container apply-beginner-inner">
					<div className="apply-beginner-copy">
						<h2 id="apply-beginner-title">
							<TextLines className="block" lines={dictionary.beginner.titleLines} />
						</h2>
						<p>{dictionary.beginner.description}</p>
					</div>
					<div className="apply-beginner-universities">
						{dictionary.beginner.universities.map(university => (
							<article className="apply-beginner-card" key={university.title}>
								<h3 className="text-balance">{university.title}</h3>
								<p className="text-balance">{university.description}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<HomeFooter footer={siteDictionary.footer} logo={assets.logo} />
		</main>
	);
}
