import { Link, useNavigate } from 'react-router-dom';
import { Button, Typography, CardActionArea } from '@mui/material';
import { useState } from 'react';

const WorkoutDirectory = () => {
  const navigate = useNavigate();
  const [selectedWorkouts, setSelectedWorkouts] = useState([]);

  const handleSelect = (workout) => {
    setSelectedWorkouts([...selectedWorkouts, workout]);
  };

  return (
    <>
      <Link to='/'>
        <Typography variant='h6' color='inherit' component='div' sx={{ mr: 2 }}>
          Home
        </Typography>
      </Link>
      {/* {workouts.map
      <CardActionArea>
        <Button color='inherit'>Chest, Shoulders, Triceps</Button>
      </CardActionArea>
      } */}
      <CardActionArea>
        <Button color='inherit'>Submit</Button>
      </CardActionArea>
    </>
  );
};

export default WorkoutDirectory;
