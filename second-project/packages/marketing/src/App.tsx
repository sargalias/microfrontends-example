import { RouterProvider } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';

import theme from './mui/Theme';
import router from './config/router';

type AppProps = {
  router: typeof router;
};

const App = ({ router }: AppProps) => {
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
