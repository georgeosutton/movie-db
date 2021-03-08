import axios from "../axios";

const key = "f9c3ae91ea7132ed424564f73bb859e0";

export default {
  getPopularMovies() {
    return axios.get(`movie/popular?api_key=${key}&language=en-US&page=1`);
  },
  getUpcomingMovies() {
    return axios.get(`movie/upcoming?api_key=${key}&language=en-US&page=1`);
  },
  getTopRatedMovies() {
    return axios.get(`movie/top_rated?api_key=${key}&language=en-US&page=1`);
  },
  getMovieDetails(id) {
    return axios.get(`movie/${id}?api_key=${key}&language=en-US`);
  },
  getReccomended(id) {
    return axios.get(
      `movie/${id}/recommendations?api_key=${key}&language=en-US&page=1`
    );
  },
};
