<template>
  <header>
    <div class="poster-img">
      <img :src="image" alt="" />
    </div>
    <div class="details-wrap">
      <h1>{{ movieDetails.title }}</h1>
      <div class="rating">
        <svg
          height="511pt"
          viewBox="0 -10 511.98685 511"
          width="511pt"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0"
            fill="#f5b729"
          />
        </svg>
        <div class="voting">
          <p>{{ movieDetails.vote_average }}</p>
          <p style="color:lightgray">{{ movieDetails.vote_count }} votes</p>
        </div>
      </div>

      <ul class="info">
        <li class="li-start">{{ movieDetails.release_date }}</li>
        <li>{{ movieDetails.runtime }}</li>
        <li class="li-last">{{ movieDetails.original_language }}</li>
        <ul class="genres">
          <li v-for="genre in movieDetails.genres" :key="genre.name">
            {{ genre.name }}&nbsp;
          </li>
        </ul>
      </ul>
      <p class="overview">{{ movieDetails.overview }}</p>
    </div>
  </header>
</template>

<script>
export default {
  name: "DetailsHeader",
  props: {
    movieDetails: Object,
    image: String,
  },
};
</script>

<style scoped lang="scss">
header {
  display: flex;
  background-color: #1c2230;
  width: 80%;
  margin: 2rem 0 0 0;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
  @media screen and (max-width: 500px) {
    width: 90%;
  }
  h1 {
    font-size: 3rem;
    margin: 1rem 0 1rem 0;
    @media screen and (max-width: 800px) {
      font-size: 2rem;
    }
  }

  .poster-img {
    margin: 0 1rem 0 0;
    @media screen and (max-width: 1200px) {
      height: 40vh;
    }
    img {
      position: relative;
      bottom: 80px;
      height: 100%;
      @media screen and (max-width: 1200px) {
        bottom: 10px;
      }
    }
  }

  .rating {
    display: flex;

    align-items: center;
    svg {
      width: 35px;
      height: 35px;
      margin: 0 0.5rem 0 0;
    }
    p {
      color: #f5b729;
      margin: 0.25rem 0.5rem 0 0;
    }
  }
  .info {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .li-start {
      padding: 0 0.75rem 0 0;
    }
    .li-last {
      margin-right: 1.25rem;
    }

    li {
      border-right: 1px solid lightgray;
      padding: 0 0.75rem;
    }
    .genres {
      margin: 1rem 0;
      display: flex;
      align-items: center;
      li {
        height: fit-content;
        border: 1px solid lightgray;
        padding: 0 0.75rem;
        margin: 0 0.5rem 0 0;
      }
    }
  }
  .overview {
    margin: 2rem 0;
    line-height: 20px;
    @media screen and (max-width: 800px) {
      margin: 1rem 0;
    }
  }
}
</style>
