import { createSlice } from '@reduxjs/toolkit';

import { ReduxAction } from '@redux/types/redux-types';

export type Language = 'en' | 'ru';

export type AppSettings = {
	appVersion: string;
	language: Language;
};

const initialState: AppSettings = {
	appVersion: '1.1.0',
	language: 'en',
};

const appSettingsSlice = createSlice({
	name: 'appSettings',
	initialState,
	reducers: {
		changeLang(state, action: ReduxAction<any>) {
			state.language = action.payload;
		},
	},
});

export default appSettingsSlice.reducer;
export const { changeLang } = appSettingsSlice.actions;
export const initialAppSettings = appSettingsSlice.getInitialState();
