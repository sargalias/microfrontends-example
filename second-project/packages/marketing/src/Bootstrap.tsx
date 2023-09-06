import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from './App';

const mount = (element: Element) => {
  ReactDOM.createRoot(element).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
};

if (
  import.meta.env.MODE === 'development' &&
  document.body.getAttribute('data-app') === 'marketing'
) {
  const element = document.querySelector('#root') as Element;
  mount(element);
}

export { mount };
