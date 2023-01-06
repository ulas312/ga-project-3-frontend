import * as React from 'react';
import HomeImage from '../assets/home-background.png';
import '../styles/Home.scss';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Home = () => (
  <Grid className='Home' container component='main' sx={{ height: '100vh' }}>
    <img src={HomeImage} alt='man lifting weights' />
    {/* <Box className='button' sx={{ '& button': { m: 7 } }}>
      <div>
        <Button variant='outlined' size='large'>
          start Lifting
        </Button>
      </div>
    </Box> */}
  </Grid>
);

export default Home;
