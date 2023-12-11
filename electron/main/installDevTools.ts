import installExtension, {
	REACT_DEVELOPER_TOOLS,
	REDUX_DEVTOOLS,
} from 'electron-devtools-installer';

/**
 * Install developer extensions.
 */
export const installDevExtensions = async () => {
	const forceDownload = false;

	const extensions: Array<typeof REACT_DEVELOPER_TOOLS> = [
		REACT_DEVELOPER_TOOLS,
		REDUX_DEVTOOLS,
	];

	extensions.map(ext => {
		installExtension(ext, {
			forceDownload,
		})
			.then(name => console.log(`Added extension: ${name}`))
			.catch(err =>
				console.log(`An error occurred while installing extension: ${err}`)
			);
	});
};
