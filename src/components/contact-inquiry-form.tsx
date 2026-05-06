import { ConsultationForm } from '@/components/consultation-form';
import type { ContactDictionary } from '@/i18n/pages/contact';

type ContactInquiryFormProps = {
	dictionary: ContactDictionary['form'];
};

export function ContactInquiryForm({ dictionary }: ContactInquiryFormProps) {
	return <ConsultationForm dictionary={dictionary} />;
}
