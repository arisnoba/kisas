import Image from 'next/image';
import type { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { HomeFooter } from '@/components/home-footer';
import { HomeHeader } from '@/components/home-header';
import { KisasButton } from '@/components/ui/kisas-button';
import { Marquee } from '@/components/ui/marquee';
import { NumberTicker } from '@/components/ui/number-ticker';
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

function ArrowButton({ href, children, variant = 'solid' }: { href: string; children: ReactNode; variant?: 'solid' | 'outline' | 'light' }) {
	return (
		<KisasButton href={href} icon={<ChevronRight aria-hidden="true" size={18} strokeWidth={1.8} />} variant={variant}>
			{children}
		</KisasButton>
	);
}

function getDecimalPlaces(value: string) {
	const decimalPart = value.split('.')[1];

	return decimalPart ? decimalPart.length : 0;
}

function RoiNumber({ value }: { value: string }) {
	const numericValue = Number(value);

	if (!Number.isFinite(numericValue)) {
		return <div className="home-roi-value">{value}</div>;
	}

	return <NumberTicker aria-label={value} className="home-roi-value !text-white !tracking-normal" decimalPlaces={getDecimalPlaces(value)} value={numericValue} />;
}

export function HomeScaffold({ dictionary, locale }: HomeScaffoldProps) {
	const hasUnverifiedRoiStats = dictionary.roi.stats.some(stat => !stat.isVerified);

	return (
		<main className="home-page bg-white text-[#10367d]" lang={locale}>
			<section className="home-hero">
				<Image priority src={assets.hero} alt="" fill className="home-hero-base" sizes="100vw" />
				<Image priority src={assets.background} alt="" fill className="home-hero-background" sizes="100vw" />
				<div className="home-hero-overlay" />

				<HomeHeader logo={assets.logo} locale={locale} nav={dictionary.nav} />

				<div className="home-hero-content">
					<h1 className="home-hero-title display-title">
						<TextLines className="block" lines={dictionary.hero.titleLines} />
					</h1>

					<div className="home-hero-copy">
						<p className="home-hero-subtitle">{dictionary.hero.subtitle}</p>
						<p className="home-hero-description">{dictionary.hero.description}</p>
						<div className="home-hero-buttons">
							<ArrowButton href="/apply" variant="light">
								{dictionary.hero.primaryCta}
							</ArrowButton>
							<ArrowButton href="/program" variant="outline">
								{dictionary.hero.secondaryCta}
							</ArrowButton>
						</div>
					</div>
				</div>
			</section>

			<section className="home-why-kisas" id="why">
				<div className="home-why-inner">
					<div className="home-why-copy">
						<h2 className="home-section-title section-title">
							<TextLines className="block" lines={dictionary.why.titleLines} />
						</h2>
					</div>
					<div className="home-why-sticky">
						<Image src={assets.whyLogo} alt="" width={760} height={760} className="home-why-logo -z-1" />
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
				<div className="home-universities-copy">
					<h2>
						<span>{dictionary.universities.eyebrow}</span>
						<TextLines className="block" lines={dictionary.universities.titleLines} />
					</h2>
					<div className="w-full md:max-w-1/2">
						<p>{dictionary.universities.description}</p>
						<ArrowButton href="/universities" variant="outline">
							{dictionary.universities.cta}
						</ArrowButton>
					</div>
				</div>

				<div className="home-university-marquees" aria-label="Partner universities">
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
				<div className="home-roi-inner relative z-[1] mx-auto w-[min(1120px,calc(100%_-_48px))] py-[clamp(110px,12vw,210px)]">
					<div className="home-roi-heading grid grid-cols-1 items-start gap-10 min-[1101px]:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] min-[1101px]:gap-[120px]">
						<h2 className="section-title">
							<TextLines className="block" lines={dictionary.roi.titleLines} />
						</h2>
						<div>
							{hasUnverifiedRoiStats ? <p className="home-roi-verification mb-4">{dictionary.roi.verificationNote}</p> : null}
							<p className="home-roi-description mb-7">{dictionary.roi.description}</p>
							<ArrowButton href="/majors-career" variant="outline">
								{dictionary.roi.cta}
							</ArrowButton>
						</div>
					</div>

					<div className="home-roi-stats mt-20 grid grid-cols-1 gap-14 md:mt-[clamp(150px,18vw,300px)] md:grid-cols-3 md:gap-20">
						{dictionary.roi.stats.map(stat => (
							<article className="home-roi-stat flex flex-col justify-end" key={`${stat.value}-${stat.unit}`}>
								{stat.prefix ? <div className="home-roi-prefix">{stat.prefix}</div> : null}
								<RoiNumber value={stat.value} />
								<div className="home-roi-unit mt-[18px]">{stat.unit}</div>
								<p className="home-roi-label mt-7 text-balance">{stat.label}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="home-students" id="students">
				<div className="home-students-heading">
					<h2 className="section-title">
						<TextLines className="block" lines={dictionary.students.titleLines} />
					</h2>
					<div>
						<p>{dictionary.students.description}</p>
						<ArrowButton href="/students" variant="solid">
							{dictionary.students.cta}
						</ArrowButton>
					</div>
				</div>

				<div className="home-student-track">
					{dictionary.students.cases.map((student, index) => (
						<article className={`home-student-card home-student-card-${index + 1}`} key={student.name}>
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
				<h2>
					<TextLines className="block" lines={dictionary.finalCta.titleLines} />
				</h2>
				<div>
					<p>{dictionary.finalCta.description}</p>
					<ArrowButton href="/apply" variant="outline">
						{dictionary.finalCta.cta}
					</ArrowButton>
				</div>
			</section>

			<HomeFooter footer={dictionary.footer} logo={assets.logo} />
		</main>
	);
}
