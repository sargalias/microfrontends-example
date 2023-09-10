import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from './App';
import createRouter from './config/router';

type MountOptions = {
  routerType: 'browser' | 'memory';
  onRemoteNavigate: (nextPathname: string) => void;
};

type MountReturnValue = {
  onHostNavigate: (nextPathname: string) => void;
};

const mount = (
  element: Element,
  { routerType, onRemoteNavigate }: MountOptions,
): MountReturnValue => {
  const router = createRouter(routerType);

  router.subscribe((routerState) => {
    onRemoteNavigate(routerState.location.pathname);
  });

  const onHostNavigate = (nextPathname: string) => {
    if (router.state.location.pathname !== nextPathname) {
      router.navigate(nextPathname);
    }
  };

  ReactDOM.createRoot(element).render(
    <React.StrictMode>
      <App router={router} />
    </React.StrictMode>,
  );

  return { onHostNavigate };
};

const main = () => {
  const element = document.querySelector('#root') as Element;
  mount(element, { routerType: 'browser', onRemoteNavigate: () => {} });
};

main();

export { mount };
