"use client";

import Link from 'next/link';
import type { ButtonHTMLAttributes, CSSProperties, MouseEventHandler, ReactNode, Ref } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type KisasButtonVariant = 'solid' | 'light' | 'outline' | 'header' | 'locale' | 'mobile-solid' | 'mobile-outline';
type KisasButtonSize = 'md' | 'nav' | 'mobile';
type KisasButtonShape = 'hex' | 'rect';

type KisasButtonProps = {
	children: ReactNode;
	className?: string;
	href?: string;
	icon?: ReactNode;
	onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
	shape?: KisasButtonShape;
	size?: KisasButtonSize;
	type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
	variant?: KisasButtonVariant;
};

const fallbackBox = {
	width: 220,
	height: 54,
};

function getButtonEdge(height: number) {
	return Math.round(Math.min(20, Math.max(14, height * 0.34)));
}

function getFramePath(width: number, height: number, shape: KisasButtonShape) {
	const strokeInset = 1;
	const right = Math.max(strokeInset, width - strokeInset);
	const bottom = Math.max(strokeInset, height - strokeInset);

	if (shape === 'rect') {
		return `M ${strokeInset} ${strokeInset} L ${right} ${strokeInset} L ${right} ${strokeInset} L ${right} ${bottom} L ${strokeInset} ${bottom} L ${strokeInset} ${bottom} Z`;
	}

	const edge = getButtonEdge(height);
	const centerY = height / 2;

	return `M ${edge} ${strokeInset} L ${width - edge} ${strokeInset} L ${right} ${centerY} L ${width - edge} ${bottom} L ${edge} ${bottom} L ${strokeInset} ${centerY} Z`;
}

export function KisasButton({ children, className, href, icon, onClick, shape = 'hex', size = 'md', type = 'button', variant = 'solid' }: KisasButtonProps) {
	const rootRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
	const [box, setBox] = useState(fallbackBox);
	const [isActive, setIsActive] = useState(false);
	const buttonClassName = cn('kisas-button', `kisas-button-${shape}`, `kisas-button-${variant}`, `kisas-button-${size}`, className);
	const frameShape = isActive ? 'rect' : shape;
	const framePath = useMemo(() => getFramePath(box.width, box.height, frameShape), [box.height, box.width, frameShape]);
	const frameStyle = { d: `path("${framePath}")` } as CSSProperties;
	const handleActivate = () => setIsActive(true);
	const handleDeactivate = () => setIsActive(false);

	useEffect(() => {
		const root = rootRef.current;

		if (!root) {
			return;
		}

		const updateBox = () => {
			const rect = root.getBoundingClientRect();

			setBox({
				width: Math.max(1, rect.width),
				height: Math.max(1, rect.height),
			});
		};
		const observer = new ResizeObserver(updateBox);

		updateBox();
		observer.observe(root);

		return () => {
			observer.disconnect();
		};
	}, []);

	const content = (
		<>
			<span className="kisas-button-content">
				<span>{children}</span>
				{icon ? <span className="kisas-button-icon">{icon}</span> : null}
			</span>
			<svg aria-hidden="true" className="kisas-button-frame" focusable="false" preserveAspectRatio="none" viewBox={`0 0 ${box.width} ${box.height}`}>
				<path className="kisas-button-background-shape" d={framePath} style={frameStyle} />
				<path className="kisas-button-frame-shape" d={framePath} style={frameStyle} />
			</svg>
		</>
	);

	if (href) {
		return (
			<Link
				className={buttonClassName}
				href={href}
				onBlur={handleDeactivate}
				onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
				onFocus={handleActivate}
				onMouseEnter={handleActivate}
				onMouseLeave={handleDeactivate}
				ref={rootRef as Ref<HTMLAnchorElement>}
			>
				{content}
			</Link>
		);
	}

	return (
		<button
			className={buttonClassName}
			onBlur={handleDeactivate}
			onClick={onClick as MouseEventHandler<HTMLButtonElement>}
			onFocus={handleActivate}
			onMouseEnter={handleActivate}
			onMouseLeave={handleDeactivate}
			ref={rootRef as Ref<HTMLButtonElement>}
			type={type}
		>
			{content}
		</button>
	);
}
