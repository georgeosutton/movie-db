<template>
  <div class="movie-details">
    <BackDrop :backDropImage="backDropImage" />
    <DetailsHeader :image="posterImage" :movieDetails="movieDetails" />
    <Reccommended />
  </div>
</template>

<script>
import requests from "../repository/requests";
import DetailsHeader from "../components/DetailsHeader";
import BackDrop from "../components/BackDrop";
import Reccommended from "../components/Recommended";

export default {
  name: "MovieDetails",

  data() {
    return {
      movieDetails: [],
      posterImage: "",
      backDropImage: "",
    };
  },
  components: {
    DetailsHeader,
    BackDrop,
    Reccommended,
  },
  created() {
    this.getMovieDetails();
  },
  methods: {
    getMovieDetails: async function() {
      const { data } = await requests.getMovieDetails(this.$route.params.id);
      this.movieDetails = data;
      this.backDropImage = `http://image.tmdb.org/t/p/w1280/${this.movieDetails.backdrop_path}`;
      this.posterImage = `http://image.tmdb.org/t/p/w342/${this.movieDetails.poster_path}`;
    },
  },
};
</script>

<style>
.movie-details {
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
