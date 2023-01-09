import {
  useNavigate,
  useSearchParams,
  createSearchParams,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API } from '../lib/api';

import { Box, Button, Container, Grid } from '@mui/material';

import WorkoutCard from './common/WorkoutCard';

const SelectedMuscleWorkoutsList = ({ searchedWorkouts }) => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [workouts, setWorkouts] = useState(null);
  const [selectedWorkouts, setSelectedWorkouts] = useState([]);

  const handleSelect = (sWorkouts) => {
    console.log(sWorkouts);
    const groupArr = sWorkouts.split(',');
    if (!selectedWorkouts.some((i) => groupArr.includes(i))) {
      setSelectedWorkouts([...selectedWorkouts, ...groupArr]);
    }
  };
  console.log(selectedWorkouts);

  const goToSelectedWorkouts = () => {
    console.log(selectedWorkouts);
    navigate({
      pathname: '/workout-log',
      search: `?${createSearchParams({
        selectedWorkouts: selectedWorkouts.join(','),
      })}`,
    });
  };

  const gotToAllWorkouts = () => navigate('/workouts');

  useEffect(() => {
    API.GET(
      `${API.ENDPOINTS.workoutsBySelectedMuscleGroup}?muscleGroups=${params.get(
        'muscleGroups'
      )}`
    )
      .then(({ data }) => {
        setWorkouts(data);
        console.log(data);
      })
      .catch(({ message, response }) => {
        console.error(message, response);
      });
  }, [params]);

  useEffect(() => {
    setWorkouts(searchedWorkouts);
  }, [searchedWorkouts]);

  return (
    <Box sx={{ backgroundColor: 'black' }}>
      <Container maxWidth='lg' sx={{ backgroundColor: 'black' }}>
        <Grid container spacing={2}>
          {workouts?.map((workout) => (
            <Grid item xs={4} key={workout._id}>
              <WorkoutCard
                name={workout.name}
                image={workout.image}
                type={workout.difficulty}
                id={workout._id}
              />
              <Button
                sx={{ border: 3 }}
                color='secondary'
                variant='outlined'
                size='large'
                onClick={() => {
                  console.log(workout._id);
                  handleSelect(workout._id);
                }}
              >
                {workout.name}
              </Button>
            </Grid>
          ))}
        </Grid>
        <Button
          sx={{ border: 3 }}
          color='secondary'
          variant='outlined'
          size='large'
          onClick={goToSelectedWorkouts}
        >
          Submit
        </Button>
        <Button
          sx={{ border: 3 }}
          color='secondary'
          variant='outlined'
          size='large'
          onClick={gotToAllWorkouts}
        >
          More Workouts +
        </Button>
      </Container>
    </Box>
  );
};

export default SelectedMuscleWorkoutsList;
