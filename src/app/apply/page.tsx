import type { Metadata } from 'next';
import { ApplyScaffold } from '@/components/apply-scaffold';
import { applyDictionaries } from '@/i18n/pages/apply';

const dictionary = applyDictionaries.en;

export const metadata: Metadata = {
	title: dictionary.metadata.title,
	description: dictionary.metadata.description,
	alternates: {
		canonical: '/apply',
		languages: {
			en: '/apply',
			zh: '/zh/apply',
		},
	},
};

export default function ApplyPage() {
	return <ApplyScaffold dictionary={dictionary} locale="en" />;
}
