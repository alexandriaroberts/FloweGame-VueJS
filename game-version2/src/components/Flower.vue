<template>
  <div>
    <img
      class="flower"
      alt="Flower Image"
      :src="flowerDetails.url"
      :style="{ left: flower.x + 'px', top: flower.y + 'px', background: background}">
   
  </div>
</template>

<script>
export default {
  name: "Flower",
  props: {
    msg: String
  },
  data() {
    return {
      flowerDetails: { id: 1, url: "https://i.imgur.com/RjzfjS5.png" },
      background: "red"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flower {
  /* top: 60px;
    left: 100px; */
  position: absolute;
}
</style>
