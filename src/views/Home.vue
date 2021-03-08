<template>
  <div class="home">
    <Filters />
    <MovieList />
  </div>
</template>

<script>
import MovieList from "../components/MovieList";
import Filters from "../components/Filters";

export default {
  name: "Home",
  components: {
    MovieList,
    Filters,
  },
};
</script>
