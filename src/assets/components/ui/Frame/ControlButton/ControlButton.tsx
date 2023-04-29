import cn from 'classnames';
import { ipcRenderer } from 'electron';
import { FC } from 'react';

import styles from './ControlButton.module.scss';
import type { ControlButtonProps } from './ControlButton.props';

const ControlButton: FC<ControlButtonProps> = ({ action }) => {
	const Content: FC<unknown> = () => {
		switch (action) {
			case 'minimize':
				return <>_</>;
			case 'close':
				return <>x</>;
		}
	};

	const ipcActions: {
		[key in typeof action]: string;
	} = {
		minimize: 'minimize_app',
		close: 'close_app',
	};

	return (
		<div
			className={cn(styles.button)}
			onClick={() => ipcRenderer.send(ipcActions[action])}
		>
			<Content />
		</div>
	);
};

export default ControlButton;
