import Image from 'next/image';
import { HomeFooter } from '@/components/home-footer';
import { HomeHeader } from '@/components/home-header';
import { ConsultationForm } from '@/components/consultation-form';
import { HeroTitleEffect } from '@/components/hero-title-effect';
import { TextLines } from '@/components/text-lines';
import type { Locale } from '@/i18n/config';
import type { ContactDictionary } from '@/i18n/pages/contact';
import { homeDictionaries } from '@/i18n/pages/home';

type ContactScaffoldProps = {
	dictionary: ContactDictionary;
	locale: Locale;
};

const assets = {
	logoDark: '/assets/images/contact/kisas-logo-dark.svg',
	logoLight: '/assets/images/home/kisas-logo.svg',
	wechatIcon: '/assets/images/contact/wechat-icon.png',
	wechatQr: '/assets/images/contact/wechat-qr.png',
};

function getContactNav(locale: Locale) {
	const nav = homeDictionaries[locale].nav;

	return {
		...nav,
		localeSwitch: {
			...nav.localeSwitch,
			href: locale === 'zh' ? '/contact' : '/zh/contact',
		},
	};
}

export function ContactScaffold({ dictionary, locale }: ContactScaffoldProps) {
	const siteDictionary = homeDictionaries[locale];
	const nav = getContactNav(locale);
	const activeHref = locale === 'zh' ? '/zh/contact' : '/contact';

	return (
		<main className="contact-page home-page bg-white text-[#10367d]" lang={locale}>
			<section className="contact-reach" aria-labelledby="contact-reach-title">
				<HomeHeader activeHref={activeHref} logo={assets.logoDark} locale={locale} nav={nav} tone="light" />
				<div className="container contact-reach-inner">
					<div className="contact-reach-heading">
						<h1 id="contact-reach-title">
							<HeroTitleEffect lines={dictionary.hero.titleLines} />
						</h1>
						<p>{dictionary.hero.description}</p>
					</div>

					<div className="contact-details">
						<div className="contact-center-card">
							<h2>{dictionary.center.title}</h2>
							<address>
								<span>{dictionary.center.address}</span>
								<span>{dictionary.center.phone}</span>
								<span>{dictionary.center.hours}</span>
							</address>
							<div className="contact-map">
								<iframe loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={dictionary.center.mapSrc} title={dictionary.center.mapTitle} />
							</div>
						</div>

						<aside className="contact-sns-card" aria-labelledby="contact-sns-title">
							<div className="contact-sns-title">
								<span className="contact-sns-icon">
									<Image src={assets.wechatIcon} alt="" width={36} height={36} />
								</span>
								<h2 id="contact-sns-title">{dictionary.sns.title}</h2>
							</div>
							<ul>
								{dictionary.sns.lines.map(line => (
									<li key={line}>{line}</li>
								))}
							</ul>
							<Image className="contact-qr" src={assets.wechatQr} alt={dictionary.sns.qrAlt} width={150} height={150} />
						</aside>
					</div>
				</div>
			</section>

			<section className="contact-inquiry" aria-labelledby="contact-inquiry-title">
				<div className="container contact-inquiry-inner">
					<h2 id="contact-inquiry-title">
						<TextLines className="block" lines={dictionary.form.titleLines} />
					</h2>
					<ConsultationForm dictionary={dictionary.form} />
				</div>
			</section>

			<HomeFooter footer={siteDictionary.footer} logo={assets.logoLight} />
		</main>
	);
}
