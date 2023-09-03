import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';

import theme from './mui/Theme';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

const router = createBrowserRouter([
  {
    path: '/pricing',
    element: <Pricing />,
  },
  {
    path: '/',
    element: <Landing />,
  },
]);

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <RouterProvider router={router} />
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
};

export default App;
