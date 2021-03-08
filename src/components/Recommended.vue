<template>
  <div class="reccomended">
    <h2>Reccommended Movies</h2>
    <div class="rec-wrap">
      <MovieItem
        :className="'rec-item'"
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
  Name: "Reccommended",
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
      const { data } = await requests.getReccomended(this.$route.params.id);
      this.movieList = data.results;
    },
  },
};
</script>

<style lang="scss">
.reccomended {
  width: 80%;
  margin: 0 auto;
  padding-bottom: 2rem;
  @media screen and (max-width: 500px) {
    width: 90%;
  }
  h2 {
    font-size: 2.4rem;
    margin: 1rem 0;
    @media screen and (max-width: 800px) {
      font-size: 2rem;
    }
  }
  .rec-wrap {
    display: grid;
    gap: 2rem 1.5rem;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    @media screen and (max-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (max-width: 800px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 500px) {
      grid-template-columns: 1fr;
    }
    .rec-item {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
