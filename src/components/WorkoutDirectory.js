import { Link, useNavigate } from 'react-router-dom';
import { Button, Typography, CardActionArea } from '@mui/material';

const WorkoutDirectory = () => {
  const navigate = useNavigate();

  return (
    <>
      <Link to='/'>
        <Typography variant='h6' color='inherit' component='div' sx={{ mr: 2 }}>
          Home
        </Typography>
      </Link>
      <CardActionArea>
        <Button color='inherit'>Chest, Shoulders, Triceps</Button>
      </CardActionArea>
      <CardActionArea>
        <Button color='inherit'>Back & Biceps</Button>
      </CardActionArea>
      <CardActionArea>
        <Button color='inherit'>Legs & Abs</Button>
      </CardActionArea>
      <CardActionArea>
        <Button color='inherit'>Full Body</Button>
      </CardActionArea>
      <CardActionArea>
        <Button color='inherit'>Submit</Button>
      </CardActionArea>
    </>
  );
};

export default WorkoutDirectory;
