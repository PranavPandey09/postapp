import axios from 'axios';

// Create an instance of Axios
const api = axios.create({
  baseURL: '', // Replace with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});
