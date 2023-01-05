import axios from 'axios';
import { AUTH } from './auth';

const ENDPOINTS = {
  allWorkouts: '/api/workouts',
  singleWorkout: (id) => `/api/workouts/${id}`,
  workoutDirectory: '/api/workout-directory',
  workoutsByMuscleGroup: (id) => `/api/workout-directory/${id}/workouts`,
  workoutLog: '/api/workout-log',
  account: '/api/account/:id',
  // createReview: (id) => `/api/crafty-beers/${id}/reviews`,
  // singleReview: (workoutId, reviewId) =>
  //   `/api/workouts/${workoutId}/reviews/${reviewId}`,
  login: '/api/login',
  register: '/api/register',
  // search: (query) => `/api/workouts/search?search=${query}`,
  // cloudinary: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
};

const getHeaders = () => ({
  headers: {
    authorization: `Bearer ${AUTH.getToken()}`,
  },
});

const GET = (endpoint) => axios.get(endpoint);
const POST = (endpoint, body, headers) =>
  headers ? axios.post(endpoint, body, headers) : axios.post(endpoint, body);
const PUT = (endpoint, body, headers) => axios.put(endpoint, body, headers);
const DELETE = (endpoint, headers) => axios.delete(endpoint, headers);

export const API = { GET, POST, PUT, DELETE, ENDPOINTS, getHeaders };
