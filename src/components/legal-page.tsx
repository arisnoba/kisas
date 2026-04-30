import Image from 'next/image';
import Link from 'next/link';
import type { LegalBlock, LegalDictionary, LegalDocument } from '@/i18n/pages/legal';
import type { Locale } from '@/i18n/config';

type LegalPageProps = {
	dictionary: LegalDictionary;
	document: LegalDocument;
	locale: Locale;
};

const logo = '/assets/images/home/kisas-logo.svg';

function getHomeHref(locale: Locale) {
	return locale === 'zh' ? '/zh' : '/';
}

function getLegalHref(locale: Locale, slug: LegalDocument['slug']) {
	return locale === 'zh' ? `/zh/${slug}` : `/${slug}`;
}

function getLocaleSwitchHref(locale: Locale, slug: LegalDocument['slug']) {
	return locale === 'zh' ? `/${slug}` : `/zh/${slug}`;
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
	return (
		<main className="min-h-screen bg-[#f7f8fb] text-slate-950" lang={locale}>
			<header className="sticky top-0 z-40 border-b border-slate-200 bg-white/92 backdrop-blur">
				<div className="mx-auto flex w-[min(1120px,calc(100%_-_32px))] flex-wrap items-center justify-between gap-4 py-4">
					<Link className="flex items-center gap-3" href={getHomeHref(locale)}>
						<Image src={logo} alt="KISAS" width={128} height={40} priority />
						<span className="hidden text-sm font-semibold leading-tight text-[#10367d] sm:inline">
							International
							<br />
							Art Study Center
						</span>
					</Link>

					<nav className="flex flex-wrap items-center justify-end gap-2 text-sm font-semibold text-slate-700" aria-label="Legal navigation">
						<Link className="px-3 py-2 transition hover:text-[#10367d]" href={getHomeHref(locale)}>
							{dictionary.nav.home}
						</Link>
						<Link className="px-3 py-2 transition hover:text-[#10367d]" href={getLegalHref(locale, 'terms-of-service')}>
							{dictionary.nav.terms}
						</Link>
						<Link className="px-3 py-2 transition hover:text-[#10367d]" href={getLegalHref(locale, 'privacy-policy')}>
							{dictionary.nav.privacy}
						</Link>
						<Link className="border border-slate-300 px-3 py-2 transition hover:border-[#10367d] hover:text-[#10367d]" href={getLocaleSwitchHref(locale, document.slug)}>
							{dictionary.nav.localeSwitch}
						</Link>
					</nav>
				</div>
			</header>

			<section className="border-b border-slate-200 bg-white">
				<div className="mx-auto grid w-[min(980px,calc(100%_-_32px))] gap-5 py-14 md:py-20">
					<p className="text-sm font-bold uppercase tracking-[0.18em] text-[#10367d]">{dictionary.page.kicker}</p>
					<div className="grid gap-4">
						<h1 className="max-w-4xl font-heading text-[clamp(36px,6vw,64px)] font-semibold leading-[1.08] tracking-normal text-slate-950">{document.title}</h1>
						<p className="max-w-3xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">{document.description}</p>
					</div>
					<p className="text-sm font-semibold text-slate-500">
						{dictionary.page.lastUpdated}: {document.effectiveDate}
					</p>
				</div>
			</section>

			<div className="mx-auto grid w-[min(980px,calc(100%_-_32px))] gap-8 py-10 md:py-16">
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
		</main>
	);
}
