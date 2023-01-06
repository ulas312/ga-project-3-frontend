import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Container,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { API } from '../lib/api';
import HomeImage from '../assets/home-background.png';
import '../styles/Createstyle.scss';

export default function CreateWorkout() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: '',
    reps: 0,
    sets: 0,
    rest: 0,
    difficulty: '',
    totalTime: 0,
    caloriesBurned: 0,
    equipmentRequired: '',
    muscleGroup: '',
  });

  const [error, setError] = useState(false);
  const [muscleGroups, setMuscleGroups] = useState(['']);

  useEffect(() => {
    API.GET(API.ENDPOINTS.allWorkouts)
      .then(({ data }) => setMuscleGroups(data))
      .catch((e) => console.log(e));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = formData.muscleGroup
      ? formData
      : {
          name: formData.name,
          image: formData.image,
          description: formData.description,
          reps: formData.reps,
          sets: formData.sets,
          rest: formData.rest,
          difficulty: formData.difficulty,
          totalTime: formData.totalTime,
          caloriesBurned: formData.caloriesBurned,
          equipmentRequired: formData.equipmentRequired,
          muscleGroup: formData.muscleGroup,
        };

    API.POST(API.ENDPOINTS.allWorkouts, data, API.getHeaders())
      .then(({ data }) => {
        navigate(`/workouts/${data._id}`);
      })
      .catch((e) => {
        if (e.status === 301) {
          setError(true);
        }
        console.log(e);
      });
  };

  return (
    <>
      <h1>ADD WORKOUT</h1>
      <img src={HomeImage} alt='full-stacked' />

      <Container
        maxWidth='lg'
        sx={{ display: 'flex', justifyContent: 'center', pt: 3 }}
      >
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 2 }}>
            <TextField
              size='small'
              type='text'
              value={formData.name}
              onChange={handleChange}
              error={error}
              label='Name'
              name='name'
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField
              size='small'
              type='text'
              value={formData.image}
              onChange={handleChange}
              error={error}
              label='Image'
              name='image'
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField
              size='small'
              type='text'
              value={formData.description}
              onChange={handleChange}
              error={error}
              label='Description'
              name='description'
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField
              size='small'
              type='number'
              value={formData.reps}
              onChange={handleChange}
              error={error}
              label='Reps'
              name='reps'
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField
              size='small'
              type='number'
              value={formData.sets}
              onChange={handleChange}
              error={error}
              label='Sets'
              name='sets'
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField
              size='small'
              type='number'
              value={formData.rest}
              onChange={handleChange}
              error={error}
              label='Rest'
              name='rest'
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField
              size='small'
              type='text'
              value={formData.difficulty}
              onChange={handleChange}
              error={error}
              label='Difficulty'
              name='difficulty'
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField
              size='small'
              type='number'
              value={formData.totalTime}
              onChange={handleChange}
              error={error}
              label='Total Time'
              name='totalTime'
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField
              size='small'
              type='number'
              value={formData.caloriesBurned}
              onChange={handleChange}
              error={error}
              label='Calories Burned'
              name='caloriesBurned'
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField
              size='small'
              type='text'
              value={formData.equipmentRequired}
              onChange={handleChange}
              error={error}
              label='Equipment Required'
              name='equipmentRequired'
            />
          </Box>
          <Box>
            <FormControl fullWidth>
              <InputLabel id='muscleGroup'>Muscle Group</InputLabel>
              <Select
                size='small'
                labelId='muscleGroup'
                value={formData.muscleGroup}
                label='Muscle Group'
                onChange={handleChange}
              >
                <MenuItem value=''>None</MenuItem>
                {muscleGroups.map((muscleGroup) => (
                  <MenuItem key={muscleGroup._id} value={muscleGroup._id}>
                    {muscleGroup.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Button type='submit'>Create new workout</Button>
        </form>
      </Container>
      <img src={HomeImage} alt='full-stacked' />
    </>
  );
}
