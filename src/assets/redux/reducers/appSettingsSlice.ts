import { createSlice } from '@reduxjs/toolkit';

import { ReduxAction } from '@redux/types/redux-types';

export type Language = 'en' | 'ru';

export type AppSettings = {
	appVersion: string;
	appName: string;
	language: Language;
	cookiePrefix: string;
};

const initialState: AppSettings = {
	appVersion: '1.2.0',
	appName: 'Electron Vite Application',
	language: 'en',
	cookiePrefix: 'application',
};

const appSettingsSlice = createSlice({
	name: 'appSettings',
	initialState,
	reducers: {
		loadAppSettings(state, action: ReduxAction<AppSettings>) {
			state.language = action.payload.language;
		},

		changeLang(state, action: ReduxAction<any>) {
			state.language = action.payload;
		},
	},
});

export default appSettingsSlice.reducer;
export const { changeLang, loadAppSettings } = appSettingsSlice.actions;
export const initialAppSettings = appSettingsSlice.getInitialState();
