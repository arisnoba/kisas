import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import type { ReactNode } from 'react';
import { HeroTitleEffect } from '@/components/hero-title-effect';
import { TextLines } from '@/components/text-lines';
import { BlurFade } from '@/components/ui/blur-fade';

type HeroImage = {
	src: string | StaticImageData;
	className: string;
	backgroundPosition?: string;
	blurDataURL?: string;
};

type SubPageHeroProps = {
	sectionClassName: string;
	innerClassName: string;
	titleLines: string[];
	backgroundImage?: HeroImage;
	decorative?: ReactNode;
	description?: string;
	descriptionClassName?: string;
	headingClassName?: string;
	overlayClassName?: string;
	subtitleLines?: string[];
};

export function SubPageHero({
	sectionClassName,
	innerClassName,
	titleLines,
	backgroundImage,
	decorative,
	description,
	descriptionClassName,
	headingClassName,
	overlayClassName,
	subtitleLines,
}: SubPageHeroProps) {
	const supportingCopyDelay = Math.min(0.72, 0.22 + titleLines.length * 0.12);
	const heading = (
		<>
			<h1>
				<HeroTitleEffect lines={titleLines} />
			</h1>
			{subtitleLines ? (
				<BlurFade as="p" delay={supportingCopyDelay} direction="up" duration={0.72} offset={18} blur="8px">
					<TextLines className="block" lines={subtitleLines} />
				</BlurFade>
			) : null}
		</>
	);
	const blurDataURL = backgroundImage?.blurDataURL ?? (typeof backgroundImage?.src === 'string' ? undefined : backgroundImage?.src.blurDataURL);

	return (
		<section className={sectionClassName}>
			{backgroundImage ? (
				<Image
					alt=""
					aria-hidden="true"
					className={`subpage-hero-background ${backgroundImage.className}`}
					fill
					placeholder={blurDataURL ? 'blur' : 'empty'}
					blurDataURL={blurDataURL}
					preload
					sizes="100vw"
					src={backgroundImage.src}
					style={{
						objectFit: 'cover',
						objectPosition: backgroundImage.backgroundPosition ?? 'center center',
					}}
				/>
			) : null}
			{overlayClassName ? <div className={overlayClassName} /> : null}
			{decorative}

			<div className={`container subpage-hero ${innerClassName}`}>
				{headingClassName ? <div className={headingClassName}>{heading}</div> : heading}
				{description ? (
					<BlurFade as="p" className={descriptionClassName} delay={supportingCopyDelay + (subtitleLines ? 0.14 : 0)} direction="up" duration={0.72} offset={18} blur="8px">
						{description}
					</BlurFade>
				) : null}
			</div>
		</section>
	);
}
