import Image from 'next/image';
import type { ComponentProps, ReactNode } from 'react';
import { HomeHeader } from '@/components/home-header';
import { TextLines } from '@/components/text-lines';

type HeroImage = {
	src: string;
	className: string;
	sizes?: string;
};

type SubPageHeroProps = {
	sectionClassName: string;
	innerClassName: string;
	header: ComponentProps<typeof HomeHeader>;
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
	header,
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
				<TextLines className="block" lines={titleLines} />
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
			{backgroundImage ? <Image priority src={backgroundImage.src} alt="" fill className={backgroundImage.className} sizes={backgroundImage.sizes ?? '100vw'} /> : null}
			{overlayClassName ? <div className={overlayClassName} /> : null}
			<HomeHeader {...header} />
			{decorative}

			<div className={`container ${innerClassName}`}>
				{headingClassName ? <div className={headingClassName}>{heading}</div> : heading}
				{description ? <p className={descriptionClassName}>{description}</p> : null}
			</div>
		</section>
	);
}
