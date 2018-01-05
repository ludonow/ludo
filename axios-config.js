import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.ludonow.com',
  withCredentials: 'true'
});

module.exports = axiosInstance;
