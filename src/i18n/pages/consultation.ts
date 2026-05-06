import type { Locale } from '@/i18n/config';
import { contactDictionaries } from '@/i18n/pages/contact';

export type ConsultationDictionary = {
	metadata: {
		title: string;
		description: string;
	};
	hero: {
		titleLines: string[];
		description: string;
	};
	form: {
		titleLines: string[];
		wechatTitle: string;
		qrAlt: string;
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
};

export const consultationDictionaries = {
	en: {
		metadata: {
			title: 'Consultation Application | KISAS Plus',
			description: 'Submit a 3-minute KISAS consultation application for Korea arts study abroad assessment and next-business-day response.',
		},
		hero: {
			titleLines: ['3-Minute', 'Application'],
			description: 'Just leave your name, contact, and intended major. A free skill assessment is included, and a dedicated consultant will reach out to you directly.',
		},
		form: {
			...contactDictionaries.en.form,
			titleLines: ['Application', 'Form'],
			wechatTitle: 'WeChat · SNS',
			qrAlt: contactDictionaries.en.sns.qrAlt,
		},
	},
	zh: {
		metadata: {
			title: '咨询申请 | KISAS Plus',
			description: '提交 KISAS 3 分钟咨询申请，获取韩国艺术留学评估与下一个工作日回复。',
		},
		hero: {
			titleLines: ['3 分钟', '咨询申请'],
			description: '只需留下姓名、联系方式和意向专业。申请包含一次免费能力评估，专属顾问会直接与你联系。',
		},
		form: {
			...contactDictionaries.zh.form,
			titleLines: ['咨询', '表单'],
			wechatTitle: '微信 · SNS',
			qrAlt: contactDictionaries.zh.sns.qrAlt,
		},
	},
} satisfies Record<Locale, ConsultationDictionary>;
