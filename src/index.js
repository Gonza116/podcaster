import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import { Provider } from 'react-redux';
import { store, persistor } from './reducers/store';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

