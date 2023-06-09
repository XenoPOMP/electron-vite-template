import { CSSProperties } from 'react';

export type PropsWithClassnames<P extends any> = P & {
	className?: string;
};
