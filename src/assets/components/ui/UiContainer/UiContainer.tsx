import { PropsWith } from '@xenopomp/advanced-types';

import cn from 'classnames';
import { FC } from 'react';

import styles from './UiContainer.module.scss';
import type { UiContainerProps } from './UiContainer.props';

interface IUiContainerNestedProps
	extends PropsWith<'className' | 'children' | 'id', UiContainerProps> {}

/**
 * UI container with maximum width.
 *
 * @param children
 * @param className
 * @param id
 * @constructor
 */
const UiContainer: FC<IUiContainerNestedProps> & {
	Section: FC<IUiContainerNestedProps>;
	Article: FC<IUiContainerNestedProps>;
	Header: FC<IUiContainerNestedProps>;
} = ({ children, className, id }) => {
	return (
		<div id={id} className={cn(styles.container, className)}>
			{children}
		</div>
	);
};

UiContainer.Section = ({ children, className, id }) => (
	<section id={id} className={cn(styles.container, className)}>
		{children}
	</section>
);
UiContainer.Article = ({ children, className, id }) => (
	<article id={id} className={cn(styles.container, className)}>
		{children}
	</article>
);
UiContainer.Header = ({ children, className, id }) => (
	<header id={id} className={cn(styles.container, className)}>
		{children}
	</header>
);

export default UiContainer;
