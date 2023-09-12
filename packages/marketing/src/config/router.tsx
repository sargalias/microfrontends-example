import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';
import Landing from '../components/Landing';
import Pricing from '../components/Pricing';

const createRouter = (routerType: 'browser' | 'memory') => {
  const browserCreateFn =
    routerType === 'browser' ? createBrowserRouter : createMemoryRouter;
  return browserCreateFn([
    {
      path: '/pricing',
      element: <Pricing />,
    },
    {
      path: '/',
      element: <Landing />,
    },
  ]);
};

export default createRouter;
