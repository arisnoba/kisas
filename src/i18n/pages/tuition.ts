import type { Locale } from '@/i18n/config';

export type TuitionDictionary = {
	metadata: {
		title: string;
		description: string;
	};
	hero: {
		titleLines: string[];
		description: string;
	};
	comparison: {
		titleLines: string[];
		description: string;
		rows: {
			labelLines: string[];
			value: string;
			percent: number;
			emphasis?: boolean;
		}[];
	};
	overview: {
		titleLines: string[];
		descriptionLines: string[];
		columns: string[];
		rows: string[][];
	};
	scholarships: {
		titleLines: string[];
		items: {
			icon: 'lightbulb' | 'medal' | 'graduation' | 'palette';
			title: string;
			descriptionLines: string[];
		}[];
	};
	livingCosts: {
		titleLines: string[];
		groups: {
			title: string;
			items: string[];
		}[];
	};
	payback: {
		titleLines: string[];
		description: string;
		cta: string;
		scenarios: {
			value: string;
			unit: string;
			title: string;
			descriptionLines: string[];
			featured?: boolean;
		}[];
	};
};

export const tuitionDictionaries = {
	en: {
		metadata: {
			title: 'Tuition & Scholarships | KISAS Plus',
			description: 'Compare Korean arts university tuition, scholarship options, monthly living costs, and investment payback scenarios with KISAS Plus.',
		},
		hero: {
			titleLines: ['We Keep Tuition', 'Transparent'],
			description:
				'Starting at around RMB 37,000 per year, tuition can be reduced to approximately RMB 20,000 depending on scholarships, location, and TOPIK level. (1 RMB ≈ 200 KRW)',
		},
		comparison: {
			titleLines: ['Tuition Comparison', 'by Condition'],
			description: 'Save up to RMB 20,000 per year with scholarships',
			rows: [
				{ labelLines: ['Seoul Base'], value: 'RMB 19,500', percent: 100 },
				{ labelLines: ['Regional Base'], value: 'RMB 19,500', percent: 85 },
				{ labelLines: ['TOPIK Level 5', '(50% Tuition Reduction)'], value: 'RMB 19,500', percent: 50, emphasis: true },
				{ labelLines: ['TOPIK Level 6', '(100% Tuition Reduction)'], value: 'RMB 0', percent: 0, emphasis: true },
			],
		},
		overview: {
			titleLines: ['Tuition', 'Overview by University'],
			descriptionLines: ['We provide upfront transparency,', 'including total 4-year costs, to help you make informed decisions.'],
			columns: ['University', 'Category', 'Annual Tuition (Arts)', 'Total (4 Years, RMB)', 'Total (4 Years, KRW)'],
			rows: [
				['Tier 1 Arts University A', 'Tier 1', 'RMB 46,000-52,000', 'RMB 184,000-208,000', 'KRW 36,800,000-41,600,000'],
				['Tier 1 Arts University B', 'Tier 1', 'Full Scholarship', '0 (Conditional)', '0'],
				['Tier 1 Arts University C', 'Tier 1', 'RMB 38,000-42,000', 'RMB 152,000-168,000', 'KRW 30,400,000-33,600,000'],
				['Tier 1 Arts University D', 'Tier 1', 'RMB 37,000-41,000', 'RMB 148,000-164,000', 'KRW 29,600,000-32,800,000'],
				['Other Universities (E / G / J)', 'Not Disclosed', 'Contact for Details', '-', '-'],
				['Regional Campuses', 'Regional', 'RMB 30,000-33,000', 'RMB 120,000-132,000', 'KRW 24,000,000-26,400,000'],
			],
		},
		scholarships: {
			titleLines: ['Available', 'Scholarship Options'],
			items: [
				{
					icon: 'lightbulb',
					title: 'TOPIK Level 5',
					descriptionLines: ['50% tuition reduction. Available at most partner universities.'],
				},
				{
					icon: 'medal',
					title: 'TOPIK Level 6',
					descriptionLines: ['Full tuition waiver upon advanced Korean proficiency.'],
				},
				{
					icon: 'graduation',
					title: 'GKS-U Scholarship',
					descriptionLines: ['Full tuition + living expenses covered.', 'Official Korean government scholarship.'],
				},
				{
					icon: 'palette',
					title: 'Tier 1 Arts University B - Merit Scholarship',
					descriptionLines: ['50% tuition reduction. Available at most partner universities.'],
				},
			],
		},
		livingCosts: {
			titleLines: ['Estimated', 'Monthly Living Costs'],
			groups: [
				{
					title: 'Monthly Living Expenses',
					items: ['Seoul: ~KRW 860,000 (approx. RMB 4,300)', 'Regional: ~KRW 660,000-700,000 (approx. RMB 3,300-3,500)', '18.6-23.3% lower than Seoul (based on R4-R5)'],
				},
				{
					title: 'Monthly Housing Costs',
					items: ['Dormitory: KRW 300,000-500,000', 'Goshiwon: KRW 350,000-550,000', 'Studio (One-room): KRW 500,000-900,000', 'Shared Housing: KRW 400,000-700,000'],
				},
			],
		},
		payback: {
			titleLines: ['Investment', 'Payback Period'],
			description: 'Based on total 4-year costs and entry-level salary after returning, three scenarios are presented: Conservative, Standard, and Aggressive.',
			cta: 'Personalized ROI Simulation',
			scenarios: [
				{
					value: '3.8',
					unit: 'years',
					title: 'Conservative Scenario',
					descriptionLines: ['No scholarship + Seoul tuition + minimum starting salary assumed.', 'Estimated payback within 4 years.'],
				},
				{
					value: '2.1',
					unit: 'years',
					title: 'Standard Scenario',
					descriptionLines: ['Regional university + TOPIK Level 5 + starting salary of 150,000 RMB.', 'Estimated payback in about 2 years.'],
					featured: true,
				},
				{
					value: '0.4',
					unit: 'years',
					title: 'Aggressive Scenario',
					descriptionLines: ['GKS-U full scholarship + starting salary of 180,000 RMB.', 'Estimated payback in about 5 months.'],
				},
			],
		},
	},
	zh: {
		metadata: {
			title: '学费与奖学金 | KISAS Plus',
			description: '通过 KISAS Plus 对比韩国艺术院校学费、奖学金选择、每月生活费用与留学投入回收情景。',
		},
		hero: {
			titleLines: ['学费信息', '透明清晰'],
			description: '年学费约从人民币 37,000 元起，结合奖学金、地区选择与 TOPIK 等级后，可降至约人民币 20,000 元。按 1 人民币 ≈ 200 韩元估算。',
		},
		comparison: {
			titleLines: ['不同条件下的', '学费对比'],
			description: '通过奖学金每年最多可节省约人民币 20,000 元',
			rows: [
				{ labelLines: ['首尔基础情景'], value: 'RMB 19,500', percent: 100 },
				{ labelLines: ['地区基础情景'], value: 'RMB 19,500', percent: 85 },
				{ labelLines: ['TOPIK 5 级', '(学费减免 50%)'], value: 'RMB 19,500', percent: 50, emphasis: true },
				{ labelLines: ['TOPIK 6 级', '(学费减免 100%)'], value: 'RMB 0', percent: 0, emphasis: true },
			],
		},
		overview: {
			titleLines: ['各院校', '学费概览'],
			descriptionLines: ['我们提前说明学费与四年总费用，', '帮助家庭在申请前做出更清晰的判断。'],
			columns: ['院校', '类别', '年度学费（艺术类）', '四年总额（人民币）', '四年总额（韩元）'],
			rows: [
				['Tier 1 艺术大学 A', 'Tier 1', 'RMB 46,000-52,000', 'RMB 184,000-208,000', 'KRW 36,800,000-41,600,000'],
				['Tier 1 艺术大学 B', 'Tier 1', '全额奖学金', '0（有条件）', '0'],
				['Tier 1 艺术大学 C', 'Tier 1', 'RMB 38,000-42,000', 'RMB 152,000-168,000', 'KRW 30,400,000-33,600,000'],
				['Tier 1 艺术大学 D', 'Tier 1', 'RMB 37,000-41,000', 'RMB 148,000-164,000', 'KRW 29,600,000-32,800,000'],
				['其他院校（E / G / J）', '暂未公开', '请咨询了解详情', '-', '-'],
				['地区校区', '地区型', 'RMB 30,000-33,000', 'RMB 120,000-132,000', 'KRW 24,000,000-26,400,000'],
			],
		},
		scholarships: {
			titleLines: ['可申请的', '奖学金选项'],
			items: [
				{
					icon: 'lightbulb',
					title: 'TOPIK 5 级',
					descriptionLines: ['可获得 50% 学费减免，多数合作院校可适用。'],
				},
				{
					icon: 'medal',
					title: 'TOPIK 6 级',
					descriptionLines: ['达到高级韩语能力后，可申请全额学费减免。'],
				},
				{
					icon: 'graduation',
					title: 'GKS-U 奖学金',
					descriptionLines: ['覆盖全额学费与生活费。', '韩国政府官方奖学金项目。'],
				},
				{
					icon: 'palette',
					title: 'Tier 1 艺术大学 B - 成绩奖学金',
					descriptionLines: ['可获得 50% 学费减免，多数合作院校可适用。'],
				},
			],
		},
		livingCosts: {
			titleLines: ['每月生活费', '预估'],
			groups: [
				{
					title: '每月生活开销',
					items: ['首尔：约 KRW 860,000（约 RMB 4,300）', '地区：约 KRW 660,000-700,000（约 RMB 3,300-3,500）', '比首尔低约 18.6-23.3%（以 R4-R5 为基准）'],
				},
				{
					title: '每月住宿费用',
					items: ['宿舍：KRW 300,000-500,000', '考试院：KRW 350,000-550,000', '单间公寓：KRW 500,000-900,000', '合租住房：KRW 400,000-700,000'],
				},
			],
		},
		payback: {
			titleLines: ['留学投入', '回收周期'],
			description: '基于四年总费用与回国后的入门薪资，展示保守、标准与积极三种回收情景。',
			cta: '个性化 ROI 模拟',
			scenarios: [
				{
					value: '3.8',
					unit: '年',
					title: '保守情景',
					descriptionLines: ['无奖学金 + 首尔学费 + 最低起薪假设。', '预计约 4 年内回收投入。'],
				},
				{
					value: '2.1',
					unit: '年',
					title: '标准情景',
					descriptionLines: ['地区大学 + TOPIK 5 级 + 回国起薪 150,000 RMB。', '预计约 2 年回收投入。'],
					featured: true,
				},
				{
					value: '0.4',
					unit: '年',
					title: '积极情景',
					descriptionLines: ['GKS-U 全额奖学金 + 回国起薪 180,000 RMB。', '预计约 5 个月回收投入。'],
				},
			],
		},
	},
} satisfies Record<Locale, TuitionDictionary>;
