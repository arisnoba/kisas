import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import type { ReactNode } from 'react';
import { HeroTitleEffect } from '@/components/hero-title-effect';
import { TextLines } from '@/components/text-lines';

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
					priority
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
				{description ? <p className={descriptionClassName}>{description}</p> : null}
			</div>
		</section>
	);
}
