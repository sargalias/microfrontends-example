import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from './config/App';
import createRouter from './config/createRouter';
import createObserver from './utils/observer';

type MountOptions = {
  onRemoteNavigate: (pathname: string) => void;
};
type Mount = (element: Element, options: MountOptions) => void;

const mount: Mount = (element: Element, { onRemoteNavigate }) => {
  const observer = createObserver();
  const router = createRouter({
    hostNavigateObserverSubscribe: observer.subscribe,
    onRemoteNavigate,
  });

  ReactDOM.createRoot(element).render(
    <React.StrictMode>
      <App router={router} />
    </React.StrictMode>,
  );
  return { onHostNavigate: observer.notify };
};

const main = () => {
  if (
    import.meta.env.MODE === 'development' &&
    document.body.getAttribute('data-app') === 'marketing'
  ) {
    const element = document.querySelector('#root') as Element;
    mount(element, { onRemoteNavigate: console.log });
  }
};
main();

export { mount };
