'use client';

import { Mail } from 'lucide-react';
import { useId, useState } from 'react';
import { toast } from 'sonner';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export type ConsultationFormDictionary = {
	fields: {
		name: string;
		contact: string;
		major: string;
		date: string;
		package: string;
		message: string;
	};
	majorOptions: string[];
	packageOptions: string[];
	submit: string;
	pending: string;
	success: string;
	error: string;
	note: string;
};

type ConsultationFormProps = {
	dictionary: ConsultationFormDictionary;
};

type FormStatus = 'idle' | 'pending' | 'success' | 'error';
type InvalidFields = {
	name: boolean;
	contact: boolean;
	major: boolean;
	date: boolean;
	package: boolean;
};

export function ConsultationForm({ dictionary }: ConsultationFormProps) {
	const idPrefix = useId();
	const [status, setStatus] = useState<FormStatus>('idle');
	const [invalidFields, setInvalidFields] = useState<InvalidFields>({
		name: false,
		contact: false,
		major: false,
		date: false,
		package: false,
	});

	const clearInvalidField = (field: keyof InvalidFields) => {
		setInvalidFields(current => (current[field] ? { ...current, [field]: false } : current));
	};

	return (
		<form
			className="consultation-form"
			noValidate
			onSubmit={event => {
				event.preventDefault();
				const formData = new FormData(event.currentTarget);
				const name = String(formData.get('name') || '').trim();
				const contact = String(formData.get('contact') || '').trim();
				const major = String(formData.get('major') || '').trim();
				const date = String(formData.get('date') || '').trim();
				const selectedPackage = String(formData.get('package') || '').trim();
				const nextInvalidFields = {
					name: !name,
					contact: !contact,
					major: !major,
					date: !date,
					package: !selectedPackage,
				};

				setInvalidFields(nextInvalidFields);

				if (Object.values(nextInvalidFields).some(Boolean)) {
					setStatus('error');
					toast.error(dictionary.error);
					return;
				}

				setStatus('pending');
				window.setTimeout(() => {
					setStatus('success');
					toast.success(dictionary.success);
				}, 300);
			}}
		>
			<FieldGroup className="consultation-form-fields">
				<Field className="consultation-field" data-invalid={invalidFields.name ? true : undefined}>
					<FieldLabel className="sr-only" htmlFor={`${idPrefix}-name`}>
						{dictionary.fields.name}
					</FieldLabel>
					<Input
						aria-invalid={invalidFields.name || undefined}
						aria-required="true"
						id={`${idPrefix}-name`}
						name="name"
						onChange={() => clearInvalidField('name')}
						placeholder={dictionary.fields.name}
						required
						type="text"
					/>
				</Field>
				<Field className="consultation-field" data-invalid={invalidFields.contact ? true : undefined}>
					<FieldLabel className="sr-only" htmlFor={`${idPrefix}-contact`}>
						{dictionary.fields.contact}
					</FieldLabel>
					<Input
						aria-invalid={invalidFields.contact || undefined}
						aria-required="true"
						id={`${idPrefix}-contact`}
						name="contact"
						onChange={() => clearInvalidField('contact')}
						placeholder={dictionary.fields.contact}
						required
						type="text"
					/>
				</Field>
				<Field className="consultation-field consultation-field-select" data-invalid={invalidFields.major ? true : undefined}>
					<FieldLabel className="sr-only" id={`${idPrefix}-major-label`}>
						{dictionary.fields.major}
					</FieldLabel>
					<Select name="major" onValueChange={() => clearInvalidField('major')} required>
						<SelectTrigger aria-invalid={invalidFields.major || undefined} aria-labelledby={`${idPrefix}-major-label`} aria-required="true">
							<SelectValue placeholder={dictionary.fields.major} />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								{dictionary.majorOptions.map(option => (
									<SelectItem key={option} value={option}>
										{option}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
				</Field>
				<Field className="consultation-field consultation-field-date" data-invalid={invalidFields.date ? true : undefined}>
					<FieldLabel className="sr-only" htmlFor={`${idPrefix}-date`}>
						{dictionary.fields.date}
					</FieldLabel>
					<Input
						aria-invalid={invalidFields.date || undefined}
						aria-required="true"
						id={`${idPrefix}-date`}
						name="date"
						onChange={() => clearInvalidField('date')}
						required
						type="date"
					/>
				</Field>
				<Field className="consultation-field consultation-field-select" data-invalid={invalidFields.package ? true : undefined}>
					<FieldLabel className="sr-only" id={`${idPrefix}-package-label`}>
						{dictionary.fields.package}
					</FieldLabel>
					<Select name="package" onValueChange={() => clearInvalidField('package')} required>
						<SelectTrigger aria-invalid={invalidFields.package || undefined} aria-labelledby={`${idPrefix}-package-label`} aria-required="true">
							<SelectValue placeholder={dictionary.fields.package} />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								{dictionary.packageOptions.map(option => (
									<SelectItem key={option} value={option}>
										{option}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
				</Field>
				<Field className="consultation-field consultation-field-message">
					<FieldLabel className="sr-only" htmlFor={`${idPrefix}-message`}>
						{dictionary.fields.message}
					</FieldLabel>
					<Textarea id={`${idPrefix}-message`} name="message" placeholder={dictionary.fields.message} rows={6} />
				</Field>
			</FieldGroup>
			<button className="consultation-submit" disabled={status === 'pending'} type="submit">
				<span>{status === 'pending' ? dictionary.pending : dictionary.submit}</span>
				<Mail aria-hidden="true" size={16} strokeWidth={2} />
			</button>
			<p className="consultation-form-note">{dictionary.note}</p>
		</form>
	);
}
