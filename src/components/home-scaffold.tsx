import Image from 'next/image';
import { ArrowButton } from '@/components/ui/arrow-button';
import { HomeFooter } from '@/components/home-footer';
import { HomeHeader } from '@/components/home-header';
import { Marquee } from '@/components/ui/marquee';
import { NumberTicker } from '@/components/ui/number-ticker';
import { TextLines } from '@/components/text-lines';
import type { HomeDictionary } from '@/i18n/pages/home';
import type { Locale } from '@/i18n/config';

type HomeScaffoldProps = {
	dictionary: HomeDictionary;
	locale: Locale;
};

const assets = {
	background: '/assets/images/home/background-image.png',
	hero: '/assets/images/home/hero-image.png',
	logo: '/assets/images/home/kisas-logo.svg',
	whyLogo: '/assets/images/home/feature-graphic.svg',
	roiBackground: '/assets/images/home/logo-image.png',
};

function getDecimalPlaces(value: string) {
	const decimalPart = value.split('.')[1];

	return decimalPart ? decimalPart.length : 0;
}

function RoiNumber({ value }: { value: string }) {
	const numericValue = Number(value);

	if (!Number.isFinite(numericValue)) {
		return <div className="home-roi-value">{value}</div>;
	}

	return <NumberTicker aria-label={value} className="home-roi-value text-white! tracking-normal!" decimalPlaces={getDecimalPlaces(value)} value={numericValue} />;
}

export function HomeScaffold({ dictionary, locale }: HomeScaffoldProps) {
	return (
		<main className="home-page bg-white text-[#10367d]" lang={locale}>
			<HomeHeader logo={assets.logo} locale={locale} nav={dictionary.nav} />
			<section className="home-hero">
				<Image priority src={assets.background} alt="" fill className="home-hero-background" sizes="100vw" />
				<div className="home-hero-overlay" />

				<div className="container home-hero-content">
					<h1 className="home-hero-title display-title">
						<TextLines className="block" lines={dictionary.hero.titleLines} />
					</h1>

					<div className="home-hero-copy">
						<p className="home-hero-subtitle">{dictionary.hero.subtitle}</p>
						<p className="home-hero-description">{dictionary.hero.description}</p>
						<div className="home-hero-buttons">
							<ArrowButton href={locale === 'zh' ? '/zh/consultation' : '/consultation'} variant="light">
								{dictionary.hero.primaryCta}
							</ArrowButton>
							<ArrowButton href={locale === 'zh' ? '/zh/about' : '/about'} variant="outline">
								{dictionary.hero.secondaryCta}
							</ArrowButton>
						</div>
					</div>
				</div>
			</section>

			<section className="home-why-kisas" id="why">
				<div className="container home-why-inner">
					<div className="home-why-copy">
						<h2 className="home-section-title section-title">
							<TextLines className="block" lines={dictionary.why.titleLines} />
						</h2>
					</div>
					<div className="home-why-sticky">
						<Image src={assets.whyLogo} alt="" width={685} height={854} className="home-why-logo -z-1" />
					</div>
					<div className="home-why-grid">
						{dictionary.why.items.map((item, index) => (
							<article className={`home-why-item home-why-item-${index + 1}`} key={item.number}>
								<div className="home-why-number">{item.number}</div>
								<h3>
									<TextLines className="block" lines={item.titleLines} />
								</h3>
								<p>{item.description}</p>
								<div className={`home-why-image home-why-image-${item.variant}`}>
									<Image src={item.image} alt="" fill sizes="280px" />
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="home-universities z-10" id="universities">
				<div className="container-fluid home-universities-copy px-10">
					<h2>
						<span>{dictionary.universities.eyebrow}</span>
						<TextLines className="home-universities-title-line" lines={dictionary.universities.titleLines} />
					</h2>
					<div className="w-full md:max-w-1/2">
						<p>{dictionary.universities.description}</p>
						<ArrowButton href="/universities" variant="outline">
							{dictionary.universities.cta}
						</ArrowButton>
					</div>
				</div>

				<div className="container-fulid home-university-marquees" aria-label="Partner universities">
					{dictionary.universities.marqueeRows.map((row, index) => (
						<Marquee className="home-university-marquee" key={row.join('-')} repeat={3} reverse={index % 2 === 1}>
							{row.map(name => (
								<span className="home-university-name pointer-events-none select-none" key={name}>
									{name}
								</span>
							))}
						</Marquee>
					))}
				</div>
			</section>

			<section className="home-roi relative min-h-[980px] overflow-hidden bg-[#050505] text-white max-[720px]:min-h-0">
				<Image src={assets.roiBackground} alt="" fill className="home-roi-background" sizes="100vw" />
				<div className="home-roi-overlay absolute inset-0" />
				<div className="container home-roi-inner relative z-1 py-[clamp(110px,12vw,210px)]">
					{/* <div className="home-roi-heading grid grid-cols-1 items-start gap-10 min-[1101px]:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] min-[1101px]:gap-[120px]"> */}
					<div className="home-roi-heading grid grid-cols-1 items-start gap-4 md:grid-cols-3">
						<h2 className="section-title col-span-1 md:col-span-2">
							<TextLines className="block" lines={dictionary.roi.titleLines} />
						</h2>
						<div className="col-span-1">
							<p className="home-roi-description mb-7">{dictionary.roi.description}</p>
							<div className="home-roi-actions">
								{dictionary.roi.ctas.map(cta => (
									<ArrowButton href={cta.href} key={cta.href} variant="outline">
										{cta.label}
									</ArrowButton>
								))}
							</div>
						</div>
					</div>

					<div className="home-roi-stats mt-20 grid grid-cols-1 gap-14 md:mt-[clamp(150px,18vw,300px)] md:grid-cols-3 md:gap-x-20 md:gap-y-0">
						{dictionary.roi.stats.map(stat => (
							<article className="home-roi-stat" key={`${stat.value}-${stat.unit}`}>
								<div className="home-roi-metric">
									{stat.prefix ? <div className="home-roi-prefix">{stat.prefix}</div> : null}
									<RoiNumber value={stat.value} />
								</div>
								<div className="home-roi-unit">{stat.unit}</div>
								<p className="home-roi-label text-balance">{stat.label}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="home-students" id="students">
				<div className="container home-students-heading grid-cols-1 md:grid-cols-3">
					<h2 className="section-title col-span-1 md:col-span-2">
						<TextLines className="block" lines={dictionary.students.titleLines} />
					</h2>
					<div className="col-span-1 md:col-span-1">
						<p>{dictionary.students.description}</p>
						<ArrowButton href="/student-life" variant="solid">
							{dictionary.students.cta}
						</ArrowButton>
					</div>
				</div>

				<div className="container-fluid home-student-track">
					{dictionary.students.cases.map((student, index) => (
						<article className={`home-student-card px-10 max-w-full md:max-w-[360px] home-student-card-${index + 1}`} key={student.name}>
							<div className="home-student-image">
								<Image src={student.image} alt="" fill sizes="360px" />
							</div>
							<div className="home-student-body">
								<h3>{student.name}</h3>
								<p className="home-student-major">{student.major}</p>
								<p>{student.story}</p>
							</div>
						</article>
					))}
				</div>
			</section>

			<section className="home-final-cta">
				<div className="container-fluid home-final-cta-inner px-10">
					<h2 className="text-balance">
						<TextLines className="home-final-cta-title-line" lines={dictionary.finalCta.titleLines} />
					</h2>
					<div className="home-final-cta-copy">
						<p>{dictionary.finalCta.description}</p>
						<ArrowButton href={locale === 'zh' ? '/zh/consultation' : '/consultation'} variant="outline">
							{dictionary.finalCta.cta}
						</ArrowButton>
					</div>
				</div>
			</section>

			<HomeFooter footer={dictionary.footer} logo={assets.logo} />
		</main>
	);
}
