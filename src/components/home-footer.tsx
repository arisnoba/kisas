import Image from 'next/image';
import Link from 'next/link';
import { TextLines } from '@/components/text-lines';
import type { HomeDictionary } from '@/i18n/pages/home';

type HomeFooterProps = {
	footer: HomeDictionary['footer'];
	logo: string;
};

export function HomeFooter({ footer, logo }: HomeFooterProps) {
	return (
		<footer className="home-footer grid grid-cols-1 gap-12 bg-[#1e1e1e] min-[1101px]:grid-cols-[minmax(280px,383px)_minmax(320px,415px)_minmax(240px,374px)] min-[1101px]:items-start min-[1101px]:gap-[52px] min-[1440px]:gap-[120px]">
			<div className="home-footer-brand flex w-full max-w-[383px] items-center gap-[18px]">
				<Image src={logo} alt="KISAS" width={177} height={55} />
				<p>
					International
					<br />
					Art Study Center
				</p>
			</div>

			<div className="flex w-full max-w-[415px] flex-col gap-4 min-[1101px]:py-2">
				<nav className="home-footer-links flex flex-wrap items-center gap-4" aria-label="Footer navigation">
					{footer.links.map(link => (
						<Link href={link.href} key={link.label}>
							{link.label}
						</Link>
					))}
				</nav>
				<p className="home-footer-organization">
					<TextLines className="block" lines={footer.organizationLines} />
				</p>
			</div>

			<p className="home-footer-copyright min-[1101px]:py-2">{footer.copyright}</p>
		</footer>
	);
}
