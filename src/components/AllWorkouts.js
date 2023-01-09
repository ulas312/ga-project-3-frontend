import { useEffect, useState } from 'react';
import { API } from '../lib/api';
import { styled } from '@mui/material/styles';
import { Container, Grid, Paper, Box, CardMedia } from '@mui/material';
import '../styles/images.scss';
import allExercises from '../assets/all-exercices.png';
import { useNavigate } from 'react-router-dom';
import WorkoutCard from './common/WorkoutCard';
import Search from './common/Search';

const AllWorkouts = ({ searchedWorkouts }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  // const [isHover, setIsHover] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHover(true);
  // };
  // const handleMouseLeave = () => {
  //   setIsHover(false);
  // };

  const [workouts, setWorkouts] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filterWorkouts = () => {
    const regex = new RegExp(searchQuery, 'i');
    const filteredWorkouts = workouts.filter((workout) => {
      return workout.name.match(regex);
    });
    return filteredWorkouts;
  };

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

  useEffect(() => {
    setWorkouts(searchedWorkouts);
  }, [searchedWorkouts]);

  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/workouts/${id}`);
  };
  return (
    <>
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
        alt='Heading'
        src={allExercises}
      />
      <div className='background'>
        <Search value={searchQuery} handleChange={setSearchQuery} />
        <Container className='margins' maxWidth='lg'>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent='center'
            alignItems='center'
            onClick={handleClick}
          >
            {workouts &&
              filterWorkouts().map((workout) => (
                <Grid item xs={6} key={workout._id}>
                  <Item className='hover'>
                    <WorkoutCard
                      component='img'
                      sx={{ height: 20, width: 230 }}
                      image={workout.image}
                    ></WorkoutCard>
                    {workout.name}
                  </Item>

                  <Item id={workout._id}>
                    Difficulty🏋🏽‍♀️: {workout.difficulty}
                  </Item>
                  {/* <Item>{workout.image}</Item> */}
                  {/* <WorkoutCard
              name={workout.name}
              image={workout.image}
              type={workout.difficulty}
              id={workout._id}
            /> */}
                </Grid>
              ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default AllWorkouts;
