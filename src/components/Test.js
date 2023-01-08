import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WorkoutLogText from '../assets/workout-log.png';
import { API } from '../lib/api';

import dayjs from 'dayjs';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import {
  Container,
  Box,
  Card,
  CardContent,
  Button,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
} from '@mui/material';

export default function WorkoutLog() {
  const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    // m: 1,
    // border: 1,
    width: '12.5rem',
    height: '12.5rem',
  };

  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    dateTimePicker: '',
    weight: 0,
    reps: 0,
    sets: 0,
    kcals: 0,
    caloriesBurned: 0,
    exercise: '',
  });

  const [error, setError] = useState(false);
  const [exercises, setexercises] = useState(['']);

  useEffect(() => {
    API.GET(API.ENDPOINTS.allWorkouts)
      .then(({ data }) => setexercises(data))
      .catch((e) => console.log(e));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = formData.exercise
      ? formData
      : {
          name: formData.name,
          image: formData.image,
          description: formData.description,
          reps: formData.reps,
          sets: formData.sets,
          kcals: formData.rest,
          difficulty: formData.difficulty,
          totalTime: formData.totalTime,
          caloriesBurned: formData.caloriesBurned,
          exercise: formData.exercise,
        };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
      setValue(newValue);
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
      <Box sx={{ backgroundColor: 'white' }}>
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justify='center'
          style={{ minHeight: '100vh' }}
        ></Grid>
        {/* title */}
        <Box
          component='img'
          sx={{
            position: 'absolute',
            top: '8vh',
            justify: 'center',
            left: '40%',
            // zIndex: 'tooltip',
            mt: 4,
            mb: 20,
            height: 100,
            width: 400,
          }}
          alt='Workout log text'
          src={WorkoutLogText}
        />
        {/* end of title */}

        {/* Table */}
        <Box
          sx={{
            position: 'absolute',
            top: '30vh',
            justify: 'center',
            left: '35%',
            // zIndex: 'tooltip',
            mt: 4,
            mb: 20,
            // height: 100,
            // width: 800,
            height: 400,
            width: '30%',
          }}
        >
          <Container
            maxWidth='lg'
            sx={{ display: 'flex', justifyContent: 'center', pt: 3 }}
          >
            <form onSubmit={handleSubmit}>
              {/* <Box sx={{ mb: 2 }}>
                <TextField
                  size='small'
                  type='text'
                  value={formData.image}
                  onChange={handleChange}
                  error={error}
                  label='Image'
                  name='image'
                />
              </Box> */}

              <Box sx={{ mb: 2 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Stack spacing={3}>
                    <DateTimePicker
                      label='Date&Time picker'
                      // value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
              </Box>

              <Box sx={{ mb: 2 }}>
                <TextField
                  size='small'
                  type='number'
                  value={formData.reps}
                  onChange={handleChange}
                  error={error}
                  label='Weight Used (kg)'
                  name='weight'
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
                  label='Rest (seconds)'
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

              <Box>
                <FormControl fullWidth>
                  <InputLabel id='exercise'>Muscle Group</InputLabel>
                  <Select
                    size='small'
                    labelId='exercise'
                    value={formData.exercise}
                    label='Muscle Group'
                    onChange={handleChange}
                  >
                    <MenuItem value=''>None</MenuItem>
                    {exercises.map((exercise) => (
                      <MenuItem key={exercise._id} value={exercise._id}>
                        {exercise.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Button type='submit'>Create new workout</Button>
            </form>
          </Container>
        </Box>
        {/* End of table */}
      </Box>
    </>
  );
}
