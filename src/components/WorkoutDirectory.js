import { Link, useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

const WorkoutDirectory = () => {
  const navigate = useNavigate();
  return (
    <Link to='/'>
      <Typography variant='h6' color='inherit' component='div' sx={{ mr: 2 }}>
        Chest
      </Typography>
    </Link>
  );
};

export default WorkoutDirectory;
