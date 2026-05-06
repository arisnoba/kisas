'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { NumberTicker } from '@/components/ui/number-ticker';

type TuitionComparisonBarProps = {
	className?: string;
	delay?: number;
	percent: number;
	value: string;
};

type TuitionPaybackNumberProps = {
	value: string;
};

function getDecimalPlaces(value: string) {
	const decimalPart = value.split('.')[1];

	return decimalPart ? decimalPart.length : 0;
}

export function TuitionComparisonBar({ className = '', delay = 0, percent, value }: TuitionComparisonBarProps) {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
	const targetWidth = `${Math.max(percent, 25)}%`;

	return (
		<motion.div
			animate={{ width: isInView ? targetWidth : '0%' }}
			className={`tuition-comparison-bar ${className}`}
			initial={{ width: '0%' }}
			ref={ref}
			transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
			<motion.span animate={{ opacity: isInView ? 1 : 0 }} initial={{ opacity: 0 }} transition={{ delay: delay + 0.35, duration: 0.35 }}>
				{value}
			</motion.span>
		</motion.div>
	);
}

export function TuitionPaybackNumber({ value }: TuitionPaybackNumberProps) {
	const numericValue = Number(value);

	if (Number.isNaN(numericValue)) {
		return <span>{value}</span>;
	}

	return <NumberTicker aria-label={value} className="tuition-payback-number" decimalPlaces={getDecimalPlaces(value)} value={numericValue} />;
}
