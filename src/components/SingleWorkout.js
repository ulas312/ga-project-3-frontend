import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API } from '../lib/api';

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

  const goToDirectory = () => navigate('/workout-directory');

  return (
    <>
      <Container maxWidth='lg' sx={{ display: 'flex' }} className='Workout'>
        <Box>
          <img src={singleWorkout?.image} alt={singleWorkout?.name} />
        </Box>
        <Box>
          <CardContent>
            <Typography variant='h5' component='p'>
              {singleWorkout?.name}
            </Typography>

            <Typography color='text.primary' sx={{ fontSize: 15 }} gutterBottom>
              {singleWorkout.description}
            </Typography>

            <Typography color='text.secondary'>
              {singleWorkout?.reps}
            </Typography>

            <Typography color='text.secondary'>
              {singleWorkout?.sets}
            </Typography>

            <Typography color='text.secondary'>
              {singleWorkout?.rest}
            </Typography>

            <Typography color='text.primary'>
              {singleWorkout?.difficulty}
            </Typography>

            <Typography color='text.primary'>
              {singleWorkout?.totalTime}
            </Typography>

            <Typography color='text.secondary'>
              {singleWorkout?.caloriesBurned}
            </Typography>

            <Typography color='text.primary'>
              {singleWorkout?.equipmentRequired}
            </Typography>

            {/* <Typography color='text.primary'>
              {singleWorkout.muscleGroup.name}
            </Typography> */}
          </CardContent>
          <CardActions>
            <Button size='small' onClick={goToDirectory}>
              Take me to the Workout Directory
            </Button>
          </CardActions>
        </Box>
      </Container>
    </>
  );
}
