import { createMemoryRouter } from 'react-router-dom';
import Landing from '../components/Landing';
import Pricing from '../components/Pricing';

const router = createMemoryRouter([
  {
    path: '/pricing',
    element: <Pricing />,
  },
  {
    path: '/',
    element: <Landing />,
  },
]);

export default router;
