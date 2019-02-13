<template>
  <div id="flower">
    <img
      class="flower"
      v-bind:src="flowerDetails.url"
      v-on:click="aFlowerClicked"
      :style="{left: flower.x + 'px', top: flower.y +'px'}"
    >
  </div>
</template>

<script>
export default {
  name: "Flower",
  data() {
    return {
      flowerDetails: { url: "https://i.imgur.com/RjzfjS5.png" }
    };
  },
  props: {
    flower: {
      type: Object,
      required: true
    }
  },

  methods: {
    //Was testing and it worked, need to find a proper solution
    aFlowerClicked(index) {
       this.$emit("HelloEmitting");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 70px;
  height: 70px;
}

.flower {
  position: absolute;
  cursor: pointer;
  background: transparent;
  padding: 5%;
}
</style>
