import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';

import theme from './mui/Theme';

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <h1>Hello</h1>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
};

export default App;
