import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';

import theme from './mui/Theme';

import { RouterProvider } from 'react-router-dom';
import { router } from './config/router';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <RouterProvider router={router} />
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
