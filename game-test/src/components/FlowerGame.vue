/* eslint-disable */
<template>
  <div>
    <flower
      v-for="(flower, index) in flowers"
      :flower="flower"
      :key="index"
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
      console.log("Hey"); // to test remove later
      this.flowers.push(flower);
      const flower = this.createFlower();
    },
    createFlower() {
      const getRandomInt = max => {
        return Math.floor(Math.random() * Math.floor(max));
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
