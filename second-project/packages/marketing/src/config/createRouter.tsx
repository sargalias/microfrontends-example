import { createMemoryRouter } from 'react-router-dom';
import Landing from '../components/Landing';
import Pricing from '../components/Pricing';
import Root, { RootProps } from './Root';

type CreateRouterArgs = RootProps;

const createRouter = ({
  onRemoteNavigate,
  hostNavigateObserverSubscribe,
}: CreateRouterArgs) => {
  const router = createMemoryRouter([
    {
      element: (
        <Root
          onRemoteNavigate={onRemoteNavigate}
          hostNavigateObserverSubscribe={hostNavigateObserverSubscribe}
        />
      ),
      children: [
        {
          path: '/pricing',
          element: <Pricing />,
        },
        {
          path: '/',
          element: <Landing />,
        },
      ],
    },
  ]);
  return router;
};

export default createRouter;
