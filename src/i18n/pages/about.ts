import type { Locale } from '@/i18n/config';

export type AboutDictionary = {
	metadata: {
		title: string;
		description: string;
	};
	hero: {
		titleLines: string[];
		subtitleLines: string[];
		description: string;
	};
	steps: {
		titleLines: string[];
		description: string;
		items: {
			number: string;
			titleLines: string[];
			description: string;
			shape: 'hexagon' | 'star' | 'circle';
		}[];
	};
	audience: {
		titleLines: string[];
		items: {
			icon: 'music' | 'media' | 'language';
			title: string;
			description: string;
		}[];
	};
	packages: {
		titleLines: string[];
		descriptionLines: string[];
		cta: string;
		items: {
			label: string;
			titleLines: string[];
			description: string;
			variant: 'left' | 'middle' | 'right';
		}[];
	};
};

export const aboutDictionaries = {
	en: {
		metadata: {
			title: 'About | KISAS Plus',
			description: 'Learn how KISAS Plus guides students from preparation in China to Korean university admission and career planning.',
		},
		hero: {
			titleLines: ['Your Path to', 'Top Korean', 'Universities'],
			subtitleLines: ['From Preparation in China to', 'Career Launch'],
			description: 'We go beyond traditional study abroad services. From practical training to post-admission support, we help students stay focused on what matters most.',
		},
		steps: {
			titleLines: ['A 3-Step Process', 'Completed', 'Within 1 Year'],
			description: 'You can apply for each step individually, though the full program offers the most reliable path.',
			items: [
				{
					number: '01',
					titleLines: ['Preparation', 'in China'],
					description: 'Practical Training · Language · Portfolio',
					shape: 'hexagon',
				},
				{
					number: '02',
					titleLines: ['Admission to', 'Korean', 'Universities'],
					description: 'Application · Interview · Admission',
					shape: 'star',
				},
				{
					number: '03',
					titleLines: ['Graduation &', 'Career Entry'],
					description: 'Employment · Return Home · Global Opportunities',
					shape: 'circle',
				},
			],
		},
		audience: {
			titleLines: ['Who This', 'Program Is For'],
			items: [
				{
					icon: 'music',
					title: 'Aspiring Music Professionals',
					description: 'Many programs accept students based on practical skills such as vocal, composition, and instruments, even without TOPIK.',
				},
				{
					icon: 'media',
					title: 'Content & Media Majors',
					description: 'From video, design, and performance to portfolio and personal statement, we guide you through the entire process.',
				},
				{
					icon: 'language',
					title: 'Beginners in Korean',
					description: 'You can start with little to no Korean. Within a year, you can reach the level needed to adapt to university life.',
				},
			],
		},
		packages: {
			titleLines: ['4 Packages by', 'Duration & Scope'],
			descriptionLines: ['Pricing is provided after', 'a pre-assessment', 'and tailored to each student.'],
			cta: 'Consultation',
			items: [
				{
					label: 'Program A',
					titleLines: ['1-Month', 'Trial'],
					description: 'Skill assessment, university matching, and a 1-year study plan to evaluate your potential.',
					variant: 'left',
				},
				{
					label: 'Program B',
					titleLines: ['3-Month', 'Intensive'],
					description: 'Focused training in practical skills, basic language, and portfolio development.',
					variant: 'middle',
				},
				{
					label: 'Program C',
					titleLines: ['6-Month', 'Standard'],
					description: 'Most popular track. Includes training, language, documents, and interview prep.',
					variant: 'middle',
				},
				{
					label: 'Program D',
					titleLines: ['1-Year', 'Premium'],
					description: 'Full support with advanced training and dedicated consulting, including post-arrival assistance.',
					variant: 'right',
				},
			],
		},
	},
	zh: {
		metadata: {
			title: '关于 | KISAS Plus',
			description: '了解 KISAS Plus 如何从中国阶段准备、韩国大学申请到职业规划支持学生。',
		},
		hero: {
			titleLines: ['通往韩国', '顶尖艺术大学的', '清晰路径'],
			subtitleLines: ['从中国阶段准备到', '未来职业启动'],
			description: '我们不只提供传统留学服务。从实技训练到入学后的适应支持，KISAS 帮助学生把精力放在最关键的准备上。',
		},
		steps: {
			titleLines: ['一年内完成的', '三阶段', '申请路径'],
			description: '每个阶段都可以单独选择，但完整项目能提供更稳定、更连贯的准备路径。',
			items: [
				{
					number: '01',
					titleLines: ['中国阶段', '准备'],
					description: '实技训练 · 语言 · 作品集',
					shape: 'hexagon',
				},
				{
					number: '02',
					titleLines: ['韩国大学', '申请与', '录取'],
					description: '申请 · 面试 · 录取',
					shape: 'star',
				},
				{
					number: '03',
					titleLines: ['毕业与', '职业发展'],
					description: '就业 · 回国发展 · 全球机会',
					shape: 'circle',
				},
			],
		},
		audience: {
			titleLines: ['适合这些', '学生'],
			items: [
				{
					icon: 'music',
					title: '音乐方向学生',
					description: '声乐、作曲、器乐等方向可根据实技能力规划申请路径，即使暂时没有 TOPIK 也可以开始准备。',
				},
				{
					icon: 'media',
					title: '内容与媒体专业',
					description: '从影像、设计、表演到作品集和自我介绍，我们会陪同学生完成完整申请准备。',
				},
				{
					icon: 'language',
					title: '韩语初学者',
					description: '即使韩语基础较弱，也可以从现在开始，在一年内逐步达到适应大学生活所需的水平。',
				},
			],
		},
		packages: {
			titleLines: ['按周期与范围', '划分的四种方案'],
			descriptionLines: ['费用会在', '预评估后提供，', '并根据学生情况定制。'],
			cta: '职业与薪资',
			items: [
				{
					label: 'Program A',
					titleLines: ['1 个月', '体验'],
					description: '能力评估、院校匹配与一年学习规划，用于判断学生的申请潜力。',
					variant: 'left',
				},
				{
					label: 'Program B',
					titleLines: ['3 个月', '强化'],
					description: '集中进行实技、基础语言与作品集方向的训练。',
					variant: 'middle',
				},
				{
					label: 'Program C',
					titleLines: ['6 个月', '标准'],
					description: '主推方案，覆盖训练、语言、材料准备与面试辅导。',
					variant: 'middle',
				},
				{
					label: 'Program D',
					titleLines: ['1 年', '高阶'],
					description: '包含进阶训练、专属咨询与赴韩后的适应支持。',
					variant: 'right',
				},
			],
		},
	},
} satisfies Record<Locale, AboutDictionary>;
