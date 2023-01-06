// import { useNavigate, createSearchParams } from 'react-router-dom';
import { Button, Typography, CardActionArea } from '@mui/material';
// import { useState } from 'react';
// import { API } from '../lib/api';

const WorkoutDirectory = () => {
  // const navigate = useNavigate();
  // const [workouts, setWorkouts] = useState(null);
  // const goToSelectedWorkouts = () =>
  // navigate({
  //   pathname: API.ENDPOINTS.workoutsByMuscleGroup,
  //   search: `?${createSearchParams(workouts.)}`
  // }) ;

  // useEffect(() => {
  //   API.GET(API.ENDPOINTS.workoutsByMuscleGroup)
  //   .then(({ data }) => {
  //     setWorkouts(data);
  //     console.log(API.ENDPOINTS.workoutsByMuscleGroup);
  //     console.log(data);
  //   })
  //   .catch(({ message, response }) => {
  //     console.error(message, response);
  //   });
  // }, []);

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
      <CardActionArea>
        <Button
          sx={{ border: 3 }}
          color='secondary'
          variant='outlined'
          size='large'
        >
          Select Exercises
        </Button>
      </CardActionArea>
    </>
  );
};

export default WorkoutDirectory;
