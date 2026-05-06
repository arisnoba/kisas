import type { Metadata } from 'next';
import { MajorsCareerScaffold } from '@/components/majors-career-scaffold';
import { majorsCareerDictionaries } from '@/i18n/pages/majors-career';

const dictionary = majorsCareerDictionaries.en;

export const metadata: Metadata = {
	title: dictionary.metadata.title,
	description: dictionary.metadata.description,
	alternates: {
		canonical: '/majors-career',
		languages: {
			en: '/majors-career',
			zh: '/zh/majors-career',
		},
	},
};

export default function MajorsCareerPage() {
	return <MajorsCareerScaffold dictionary={dictionary} locale="en" />;
}
