import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';

import theme from './mui/Theme';

import Marketing from './components/Marketing';
import Header from './components/Header';
import { MemoryRouter } from 'react-router-dom';

function Router(props: { children?: React.ReactNode }) {
  const { children } = props;

  return <MemoryRouter>{children}</MemoryRouter>;
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Router>
          <Header signedIn={false} onSignOut={() => {}} />
          <Marketing />
        </Router>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
