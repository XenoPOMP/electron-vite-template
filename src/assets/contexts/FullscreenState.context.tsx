import { PropsWith } from '@xenopomp/advanced-types';

import { ipcRenderer } from 'electron';
import { FC, createContext, useEffect, useRef } from 'react';

import useBoolean from '@hooks/useBoolean';

import { isUndefined } from '@utils/type-checks';

import IpcRenderer = Electron.IpcRenderer;

/** Contains **boolean** value of fullscreen state (is fullscreen, not fullscreen). */
export const FullscreenStateContext = createContext<boolean>(false);

/**
 * Optimizes fullscreen state grabbing. Produce no memory leaks.
 *
 * @param children
 * @constructor
 */
const FullscreenStateProvider: FC<PropsWith<'children', {}>> = ({
	children,
}) => {
	/** Store fullscreen state locally. */
	const [isFullscreen, _t, setFullscreen] = useBoolean(false);
	/** Listener ref object. */
	const listener = useRef<IpcRenderer | undefined>(undefined);

	/** Store fullscreen state locally. */
	useEffect(() => {
		/** If listener is already exists, skip. */
		if (isUndefined(listener)) {
			return;
		}

		/** Set ref to listener. */
		listener.current = ipcRenderer.on('get_fullscreen_status', (_, arg) => {
			setFullscreen(arg);
		});
	});

	return (
		<FullscreenStateContext.Provider value={isFullscreen}>
			{children}
		</FullscreenStateContext.Provider>
	);
};

export default FullscreenStateProvider;
