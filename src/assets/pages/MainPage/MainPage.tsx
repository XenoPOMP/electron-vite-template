import cn from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import Layout from '@components/Layout/Layout';

import styles from './MainPage.module.scss';
import type { MainPageProps } from './MainPage.props';

const MainPage: FC<MainPageProps> = ({}) => {
	return <Layout></Layout>;
};

export default MainPage;
