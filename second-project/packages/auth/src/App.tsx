import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';

import theme from './config/mui/Theme';
import { RouterProvider } from 'react-router-dom';

type AppProps = {
  router: any; // eslint-disable-line @typescript-eslint/no-explicit-any
};

const App = ({ router }: AppProps) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <h2>Hello</h2>
          <RouterProvider router={router} />
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
};

export default App;
