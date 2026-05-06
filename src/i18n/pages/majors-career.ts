import type { Locale } from '@/i18n/config';

export type MajorCareerIcon = 'media' | 'film' | 'music' | 'performance' | 'design' | 'business' | 'tourism' | 'beauty' | 'esports' | 'computer' | 'animation';

export type MajorCareerDictionary = {
	metadata: {
		title: string;
		description: string;
	};
	hero: {
		titleLines: string[];
		descriptionLines: string[];
		outcomeLines: string[];
	};
	majors: {
		titleLines: string[];
		items: {
			icon: MajorCareerIcon;
			title: string;
			description: string;
		}[];
	};
	outcomes: {
		distributionTitleLines: string[];
		distributionDescription: string;
		distributionCenterLines: string[];
		distributionItems: {
			label: string;
			value: string;
			color: 'cyan' | 'lime' | 'blue';
		}[];
		salaryTitle: string;
		salaryDescriptionLines: string[];
		salaryRows: {
			labelLines: string[];
			value: string;
			percent: number;
			emphasis?: boolean;
		}[];
		growthTitle: string;
		growthDescriptionLines: string[];
	};
};

const majors = {
	en: [
		{ icon: 'media', title: 'Media', description: 'Video · Broadcasting · Content Production' },
		{ icon: 'film', title: 'Broadcast & Film', description: 'Film · Drama Directing & Cinematography' },
		{ icon: 'music', title: 'Music', description: 'Vocal · Composition · Instruments' },
		{ icon: 'performance', title: 'Performing Arts', description: 'Acting · Musical · Dance' },
		{ icon: 'design', title: 'Design', description: 'Graphic · UX · Video' },
		{ icon: 'business', title: 'Business', description: 'MBA · Entrepreneurship' },
		{ icon: 'tourism', title: 'Tourism', description: 'Hotel · Tourism Management' },
		{ icon: 'beauty', title: 'Beauty', description: 'Beauty · Makeup' },
		{ icon: 'esports', title: 'eSports', description: 'Gaming · Content Creation' },
		{ icon: 'computer', title: 'Computer Science', description: 'AI · Software Development' },
		{ icon: 'animation', title: 'Animation', description: '2D · 3D · Character Design' },
	],
	zh: [
		{ icon: 'media', title: '媒体', description: '视频 · 广播 · 内容制作' },
		{ icon: 'film', title: '广播与电影', description: '电影 · 剧集导演 · 摄影' },
		{ icon: 'music', title: '音乐', description: '声乐 · 作曲 · 器乐' },
		{ icon: 'performance', title: '表演艺术', description: '表演 · 音乐剧 · 舞蹈' },
		{ icon: 'design', title: '设计', description: '平面 · UX · 影像' },
		{ icon: 'business', title: '经营管理', description: 'MBA · 创业管理' },
		{ icon: 'tourism', title: '旅游酒店', description: '酒店 · 旅游管理' },
		{ icon: 'beauty', title: '美妆', description: '美容 · 化妆造型' },
		{ icon: 'esports', title: '电竞', description: '游戏 · 内容创作' },
		{ icon: 'computer', title: '计算机科学', description: 'AI · 软件开发' },
		{ icon: 'animation', title: '动画', description: '2D · 3D · 角色设计' },
	],
} satisfies Record<Locale, MajorCareerDictionary['majors']['items']>;

export const majorsCareerDictionaries = {
	en: {
		metadata: {
			title: 'Majors & Career | KISAS Plus',
			description: 'Explore KISAS arts, media, design, esports, technology, and career pathway options for Korea study abroad planning.',
		},
		hero: {
			titleLines: ['From Arts', 'Majors to Stable', 'Career Paths'],
			descriptionLines: ['With the growth of Korea’s content and K-pop industries, graduates can plan toward stronger early-career options than a major-only admissions route.'],
			outcomeLines: ['Career Outcomes:', '70-75% return to China', '11-18% remain in Korea', '10-15% expand into third countries'],
		},
		majors: {
			titleLines: ['All Available', 'Fields of Study'],
			items: majors.en,
		},
		outcomes: {
			distributionTitleLines: ['Graduate Career', 'Distribution'],
			distributionDescription: 'Based on industry reports and actual outcomes. Final figures require client-approved source data.',
			distributionCenterLines: ['100%', 'Career', 'Distribution'],
			distributionItems: [
				{ label: 'Return to China', value: '70-75%', color: 'cyan' },
				{ label: 'Stay in Korea', value: '11-18%', color: 'lime' },
				{ label: 'Enter Third Countries', value: '10-15%', color: 'blue' },
			],
			salaryTitle: 'Starting Salary Comparison: Korea vs China',
			salaryDescriptionLines: ['Comparison between working in Korea and returning to China.', 'Content and gaming fields may show a stronger salary upside.'],
			salaryRows: [
				{ labelLines: ['Average Starting', 'Salary in Korea'], value: '80K-100K RMB', percent: 46 },
				{ labelLines: ['Starting Salary', '(Return to China)'], value: '120K-180K RMB', percent: 74, emphasis: true },
				{ labelLines: ['eSports /', 'Content Fields'], value: '200K+ RMB', percent: 92, emphasis: true },
			],
			growthTitle: 'Growth in Gaming · eSports · K-pop Industries',
			growthDescriptionLines: ['After gaining 2-3 years of experience in Korea, returning graduates can target stronger roles in China.', 'These are currently among the most in-demand fields.'],
		},
	},
	zh: {
		metadata: {
			title: '专业与升学就业 | KISAS Plus',
			description: '了解 KISAS 韩国艺术留学可规划的媒体、设计、电竞、技术专业与毕业后的职业路径。',
		},
		hero: {
			titleLines: ['从艺术专业', '走向稳定的', '职业路径'],
			descriptionLines: ['随着韩国内容产业与 K-pop 产业持续增长，学生可以把专业选择和毕业后的早期职业方向一起规划。'],
			outcomeLines: ['毕业方向:', '70-75% 回国发展', '11-18% 留在韩国', '10-15% 进入第三国发展'],
		},
		majors: {
			titleLines: ['可申请的', '专业方向'],
			items: majors.zh,
		},
		outcomes: {
			distributionTitleLines: ['毕业后的', '发展分布'],
			distributionDescription: '基于行业报告与实际案例整理。最终数字需以客户确认的数据来源为准。',
			distributionCenterLines: ['100%', 'Career', 'Distribution'],
			distributionItems: [
				{ label: '回国发展', value: '70-75%', color: 'cyan' },
				{ label: '留在韩国', value: '11-18%', color: 'lime' },
				{ label: '进入第三国', value: '10-15%', color: 'blue' },
			],
			salaryTitle: '起薪对比：韩国经验 vs 中国就业',
			salaryDescriptionLines: ['对比在韩国工作与回国发展的早期薪资区间。', '内容、游戏与电竞相关领域可能具备更强薪资上升空间。'],
			salaryRows: [
				{ labelLines: ['韩国平均', '起薪'], value: '80K-100K RMB', percent: 46 },
				{ labelLines: ['回国发展', '起薪'], value: '120K-180K RMB', percent: 74, emphasis: true },
				{ labelLines: ['电竞 /', '内容领域'], value: '200K+ RMB', percent: 92, emphasis: true },
			],
			growthTitle: '游戏 · 电竞 · K-pop · 内容产业增长',
			growthDescriptionLines: ['在韩国积累 2-3 年经验后，回国毕业生可以争取更强的岗位起点。', '这些方向也是目前需求较高的成长型领域。'],
		},
	},
} satisfies Record<Locale, MajorCareerDictionary>;
