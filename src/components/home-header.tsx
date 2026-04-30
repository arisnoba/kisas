"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { KisasButton } from '@/components/ui/kisas-button';
import type { HomeDictionary } from '@/i18n/pages/home';
import type { Locale } from '@/i18n/config';

type HomeHeaderProps = {
	logo: string;
	nav: HomeDictionary['nav'];
	locale: Locale;
};

export function HomeHeader({ logo, nav, locale }: HomeHeaderProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [hasScrolled, setHasScrolled] = useState(false);
	const homeHref = locale === 'zh' ? '/zh' : '/';
	const consultationHref = locale === 'zh' ? '/zh/apply' : '/apply';

	useEffect(() => {
		const handleScroll = () => {
			setHasScrolled(window.scrollY > 0);
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		document.body.classList.toggle('home-menu-open', isMenuOpen);

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setIsMenuOpen(false);
			}
		};

		if (isMenuOpen) {
			window.addEventListener('keydown', handleKeyDown);
		}

		return () => {
			document.body.classList.remove('home-menu-open');
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [isMenuOpen]);

	const closeMenu = () => setIsMenuOpen(false);

	return (
		<header
			className={`home-header fixed inset-x-0 top-0 z-50 grid grid-cols-[minmax(170px,1fr)_auto] items-center gap-4 px-5 py-4 min-[1101px]:grid-cols-[minmax(190px,1fr)_auto_minmax(190px,1fr)] min-[1101px]:gap-6 min-[1101px]:px-10 min-[1101px]:py-5 ${
				hasScrolled ? 'home-header-scrolled' : ''
			}`}
		>
			<Link className="home-brand relative z-10 flex items-center gap-4" href={homeHref} onClick={closeMenu}>
				<Image src={logo} alt="KISAS" width={156} height={48} />
				<span className="hidden min-[721px]:inline">
					International
					<br />
					Art Study Center
				</span>
			</Link>

			<nav className="home-nav relative z-10 hidden items-center gap-[clamp(24px,4.16vw,80px)] min-[1101px]:flex" aria-label="Primary navigation">
				{nav.links.map(link => (
					<Link href={link.href} key={link.label}>
						{link.label}
					</Link>
				))}
			</nav>

			<div className="home-header-actions relative z-10 hidden items-center justify-end gap-3 min-[1101px]:flex">
				<KisasButton href={consultationHref} shape="rect" size="nav" variant="header">
					{nav.consultation}
				</KisasButton>
				<KisasButton href={nav.localeSwitch.href} shape="rect" size="nav" variant="locale">
					{nav.localeSwitch.label}
				</KisasButton>
			</div>

			<button
				aria-controls="home-mobile-menu"
				aria-expanded={isMenuOpen}
				aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				className="home-menu-button relative z-10 ml-auto inline-flex size-11 items-center justify-center min-[1101px]:hidden"
				onClick={() => setIsMenuOpen(current => !current)}
				type="button"
			>
				{isMenuOpen ? <X aria-hidden="true" size={24} strokeWidth={1.8} /> : <Menu aria-hidden="true" size={24} strokeWidth={1.8} />}
			</button>

			{isMenuOpen ? (
				<div className="home-mobile-menu fixed inset-0 z-0 flex flex-col justify-between px-6 pb-8 pt-28 min-[1101px]:hidden" id="home-mobile-menu">
					<nav className="flex flex-col gap-5" aria-label="Mobile navigation">
						{nav.links.map(link => (
							<Link className="home-mobile-nav-link" href={link.href} key={link.label} onClick={closeMenu}>
								{link.label}
							</Link>
						))}
					</nav>

					<div className="flex flex-col gap-3">
						<KisasButton href={consultationHref} onClick={closeMenu} shape="rect" size="mobile" variant="mobile-solid">
							{nav.consultation}
						</KisasButton>
						<KisasButton href={nav.localeSwitch.href} onClick={closeMenu} shape="rect" size="mobile" variant="mobile-outline">
							{nav.localeSwitch.label}
						</KisasButton>
					</div>
				</div>
			) : null}
		</header>
	);
}
