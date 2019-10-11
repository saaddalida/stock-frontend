import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cloud.iexapis.com/stable/',
  headers: { token: `${process.env.AUTH_TOKEN}` },
});

export default api;
