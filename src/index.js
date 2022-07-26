import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App/App';

import store from './store/store';
import { Provider } from 'react-redux';

import './styles/index.css';
import ThemeProvider from './context/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);