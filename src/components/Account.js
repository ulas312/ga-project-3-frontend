import * as React from 'react';
import AccountText from '../assets/account-text-black.png';
import legs from '../assets/legs.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';

import {
  Container,
  Box,
  Card,
  CardContent,
  Button,
  Typography,
  Grid,
  Stack,
  Avatar,
} from '@mui/material';

const Account = () => (
  <>
    <Box
      component='img'
      sx={{
        position: 'absolute',
        top: '8vh',
        justify: 'center',
        left: '40%',
        // zIndex: 'tooltip',
        mt: 4,
        mb: 20,
        height: 100,
        width: 400,
      }}
      alt='Account page text'
      src={AccountText}
    />
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justify='center'
      style={{ minHeight: '100vh' }}
    >
      <Card>
        {/* <LazyLoadImage alt={legs.alt} effect='blur' src={legs} /> */}
        {/* <LazyLoadImage
          alt={legs.alt}
          height={legs.height}
          src={legs} // use normal <img> attributes as props
          width={legs.width}
        /> */}
      </Card>
    </Grid>
  </>
);

export default Account;
