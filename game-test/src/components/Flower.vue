<template>
  <div>
    <img v-for="(image, index) in flowerDetails" 
         v-bind:src="image.url"
         :key="index" 
         v-on:click="aFlowerClicked"
         v-bind:style="{background: background, top: top, left: left, position: position}"/>
  
  </div>
</template>

<script>
export default {
  name: "Flower",
  data() {
    return {      
      flowerDetails: 
        {id:1, url: 'https://i.imgur.com/XG5hBW3.png'} 
        
      }
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
      aFlowerClicked (index) {
          console.log('Click in the flower');
          this.$emit('HelloEmitting');
          this.flowerDetails.splice(index, 1);
      },
      //Working on random image here
     randomPosition (x,y) {
       
        x = Math.floor(Math.random() * 150) + px;
        y = Math.floor(Math.random() * 150) + px;
         console.log('working?');     
       this.randomPosition(x,y);
      
     }
    }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 150px;
  height: 200px;
}

div {
  position: absolute;
  
}
</style>
