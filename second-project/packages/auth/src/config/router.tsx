import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';
import SignIn from '../components/Signin';

const createRouter = (routerType: 'browser' | 'memory') => {
  const browserCreateFn =
    routerType === 'browser' ? createBrowserRouter : createMemoryRouter;
  return browserCreateFn([
    {
      path: '/signin',
      element: <SignIn />,
    },
    {
      path: '/signout',
      element: <SignOut />,
    },
  ]);
};

export default createRouter;
