import { useNavigate, createSearchParams } from 'react-router-dom';
import { Button, Container, Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import { API } from '../lib/api';
import MuscleCard from './common/MuscleCard';

const WorkoutDirectory = () => {
  const navigate = useNavigate();
  const [workouts, setWorkouts] = useState(null);
  const goToSelectedWorkouts = () =>
    navigate({
      pathname: API.ENDPOINTS.workoutDirectory,
      search: `?${createSearchParams(workouts.workout)}`,
    });

  useEffect(() => {
    API.GET(API.ENDPOINTS.workoutDirectory)
      .then(({ data }) => {
        setWorkouts(data);
        console.log(API.ENDPOINTS.workoutDirectory);
        console.log(data);
      })
      .catch(({ message, response }) => {
        console.error(message, response);
      });
  }, []);

  if (!workouts) {
    return null;
  }

  // const [selectedWorkouts, setSelectedWorkouts] = useState([]);

  // const handleSelect = (workout) => {
  //   setSelectedWorkouts([...selectedWorkouts, workout]);
  // };

  return (
    <>
      {/* {workouts.map
      <CardActionArea>
        <Button color='inherit'>Chest, Shoulders, Triceps</Button>
      </CardActionArea>
      } */}
      <Container maxWidth='lg'>
        <Grid container spacing={2}>
          {workouts?.map((workout) => (
            <Grid item xs={4} key={workout._id}>
              <MuscleCard
                name={workout.name}
                image={workout.image}
                onClick={goToSelectedWorkouts}
              />
            </Grid>
          ))}
        </Grid>
        <Button
          sx={{ border: 3 }}
          color='secondary'
          variant='outlined'
          size='large'
        >
          Choose Your Exercises!
        </Button>
      </Container>
    </>
  );
};

export default WorkoutDirectory;
