const path = require('path');

const editFile = require('edit-file');

const packageJsonPath = path.join(__dirname, '../../package.json');
const slicePath = path.join(
	__dirname,
	'../../src/assets/redux/reducers/appSettingsSlice.ts'
);

// @ts-ignore
const packageVersion = require(packageJsonPath).version;

// Edit app settings slice.
// Update app version.
editFile(slicePath, (text: string) => {
	const output = text.replace(
		/appVersion: '.*'/gi,
		`appVersion: '${packageVersion}'`
	);

	return output;
});
