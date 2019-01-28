<template>
  <div>
    <img v-for="(image, index) in flowerDetails" 
         v-bind:src="image.url"
         :key="index" 
         v-on:click="aFlowerClicked"
         v-bind:style="position"/>
  
  </div>
</template>

<script>
export default {
  name: "Flower",
  data() {
    return {
      background: 'red',
      xValue: 500,
      flowerDetails: [
        {id:1, url: 'https://i.imgur.com/XG5hBW3.png'},
        {id:2, url: 'https://i.imgur.com/TmoqCci.png'},
        {id:3, url: 'https://i.imgur.com/vdamVn4.png'},
        {id:4, url: 'https://i.imgur.com/BuSfAhu.png'},
        {id:5, url: 'https://i.imgur.com/UoIgbHR.png'},
        {id:6, url: 'https://i.imgur.com/7Xwc9BA.png'}        
        ]     
    }
  },
  props: {
    flower: {
      type: Object,
      required: true
    }
  },

    methods: {
      //Was testing and it worked, need to find a proper solution
      aFlowerClicked (index) {
          console.log('Click in the flower');
          this.$emit('HelloEmitting');
          this.flowerDetails.splice(index, 1);
      },
      //Working on random image here
      position () {
        var x = this.Math.random() * 130;
        var y = this.Math.random() * 130;
        return 'x' + 'y';
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
</style>
