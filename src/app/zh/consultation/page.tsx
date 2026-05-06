import type { Metadata } from 'next';
import { ConsultationScaffold } from '@/components/consultation-scaffold';
import { consultationDictionaries } from '@/i18n/pages/consultation';

const dictionary = consultationDictionaries.zh;

export const metadata: Metadata = {
	title: dictionary.metadata.title,
	description: dictionary.metadata.description,
	alternates: {
		canonical: '/zh/consultation',
		languages: {
			en: '/consultation',
			zh: '/zh/consultation',
		},
	},
};

export default function ChineseConsultationPage() {
	return <ConsultationScaffold dictionary={dictionary} locale="zh" />;
}
