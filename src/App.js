import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
// import Navbar from './components/Navbar';
import WorkoutDirectory from './components/WorkoutDirectory';
import Workouts from './components/Workouts';
import CreateWorkout from './components/CreateWorkout';
import WorkoutLog from './components/WorkoutLog';
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import 'react-toastify/dist/ReactToastify.css';

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
      main: '#001fe8',
    },
  },
  typography: {
    fontFamily: '"Bebas Neue", "Helvetica", "Arial", sans-serif',
    fontSize: 25,
  },
});

function App() {
  // const [searchedWorkouts, setSearchedWorkouts] = useState([]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* <Navbar
        setSearchedWorkouts={setSearchedWorkouts}
        searchedWorkouts={searchedWorkouts}
      /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/workout-directory' element={<WorkoutDirectory />} />
          <Route path='/workouts' element={<Workouts />} />
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
