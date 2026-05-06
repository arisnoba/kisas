import { ChevronRight } from 'lucide-react';
import type { ComponentProps } from 'react';
import { KisasButton } from '@/components/ui/kisas-button';

type ArrowButtonProps = Omit<ComponentProps<typeof KisasButton>, 'icon'>;

export function ArrowButton({ size = 'md', ...props }: ArrowButtonProps) {
	const iconSize = size === 'nav' ? 16 : 18;

	return <KisasButton size={size} icon={<ChevronRight aria-hidden="true" size={iconSize} strokeWidth={1.8} />} {...props} />;
}
