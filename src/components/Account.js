import * as React from 'react';
import AccountText from '../assets/account-text-white.png';
import ProfilePic from '../assets/profile-pic.jpg';
// import legs from '../assets/legs.png';

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
  ImageListItem,
  ImageList,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const commonStyles = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  width: '12.5rem',
  height: '12.5rem',
};

// get height and weight from API
function createData(height, weight, bmi) {
  return { height, weight, bmi };
}
const rows = [createData(181, 106, 32)];

const photoReel = [
  {
    img: 'https://images.unsplash.com/photo-1549476464-37392f717541',
    title: 'selfie',
  },
  {
    img: 'https://images.unsplash.com/photo-1605296866985-34ba3c0b527b',
    title: 'selfie',
  },
  {
    img: 'https://images.unsplash.com/photo-1605300287659-9ca1a156d7c8',
    title: 'selfie',
  },
  {
    img: 'https://images.unsplash.com/photo-1600026453346-a44501602a02',
    title: 'selfie',
  },
];

const Account = () => (
  <>
    <Box sx={{ backgroundColor: 'black' }}>
      {/* title */}
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
      {/* end of title */}
      {/* image slide */}
      <Box
        sx={{
          // backgroundColor: 'pink',
          position: 'absolute',
          top: '23vh',
          justify: 'center',
          left: '15%',
          // zIndex: 'tooltip',
          mt: 4,
          mb: 20,
          height: 350,
          width: '70%',
        }}
      >
        {/* Image slide - GET PROFILE PIC FROM API */}
        <Box>
          <Stack direction='row' spacing={2}>
            <ImageList
              sx={{ width: '100%', height: 350 }}
              cols={4}
              rowHeight={164}
            >
              {photoReel.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading='lazy'
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Stack>
        </Box>
      </Box>
      {/* end of image slide */}

      {/* profile image and username */}
      <Box
        sx={{
          position: 'absolute',
          top: '47vh',
          justify: 'center',
          left: '15%',
          // zIndex: 'tooltip',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Stack>
            <Box sx={{ ...commonStyles, borderRadius: '50%' }}>
              <Avatar
                alt='Profile picture'
                src={ProfilePic}
                sx={{
                  height: '12rem',
                  width: '12rem',
                  // position: 'absolute',
                  top: '2%',
                  justify: 'center',
                  left: '2%',
                }}
              />
            </Box>
            <Box>
              <Typography
                variant='h4'
                gutterBottom
                align='center'
                sx={{
                  color: 'white',
                  width: '200px',
                  mt: 3,
                  fontSize: 50,
                }}
              >
                {/* get username for API*/}
                Ulas Temel
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
      {/* end of profile and user */}

      {/* start of table */}
      <Box
        sx={{
          position: 'absolute',
          top: '50vh',
          justify: 'center',
          left: '38%',
          mt: 4,
          mb: 20,
          // height: 400,
          width: '36%',
        }}
      >
        <Grid>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell align='left'>Height&nbsp;(cm)</TableCell>
                  <TableCell align='left'>Weight&nbsp;(kg)</TableCell>
                  <TableCell align='left'>BMI&nbsp;</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align='left'>&ensp;{row.height}</TableCell>
                    <TableCell align='left'>&ensp;{row.weight}</TableCell>
                    <TableCell align='left'>&ensp;{row.bmi}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Box>
      {/* End of table */}

      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justify='center'
        style={{ minHeight: '100vh' }}
        // sx={{ backgroundColor: 'black' }}
      ></Grid>
    </Box>
  </>
);

export default Account;
