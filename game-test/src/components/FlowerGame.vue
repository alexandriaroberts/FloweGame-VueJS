/* eslint-disable */
<template>
<<<<<<< HEAD
  <div :style="{width: width + 'px', height: height + 'px'}">
    <flower
      class="flower"
      v-for="flower in flowers"
      :flower="flower"
      :key="flower.id"
      v-on:HelloEmitting="removeFlower"
    ></flower>

    <div class="screenPlay" v-if="!gameStarted">
      <h1>Flower Game</h1>
      <button class="btn" v-show="!gameStarted" @click="startGame">Play Game</button>
    </div>
    <div v-else>
      <score-board class="scoreboard" :score="score"></score-board>
    </div>
=======
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
>>>>>>> f886eced266dd23d89f419329f0833c6a9e3a802
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
<<<<<<< HEAD
      default: 40 // Seconds
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
    },
    speed: {
      type: Number,
      required: false,
      default: 5
=======
      default: 1000 // Seconds
>>>>>>> f886eced266dd23d89f419329f0833c6a9e3a802
    }
  },

  data() {
    return {
<<<<<<< HEAD
      started: false,
=======
>>>>>>> f886eced266dd23d89f419329f0833c6a9e3a802
      score: 0,
      flowers: [],
      flowerId: 0,
      gameStarted: false
    };
  },
  methods: {
<<<<<<< HEAD
    // start() {
    //   this.gameStarted = true;
    //   this.score = 0;
    //   this.flowers = {};
    //   this.flowerId = 0;
    //   this.startGame();
    // },
    addFlower() {
      const getRandomInt = max => {
        return Math.floor(Math.random() * Math.floor(max));
      };
      const flower = this.createFlower();
      //const durationOnScreenInMS = Math.max(getRandomInt(this.speed) * 1000, 1000);
      this.flowers.push(flower);
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
=======
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
>>>>>>> f886eced266dd23d89f419329f0833c6a9e3a802
    startGame() {
      this.score = 0;
      this.gameStarted = true;
      setTimeout(() => {
        this.endGame();
      }, this.gameLength * 1000);
      this.addFlower();
    },
<<<<<<< HEAD
    endGame() {
      alert("Times up!");
    },
    removeFlower() {
      if (this.removeFlower) {
        this.score += 400;
        this.flowers.splice(this.id, 1);
        this.addFlower();
=======

    endGame() {
      alert("Times up!");
    },
    aFlowerClicked() {
      console.log("Emit inside the flower game"); //testing emit
      if (this.aFlowerClicked) {
        this.score += 100;
>>>>>>> f886eced266dd23d89f419329f0833c6a9e3a802
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
<<<<<<< HEAD
.scoreboard {
  font-size: 28px;
  text-align: center;
  margin: 0 auto;
  color: #f7f8f8;
  text-shadow: 2px 2px rgb(163, 33, 120);
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.screenPlay {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h1 {
  font-size: 64px;
  color: #f7f8f8;
  text-shadow: 2px 2px rgb(163, 33, 120);
}

button {
  background: #f7f8f8;
  color: rgb(163, 33, 120);
  font-size: 29px;
  padding: 5%;
  border-radius: 35px;
  transition: all 0.2s ease-in-out;
}
=======
>>>>>>> f886eced266dd23d89f419329f0833c6a9e3a802
</style>
