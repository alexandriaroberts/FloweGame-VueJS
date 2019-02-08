<template>
  <div>
      <div class="flower" :style="{ top: x + 'px', left: y + 'px', background: background}">Gooo</div>
      <img class="flower" alt="Flower Image" :src="flowerDetails.url"
           :style="{ top: x + 'px', left: y + 'px', background: background}">
     
 
  </div>
</template>

<script>
export default {
  name: "Flower",
  props: {
    msg: String,
    // x: Number,
    // y: Number
    x: {
        type: Number,
        required: true,
        default: 100 
    },
    y: {
        type: Number,
        required: true,
        default: 10 
    }
  },
  data() {
    return {
      flowerDetails: { id: 1, url: "https://i.imgur.com/RjzfjS5.png" },
     background: 'red'
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
