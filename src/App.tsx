import { useState } from 'react';

import Layout from '@components/Layout/Layout';
import Update from '@components/update';

import logoElectron from '@media/logo-electron.svg';
import logoVite from '@media/logo-vite.svg';

import './App.scss';

console.log(
	'[App.tsx]',
	`Hello world from Electron ${process.versions.electron}!`
);

function App() {
	return (
		<>
			<Layout>123</Layout>
		</>
	);
}

export default App;
