import axios from 'axios';

// base da url = https://api.themoviedb.org/3/
// Url da api = https://api.themoviedb.org/3/movie/now_playing?api_key=2adf19fce18aa9a2a3942a6206f15a75 

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;