import { RouterProvider } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';

import theme from '../mui/Theme';

type AppProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  router: any;
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
