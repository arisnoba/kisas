import type { Locale } from '@/i18n/config';

export type ContactDictionary = {
	metadata: {
		title: string;
		description: string;
	};
	hero: {
		titleLines: string[];
		description: string;
	};
	center: {
		title: string;
		address: string;
		phone: string;
		hours: string;
		mapTitle: string;
		mapSrc: string;
	};
	sns: {
		title: string;
		lines: string[];
		qrAlt: string;
	};
	form: {
		titleLines: string[];
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

export const contactDictionaries = {
	en: {
		metadata: {
			title: 'Contact | KISAS Plus',
			description: 'Contact KISAS Plus through WeChat, SNS, phone, Google Maps, or an online inquiry form for Korea arts study abroad consultation.',
		},
		hero: {
			titleLines: ['Reach Us via', 'WeChat or', 'Visit Our Center'],
			description: 'For program assessment, WeChat consultation, or a center visit, leave your contact details and our consultant will guide the next step.',
		},
		center: {
			title: 'China Study Abroad Center',
			address: 'Address: [China Center Address]',
			phone: 'Phone: +86 XXX-XXXX-XXXX',
			hours: 'Hours: Mon-Sat 09:00-18:00',
			mapTitle: 'Google Map showing the KISAS China Study Abroad Center area',
			mapSrc: 'https://www.google.com/maps?q=Shanghai%2C%20China&output=embed&hl=en',
		},
		sns: {
			title: 'WeChat · SNS',
			lines: ['WeChat ID: KISAS_OFFICIAL', '@KISAS_ArtGlobal', 'Douyin: @KISAS_edu'],
			qrAlt: 'KISAS WeChat QR code',
		},
		form: {
			titleLines: ['Submit an', 'Inquiry'],
			fields: {
				name: 'Name',
				contact: 'Phone / WeChat',
				major: 'Intended Major',
				date: 'Preferred Consultation Date',
				package: 'Preferred Package',
				message: 'Your Message',
			},
			majorOptions: ['Music', 'Media & Content', 'Film & Video', 'Design', 'Performing Arts', 'Other'],
			packageOptions: ['1-Month Trial', '3-Month Intensive', '6-Month Regular', '1-Year Premium', 'Decide After Consultation'],
			submit: 'Submit',
			pending: 'Submitting',
			success: 'Your inquiry has been saved locally for the demo. A backend adapter can connect this form later.',
			error: 'Please fill in your name and Phone / WeChat before submitting.',
			note: 'Our consultant will respond within 1 business day.',
		},
	},
	zh: {
		metadata: {
			title: '联系我们 | KISAS Plus',
			description: '通过微信、SNS、电话、Google 地图或在线咨询表单联系 KISAS Plus，获取韩国艺术留学咨询。',
		},
		hero: {
			titleLines: ['通过微信联系', '或到访我们的', '咨询中心'],
			description: '如需项目评估、微信咨询或预约到访，请留下联系方式，顾问会为你说明下一步流程。',
		},
		center: {
			title: '中国留学咨询中心',
			address: '地址：[中国中心地址]',
			phone: '电话：+86 XXX-XXXX-XXXX',
			hours: '时间：周一至周六 09:00-18:00',
			mapTitle: '显示 KISAS 中国留学咨询中心区域的 Google 地图',
			mapSrc: 'https://www.google.com/maps?q=Shanghai%2C%20China&output=embed&hl=zh-CN',
		},
		sns: {
			title: '微信 · SNS',
			lines: ['微信 ID：KISAS_OFFICIAL', '@KISAS_ArtGlobal', '抖音：@KISAS_edu'],
			qrAlt: 'KISAS 微信二维码',
		},
		form: {
			titleLines: ['提交', '咨询申请'],
			fields: {
				name: '姓名',
				contact: '手机 / 微信',
				major: '意向专业',
				date: '希望咨询日期',
				package: '希望套餐',
				message: '咨询内容',
			},
			majorOptions: ['音乐', '媒体与内容', '电影影像', '设计', '表演艺术', '其他'],
			packageOptions: ['1个月体验', '3个月集中', '6个月常规', '1年高级', '咨询后决定'],
			submit: '提交',
			pending: '提交中',
			success: '咨询内容已在演示环境中保存。本表单后续可连接后端接口。',
			error: '请先填写姓名和手机 / 微信。',
			note: '顾问将在 1 个工作日内回复。',
		},
	},
} satisfies Record<Locale, ContactDictionary>;
