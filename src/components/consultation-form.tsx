'use client';

import { Calendar, ChevronDown, Mail } from 'lucide-react';
import { useState } from 'react';

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

export function ConsultationForm({ dictionary }: ConsultationFormProps) {
	const [status, setStatus] = useState<FormStatus>('idle');

	return (
		<form
			className="consultation-form"
			onSubmit={event => {
				event.preventDefault();
				const formData = new FormData(event.currentTarget);
				const name = String(formData.get('name') || '').trim();
				const contact = String(formData.get('contact') || '').trim();

				if (!name || !contact) {
					setStatus('error');
					return;
				}

				setStatus('pending');
				window.setTimeout(() => setStatus('success'), 300);
			}}
		>
			<label className="consultation-field">
				<span className="sr-only">{dictionary.fields.name}</span>
				<input name="name" placeholder={dictionary.fields.name} type="text" />
			</label>
			<label className="consultation-field">
				<span className="sr-only">{dictionary.fields.contact}</span>
				<input name="contact" placeholder={dictionary.fields.contact} type="text" />
			</label>
			<label className="consultation-field consultation-field-select">
				<span className="sr-only">{dictionary.fields.major}</span>
				<select name="major" defaultValue="">
					<option value="" disabled>
						{dictionary.fields.major}
					</option>
					{dictionary.majorOptions.map(option => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				<ChevronDown aria-hidden="true" size={18} strokeWidth={1.8} />
			</label>
			<label className="consultation-field consultation-field-date">
				<span className="sr-only">{dictionary.fields.date}</span>
				<input name="date" aria-label={dictionary.fields.date} type="date" />
				<Calendar aria-hidden="true" size={18} strokeWidth={1.8} />
			</label>
			<label className="consultation-field consultation-field-select">
				<span className="sr-only">{dictionary.fields.package}</span>
				<select name="package" defaultValue="">
					<option value="" disabled>
						{dictionary.fields.package}
					</option>
					{dictionary.packageOptions.map(option => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				<ChevronDown aria-hidden="true" size={18} strokeWidth={1.8} />
			</label>
			<label className="consultation-field consultation-field-message">
				<span className="sr-only">{dictionary.fields.message}</span>
				<textarea name="message" placeholder={dictionary.fields.message} rows={6} />
			</label>
			<button className="consultation-submit" disabled={status === 'pending'} type="submit">
				<span>{status === 'pending' ? dictionary.pending : dictionary.submit}</span>
				<Mail aria-hidden="true" size={16} strokeWidth={2} />
			</button>
			<p className={`consultation-form-note ${status === 'error' ? 'consultation-form-note-error' : ''} ${status === 'success' ? 'consultation-form-note-success' : ''}`}>
				{status === 'error' ? dictionary.error : status === 'success' ? dictionary.success : dictionary.note}
			</p>
		</form>
	);
}
