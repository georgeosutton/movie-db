<template>
  <div class="back-drop">
    <img :src="backDropImage" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackDrop",
  props: {
    backDropImage: String,
  },
};
</script>

<style scoped lang="scss">
.back-drop {
  width: 100%;
  height: 50vh;
  @media screen and (max-width: 500px) {
    height: 30vh;
  }
  img {
    opacity: 0.5;
    width: 100%;
    height: 100%;
  }
}
</style>
