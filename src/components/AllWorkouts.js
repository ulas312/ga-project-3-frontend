import { useEffect, useState } from 'react';
import { API } from '../lib/api';

import { Container, Grid } from '@mui/material';

import WorkoutCard from './common/WorkoutCard';

const AllWorkouts = ({ searchedWorkouts }) => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    API.GET(API.ENDPOINTS.allWorkouts)
      .then(({ data }) => {
        setWorkouts(data);
        console.log(API.ENDPOINTS.allWorkouts);
        console.log(data);
      })
      .catch(({ message, response }) => {
        console.error(message, response);
      });
  }, []);

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

export default AllWorkouts;
