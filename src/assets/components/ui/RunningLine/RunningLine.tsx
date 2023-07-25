import { PropsWith } from '@xenopomp/advanced-types';

import cn from 'classnames';
import { FC } from 'react';

import styles from './RunningLine.module.scss';
import { RunningLineProps } from './RunningLine.props';

/**
 * Running line component.
 *
 * It utilizes html marquee tag.
 *
 * <hr/>
 *
 * **Options**
 *
 * 1. behavior: 'scroll' (DEFAULT) | 'slide' | 'alternate'.
 * 2. direction: 'left' (DEFAULT) | 'right' | 'up' | 'down'
 * 3. loop: boolean
 * 4. scrollSpeed: number
 * 5. scrollDelay: number
 * 6. verticalAlign: boolean
 *
 * @param props
 * @constructor
 */
const RunningLine: FC<
	PropsWith<'className' | 'style' | 'children', RunningLineProps>
> = props => {
	const defaultProps: typeof props = {
		behavior: 'scroll',
		direction: 'left',
		loop: false,
		scrollSpeed: 6,
		scrollDelay: 85,
		verticalAlign: false,
		...props,
	};

	const {
		behavior,
		direction,
		loop,
		scrollSpeed,
		scrollDelay,
		style,
		className,
		verticalAlign,
		children,
	} = defaultProps;

	return (
		// @ts-ignore
		<marquee
			behavior={behavior}
			direction={direction}
			loop={loop}
			scrollamount={scrollSpeed}
			scrolldelay={scrollDelay}
			style={style}
			className={cn(
				className,
				styles.runningLine,
				verticalAlign ? styles.vAlign : ''
			)}
		>
			{children}
			{/*
      // @ts-ignore */}
		</marquee>
	);
};

export default RunningLine;
