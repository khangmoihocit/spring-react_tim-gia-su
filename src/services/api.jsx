// API Service - Base configuration for API calls
import axios from 'axios';

// Create an axios instance with a base URL
const API_URL = 'http://localhost:8080/api'; // Adjust this based on your backend URL

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - Useful for adding authorization tokens
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor - Useful for handling common errors
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle specific error codes
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // Handle unauthorized errors (e.g., redirect to login)
          console.log('Unauthorized access. Please log in again.');
          // You might want to redirect to login page or refresh token
          break;
        case 404:
          console.log('Resource not found.');
          break;
        default:
          console.log(`Error ${error.response.status}: ${error.response.data.message || 'Something went wrong'}`);
      }
    } else if (error.request) {
      console.log('No response received from server.');
    } else {
      console.log('Error setting up request:', error.message);
    }
    return Promise.reject(error);
  }
);

export default instance;