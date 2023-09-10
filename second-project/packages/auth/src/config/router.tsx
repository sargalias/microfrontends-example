import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';
import SignIn from '../components/Signin';
import SignUp from '../components/Signup';

const createRouter = (routerType: 'browser' | 'memory') => {
  const browserCreateFn =
    routerType === 'browser' ? createBrowserRouter : createMemoryRouter;
  return browserCreateFn([
    {
      path: '/auth/signin',
      element: <SignIn />,
    },
    {
      path: '/auth/signup',
      element: <SignUp />,
    },
  ]);
};

export default createRouter;
