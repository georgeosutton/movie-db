<template>
  <div :class="className" @mouseover="hover = true" @mouseleave="hover = false">
    <router-link :to="{ path: '/movie' + '/' + movie.id }">
      <div class="item-wrap">
        <img
          class="poster"
          :style="hover ? ' filter: brightness(40%)' : ''"
          :src="image"
          alt=""
        />
        <div v-show="hover" class="title-wrap">
          <p>{{ movie.release_date }}</p>
          <p class="title">{{ movie.title }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    movie: Object,
    className: String,
  },
  data() {
    return {
      image: "",
      hover: false,
    };
  },
  created() {
    this.getPosterURL(this.movie.poster_path);
  },
  methods: {
    getPosterURL: function(path) {
      this.image = `http://image.tmdb.org/t/p/w342/${path}`;
    },
  },
};
</script>

<style lang="scss">
.item-wrap {
  position: relative;

  .title-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  p {
    margin: 0.5rem 0;
    position: relative;
    color: white;
  }
}
</style>
