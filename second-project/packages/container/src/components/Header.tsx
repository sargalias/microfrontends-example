import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Toolbar = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '1rem',
}));

type HeaderProps = {
  signedIn: boolean;
  onSignOut: () => void;
};

const Header = ({ signedIn, onSignOut }: HeaderProps) => {
  const onClick = () => {
    if (signedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={(theme) => ({ borderBottom: `1px solid ${theme.palette.divider}` })}
    >
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          <Link href="/" sx={{ textDecoration: 'none' }}>
            App
          </Link>
        </Typography>
        <Button
          color="primary"
          variant="outlined"
          href={signedIn ? '/' : '/auth/signin'}
          onClick={onClick}
        >
          {signedIn ? 'Logout' : 'Login'}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
