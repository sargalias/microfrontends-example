import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Progress from '../components/Progress';

const MarketingApp = lazy(() => import('../mfComponents/MarketingApp'));
const AuthApp = lazy(() => import('../mfComponents/AuthApp'));

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/auth/*',
        element: (
          <Suspense fallback={<Progress />}>
            <AuthApp />
          </Suspense>
        ),
      },
      {
        path: '/*',
        element: (
          <Suspense fallback={<Progress />}>
            <MarketingApp />
          </Suspense>
        ),
      },
    ],
  },
]);
