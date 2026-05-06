import type { Metadata } from 'next';
import { ContactScaffold } from '@/components/contact-scaffold';
import { contactDictionaries } from '@/i18n/pages/contact';

const dictionary = contactDictionaries.en;

export const metadata: Metadata = {
	title: dictionary.metadata.title,
	description: dictionary.metadata.description,
	alternates: {
		canonical: '/contact',
		languages: {
			en: '/contact',
			zh: '/zh/contact',
		},
	},
};

export default function ContactPage() {
	return <ContactScaffold dictionary={dictionary} locale="en" />;
}
