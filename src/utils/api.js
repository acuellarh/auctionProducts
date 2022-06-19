import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3001',
  // baseURL: process.env.REACT_APP_API_URL
  timeout: 5000,
});

