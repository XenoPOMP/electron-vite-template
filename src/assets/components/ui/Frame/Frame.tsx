import cn from 'classnames';
import { FC } from 'react';

import ControlButton from '@ui/Frame/ControlButton/ControlButton';

import useAppSettings from '@hooks/useAppSettings';

import styles from './Frame.module.scss';
import type { FrameProps } from './Frame.props';

/**
 * Application frame with traffic lights.
 *
 * @constructor
 */
const Frame: FC<FrameProps> = ({}) => {
	const { appName } = useAppSettings();

	return (
		<header className={cn(styles.appFrame)}>
			<div>{appName.get()}</div>

			<div className={cn(styles.trafficLights)}>
				<ControlButton action={'minimize'} />

				<ControlButton action={'maximize'} />

				<ControlButton action={'close'} />
			</div>
		</header>
	);
};

export default Frame;
