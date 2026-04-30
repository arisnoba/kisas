import type { Metadata } from 'next';
import { AboutScaffold } from '@/components/about-scaffold';
import { aboutDictionaries } from '@/i18n/pages/about';

const dictionary = aboutDictionaries.zh;

export const metadata: Metadata = {
	title: dictionary.metadata.title,
	description: dictionary.metadata.description,
	alternates: {
		canonical: '/zh/about',
		languages: {
			en: '/about',
			zh: '/zh/about',
		},
	},
};

export default function ChineseAboutPage() {
	return <AboutScaffold dictionary={dictionary} locale="zh" />;
}
