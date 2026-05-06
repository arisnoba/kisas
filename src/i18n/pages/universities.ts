import type { Locale } from '@/i18n/config';

export type UniversitiesDictionary = {
	metadata: {
		title: string;
		description: string;
	};
	hero: {
		titleLines: string[];
		subtitleLines: string[];
		description: string;
	};
	filters: {
		label: string;
		value: UniversityCategory;
	}[];
	cards: UniversityCard[];
	spectrum: {
		title: string;
		descriptionLines: string[];
		primaryCta: string;
		secondaryCta: string;
		categories: {
			titleLines: string[];
			description: string;
		}[];
	};
};

export type UniversityCategory = 'all' | 'seoul' | 'regional' | 'specialized';

export type UniversityCard = {
	name: string;
	category: Exclude<UniversityCategory, 'all'>;
	categoryLabel: string;
	majors: string;
	requirements: string;
	tuition: string;
	image: string;
};

const assetPath = '/assets/images/universities';

export const universitiesDictionaries = {
	en: {
		metadata: {
			title: 'Partner Universities | KISAS Plus',
			description: 'Explore Korean arts university options by region, specialization, major coverage, admission conditions, and sample tuition ranges.',
		},
		hero: {
			titleLines: ['11 Prestigious', 'Art Universities'],
			subtitleLines: ['Official Partnerships, Including', 'Top Tier 1 Institutions'],
			description:
				'We maintain relationships with leading art universities in Korea and guide each student toward the best-fit option based on budget, skills, language level, and intended major.',
		},
		filters: [
			{ label: 'All', value: 'all' },
			{ label: 'Seoul', value: 'seoul' },
			{ label: 'Regional', value: 'regional' },
			{ label: 'Specialized', value: 'specialized' },
		],
		cards: [
			{
				name: 'Tier 1 Art University A',
				category: 'seoul',
				categoryLabel: 'Seoul',
				majors: 'Composition · Vocal · Korean Music · Design',
				requirements: 'TOPIK Level 5+ or Practical Skills',
				tuition: '46,000-52,000 RMB/year',
				image: `${assetPath}/hero-foreground.png`,
			},
			{
				name: 'Tier 1 Art University B',
				category: 'seoul',
				categoryLabel: 'Seoul',
				majors: 'Film · Media Arts · Directing · Production',
				requirements: 'Portfolio Review + Interview',
				tuition: '44,000-50,000 RMB/year',
				image: `${assetPath}/card-campus-1.png`,
			},
			{
				name: 'Tier 1 Art University C',
				category: 'specialized',
				categoryLabel: 'Specialized',
				majors: 'Applied Vocal · Dance · Performance · Musical',
				requirements: 'Audition Video + Practical Test',
				tuition: '43,000-49,000 RMB/year',
				image: `${assetPath}/card-campus-2.png`,
			},
			{
				name: 'Regional Arts University D',
				category: 'regional',
				categoryLabel: 'Regional',
				majors: 'Design · Animation · Game · Content Media',
				requirements: 'TOPIK Level 3+ or Foundation Track',
				tuition: '30,000-38,000 RMB/year',
				image: `${assetPath}/card-campus-1.png`,
			},
			{
				name: 'Regional Music University E',
				category: 'regional',
				categoryLabel: 'Regional',
				majors: 'Composition · Guitar · Bass · Drums · Vocal',
				requirements: 'Practical Skills + Study Plan',
				tuition: '28,000-36,000 RMB/year',
				image: `${assetPath}/card-campus-2.png`,
			},
			{
				name: 'Specialized Media Institute F',
				category: 'specialized',
				categoryLabel: 'Specialized',
				majors: 'Esports · Computer Science · Animation · Game',
				requirements: 'Portfolio or Technical Interview',
				tuition: '35,000-42,000 RMB/year',
				image: `${assetPath}/hero-foreground.png`,
			},
		],
		spectrum: {
			title: 'Program Spectrum',
			descriptionLines: ['Covering music, content, design, and entertainment.', 'Representative universities by major can be reviewed during consultation.'],
			primaryCta: 'Consultation',
			secondaryCta: 'Apply',
			categories: [
				{
					titleLines: ['Music'],
					description: 'Applied Vocal · Composition · Guitar · Bass · Drums · Classical Vocal',
				},
				{
					titleLines: ['Contents'],
					description: 'Media Production · Visual Design · Broadcasting · Creative Video',
				},
				{
					titleLines: ['Performing', 'Arts'],
					description: 'Acting · Musical Theatre · Dance · Directing',
				},
				{
					titleLines: ['Emerging', 'Industries'],
					description: 'Esports · Game Development · Computer Science · Animation',
				},
			],
		},
	},
	zh: {
		metadata: {
			title: '合作院校 | KISAS Plus',
			description: '按地区、专业方向、入学条件与参考学费查看韩国艺术类大学选择。',
		},
		hero: {
			titleLines: ['11 所重点', '艺术院校选择'],
			subtitleLines: ['覆盖首尔、地区特色院校', '与专业型艺术机构'],
			description: 'KISAS 会根据预算、专业能力、语言水平与目标方向，为学生匹配更合适的韩国艺术院校路径。',
		},
		filters: [
			{ label: '全部', value: 'all' },
			{ label: '首尔', value: 'seoul' },
			{ label: '地区', value: 'regional' },
			{ label: '专业型', value: 'specialized' },
		],
		cards: [
			{
				name: 'Tier 1 艺术大学 A',
				category: 'seoul',
				categoryLabel: '首尔',
				majors: '作曲 · 声乐 · 韩国音乐 · 设计',
				requirements: 'TOPIK 5 级以上或实技能力',
				tuition: '46,000-52,000 RMB/年',
				image: `${assetPath}/hero-foreground.png`,
			},
			{
				name: 'Tier 1 艺术大学 B',
				category: 'seoul',
				categoryLabel: '首尔',
				majors: '电影 · 媒体艺术 · 导演 · 制作',
				requirements: '作品集审核 + 面试',
				tuition: '44,000-50,000 RMB/年',
				image: `${assetPath}/card-campus-1.png`,
			},
			{
				name: 'Tier 1 艺术大学 C',
				category: 'specialized',
				categoryLabel: '专业型',
				majors: '实用声乐 · 舞蹈 · 表演 · 音乐剧',
				requirements: '试唱视频 + 实技测试',
				tuition: '43,000-49,000 RMB/年',
				image: `${assetPath}/card-campus-2.png`,
			},
			{
				name: '地区艺术大学 D',
				category: 'regional',
				categoryLabel: '地区',
				majors: '设计 · 动画 · 游戏 · 内容媒体',
				requirements: 'TOPIK 3 级以上或预科路径',
				tuition: '30,000-38,000 RMB/年',
				image: `${assetPath}/card-campus-1.png`,
			},
			{
				name: '地区音乐大学 E',
				category: 'regional',
				categoryLabel: '地区',
				majors: '作曲 · 吉他 · 贝斯 · 鼓 · 声乐',
				requirements: '实技能力 + 学习计划',
				tuition: '28,000-36,000 RMB/年',
				image: `${assetPath}/card-campus-2.png`,
			},
			{
				name: '专业媒体学院 F',
				category: 'specialized',
				categoryLabel: '专业型',
				majors: '电竞 · 计算机科学 · 动画 · 游戏',
				requirements: '作品集或技术面试',
				tuition: '35,000-42,000 RMB/年',
				image: `${assetPath}/hero-foreground.png`,
			},
		],
		spectrum: {
			title: '专业覆盖',
			descriptionLines: ['覆盖音乐、内容、设计与娱乐产业相关方向。', '各专业推荐院校可在咨询阶段进一步确认。'],
			primaryCta: '咨询',
			secondaryCta: '申请',
			categories: [
				{
					titleLines: ['音乐'],
					description: '实用声乐 · 作曲 · 吉他 · 贝斯 · 鼓 · 古典声乐',
				},
				{
					titleLines: ['内容'],
					description: '媒体制作 · 视觉设计 · 广播影像 · 创意视频',
				},
				{
					titleLines: ['表演', '艺术'],
					description: '表演 · 音乐剧 · 舞蹈 · 导演',
				},
				{
					titleLines: ['新兴', '产业'],
					description: '电竞 · 游戏开发 · 计算机科学 · 动画',
				},
			],
		},
	},
} satisfies Record<Locale, UniversitiesDictionary>;
