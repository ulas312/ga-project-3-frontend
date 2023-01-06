import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeImage from '../assets/home-background.png';
import '../styles/Home.scss';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Home = () => (
  <Grid className='Home' container component='main' sx={{ height: '100vh' }}>
    <Typography
      component='div'
      variant='body1'
      style={{
        height: 100,
        width: '100%',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 40,
          left: '40%',
          zIndex: 'tooltip',
        }}
      >
        <Button
          sx={{ border: 3 }}
          color='secondary'
          variant='outlined'
          size='large'
        >
          start Lifting
        </Button>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '43%',
          zIndex: 'modal',
        }}
      >
        <img src={HomeImage} alt='man lifting weights' />
      </Box>
    </Typography>
  </Grid>
);

export default Home;
