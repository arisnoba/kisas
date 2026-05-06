import type { Locale } from '@/i18n/config';

export type ApplyDictionary = {
	metadata: {
		title: string;
		description: string;
	};
	hero: {
		titleLines: string[];
		description: string;
	};
	timeline: {
		titleLines: string[];
		items: {
			labelLines: string[];
			details: string[];
			shape: 'star' | 'star-alt' | 'hexagon' | 'diamond' | 'rounded-diamond' | 'circle';
		}[];
	};
	process: {
		titleLines: string[];
		items: {
			number: string;
			titleLines: string[];
			description: string;
		}[];
	};
	documents: {
		titleLines: string[];
		commonTitleLines: string[];
		commonItems: string[];
		artTitleLines: string[];
		artItems: string[];
		visaTitleLines: string[];
		visaProcessingTitle: string;
		visaProcessingDescription: string;
		visaReasonsTitle: string;
		visaReasons: string[];
		cta: string;
	};
	beginner: {
		titleLines: string[];
		description: string;
		universities: {
			title: string;
			description: string;
		}[];
	};
};

export const applyDictionaries = {
	en: {
		metadata: {
			title: 'Apply | KISAS Plus',
			description: 'Review the KISAS 10-month Korea arts study abroad roadmap, 8-step application process, required documents, visa notes, and beginner Korean options.',
		},
		hero: {
			titleLines: ['A 10-Month', 'Roadmap to', 'Admission'],
			description: 'An 8-step process from language school enrollment to dorm move-in, covering all essential requirements at each stage.',
		},
		timeline: {
			titleLines: ['Key Milestones', 'Timeline'],
			items: [
				{
					labelLines: ['T-10', 'Months'],
					details: ['Language school enrollment', 'Pre-assessment'],
					shape: 'star',
				},
				{
					labelLines: ['T-6', 'Months'],
					details: ['University selection', 'Portfolio'],
					shape: 'star-alt',
				},
				{
					labelLines: ['T-4', 'Months'],
					details: ['Document submission', 'TOPIK test'],
					shape: 'hexagon',
				},
				{
					labelLines: ['T-3', 'Months'],
					details: ['Interview & audition', 'Admission results'],
					shape: 'diamond',
				},
				{
					labelLines: ['T-1', 'Month'],
					details: ['D-2 visa', 'Application submission'],
					shape: 'rounded-diamond',
				},
				{
					labelLines: ['T-0.5', 'Months'],
					details: ['Dorm lottery', 'Arrival in Korea'],
					shape: 'circle',
				},
			],
		},
		process: {
			titleLines: ['Our 8-Step', 'Process'],
			items: [
				{
					number: '01',
					titleLines: ['Free', 'Consultation'],
					description: 'Understanding your major, budget, and student profile.',
				},
				{
					number: '02',
					titleLines: ['Pre-', 'Assessment'],
					description: 'Evaluating fit across skills, language, and documents.',
				},
				{
					number: '03',
					titleLines: ['University', 'Selection'],
					description: 'Matching Tier 1, specialized, and regional options.',
				},
				{
					number: '04',
					titleLines: ['Application', 'Preparation'],
					description: 'Preparing documents with a school-specific checklist.',
				},
				{
					number: '05',
					titleLines: ['Application', 'Submission'],
					description: 'Online tracking and school upload support.',
				},
				{
					number: '06',
					titleLines: ['Interview &', 'Audition'],
					description: 'Video submission or in-person interview.',
				},
				{
					number: '07',
					titleLines: ['Admission', '& Visa'],
					description: 'D-2 visa takes 2-4 weeks. Enrollment takes 3-6 weeks.',
				},
				{
					number: '08',
					titleLines: ['Enrollment &', 'Settlement'],
					description: 'Dorm assignment and post-arrival support.',
				},
			],
		},
		documents: {
			titleLines: ['13 Required Documents', 'Over Half Prepared for You'],
			commonTitleLines: ['11 Common', 'Documents'],
			commonItems: ['Application Form', 'Personal Statement', 'Study Plan', 'High School Diploma', 'High School Transcript', 'TOPIK Score Report', 'Proof of Financial Support', 'Passport Copy', 'ID Photo', 'Letter of Guarantee', 'Recommendation Letter'],
			artTitleLines: ['2 Additional', '(Art Programs)'],
			artItems: ['Portfolio (Design · Video · Music Recording)', 'Performance Video (Vocal · Instrument · Acting)'],
			visaTitleLines: ['D-2', 'Visa Notes'],
			visaProcessingTitle: 'Processing Time',
			visaProcessingDescription: 'Standard: 2-4 weeks · Peak season: 3-6 weeks',
			visaReasonsTitle: 'Common Reasons for Rejection:',
			visaReasons: ['Insufficient financial proof', 'Unclear study purpose', 'Suspected document fraud'],
			cta: 'Get Application Support',
		},
		beginner: {
			titleLines: ['Universities', 'Open to Beginners', 'in Korean'],
			description: 'Two universities offer conditional admission without TOPIK. Requirements can be fulfilled through language study after arrival.',
			universities: [
				{
					title: 'Tier 1 Art University G',
					description: 'Conditional admission with no Korean required. After arrival: 6 months of language study alongside major courses.',
				},
				{
					title: 'Tier 1 Art University D',
					description: 'Conditional admission with no Korean required. TOPIK Level 3 must be achieved within the first year.',
				},
			],
		},
	},
	zh: {
		metadata: {
			title: '申请流程 | KISAS Plus',
			description: '查看 KISAS 韩国艺术留学 10 个月准备路线、8 步申请流程、所需材料、签证说明与韩语零基础入学选择。',
		},
		hero: {
			titleLines: ['10 个月', '通往录取的', '申请路线'],
			description: '从语言学校报名到宿舍入住，以 8 个步骤梳理每一阶段需要完成的关键事项。',
		},
		timeline: {
			titleLines: ['关键节点', '时间线'],
			items: [
				{
					labelLines: ['提前 10', '个月'],
					details: ['语言学校报名', '前期评估'],
					shape: 'star',
				},
				{
					labelLines: ['提前 6', '个月'],
					details: ['大学选择', '作品集'],
					shape: 'star-alt',
				},
				{
					labelLines: ['提前 4', '个月'],
					details: ['提交材料', '参加 TOPIK'],
					shape: 'hexagon',
				},
				{
					labelLines: ['提前 3', '个月'],
					details: ['面试与实技', '录取发表'],
					shape: 'diamond',
				},
				{
					labelLines: ['提前 1', '个月'],
					details: ['D-2 签证', '申请受理'],
					shape: 'rounded-diamond',
				},
				{
					labelLines: ['提前半个', '月'],
					details: ['宿舍抽签', '入境韩国'],
					shape: 'circle',
				},
			],
		},
		process: {
			titleLines: ['8 步', '申请流程'],
			items: [
				{
					number: '01',
					titleLines: ['免费', '咨询'],
					description: '了解学生专业方向、预算与基础条件。',
				},
				{
					number: '02',
					titleLines: ['前期', '评估'],
					description: '从实技、语言和材料完整度判断申请匹配度。',
				},
				{
					number: '03',
					titleLines: ['院校', '选择'],
					description: '匹配重点、特色与地区型院校选择。',
				},
				{
					number: '04',
					titleLines: ['申请', '准备'],
					description: '根据目标院校清单整理申请材料。',
				},
				{
					number: '05',
					titleLines: ['申请', '提交'],
					description: '协助线上追踪与学校系统上传。',
				},
				{
					number: '06',
					titleLines: ['面试与', '实技'],
					description: '准备视频提交或线下面试。',
				},
				{
					number: '07',
					titleLines: ['录取', '与签证'],
					description: 'D-2 签证通常 2-4 周，入学手续通常 3-6 周。',
				},
				{
					number: '08',
					titleLines: ['入学与', '安顿'],
					description: '协助宿舍安排与到达后的适应支持。',
				},
			],
		},
		documents: {
			titleLines: ['13 项申请材料', '半数以上由我们协助准备'],
			commonTitleLines: ['11 项', '通用材料'],
			commonItems: ['申请表', '个人陈述', '学习计划书', '高中毕业证明', '高中成绩单', 'TOPIK 成绩单', '财力证明', '护照复印件', '证件照', '保证书', '推荐信'],
			artTitleLines: ['2 项补充材料', '（艺术专业）'],
			artItems: ['作品集（设计 · 影像 · 音乐录音）', '表演视频（声乐 · 器乐 · 表演）'],
			visaTitleLines: ['D-2', '签证说明'],
			visaProcessingTitle: '办理时间',
			visaProcessingDescription: '标准周期：2-4 周 · 高峰期：3-6 周',
			visaReasonsTitle: '常见拒签原因：',
			visaReasons: ['财力证明不足', '学习目的不清晰', '材料真实性存在疑问'],
			cta: '获取申请支持',
		},
		beginner: {
			titleLines: ['韩语初学者', '也可考虑的', '院校路径'],
			description: '部分院校可接受无 TOPIK 条件录取，学生入境后通过语言学习逐步补足要求。',
			universities: [
				{
					title: 'Tier 1 艺术大学 G',
					description: '可接受无韩语条件录取，入境后 6 个月语言学习与专业课程并行。',
				},
				{
					title: 'Tier 1 艺术大学 D',
					description: '可接受无韩语条件录取，第一年内需取得 TOPIK 3 级。',
				},
			],
		},
	},
} satisfies Record<Locale, ApplyDictionary>;
