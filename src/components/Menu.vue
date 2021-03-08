<template>
  <div v-show="showMenu" class="circle"></div>
  <nav>
    <div class="menu-svg" @click="onClick()">
      <svg v-show="!showMenu" viewBox="0 0 100 76">
        <rect width="100" height="10"></rect>
        <rect y="33" x="0" width="100" height="10"></rect>
        <rect y="66" width="100" height="10"></rect>
      </svg>
      <svg
        v-show="showMenu"
        viewBox="0 0 329.26933 329"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
        />
      </svg>
    </div>

    <ul v-show="showMenu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/upcoming">Upcoming</router-link></li>
      <li><router-link to="/top-rated">TopRated</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    onClick() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  z-index: 10;
  position: fixed;
  right: 30px;
  top: 25px;
  .menu-svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
    svg {
      fill: white;
      width: 100%;
      height: 100%;
    }
  }
  ul {
    position: absolute;
    list-style: none;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    li {
      margin: 0.75rem 0 0 0;
    }
    a {
      text-decoration: none;
      color: white;
    }
    a:hover {
      text-decoration: underline;
    }
  }
}
.circle {
  position: fixed;
  top: -25px;
  right: -30px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #244b72;
  opacity: 0.7;
  z-index: 1;
}
</style>
