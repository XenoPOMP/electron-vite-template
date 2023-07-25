import { PropsWith } from '@xenopomp/advanced-types';

import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';

import styles from './Portal.module.scss';
import type { PortalProps } from './Portal.props';

/**
 * Portal component.
 *
 * Portal can render or can not render according to **enabled** state.
 *
 * @param children
 * @param enabled					defines whether Portal is "opened".
 * @constructor
 */
const Portal: FC<PropsWith<'children', PortalProps>> = ({
	children,
	enabled,
}) => {
	return <>{enabled && <>{children}</>}</>;
};

export default Portal;
