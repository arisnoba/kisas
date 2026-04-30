import type { Metadata } from 'next';
import { AboutScaffold } from '@/components/about-scaffold';
import { aboutDictionaries } from '@/i18n/pages/about';

const dictionary = aboutDictionaries.en;

export const metadata: Metadata = {
	title: dictionary.metadata.title,
	description: dictionary.metadata.description,
	alternates: {
		canonical: '/about',
		languages: {
			en: '/about',
			zh: '/zh/about',
		},
	},
};

export default function AboutPage() {
	return <AboutScaffold dictionary={dictionary} locale="en" />;
}
