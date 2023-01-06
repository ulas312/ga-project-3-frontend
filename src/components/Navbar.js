import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuthenticated } from '../hooks/useAuthenticated';
import { AUTH } from '../lib/auth';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useAuthenticated();

  const logout = () => {
    AUTH.logout();
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <MenuIcon sx={{ mr: 2 }} />
          <Link to='/'>
            <Typography
              variant='h6'
              color='inherit'
              component='div'
              sx={{ mr: 2 }}
            >
              Home
            </Typography>
          </Link>
          <Link to='/workouts'>
            <Typography
              variant='h6'
              color='inherit'
              component='div'
              sx={{ mr: 2 }}
            >
              Workouts
            </Typography>
          </Link>
          {isLoggedIn ? (
            <>
              <Link to='/' onClick={logout}>
                <Typography
                  variant='h6'
                  color='inherit'
                  component='div'
                  sx={{ mr: 2 }}
                >
                  Log Out
                </Typography>
              </Link>
              <Link to='/crafty-beers/create'>
                <Typography
                  variant='h6'
                  color='inherit'
                  component='div'
                  sx={{ mr: 2 }}
                >
                  Add
                </Typography>
              </Link>
            </>
          ) : (
            <>
              <Link to='/login'>
                <Typography
                  variant='h6'
                  color='inherit'
                  component='div'
                  sx={{ mr: 2 }}
                >
                  Login
                </Typography>
              </Link>
              <Link to='/register'>
                <Typography
                  variant='h6'
                  color='inherit'
                  component='div'
                  sx={{ mr: 2 }}
                >
                  Register
                </Typography>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
