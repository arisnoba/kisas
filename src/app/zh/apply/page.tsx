import type { Metadata } from 'next';
import { ApplyScaffold } from '@/components/apply-scaffold';
import { applyDictionaries } from '@/i18n/pages/apply';

const dictionary = applyDictionaries.zh;

export const metadata: Metadata = {
	title: dictionary.metadata.title,
	description: dictionary.metadata.description,
	alternates: {
		canonical: '/zh/apply',
		languages: {
			en: '/apply',
			zh: '/zh/apply',
		},
	},
};

export default function ChineseApplyPage() {
	return <ApplyScaffold dictionary={dictionary} locale="zh" />;
}
