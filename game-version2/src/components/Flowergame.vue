<template>
  <div class="game">
    <flower>Are you working?</flower>
  </div>
</template>

<script>
import Flower from "../components/Flower.vue";
export default {
  name: "FlowerGame",
  components: {
    Flower
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game {
  position: relative;  
}
</style>
