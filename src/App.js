import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
// import Navbar from './components/Navbar';
// import Login from './components/Login';
// import Register from './components/Register';
// import Workouts from './components/Workouts

import 'react-toastify/dist/ReactToastify.css';

function App() {
  // const [searchedWorkouts, setSearchedWorkouts] = useState([]);

  return (
    <Router>
      {/* <Navbar
        setSearchedWorkouts={setSearchedWorkouts}
        searchedWorkouts={searchedWorkouts}
      /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/workout-directory' element={<WorkoutsIndex />} />
        <Route path='/workouts' element={<Workouts />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
