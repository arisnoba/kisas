import type { Locale } from '@/i18n/config';

export type StudentLifeDictionary = {
	metadata: {
		title: string;
		description: string;
	};
	hero: {
		titleLines: string[];
		privacyNote: string;
	};
	outcomes: {
		titleLines: string[];
		profiles: StudentProfile[];
	};
	activities: {
		titleLines: string[];
		descriptionLines: string[];
		cta: string;
		images: {
			src: string;
			alt: string;
			variant: 'wide' | 'tall' | 'medium' | 'portrait';
		}[];
	};
};

export type StudentProfile = {
	name: string;
	program: string;
	story: string;
	image: string;
};

const assetPath = '/assets/images/student-life';

const englishProfiles: StudentProfile[] = [
	{
		name: 'A · Shandong · 2025',
		program: 'Tier 1 Art University B · Applied Vocal',
		story: 'Started with no Korean. After 8 months of intensive training, received a merit-based scholarship and is now a sophomore at Tier 1 University B.',
		image: `${assetPath}/student-a.png`,
	},
	{
		name: 'B · Guangdong · 2024',
		program: 'Tier 1 Art University C · Media',
		story: 'Awarded the GKS-U Government Scholarship and achieved TOPIK Level 5, minimizing tuition costs. Currently studying Media at Tier 1 University C.',
		image: `${assetPath}/student-b.png`,
	},
	{
		name: 'C · Shanghai · 2024',
		program: 'Tier 1 Art University D · Film & Video',
		story: 'Started with no Korean and gained admission to Tier 1 University D. Achieved TOPIK Level 4 within 6 months after enrollment.',
		image: `${assetPath}/student-c.png`,
	},
];

const chineseProfiles: StudentProfile[] = [
	{
		name: 'A · 山东 · 2025',
		program: 'Tier 1 艺术大学 B · 实用声乐',
		story: '从零韩语开始，通过 8 个月强化训练获得优秀奖学金，目前就读于 Tier 1 艺术大学 B 二年级。',
		image: `${assetPath}/student-a.png`,
	},
	{
		name: 'B · 广东 · 2024',
		program: 'Tier 1 艺术大学 C · 媒体',
		story: '获得 GKS-U 政府奖学金并达到 TOPIK 5 级，有效降低学费成本，目前在 Tier 1 艺术大学 C 学习媒体专业。',
		image: `${assetPath}/student-b.png`,
	},
	{
		name: 'C · 上海 · 2024',
		program: 'Tier 1 艺术大学 D · 电影影像',
		story: '从零韩语开始准备并成功进入 Tier 1 艺术大学 D，入学后 6 个月内达到 TOPIK 4 级。',
		image: `${assetPath}/student-c.png`,
	},
];

export const studentLifeDictionaries = {
	en: {
		metadata: {
			title: 'Student Life | KISAS Plus',
			description: 'Review anonymized KISAS student admission outcomes, Korea study progress, performances, portfolios, and activities shared with consent.',
		},
		hero: {
			titleLines: ['We Support Your', 'Growth Beyond', 'Admission'],
			privacyNote: 'Names anonymized and images blurred, shared with consent. These are real cases, trackable through students’ current progress.',
		},
		outcomes: {
			titleLines: ['Admissions', '& Career Outcomes'],
			profiles: [...englishProfiles, englishProfiles[1], englishProfiles[2], englishProfiles[0]],
		},
		activities: {
			titleLines: ['Student Work &', 'Activities'],
			descriptionLines: ['Performances, awards, and portfolios.', 'Only shared with the student’s consent.'],
			cta: 'Get a Consultation',
			images: [
				{ src: `${assetPath}/activity-stage-dark.png`, alt: '', variant: 'wide' },
				{ src: `${assetPath}/activity-standing.png`, alt: '', variant: 'tall' },
				{ src: `${assetPath}/activity-theatre.png`, alt: '', variant: 'medium' },
				{ src: `${assetPath}/activity-music.png`, alt: '', variant: 'portrait' },
				{ src: `${assetPath}/activity-portrait.png`, alt: '', variant: 'tall' },
			],
		},
	},
	zh: {
		metadata: {
			title: '学生生活 | KISAS Plus',
			description: '查看 KISAS 学生的匿名录取成果、韩国学习进展、演出、作品集与活动记录。',
		},
		hero: {
			titleLines: ['我们支持你的', '成长不止于', '录取结果'],
			privacyNote: '学生姓名已匿名处理，图片经模糊处理并在获得同意后展示。案例可通过学生当前进展持续追踪。',
		},
		outcomes: {
			titleLines: ['录取成果', '与发展方向'],
			profiles: [...chineseProfiles, chineseProfiles[1], chineseProfiles[2], chineseProfiles[0]],
		},
		activities: {
			titleLines: ['学生作品与', '活动记录'],
			descriptionLines: ['演出、获奖经历与作品集成果。', '仅在获得学生同意后展示。'],
			cta: '获取免费咨询',
			images: [
				{ src: `${assetPath}/activity-stage-dark.png`, alt: '', variant: 'wide' },
				{ src: `${assetPath}/activity-standing.png`, alt: '', variant: 'tall' },
				{ src: `${assetPath}/activity-theatre.png`, alt: '', variant: 'medium' },
				{ src: `${assetPath}/activity-music.png`, alt: '', variant: 'portrait' },
				{ src: `${assetPath}/activity-portrait.png`, alt: '', variant: 'tall' },
			],
		},
	},
} satisfies Record<Locale, StudentLifeDictionary>;
