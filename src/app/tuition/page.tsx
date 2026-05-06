import type { Metadata } from 'next';
import { TuitionScaffold } from '@/components/tuition-scaffold';
import { tuitionDictionaries } from '@/i18n/pages/tuition';

const dictionary = tuitionDictionaries.en;

export const metadata: Metadata = {
	title: dictionary.metadata.title,
	description: dictionary.metadata.description,
	alternates: {
		canonical: '/tuition',
		languages: {
			en: '/tuition',
			zh: '/zh/tuition',
		},
	},
};

export default function TuitionPage() {
	return <TuitionScaffold dictionary={dictionary} locale="en" />;
}
