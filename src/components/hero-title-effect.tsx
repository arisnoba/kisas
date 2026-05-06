'use client';

import { TextEffect } from '@/components/ui/text-effect';
import type { Variants } from 'framer-motion';

type HeroTitleEffectProps = {
	className?: string;
	delay?: number;
	lines: string[];
};

const heroTitleVariants: { container: Variants; item: Variants } = {
	container: {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.24 },
		},
	},
	item: {
		hidden: {
			opacity: 0,
			filter: 'blur(8px)',
			y: 54,
		},
		visible: {
			opacity: 1,
			filter: 'blur(0px)',
			y: 0,
			transition: {
				duration: 0.82,
				ease: [0.16, 1, 0.3, 1],
			},
		},
	},
};

export function HeroTitleEffect({ className, delay = 0.12, lines }: HeroTitleEffectProps) {
	return (
		<TextEffect as="span" className={className} delay={delay} per="line" segmentWrapperClassName="block overflow-hidden" variants={heroTitleVariants}>
			{lines.join('\n')}
		</TextEffect>
	);
}
