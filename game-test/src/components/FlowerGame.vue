/* eslint-disable */
<template>
  <div :style="{width: width + 'px', height: height + 'px'}">
    <flower
      v-for="flower in flowers"
      :flower="flower"
      :key="flower.id"
      v-on:HelloEmitting="aFlowerClicked"
    ></flower>
    <!-- This button is for testing random images and clicks. -->
    <button @click="addFlower">Add Flower Here</button>
    <button v-show="!gameStarted" @click="startGame">Play Game</button>
    <score-board :score="score"></score-board>
  </div>
</template>

<script>
import Flower from "./Flower.vue";
import ScoreBoard from "./ScoreBoard.vue";
export default {
  name: "FlowerGame",
  components: {
    Flower,
    ScoreBoard
  },
  props: {
    gameLength: {
      type: Number,
      required: false,
      default: 1000 // Seconds
    },
    width: {
      type: Number,
      required: false,
      default: 800
    },
    height: {
      type: Number,
      required: false,
      default: 600
    }
  },

  data() {
    return {
      score: 0,
      flowers: [],
      flowerId: 0,
      gameStarted: false
    };
  },
  methods: {
    addFlower() {
       const getRandomInt = max => {
        return Math.floor(Math.random() * Math.floor(max));
      };  
        const flower = this.createFlower();
      const durationOnScreenInMS = Math.max(getRandomInt(this.speed) * 1000, 1000);
      this.flowers.push(flower);
      setTimeout(() => { this.removeFlower(flower,true)}, durationOnScreenInMS)
    
    },
    removeFlower () {

    },
    createFlower() {
      const getRandomInt = max => {
        return Math.floor(Math.random() * Math.floor(max));
      };   
      return {
        id: ++this.flowerId,
        x: getRandomInt(this.width),
        y: getRandomInt(this.height),
        value: (1 + getRandomInt(9)) * 100
      };
    },
    startGame() {
      this.score = 0;
      this.gameStarted = true;
      setTimeout(() => {
        this.endGame();
      }, this.gameLength * 1000);
      this.addFlower();
    },

    endGame() {
      alert("Times up!");
    },
    aFlowerClicked() {
      console.log("Emit inside the flower game"); //testing emit
      if (this.aFlowerClicked) {
        this.score += 100;       
       }
       
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
