import axios from 'axios';
import { AUTH } from './auth';

const ENDPOINTS = {
  allWorkouts: '/api/workouts',
  singleWorkout: (id) => `/api/workouts/${id}`,
  workoutDirectory: '/api/workout-directory',
  workoutsBySelectedMuscleGroup: `/api/workout-directory/workouts`,
  selectedWorkouts: `/api/workout-log`,
  workoutLog: '/api/workout-log',
  account: (userId) => `/api/account/${userId}`,
  // createReview: (id) => `/api/workouts/${id}/reviews`,
  // singleReview: (workoutId, reviewId) =>
  //   `/api/workouts/${workoutId}/reviews/${reviewId}`,
  login: '/api/login',
  register: '/api/register',
  search: (query) => `/api/workouts/search?search=${query}`,
  cloudinary: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
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
