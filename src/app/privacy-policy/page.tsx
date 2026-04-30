import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';
import { legalDictionaries } from '@/i18n/pages/legal';

const dictionary = legalDictionaries.en;
const document = dictionary.documents['privacy-policy'];

export const metadata: Metadata = {
	title: `${document.label} | KISAS Plus`,
	description: document.description,
	alternates: {
		canonical: '/privacy-policy',
		languages: {
			en: '/privacy-policy',
			zh: '/zh/privacy-policy',
		},
	},
};

export default function PrivacyPolicyPage() {
	return <LegalPage dictionary={dictionary} document={document} locale="en" />;
}
