import type { Metadata } from 'next';
import { ContactScaffold } from '@/components/contact-scaffold';
import { contactDictionaries } from '@/i18n/pages/contact';

const dictionary = contactDictionaries.zh;

export const metadata: Metadata = {
	title: dictionary.metadata.title,
	description: dictionary.metadata.description,
	alternates: {
		canonical: '/zh/contact',
		languages: {
			en: '/contact',
			zh: '/zh/contact',
		},
	},
};

export default function ChineseContactPage() {
	return <ContactScaffold dictionary={dictionary} locale="zh" />;
}
