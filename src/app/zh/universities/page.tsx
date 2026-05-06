import type { Metadata } from 'next';
import { UniversitiesScaffold } from '@/components/universities-scaffold';
import { universitiesDictionaries } from '@/i18n/pages/universities';

const dictionary = universitiesDictionaries.zh;

export const metadata: Metadata = {
	title: dictionary.metadata.title,
	description: dictionary.metadata.description,
	alternates: {
		canonical: '/zh/universities',
		languages: {
			en: '/universities',
			zh: '/zh/universities',
		},
	},
};

export default function ChineseUniversitiesPage() {
	return <UniversitiesScaffold dictionary={dictionary} locale="zh" />;
}
