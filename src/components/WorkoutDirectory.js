import { useNavigate, createSearchParams } from 'react-router-dom';
import { Button, Container, Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import { API } from '../lib/api';
import MuscleCard from './common/MuscleCard';

const WorkoutDirectory = () => {
  const navigate = useNavigate();
  const [workoutsFromGroup, setWorkoutsFromGroup] = useState(null);
  const [workouts, setWorkouts] = useState(null);
  const goToSelectedWorkouts = () =>
    navigate({
      pathname: API.ENDPOINTS.workoutsByMuscleGroup,
      search: `?${createSearchParams(
        workoutsFromGroup.map((workout) => workout.workout.id)
      )}`,
    });

  useEffect(() => {
    API.GET(API.ENDPOINTS.workoutsByMuscleGroup)
      .then(({ data }) => {
        setWorkoutsFromGroup(data);
        console.log(API.ENDPOINTS.workoutsByMuscleGroup);
        console.log(data);
      })
      .catch(({ message, response }) => {
        console.error(message, response);
      });
  }, []);

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
      <Container maxWidth='lg' sx={{ display: 'flex' }} className='Workout'>
        {workouts.map((workout) => (
          <Grid item xs={4} key={workout._id}>
            <MuscleCard name={workout.name} image={workout.image} />
          </Grid>
        ))}
        <Button
          onClick={goToSelectedWorkouts}
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
