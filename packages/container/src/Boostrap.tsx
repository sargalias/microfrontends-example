import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const element = document.querySelector('#root') as Element;

ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
