import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';

import theme from './config/mui/Theme';

import { RouterProvider } from 'react-router-dom';
import { router } from './config/router';
import { UserProvider } from './UserContext/UserContext';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
