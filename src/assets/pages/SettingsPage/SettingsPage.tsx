import cn from 'classnames';
import { FC } from 'react';

import Layout from '@components/Layout/Layout';

import styles from './SettingsPage.module.scss';
import type { SettingsPageProps } from './SettingsPage.props';

const SettingsPage: FC<SettingsPageProps> = ({}) => {
	return <Layout>Settings</Layout>;
};

export default SettingsPage;
