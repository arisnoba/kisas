'use client';

import { motion, useInView, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import type { MajorCareerDictionary } from '@/i18n/pages/majors-career';

type CareerDistributionDonutProps = {
	centerLines: string[];
	items: MajorCareerDictionary['outcomes']['distributionItems'];
};

type CareerSalaryBarProps = {
	className?: string;
	delay?: number;
	percent: number;
	value: string;
};

const segmentColors = {
	cyan: '#1dafee',
	lime: '#a4ea00',
	blue: '#2760a2',
};

const segmentPercents = [73, 15, 12];
const donutSegmentDelay = 0.18;
const donutSegmentDuration = 0.8;

function easeOutQuart(value: number) {
	return 1 - Math.pow(1 - value, 4);
}

function CareerDistributionNumber({ duration, isInView, shouldReduceMotion, value }: { duration: number; isInView: boolean; shouldReduceMotion: boolean; value: number }) {
	const [displayValue, setDisplayValue] = useState(0);

	useEffect(() => {
		if (!isInView || shouldReduceMotion) {
			return;
		}

		let animationFrame = 0;
		const startedAt = performance.now();
		const durationMs = duration * 1000;

		const tick = (now: number) => {
			const progress = Math.min((now - startedAt) / durationMs, 1);
			setDisplayValue(Math.round(value * easeOutQuart(progress)));

			if (progress < 1) {
				animationFrame = requestAnimationFrame(tick);
			}
		};

		animationFrame = requestAnimationFrame(tick);

		return () => {
			cancelAnimationFrame(animationFrame);
		};
	}, [duration, isInView, shouldReduceMotion, value]);

	const renderedValue = shouldReduceMotion ? value : displayValue;

	return (
		<strong aria-label={`${value}%`} className="majors-career-donut-number">
			{renderedValue}%
		</strong>
	);
}

export function CareerDistributionDonut({ centerLines, items }: CareerDistributionDonutProps) {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
	const shouldReduceMotion = useReducedMotion();
	const radius = 86;
	const circumference = 2 * Math.PI * radius;
	const donutDuration = donutSegmentDuration + donutSegmentDelay * Math.max(items.length - 1, 0);
	const segments = items.map((item, index) => {
		const dash = (segmentPercents[index] / 100) * circumference;
		const offset = segmentPercents.slice(0, index).reduce((sum, percent) => sum + (percent / 100) * circumference, 0);

		return { dash, item, offset };
	});

	return (
		<div className="majors-career-donut" ref={ref}>
			<svg aria-hidden="true" className="majors-career-donut-svg" viewBox="0 0 220 220">
				<circle className="majors-career-donut-track" cx="110" cy="110" r={radius} />
				{segments.map(({ dash, item, offset }, index) => {
					return (
						<motion.circle
							animate={{ strokeDasharray: isInView || shouldReduceMotion ? `${dash} ${circumference - dash}` : `0 ${circumference}` }}
							className="majors-career-donut-segment"
							cx="110"
							cy="110"
							initial={{ strokeDasharray: `0 ${circumference}` }}
							key={item.label}
							r={radius}
							stroke={segmentColors[item.color]}
							strokeDashoffset={-offset}
							transition={{ delay: shouldReduceMotion ? 0 : index * donutSegmentDelay, duration: shouldReduceMotion ? 0 : donutSegmentDuration, ease: [0.22, 1, 0.36, 1] }}
						/>
					);
				})}
			</svg>
			<motion.div
				animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.94 }}
				className="majors-career-donut-center"
				initial={{ opacity: 0, scale: 0.94 }}
				transition={{ delay: 0, duration: shouldReduceMotion ? 0 : 0.24 }}>
				<CareerDistributionNumber duration={donutDuration} isInView={isInView} shouldReduceMotion={Boolean(shouldReduceMotion)} value={100} />
				<span>{centerLines.slice(1).join(' ')}</span>
			</motion.div>
		</div>
	);
}

export function CareerSalaryBar({ className = '', delay = 0, percent, value }: CareerSalaryBarProps) {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
	const shouldReduceMotion = useReducedMotion();
	const targetWidth = `${Math.max(percent, 32)}%`;

	return (
		<motion.div
			animate={{ width: isInView || shouldReduceMotion ? targetWidth : '0%' }}
			className={`majors-career-salary-bar ${className}`}
			initial={{ width: '0%' }}
			ref={ref}
			transition={{ delay: shouldReduceMotion ? 0 : delay, duration: shouldReduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}>
			<motion.span animate={{ opacity: isInView ? 1 : 0 }} initial={{ opacity: 0 }} transition={{ delay: shouldReduceMotion ? 0 : delay + 0.35, duration: shouldReduceMotion ? 0 : 0.35 }}>
				{value}
			</motion.span>
		</motion.div>
	);
}
