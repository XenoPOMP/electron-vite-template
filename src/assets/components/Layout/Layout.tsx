import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';

import styles from './Layout.module.scss';
import type { LayoutProps } from './Layout.props';

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
	return <div>{children}</div>;
};

export default Layout;
