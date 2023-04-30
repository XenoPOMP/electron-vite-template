import cn from 'classnames';
import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Layout from '@components/Layout/Layout';
import Page from '@components/Page/Page';

import useAppSettings from '@hooks/useAppSettings';
import useLocalization from '@hooks/useLocalization';

import styles from './MainPage.module.scss';
import type { MainPageProps } from './MainPage.props';

const MainPage: FC<MainPageProps> = ({}) => {
	const loc = useLocalization();
	const { language } = useAppSettings();

	return (
		<Page meta={loc.meta.mainPage}>
			<button onClick={() => language.set('ru')}>Switch to russian</button>
			<button onClick={() => language.set('en')}>Switch to english</button>

			<h1>{loc.pages.main.label}</h1>
		</Page>
	);
};

export default MainPage;
