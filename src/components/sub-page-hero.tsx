import Image from 'next/image';
import type { ReactNode } from 'react';
import { HeroTitleEffect } from '@/components/hero-title-effect';
import { TextLines } from '@/components/text-lines';

type HeroImage = {
	src: string;
	className: string;
	backgroundPosition?: string;
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
	const heading = (
		<>
			<h1>
				<HeroTitleEffect lines={titleLines} />
			</h1>
			{subtitleLines ? (
				<p>
					<TextLines className="block" lines={subtitleLines} />
				</p>
			) : null}
		</>
	);

	return (
		<section className={sectionClassName}>
			{backgroundImage ? (
				<Image
					alt=""
					aria-hidden="true"
					className={`subpage-hero-background ${backgroundImage.className}`}
					fill
					priority
					sizes="100vw"
					src={backgroundImage.src}
					style={{
						objectFit: 'cover',
						objectPosition: 'center center',
					}}
				/>
			) : null}
			{overlayClassName ? <div className={overlayClassName} /> : null}
			{decorative}

			<div className={`container subpage-hero ${innerClassName}`}>
				{headingClassName ? <div className={headingClassName}>{heading}</div> : heading}
				{description ? <p className={descriptionClassName}>{description}</p> : null}
			</div>
		</section>
	);
}
