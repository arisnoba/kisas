import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';
import { legalDictionaries } from '@/i18n/pages/legal';

const dictionary = legalDictionaries.en;
const document = dictionary.documents['terms-of-service'];

export const metadata: Metadata = {
	title: `${document.label} | KISAS Plus`,
	description: document.description,
	alternates: {
		canonical: '/terms-of-service',
		languages: {
			en: '/terms-of-service',
			zh: '/zh/terms-of-service',
		},
	},
};

export default function TermsOfServicePage() {
	return <LegalPage dictionary={dictionary} document={document} locale="en" />;
}
