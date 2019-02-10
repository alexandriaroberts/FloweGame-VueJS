<template>
  <div>
<<<<<<< HEAD
      <div class="flower" :style="{ top: x + 'px', left: y + 'px', background: background}">Gooo</div>
      <img class="flower" alt="Flower Image" :src="flowerDetails.url"
           :style="{ top: x + 'px', left: y + 'px', background: background}">
     
 
=======
    <img
      class="flower"
      alt="Flower Image"
      :src="flowerDetails.url"
      :style="{ left: flower.x + 'px', top: flower.y + 'px', background: background}">
   
>>>>>>> f886eced266dd23d89f419329f0833c6a9e3a802
  </div>
</template>

<script>
export default {
  name: "Flower",
  props: {
<<<<<<< HEAD
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
=======
    msg: String
>>>>>>> f886eced266dd23d89f419329f0833c6a9e3a802
  },
  data() {
    return {
      flowerDetails: { id: 1, url: "https://i.imgur.com/RjzfjS5.png" },
<<<<<<< HEAD
     background: 'red'
=======
      background: "red"
>>>>>>> f886eced266dd23d89f419329f0833c6a9e3a802
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flower {
<<<<<<< HEAD
    /* top: 60px;
    left: 100px; */
  position: absolute;
 
  
} 
=======
  /* top: 60px;
    left: 100px; */
  position: absolute;
}
>>>>>>> f886eced266dd23d89f419329f0833c6a9e3a802
</style>
