import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useUser } from '../UserContext';

const Toolbar = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '1rem',
}));

type HeaderProps = {
  onSignOut: () => void;
};

const Header = ({ onSignOut }: HeaderProps) => {
  const { isSignedIn } = useUser();

  const onClick = () => {
    if (isSignedIn && onSignOut) {
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
          href={isSignedIn ? '/' : '/auth/signin'}
          onClick={onClick}
        >
          {isSignedIn ? 'Logout' : 'Login'}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
