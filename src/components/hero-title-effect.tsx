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
			transition: { staggerChildren: 0.16 },
		},
	},
	item: {
		hidden: {
			opacity: 0,
			y: 42,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.48,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	},
};

export function HeroTitleEffect({ className, delay = 0.05, lines }: HeroTitleEffectProps) {
	return (
		<TextEffect
			as="span"
			className={className}
			delay={delay}
			per="line"
			segmentWrapperClassName="block overflow-hidden"
			variants={heroTitleVariants}>
			{lines.join('\n')}
		</TextEffect>
	);
}
