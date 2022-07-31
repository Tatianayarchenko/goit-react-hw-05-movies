import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '1d1120e9d6d730509fa5db5176245d73';

export const getTrendingMovies = async () => {
  const response = await axios.get('/trending/movie/day', {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
};

export const searchMovies = async searchQuery => {
  const response = await axios.get('/search/movie', {
    params: {
      api_key: API_KEY,
      query: searchQuery,
      language: 'en-US',
      include_adult: false,
    },
  });
  return response.data.results;
};

export const getMovieById = async movieId => {
  const response = await axios.get(`/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      include_adult: false,
    },
  });
  return response.data;
};

export const getCast = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

  return response.data.cast;
};

export const getReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

  return response.data.results;
};
