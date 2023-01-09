import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import WorkoutDirectory from './components/WorkoutDirectory';
import AllWorkouts from './components/AllWorkouts';
import SingleWorkout from './components/SingleWorkout';
import CreateWorkout from './components/CreateWorkout';
import WorkoutLog from './components/WorkoutLog';
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import 'react-toastify/dist/ReactToastify.css';
import SelectedMuscleWorkoutsList from './components/SelectedMuscleWorkoutsList';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#FF0000',
    },
    background: {
      default: '#000000',
    },
    error: {
      main: '#000000',
    },
    overrides: {
      MuiAppBar: {
        colorPrimary: {
          backgroundColor: '#000000',
        },
      },
    },
  },
  typography: {
    fontFamily: '"Bebas Neue", "Helvetica", "Arial", sans-serif',
    fontSize: 25,
  },
});

window.Buffer = window.Buffer || require('buffer').Buffer;

function App() {
  const [searchedWorkouts, setSearchedWorkouts] = useState([]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar
          setSearchedWorkouts={setSearchedWorkouts}
          searchedWorkouts={searchedWorkouts}
        />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/workout-directory' element={<WorkoutDirectory />} />
          <Route path='/workouts' element={<AllWorkouts />} />
          <Route path='workouts/:id' element={<SingleWorkout />} />
          <Route
            path='workout-directory/workouts'
            element={<SelectedMuscleWorkoutsList />}
          />
          <Route path='/workouts/create' element={<CreateWorkout />} />
          <Route path='workout-log' element={<WorkoutLog />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
