import Image from 'next/image';
import { ConsultationForm } from '@/components/consultation-form';
import { HomeFooter } from '@/components/home-footer';
import { SubPageHero } from '@/components/sub-page-hero';
import { TextLines } from '@/components/text-lines';
import type { Locale } from '@/i18n/config';
import type { ConsultationDictionary } from '@/i18n/pages/consultation';
import { homeDictionaries } from '@/i18n/pages/home';

type ConsultationScaffoldProps = {
	dictionary: ConsultationDictionary;
	locale: Locale;
};

const assets = {
	logo: '/assets/images/home/kisas-logo.svg',
	mark: '/assets/images/consultation/hero-mark.svg',
	wechatQr: '/assets/images/contact/wechat-qr.png',
};

function getConsultationNav(locale: Locale) {
	const nav = homeDictionaries[locale].nav;

	return {
		...nav,
		localeSwitch: {
			...nav.localeSwitch,
			href: locale === 'zh' ? '/consultation' : '/zh/consultation',
		},
	};
}

export function ConsultationScaffold({ dictionary, locale }: ConsultationScaffoldProps) {
	const siteDictionary = homeDictionaries[locale];
	const nav = getConsultationNav(locale);

	return (
		<main className="consultation-page home-page bg-white text-[#10367d]" lang={locale}>
			<SubPageHero
				decorative={<Image src={assets.mark} alt="" width={519} height={646} className="consultation-hero-mark" priority />}
				description={dictionary.hero.description}
				descriptionClassName="consultation-hero-description"
				header={{ logo: assets.logo, locale, nav }}
				headingClassName="consultation-hero-heading"
				innerClassName="consultation-hero-inner"
				sectionClassName="consultation-hero"
				titleLines={dictionary.hero.titleLines}
			/>

			<section className="consultation-application" aria-labelledby="consultation-form-title">
				<div className="container consultation-application-inner">
					<div className="consultation-form-aside">
						<h2 id="consultation-form-title">
							<TextLines className="block" lines={dictionary.form.titleLines} />
						</h2>
						<div className="consultation-wechat">
							<p>{dictionary.form.wechatTitle}</p>
							<Image src={assets.wechatQr} alt={dictionary.form.qrAlt} width={150} height={150} />
						</div>
					</div>
					<ConsultationForm dictionary={dictionary.form} />
				</div>
			</section>

			<HomeFooter footer={siteDictionary.footer} logo={assets.logo} />
		</main>
	);
}
