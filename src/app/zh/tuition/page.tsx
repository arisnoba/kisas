import type { Metadata } from 'next';
import { TuitionScaffold } from '@/components/tuition-scaffold';
import { tuitionDictionaries } from '@/i18n/pages/tuition';

const dictionary = tuitionDictionaries.zh;

export const metadata: Metadata = {
	title: dictionary.metadata.title,
	description: dictionary.metadata.description,
	alternates: {
		canonical: '/zh/tuition',
		languages: {
			en: '/tuition',
			zh: '/zh/tuition',
		},
	},
};

export default function ChineseTuitionPage() {
	return <TuitionScaffold dictionary={dictionary} locale="zh" />;
}
