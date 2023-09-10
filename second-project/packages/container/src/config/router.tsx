import { createBrowserRouter } from 'react-router-dom';
import AuthApp from '../mfComponents/AuthApp';
import MarketingApp from '../mfComponents/MarketingApp';
import Root from './Root';

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/auth/*',
        element: <AuthApp />,
      },
      {
        path: '/',
        element: <MarketingApp />,
      },
    ],
  },
]);
