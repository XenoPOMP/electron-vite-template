import cn from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import Layout from '@components/Layout/Layout';
import Page from '@components/Page/Page';

import styles from './MainPage.module.scss';
import type { MainPageProps } from './MainPage.props';

const MainPage: FC<MainPageProps> = ({}) => {
	return (
		<Page
			meta={{
				pageTitle: 'Main',
				pageDescription: '',
				keywords: '',
			}}
		></Page>
	);
};

export default MainPage;
