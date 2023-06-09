import { FC, Suspense, lazy } from 'react';

import type { LazyComponentProps } from './LazyComponent.props';

/**
 * Lazy-loading component.
 *
 * This component allows you to use React`s 17-18 big feature: concurrent mode.
 *
 * @param element						loading element.
 * @param fallback				  fallback element (will be shown while main element will be loading).
 * @constructor
 */
const LazyComponent: FC<LazyComponentProps> = ({ element, fallback }) => {
	const LazyElement = lazy(element);

	return (
		<Suspense fallback={fallback}>
			<LazyElement />
		</Suspense>
	);
};

export default LazyComponent;
