import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cloud.iexapis.com/stable/',
});

export default api;
