<template>
  <Menu />
  <router-view :key="$route.fullPath" />
</template>

<script>
import Menu from "./components/Menu";

export default {
  components: {
    Menu,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: white;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #1c2230;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
ul {
  list-style: none;
}
</style>
