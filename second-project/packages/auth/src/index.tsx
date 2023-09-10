import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from './App';
import createRouter from './config/router';

const element = document.querySelector('#root') as Element;

const router = createRouter('browser');

ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <App router={router} />
  </React.StrictMode>,
);
