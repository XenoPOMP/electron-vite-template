import { useDispatch, useSelector } from 'react-redux';

import {
	AppSettings,
	Language,
	changeLang,
} from '@redux/reducers/appSettingsSlice';
import IStore from '@redux/types/redux-types';

interface SettingController<T> {
	get: () => T;
	set: (newValue: T) => void;
}

type AppSettingsAnnotation = {
	[set in keyof Pick<AppSettings, 'appVersion' | 'language' | 'appName'>]: any;
};

interface IUseAppSettings extends AppSettingsAnnotation {
	appVersion: Omit<SettingController<string>, 'set'>;
	language: SettingController<Language>;
	appName: Omit<SettingController<string>, 'set'>;
}

const useAppSettings = (): IUseAppSettings => {
	const dispatch = useDispatch();

	return {
		appVersion: {
			get: () => useSelector((state: IStore) => state.appSettings.appVersion),
		},

		language: {
			get: () => useSelector((state: IStore) => state.appSettings.language),
			set: newValue => dispatch(changeLang(newValue)),
		},

		appName: {
			get: () => useSelector((state: IStore) => state.appSettings.appName),
		},
	};
};

export default useAppSettings;
