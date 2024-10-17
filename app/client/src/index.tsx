// * React
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// * Redux:
import { Provider } from 'react-redux';
import { store } from './store/store';

// * Apollo:
import { ApolloProvider } from '@apollo/client';
import client from './services/graphql/apolloClient.js';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>
  </Provider>
);