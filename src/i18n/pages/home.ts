import type { Locale } from '@/i18n/config';

export type HomeDictionary = {
	metadata: {
		title: string;
		description: string;
	};
	nav: {
		links: {
			label: string;
			href: string;
		}[];
		consultation: string;
		localeSwitch: {
			label: string;
			href: string;
		};
	};
	hero: {
		titleLines: string[];
		subtitle: string;
		description: string;
		primaryCta: string;
		secondaryCta: string;
	};
	why: {
		titleLines: string[];
		items: {
			number: string;
			titleLines: string[];
			description: string;
			image: string;
			variant: 'circle' | 'square';
		}[];
	};
	universities: {
		eyebrow: string;
		titleLines: string[];
		description: string;
		cta: string;
		marqueeRows: string[][];
	};
	roi: {
		titleLines: string[];
		description: string;
		verificationNote: string;
		cta: string;
		stats: {
			prefix?: string;
			value: string;
			unit: string;
			label: string;
			isVerified: boolean;
		}[];
	};
	students: {
		titleLines: string[];
		description: string;
		cta: string;
		cases: {
			name: string;
			major: string;
			story: string;
			image: string;
		}[];
	};
	finalCta: {
		titleLines: string[];
		description: string;
		cta: string;
	};
	footer: {
		links: {
			label: string;
			href: string;
		}[];
		organizationLines: string[];
		copyright: string;
	};
};

const assetPath = '/assets/images/home';

export const homeDictionaries = {
	en: {
		metadata: {
			title: 'KISAS | International Art Study Center',
			description: 'Korea arts study abroad consulting for Chinese students and families, covering programs, universities, applications, student life, and consultation.',
		},
		nav: {
			links: [
				{ label: 'About', href: '/about' },
				{ label: 'Partner Universities', href: '#universities' },
				{ label: 'Apply', href: '/apply' },
				{ label: 'Student Life', href: '#students' },
				{ label: 'Contact', href: '/contact' },
			],
			consultation: 'Get a Consultation',
			localeSwitch: {
				label: '中文',
				href: '/zh',
			},
		},
		hero: {
			titleLines: ['Korean Arts,', 'at the Center', 'of the World.'],
			subtitle: 'Preparing Your Child for the Next Decade Through Premium Study Abroad Consulting',
			description:
				'In partnership with 11 leading arts universities, including Tier 1 institutions. With over 20 years of experience in Korea’s arts network, we guide students through every step — from portfolio and audition preparation to admission and settlement.',
			primaryCta: 'Free Assessment',
			secondaryCta: 'Explore Programs',
		},
		why: {
			titleLines: ['Why Choose', 'KISAS?'],
			items: [
				{
					number: '01',
					titleLines: ['Pre-Departure', 'Preparation in China'],
					description: 'Complete 90% of practical training, language preparation, and portfolio work before arriving in Korea.',
					image: `${assetPath}/value-1.png`,
					variant: 'circle',
				},
				{
					number: '02',
					titleLines: ['Official', 'Partnerships'],
					description: 'Direct university relationships help students access admission criteria and application updates earlier.',
					image: `${assetPath}/value-2.png`,
					variant: 'square',
				},
				{
					number: '03',
					titleLines: ['Direct Guidance from', 'Industry Experts'],
					description: 'Learn through practical guidance from professors, K-pop producers, and professional trainers.',
					image: `${assetPath}/value-3.png`,
					variant: 'square',
				},
				{
					number: '04',
					titleLines: ['Career Planning', 'Beyond Graduation'],
					description: 'Plan Korea study as a long-term career advantage, including return-home and global options.',
					image: `${assetPath}/guidance-image.png`,
					variant: 'circle',
				},
			],
		},
		universities: {
			eyebrow: 'Official Partnerships with',
			titleLines: ['11 Leading Arts Universities'],
			description: 'From Tier 1 institutions to regionally specialized universities, we match each student with the right school based on their skills and goals.',
			cta: 'View All Stories',
			marqueeRows: [
				['Seoul National Arts University', 'Korea Contemporary Music Institute', 'Busan Media Arts College'],
				['Jeju Cultural Arts College', 'Daegu Performance University', 'Incheon Design Arts School'],
			],
		},
		roi: {
			titleLines: ['See Your ROI in', 'Numbers'],
			description: 'A standard scenario comparing net tuition, expected salary after returning home, and estimated payback period.',
			verificationNote: 'Sample planning figures. Final tuition, scholarship, salary, and ROI values are pending client verification.',
			cta: 'Career & Salary',
			stats: [
				{
					prefix: '20-',
					value: '30',
					unit: 'K RMB',
					label: 'Estimated net tuition after scholarships, regional benefits, and part-time work \n(List price: 37,000-39,000 RMB/year)',
					isVerified: false,
				},
				{
					prefix: '120-',
					value: '180',
					unit: 'K RMB',
					label: 'Entry-level salary after returning home \n(1.5-2x higher than Korean peers)',
					isVerified: false,
				},
				{
					value: '2.1',
					unit: 'YEAR',
					label: 'Estimated payback period for total 4-year cost \n(based on a standard scenario)',
					isVerified: false,
				},
			],
		},
		students: {
			titleLines: ['Students Who', 'Successfully', 'Settled in Korea'],
			description: 'Names anonymized, images blurred, and published with consent. We respect and protect students’ privacy.',
			cta: 'View All Stories',
			cases: [
				{
					name: 'Student A · Shandong',
					major: 'Tier 1 Art University B · Practical Vocal',
					story: 'Started from beginner TOPIK and built a video portfolio through 8 months of practical training.',
					image: `${assetPath}/student-1.png`,
				},
				{
					name: 'Student B · Guangdong',
					major: 'Tier 1 Art University C · Media',
					story: 'Prepared language, interview, and portfolio in parallel before entering a media major.',
					image: `${assetPath}/student-2.png`,
				},
				{
					name: 'Student C · Shanghai',
					major: 'Tier 1 Art University D · Film',
					story: 'Moved from beginner Korean to admission-ready portfolio and interview preparation.',
					image: `${assetPath}/student-3.png`,
				},
				{
					name: 'Student D · Beijing',
					major: 'Tier 2 Art University I · Composition',
					story: 'Completed an original music portfolio and continued DJ activity after admission.',
					image: `${assetPath}/student-4.png`,
				},
			],
		},
		finalCta: {
			titleLines: ['Start with a Free Assessment and', 'Discover Your Potential'],
			description: 'Leave your name, contact details, and intended major, and a consultant will reach out within 1 business day.',
			cta: 'Get a Consultation',
		},
		footer: {
			links: [
				{ label: 'Terms of Service', href: '/terms-of-service' },
				{ label: 'Privacy Policy', href: '/privacy-policy' },
			],
			organizationLines: ['Korea International Space for Arts and Science', 'KISAS Plus · Directly Operated Campus'],
			copyright: '© 2026 KISAS Plus. All rights reserved.',
		},
	},
	zh: {
		metadata: {
			title: 'KISAS | 国际艺术留学中心',
			description: '面向中国学生与家庭的韩国艺术留学咨询网站，涵盖课程、院校、申请、学生生活与咨询申请。',
		},
		nav: {
			links: [
				{ label: '关于', href: '/zh/about' },
				{ label: '合作院校', href: '#universities' },
				{ label: '申请', href: '/zh/apply' },
				{ label: '学生生活', href: '#students' },
				{ label: '联系', href: '/zh/contact' },
			],
			consultation: '预约咨询',
			localeSwitch: {
				label: 'English',
				href: '/',
			},
		},
		hero: {
			titleLines: ['韩国艺术教育，', '连接世界舞台。'],
			subtitle: '为孩子未来十年规划高端韩国艺术留学路径',
			description: '依托韩国艺术教育与产业网络，KISAS 为学生提供从作品集、面试、申请到入学适应的全流程指导。',
			primaryCta: '免费评估',
			secondaryCta: '查看项目',
		},
		why: {
			titleLines: ['为什么选择', 'KISAS?'],
			items: [
				{
					number: '01',
					titleLines: ['在中国完成', '出发前准备'],
					description: '在赴韩前完成大部分实技、语言与作品集准备，让学生入学后更快适应。',
					image: `${assetPath}/value-1.png`,
					variant: 'circle',
				},
				{
					number: '02',
					titleLines: ['院校合作', '与申请信息'],
					description: '通过韩国艺术院校网络，更早掌握申请要求、专业方向与时间节点。',
					image: `${assetPath}/value-2.png`,
					variant: 'square',
				},
				{
					number: '03',
					titleLines: ['行业导师', '直接指导'],
					description: '由教授、制作人和训练导师提供面向真实考试与行业的实践指导。',
					image: `${assetPath}/value-3.png`,
					variant: 'square',
				},
				{
					number: '04',
					titleLines: ['毕业后的', '职业规划'],
					description: '把韩国留学经历转化为回国发展、留韩就业或全球路径的长期优势。',
					image: `${assetPath}/guidance-image.png`,
					variant: 'circle',
				},
			],
		},
		universities: {
			eyebrow: '合作院校网络',
			titleLines: ['11 所艺术院校选择'],
			description: '从首尔重点院校到地区特色院校，根据学生实力、预算与专业目标匹配合适路径。',
			cta: '查看案例',
			marqueeRows: [
				['首尔国立艺术大学', '韩国现代音乐学院', '釜山媒体艺术学院'],
				['济州文化艺术学院', '大邱表演艺术大学', '仁川设计艺术学校'],
			],
		},
		roi: {
			titleLines: ['用数字查看', '留学回报'],
			description: '以标准情景展示学费、奖学金、回国起薪与投入回收周期。',
			verificationNote: '以下为规划示例数据，最终学费、奖学金、薪资与回报周期仍待客户确认。',
			cta: '职业与薪资',
			stats: [
				{
					prefix: '20-',
					value: '30',
					unit: 'K RMB',
					label: '奖学金、地区优势与兼职组合后的预估净学费。',
					isVerified: false,
				},
				{
					prefix: '120-',
					value: '180',
					unit: 'K RMB',
					label: '回国后的标准情景起薪区间。',
					isVerified: false,
				},
				{
					value: '2.1',
					unit: 'YEAR',
					label: '四年总投入的预估回收周期。',
					isVerified: false,
				},
			],
		},
		students: {
			titleLines: ['已经在韩国', '稳定适应的', '学生案例'],
			description: '姓名匿名、图片经处理，并在获得同意后发布。我们尊重并保护学生隐私。',
			cta: '查看案例',
			cases: [
				{
					name: 'A 学生 · 山东',
					major: 'Tier 1 艺术大学 B · 实用声乐',
					story: '从韩语基础开始，经过 8 个月实技训练完成视频作品集。',
					image: `${assetPath}/student-1.png`,
				},
				{
					name: 'B 学生 · 广东',
					major: 'Tier 1 艺术大学 C · 媒体',
					story: '语言、面试与作品集同步准备，进入韩国媒体专业学习。',
					image: `${assetPath}/student-2.png`,
				},
				{
					name: 'C 学生 · 上海',
					major: 'Tier 1 艺术大学 D · 电影',
					story: '从韩语初学到完成作品集与面试准备，顺利获得录取。',
					image: `${assetPath}/student-3.png`,
				},
				{
					name: 'D 学生 · 北京',
					major: 'Tier 2 艺术大学 I · 作曲',
					story: '完成原创音乐作品集，入学后继续参与 DJ 与音乐活动。',
					image: `${assetPath}/student-4.png`,
				},
			],
		},
		finalCta: {
			titleLines: ['从一次免费评估开始，', '发现你的韩国艺术留学可能性'],
			description: '留下姓名、联系方式和目标专业，顾问将在 1 个工作日内联系你。',
			cta: '预约咨询',
		},
		footer: {
			links: [
				{ label: '服务条款', href: '/zh/terms-of-service' },
				{ label: '隐私政策', href: '/zh/privacy-policy' },
			],
			organizationLines: ['Korea International Space for Arts and Science', 'KISAS Plus · Directly Operated Campus'],
			copyright: '© 2026 KISAS Plus. All rights reserved.',
		},
	},
} satisfies Record<Locale, HomeDictionary>;
