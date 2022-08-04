import axios from 'axios';
import { API_KEY, BASE_URL } from 'constants/api';

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
    include_adult: false,
  },
});

export const getTrendingMovies = async () => {
  const response = await instance.get('/trending/movie/day');
  return response.data.results;
};

export const searchMovies = async searchQuery => {
  const response = await instance.get('/search/movie', {
    params: {
      query: searchQuery,
    },
  });
  return response.data.results;
};

export const getMovieById = async movieId => {
  const response = await instance.get(`/movie/${movieId}`);
  return response.data;
};

export const getCast = async movieId => {
  const response = await instance.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};

export const getReviews = async movieId => {
  const response = await instance.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};
