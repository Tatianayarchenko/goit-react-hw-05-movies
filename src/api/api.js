import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '1d1120e9d6d730509fa5db5176245d73';

export const getTrendingMovies = async () => {
  const response = await axios.get('/trending/movie/day', {
    params: {
      api_key: API_KEY,
      // language: 'en-US',
      // include_image_language: 'en-US',
    },
  });
  // console.log(response);
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

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
export const getMovieById = async movieId => {
  const response = await axios.get(`/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      include_adult: false,
    },
  });
  return response.data;
  // .find(movie => movie.id === movieId)
};

// const requestPopularFilms =
//   'https://api.themoviedb.org/3/movie/popular?api_key=1d1120e9d6d730509fa5db5176245d73&language=en-US&page=1';

// /trending/movie/day

// const SearchMoviesURL =
//   'https://api.themoviedb.org/3/search/movie?api_key=1d1120e9d6d730509fa5db5176245d73&language=en-US&page=1&include_adult=false';

// getImages();

// export const getImages = async (searchQuery, page) => {
//   const response = await axios.get('/movie', {
//     params: {
//       key: API_KEY,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       per_page: 12,
//       q: searchQuery,
//       page,
//     },
//   });

//   return response.data;
// };
