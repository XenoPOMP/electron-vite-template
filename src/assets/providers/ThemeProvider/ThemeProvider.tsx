import cn from 'classnames';
import { FC } from 'react';

import { ProviderProps } from '@providers/Provider.props';

import styles from './ThemeProvider.module.scss';

const ThemeProvider: FC<ProviderProps> = ({ children }) => {
	return <div className={cn(styles.themes, styles.dark)}>{children}</div>;
};

export default ThemeProvider;
