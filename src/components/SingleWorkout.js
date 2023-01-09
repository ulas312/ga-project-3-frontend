import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API } from '../lib/api';
import { ImageListItem } from '@mui/material';
// import Likes from './common/Likes';

import '../styles/images.scss';

import {
  Container,
  Box,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@mui/material';

export default function SingleWorkout() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [singleWorkout, setSingleWorkout] = useState(['']);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    API.GET(API.ENDPOINTS.singleWorkout(id))
      .then(({ data }) => {
        setSingleWorkout(data);
        console.log(data);
      })
      .catch(({ message, response }) => {
        console.error(message, response);
      });
    setIsUpdated(false);
  }, [id, isUpdated]);

  const goToDirectory = () => navigate('/workouts');
  const logWorkout = () => navigate('/workout-log');

  return (
    <>
      <div className='backgroundId'>
        <Container
          maxWidth='400px'
          sx={{ display: 'flex', pt: 15 }}
          className='Workout'
        >
          <Box className='info'>
            <CardContent>
              <Typography
                variant='h5'
                component='p'
                style={{ font: 12, color: 'gray' }}
              >
                {singleWorkout?.name}
              </Typography>

              <Typography color='gray' sx={{ fontSize: 15 }} gutterBottom>
                {singleWorkout.description}
              </Typography>

              <Typography color='gray' sx={{ fontSize: 15 }}>
                Aim for: {singleWorkout?.reps} reps /{singleWorkout?.sets} sets
              </Typography>

              <Typography color='gray' sx={{ fontSize: 15 }}>
                <h5>Rest time: {singleWorkout?.rest} seconds</h5>
              </Typography>

              <Typography color='gray' sx={{ fontSize: 15 }}>
                <h5>Difficulty Level: {singleWorkout?.difficulty}</h5>
              </Typography>

              <Typography color='gray' sx={{ fontSize: 15 }}>
                <h5>Time to complete: {singleWorkout?.totalTime} minutes</h5>
              </Typography>

              <Typography color='gray' sx={{ fontSize: 15 }}>
                <h5>Calories Burned: {singleWorkout?.caloriesBurned}</h5>
              </Typography>

              <Typography color='gray' sx={{ fontSize: 15 }}>
                <h5>Equipment Required: {singleWorkout?.equipmentRequired}</h5>
              </Typography>

              {/* <Typography color='text.primary'>
              {singleWorkout.muscleGroup.name}
            </Typography> */}
            </CardContent>
            <CardActions>
              <Button className='Button' size='small' onClick={goToDirectory}>
                🔙
              </Button>
              <button className='signUp'>
                VIDEO RELEASES - COMING SOON, SIGN UP NOW
              </button>
              <button className='signUp' onClick={logWorkout}>
                LOG WORKOUT
              </button>
            </CardActions>
          </Box>
          <ImageListItem key={singleWorkout?.image}>
            <img
              className='singleCard'
              style={{
                width: 800,
                height: 400,
                padding: 100,
                // borderRadius: '45%',
                objectFit: 'cover',
              }}
              src={singleWorkout?.image}
              alt={singleWorkout?.name}
            />
          </ImageListItem>
          <Container maxWidth='lg'> </Container>
        </Container>
      </div>
      <footer></footer>
    </>
  );
}
