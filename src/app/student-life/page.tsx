import type { Metadata } from 'next';
import { StudentLifeScaffold } from '@/components/student-life-scaffold';
import { studentLifeDictionaries } from '@/i18n/pages/student-life';

const dictionary = studentLifeDictionaries.en;

export const metadata: Metadata = {
	title: dictionary.metadata.title,
	description: dictionary.metadata.description,
	alternates: {
		canonical: '/student-life',
		languages: {
			en: '/student-life',
			zh: '/zh/student-life',
		},
	},
};

export default function StudentLifePage() {
	return <StudentLifeScaffold dictionary={dictionary} locale="en" />;
}
