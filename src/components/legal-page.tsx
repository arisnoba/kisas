import Link from 'next/link';
import { HeroTitleEffect } from '@/components/hero-title-effect';
import { HomeFooter } from '@/components/home-footer';
import { HomeHeader } from '@/components/home-header';
import { homeDictionaries } from '@/i18n/pages/home';
import type { LegalBlock, LegalDictionary, LegalDocument } from '@/i18n/pages/legal';
import type { Locale } from '@/i18n/config';

type LegalPageProps = {
	dictionary: LegalDictionary;
	document: LegalDocument;
	locale: Locale;
};

const headerLogo = '/assets/images/contact/kisas-logo-dark.svg';
const footerLogo = '/assets/images/home/kisas-logo.svg';

function getHomeHref(locale: Locale) {
	return locale === 'zh' ? '/zh' : '/';
}

function getLocaleSwitchHref(locale: Locale, slug: LegalDocument['slug']) {
	return locale === 'zh' ? `/${slug}` : `/zh/${slug}`;
}

function getLegalPageNav(locale: Locale, slug: LegalDocument['slug']) {
	const homeHref = getHomeHref(locale);
	const nav = homeDictionaries[locale].nav;

	return {
		...nav,
		links: nav.links.map(link => ({
			...link,
			href: link.href.startsWith('#') ? `${homeHref}${link.href}` : link.href,
		})),
		localeSwitch: {
			...nav.localeSwitch,
			href: getLocaleSwitchHref(locale, slug),
		},
	};
}

function LegalBlockRenderer({ block, index }: { block: LegalBlock; index: number }) {
	if (block.type === 'paragraph') {
		return <p className="text-[15px] leading-7 text-slate-700 md:text-base md:leading-8">{block.text}</p>;
	}

	if (block.type === 'ordered-list') {
		return (
			<ol className="grid gap-2 text-[15px] leading-7 text-slate-700 md:text-base md:leading-8">
				{block.items.map(item => (
					<li key={item}>{item}</li>
				))}
			</ol>
		);
	}

	if (block.type === 'unordered-list') {
		return (
			<ul className="grid list-disc gap-2 pl-5 text-[15px] leading-7 text-slate-700 md:text-base md:leading-8">
				{block.items.map(item => (
					<li key={item}>{item}</li>
				))}
			</ul>
		);
	}

	if (block.type === 'table') {
		return (
			<div className="overflow-x-auto border border-slate-200" key={index}>
				<table className="min-w-[720px] border-collapse text-left text-sm leading-6">
					<thead className="bg-slate-100 text-slate-900">
						<tr>
							{block.headers.map(header => (
								<th className="border-b border-slate-200 px-4 py-3 font-semibold" key={header} scope="col">
									{header}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{block.rows.map((row, rowIndex) => (
							<tr className="border-b border-slate-200 last:border-b-0" key={`${row.join('-')}-${rowIndex}`}>
								{row.map((cell, cellIndex) => (
									<td className="max-w-[340px] px-4 py-3 align-top text-slate-700" key={`${cell}-${cellIndex}`}>
										{cell}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}

	return null;
}

export function LegalPage({ dictionary, document, locale }: LegalPageProps) {
	const siteDictionary = homeDictionaries[locale];
	const legalPageNav = getLegalPageNav(locale, document.slug);

	return (
		<main className="home-page min-h-screen bg-[#f7f8fb] text-slate-950" lang={locale}>
			<HomeHeader logo={headerLogo} locale={locale} nav={legalPageNav} tone="light" />

			<section className="border-b border-slate-200 bg-white pt-24 md:pt-28">
				<div className="container grid gap-5 py-14 md:py-20">
					<p className="text-sm font-bold uppercase tracking-[0.18em] text-[#10367d]">{dictionary.page.kicker}</p>
					<div className="grid gap-4">
						<h1 className="max-w-4xl font-heading text-[clamp(36px,6vw,64px)] font-semibold leading-[1.08] tracking-normal text-slate-950">
							<HeroTitleEffect lines={[document.title]} />
						</h1>
						<p className="max-w-3xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">{document.description}</p>
					</div>
					<p className="text-sm font-semibold text-slate-500">
						{dictionary.page.lastUpdated}: {document.effectiveDate}
					</p>
				</div>
			</section>

			<div className="container grid gap-8 py-10 md:py-16">
				<article className="grid gap-10 bg-white px-5 py-8 shadow-sm ring-1 ring-slate-200 md:px-10 md:py-12" lang="ko">
					{document.sections.map(section => (
						<section className="grid gap-5" key={section.heading}>
							<h2 className="border-b border-slate-200 pb-3 text-2xl font-bold leading-tight text-slate-950">{section.heading}</h2>
							<div className="grid gap-4">
								{section.blocks.map((block, index) => (
									<LegalBlockRenderer block={block} index={index} key={`${section.heading}-${index}`} />
								))}
							</div>
						</section>
					))}
				</article>

				<Link className="justify-self-start text-sm font-bold text-[#10367d] underline-offset-4 hover:underline" href={getHomeHref(locale)}>
					{dictionary.page.backToHome}
				</Link>
			</div>

			<HomeFooter footer={siteDictionary.footer} logo={footerLogo} />
		</main>
	);
}
