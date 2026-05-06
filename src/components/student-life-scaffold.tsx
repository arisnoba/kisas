import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { HomeFooter } from '@/components/home-footer';
import { HomeHeader } from '@/components/home-header';
import { StudentLifeActivityMarquee } from '@/components/student-life-activity-marquee';
import { KisasButton } from '@/components/ui/kisas-button';
import type { Locale } from '@/i18n/config';
import { homeDictionaries } from '@/i18n/pages/home';
import type { StudentLifeDictionary, StudentProfile } from '@/i18n/pages/student-life';

type StudentLifeScaffoldProps = {
	dictionary: StudentLifeDictionary;
	locale: Locale;
};

const assets = {
	hero: '/assets/images/student-life/hero-opera.png',
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

function getStudentLifeNav(locale: Locale) {
	const nav = homeDictionaries[locale].nav;
	const studentLifeHref = locale === 'zh' ? '/zh/student-life' : '/student-life';

	return {
		...nav,
		links: nav.links.map(link => (link.label === 'Student Life' || link.label === '学生生活' ? { ...link, href: studentLifeHref } : link)),
		localeSwitch: {
			...nav.localeSwitch,
			href: locale === 'zh' ? '/student-life' : '/zh/student-life',
		},
	};
}

function StudentProfileCard({ profile }: { profile: StudentProfile }) {
	return (
		<article className="student-life-profile-card">
			<div className="student-life-profile-image">
				<Image src={profile.image} alt="" fill sizes="(min-width: 1101px) 360px, (min-width: 721px) 50vw, 100vw" />
			</div>
			<div className="student-life-profile-body">
				<div>
					<h3>{profile.name}</h3>
					<p className="student-life-profile-program">{profile.program}</p>
				</div>
				<p className="student-life-profile-story">{profile.story}</p>
			</div>
		</article>
	);
}

export function StudentLifeScaffold({ dictionary, locale }: StudentLifeScaffoldProps) {
	const siteDictionary = homeDictionaries[locale];
	const nav = getStudentLifeNav(locale);
	const activeHref = locale === 'zh' ? '/zh/student-life' : '/student-life';

	return (
		<main className="student-life-page home-page bg-white text-[#10367d]" lang={locale}>
			<section className="student-life-hero">
				<Image priority src={assets.hero} alt="" fill className="student-life-hero-image" sizes="100vw" />
				<div className="student-life-hero-overlay" />
				<HomeHeader activeHref={activeHref} logo={assets.logo} locale={locale} nav={nav} />

				<div className="container student-life-hero-inner">
					<h1>
						<TextLines className="block" lines={dictionary.hero.titleLines} />
					</h1>
					<p>{dictionary.hero.privacyNote}</p>
				</div>
			</section>

			<section className="student-life-outcomes" aria-labelledby="student-life-outcomes-title">
				<div className="container student-life-outcomes-inner">
					<h2 id="student-life-outcomes-title">
						<TextLines className="block" lines={dictionary.outcomes.titleLines} />
					</h2>
					<div className="student-life-profile-grid">
						{dictionary.outcomes.profiles.map((profile, index) => (
							<StudentProfileCard key={`${profile.name}-${index}`} profile={profile} />
						))}
					</div>
				</div>
			</section>

			<section className="student-life-activities" aria-labelledby="student-life-activities-title">
				<div className="container student-life-activities-heading">
					<h2 id="student-life-activities-title">
						<TextLines className="block" lines={dictionary.activities.titleLines} />
					</h2>
					<div className="student-life-activities-copy">
						<p>
							<TextLines className="block" lines={dictionary.activities.descriptionLines} />
						</p>
						<KisasButton
							href={locale === 'zh' ? '/zh/consultation' : '/consultation'}
							icon={<ChevronRight aria-hidden="true" size={16} strokeWidth={1.8} />}
							shape="rect"
							size="nav"
							variant="outline">
							{dictionary.activities.cta}
						</KisasButton>
					</div>
				</div>

				<StudentLifeActivityMarquee images={dictionary.activities.images} />
			</section>

			<HomeFooter footer={siteDictionary.footer} logo={assets.logo} />
		</main>
	);
}
