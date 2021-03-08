<template>
  <div class="movie-list">
    <div class="items-wrap">
      <MovieItem
        :className="'movie-item'"
        v-for="movie in movieList"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script>
import requests from "../repository/requests";

import MovieItem from "./MovieItem";
export default {
  name: "MovieList",
  components: {
    MovieItem,
  },
  data() {
    return {
      movieList: [],
    };
  },
  created() {
    this.getMovieList();
  },
  methods: {
    getMovieList: async function() {
      if (this.$route.params.category == "top-rated") {
        const { data } = await requests.getTopRatedMovies();
        this.movieList = data.results;
      } else if (this.$route.params.category == "upcoming") {
        const { data } = await requests.getUpcomingMovies();
        this.movieList = data.results;
      } else {
        const { data } = await requests.getPopularMovies();
        this.movieList = data.results;
      }
    },
  },
};
</script>

<style lang="scss">
.movie-list {
  width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 1250px) {
    width: 100%;
  }
}
.items-wrap {
  padding: 0 0 10% 0;

  display: grid;
  gap: 2rem 1.5rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    margin: 0 1rem;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
  .movie-item {
    cursor: pointer;

    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
