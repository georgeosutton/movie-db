<template>
  <div class="filters">
    <div class="btn-wrap">
      <Button
        :text="'Popular'"
        :color="getColor('/')"
        @btn-click="toggleFilter('/')"
      />
      <Button
        :text="'Upcoming'"
        :color="getColor('upcoming')"
        @btn-click="toggleFilter('/upcoming')"
      />
      <Button
        :text="'TopRated'"
        :color="getColor('top-rated')"
        @btn-click="toggleFilter('/top-rated')"
      />
    </div>
    <h1>{{ title }} Movies</h1>
  </div>
</template>

<script>
import Button from "./Button";

export default {
  name: "Filters",
  components: {
    Button,
  },
  data() {
    return {
      title: this.getTitle(),
    };
  },
  methods: {
    toggleFilter(path) {
      this.$router.push(path);
    },
    //Dynamically changing title & button color based on route
    getTitle() {
      if (this.$route.params.category === "upcoming") {
        return "Upcoming";
      } else if (this.$route.params.category == "top-rated") {
        return "Top Rated";
      } else {
        return "Popular";
      }
    },
    getColor(path) {
      if (this.$route.params.category === path) {
        return "green";
      } else if (
        typeof this.$route.params.category === "undefined" &&
        path === "/"
      ) {
        return "green";
      } else {
        return "#223F5D";
      }
    },
  },
};
</script>

<style scoped lang="scss">
button {
  margin: 1rem 1rem 0 0;
}
.filters {
  width: 1200px;
  height: 20%;
  padding-top: 1rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    margin: 2rem 0;
    @media screen and (max-width: 1250px) {
      margin: 1rem;
    }
  }

  @media screen and (max-width: 1250px) {
    width: 100%;
    min-height: 20vh;
    .btn-wrap {
      margin: 4% 1rem;
    }
  }
}
</style>
