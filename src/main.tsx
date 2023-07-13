import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from '@redux/index';

import GlobalProvider from '@providers/GlobalProvider/GlobalProvider';

import App from './App';
import './samples/node-api';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: true,
		},
	},
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ReduxProvider store={store}>
				<GlobalProvider>
					<PersistGate persistor={persistor} loading={null}>
						<App />
					</PersistGate>
				</GlobalProvider>
			</ReduxProvider>
		</QueryClientProvider>
	</React.StrictMode>
);

postMessage({ payload: 'removeLoading' }, '*');
