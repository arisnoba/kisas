'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import type { StudentLifeDictionary } from '@/i18n/pages/student-life';

type ActivityImage = StudentLifeDictionary['activities']['images'][number];

type StudentLifeActivityMarqueeProps = {
	images: ActivityImage[];
};

export function StudentLifeActivityMarquee({ images }: StudentLifeActivityMarqueeProps) {
	const viewportRef = useRef<HTMLDivElement>(null);
	const trackRef = useRef<HTMLDivElement>(null);
	const groupRef = useRef<HTMLDivElement>(null);
	const isHoveringRef = useRef(false);

	useEffect(() => {
		const viewport = viewportRef.current;
		const track = trackRef.current;
		const group = groupRef.current;

		if (!viewport || !track || !group) {
			return;
		}

		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			return;
		}

		let frameId = 0;
		let offset = 0;
		let speed = 44;
		let previousTime = performance.now();

		const getLoopDistance = () => {
			const styles = window.getComputedStyle(track);
			const gap = Number.parseFloat(styles.columnGap || styles.gap || '0');

			return group.getBoundingClientRect().width + (Number.isFinite(gap) ? gap : 0);
		};

		const animate = (time: number) => {
			const deltaSeconds = Math.min((time - previousTime) / 1000, 0.05);
			previousTime = time;

			const targetSpeed = isHoveringRef.current ? 13 : 44;
			speed += (targetSpeed - speed) * Math.min(deltaSeconds * 7, 1);

			const loopDistance = getLoopDistance();
			if (loopDistance > 0) {
				offset = (offset + speed * deltaSeconds) % loopDistance;
				track.style.transform = `translate3d(${-offset}px, 0, 0)`;
			}

			frameId = window.requestAnimationFrame(animate);
		};

		const handlePointerEnter = () => {
			isHoveringRef.current = true;
		};

		const handlePointerLeave = () => {
			isHoveringRef.current = false;
		};

		viewport.addEventListener('pointerenter', handlePointerEnter);
		viewport.addEventListener('pointerleave', handlePointerLeave);
		frameId = window.requestAnimationFrame(animate);

		return () => {
			viewport.removeEventListener('pointerenter', handlePointerEnter);
			viewport.removeEventListener('pointerleave', handlePointerLeave);
			window.cancelAnimationFrame(frameId);
		};
	}, []);

	return (
		<div className="student-life-activity-marquee" ref={viewportRef} aria-label="Student work and activity photos">
			<div className="student-life-activity-track" ref={trackRef}>
				{[0, 1, 2].map(groupIndex => (
					<div className="student-life-activity-group" ref={groupIndex === 0 ? groupRef : undefined} key={groupIndex} aria-hidden={groupIndex > 0}>
						{images.map((image, index) => (
							<div className={`student-life-activity-frame student-life-activity-frame-${image.variant}`} key={`${groupIndex}-${image.src}-${index}`}>
								<Image src={image.src} alt={groupIndex === 0 ? image.alt : ''} fill sizes="(min-width: 1101px) 450px, 75vw" />
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}
