type TextLinesProps = {
	lines: string[];
	className?: string;
};

export function TextLines({ lines, className }: TextLinesProps) {
	return (
		<>
			{lines.map((line, index) => (
				<span className={className} key={`${line}-${index}`}>
					{line}
				</span>
			))}
		</>
	);
}
