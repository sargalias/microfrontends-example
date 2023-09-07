import Marketing from '../mfComponents/Marketing';
import Header from '../components/Header';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '*',
    element: (
      <>
        <Header signedIn={false} onSignOut={() => {}} />
        <Marketing />
      </>
    ),
  },
]);
