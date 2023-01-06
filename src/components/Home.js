import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeImage from '../assets/home-background.png';
import Logo from '../assets/full-stacked-logo-white.png';
import '../styles/Home.scss';
import { Button, CssBaseline, Box, Grid } from '@mui/material';
import { Stack } from '@mui/system';

const Home = () => (
  <Grid
    className='Home'
    container
    justifyContent='flex-end'
    component='main'
    sx={{ height: '100vh' }}
  >
    <Grid
      item
      md={6}
      sx={{
        backgroundImage: 'url(https://i.postimg.cc/LX3DRvWT/home.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
    <Stack
      direction='column'
      justifyContent='center'
      alignItems='center'
      // spacing={2}
    >
      <Box
        className='button'
        alignItems='center'
        sx={{ '& button': { m: 7 } }}
      ></Box>
      <CssBaseline />
      <Box>
        <img src={Logo} alt='logo' />
      </Box>
      <Box className='button' alignItems='center' sx={{ '& button': { m: 7 } }}>
        <h3 color='primary'>lift. track. lift</h3>
      </Box>
      <div>
        <Link to='/workouts'>
          <Button
            sx={{ border: 3 }}
            color='secondary'
            variant='outlined'
            size='large'
          >
            start Lifting
          </Button>
        </Link>
      </div>
    </Stack>
    {/* <img src={HomeImage} alt='man lifting weights' /> */}
    {/* <Grid
      item
      md={6}
      sx={{
        backgroundImage: 'url(https://i.postimg.cc/LX3DRvWT/home.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    /> */}
  </Grid>
);

export default Home;
