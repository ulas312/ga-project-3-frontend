import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API } from '../lib/api';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
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

  const goToDirectory = () => navigate('/workout-directory');

  return (
    <>
      <Container maxWidth='lg' sx={{ display: 'flex' }} className='Workout'>
        <ImageListItem key={singleWorkout?.image}>
          <img src={singleWorkout?.image} alt={singleWorkout?.name} />
        </ImageListItem>

        <Box>
          <CardContent>
            <Typography variant='h5' component='p'>
              {singleWorkout?.name}
            </Typography>

            <Typography color='text.primary' sx={{ fontSize: 15 }} gutterBottom>
              <h2>Description:</h2> {singleWorkout.description}
            </Typography>

            <Typography color='text.secondary'>
              <h5>Reps:</h5>
              {singleWorkout?.reps}
            </Typography>

            <Typography color='text.secondary'>
              <h5>Sets:</h5>
              {singleWorkout?.sets}
            </Typography>

            <Typography color='text.secondary'>
              <h5>Rest time:</h5>
              {singleWorkout?.rest}
              seconds
            </Typography>

            <Typography color='text.primary'>
              <h5>Difficulty Level:</h5>
              {singleWorkout?.difficulty}
            </Typography>

            <Typography color='text.primary'>
              <h5>Time to complete:</h5>
              {singleWorkout?.totalTime}
            </Typography>

            <Typography color='text.secondary'>
              <h5>Calories Burned</h5>
              {singleWorkout?.caloriesBurned}
            </Typography>

            <Typography color='text.primary'>
              <h5>Equipment Required:</h5>
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
