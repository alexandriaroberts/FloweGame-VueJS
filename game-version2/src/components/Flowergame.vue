/* eslint-disable */
<template>
  <div :style="{ width: width + 'px', height: height +'px'}">
    <flower v-for="flower in flowers" :flower="flower" :key="flower.id"></flower>

    <button @click="startGame">Play Game</button>
  </div>
</template>

<script>
import Flower from "./Flower.vue";
//import ScoreBoard from "./ScoreBoard.vue";
export default {
  name: "FlowerGame",
  components: {
    Flower
  },
  props: {
    width: {
      type: Number,
      required: false,
      default: 800
    },
     height: {
      type: Number,
      required: false,
      default: 800
    }
  },
  data() {
    return {
      flowers: [],
      flowerId: 0
    };
  },
  methods: {
    start () {
      this.flowers = [];
      this.flowerId = 0;
      this.startGame();
    },
    startGame() {
      this.addFlowers();
    },
    addFlowers() {
      const flower = this.createFlower();
       this.flowers.push(flower);
    },
    createFlower() {
      const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
      };
      return {
        id: ++ this.flowerId,
        x: getRandomInt(this.width),
        y: getRandomInt(this.height),
        value: (1 + getRandomInt(9))* 100
      }
    },
    removeFlower () {

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.div {
  position: absolute;
}
</style>
