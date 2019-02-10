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
<<<<<<< HEAD
    return {
      flowerDetails: { url: "https://i.imgur.com/RjzfjS5.png" }
    };
=======
    return {      
      flowerDetails: 
        {id:1, url: 'https://i.imgur.com/XG5hBW3.png'} 
        
      }
>>>>>>> f886eced266dd23d89f419329f0833c6a9e3a802
  },
  props: {
    flower: {
      type: Object,
      required: true
    },
     top: 350,
     left: Math.random() *350 + 'px'
  },

  methods: {
    //Was testing and it worked, need to find a proper solution
    aFlowerClicked(index) {
      console.log("Click in the flower");
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
}
</style>
