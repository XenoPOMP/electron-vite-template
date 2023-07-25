import { PropsWith } from '@xenopomp/advanced-types';

import { motion } from 'framer-motion';
import { FC, useRef } from 'react';

import { DragMenuProps } from './DragMenu.props';

/**
 * Draggable menu.
 *
 * Uses Framer Motion gestures for working. [See documentation](https://www.framer.com/motion/gestures/#drag).
 *
 * @param children
 * @param classNames    constraint and draggable elements class names.
 * @param axis					drag axis. Can be horizontal (x) or vertical (y).
 * @constructor
 */
const DragMenu: FC<PropsWith<'children', DragMenuProps>> = ({
	children,
	classNames,
	axis,
}) => {
	const constraintRef = useRef(null);

	return (
		<motion.div ref={constraintRef} className={classNames?.constraint}>
			<motion.div
				drag={axis}
				dragConstraints={constraintRef}
				dragElastic={0.2}
				className={classNames?.draggable}
			>
				{children}
			</motion.div>
		</motion.div>
	);
};

export default DragMenu;
