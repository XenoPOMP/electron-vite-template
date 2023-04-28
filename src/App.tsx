import Layout from '@components/Layout/Layout';

import './App.scss';

console.log(
	'[App.tsx]',
	`Hello world from Electron ${process.versions.electron}!`
);

function App() {
	return (
		<>
			<Layout></Layout>
		</>
	);
}

export default App;
