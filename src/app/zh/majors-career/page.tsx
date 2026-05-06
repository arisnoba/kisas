import type { Metadata } from 'next';
import { MajorsCareerScaffold } from '@/components/majors-career-scaffold';
import { majorsCareerDictionaries } from '@/i18n/pages/majors-career';

const dictionary = majorsCareerDictionaries.zh;

export const metadata: Metadata = {
	title: dictionary.metadata.title,
	description: dictionary.metadata.description,
	alternates: {
		canonical: '/zh/majors-career',
		languages: {
			en: '/majors-career',
			zh: '/zh/majors-career',
		},
	},
};

export default function ChineseMajorsCareerPage() {
	return <MajorsCareerScaffold dictionary={dictionary} locale="zh" />;
}
