import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';
import SignIn from '../components/Signin';
import SignUp from '../components/Signup';

const createRouter = (
  routerType: 'browser' | 'memory',
  onSignIn: () => void,
) => {
  const browserCreateFn =
    routerType === 'browser' ? createBrowserRouter : createMemoryRouter;
  return browserCreateFn([
    {
      path: '/auth',
      element: <h1>Auth</h1>,
    },
    {
      path: '/auth/signin',
      element: <SignIn onSignIn={onSignIn} />,
    },
    {
      path: '/auth/signup',
      element: <SignUp onSignIn={onSignIn} />,
    },
  ]);
};

export default createRouter;
