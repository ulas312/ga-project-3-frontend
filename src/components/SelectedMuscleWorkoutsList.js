import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API } from '../lib/api';

import { Container, Grid } from '@mui/material';

import WorkoutCard from './common/WorkoutCard';

const SelectedMuscleWorkoutsList = ({ searchedWorkouts }) => {
  const [params] = useSearchParams();
  const [workouts, setWorkouts] = useState(null);

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
    <Container maxWidth='lg'>
      <Grid container spacing={2}>
        {workouts?.map((workout) => (
          <Grid item xs={4} key={workout._id}>
            <WorkoutCard
              name={workout.name}
              image={workout.image}
              type={workout.difficulty}
              id={workout._id}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SelectedMuscleWorkoutsList;
