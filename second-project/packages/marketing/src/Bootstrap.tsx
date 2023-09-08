import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from './App';
import router from './config/router';

type MountOptions = {
  onRemoteNavigate: (pathname: string) => void;
};
type Mount = (element: Element, options: MountOptions) => void;

const mount: Mount = (element: Element, { onRemoteNavigate }) => {
  // Bug: There is an issue because the subscribe notification
  // is triggered twice for each route change.
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
  if (
    import.meta.env.MODE === 'development' &&
    document.body.getAttribute('data-app') === 'marketing'
  ) {
    const element = document.querySelector('#root') as Element;
    mount(element, { onRemoteNavigate: () => {} });
  }
};
main();

export { mount };
