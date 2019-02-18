/* eslint-disable */
<template>
  <div :style="{width: width + 'px', height: height + 'px'}">
    <flower
      class="flower"
      v-for="flower in flowers"
      :flower="flower"
      :key="flower.id"
      v-on:HelloEmitting="removeFlower"
    ></flower>

    <div class="screenPlay" v-if="!gameStarted">
      <img class="screen-flower" src="https://i.imgur.com/RjzfjS5.png"/>
      <h1>Flower Game!</h1>
      <p>Click on a flower apearing randomly and you will get points for collecting them. Enjoy!</p>
      <button class="btn" v-show="!gameStarted" @click="start">Play Game!</button>
    </div>
    <div v-else-if="timeRemaining !== 0">
      <score-board class="scoreboard" :score="score" :timeRemaining="timeRemaining"></score-board>
    </div>
    <div class="end-screen" v-else-if="timeRemaining === 0">
      <h1>Congratulations!</h1>
      <h2>The game is finished!😃✨✨🎉</h2>
      <p>Your score is {{score}}!💖</p>
    </div>
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
    },
    duration: {
      type: Number,
      required: false,
      default: 60
    }
  },

  data() {
    return {
      started: false,
      score: 0,
      flowers: [],
      timeRemaining: 0,
      timerId: null,
      flowerId: 0,
      gameStarted: false,
      flowerTimerId: null
    };
  },
  methods: {
    start() {
      this.started = true;
      this.gameStarted = true;
      this.score = 0;
      this.flowers = [];
      this.flowerId = 0;
      this.timeRemaining = this.duration;
      this.startTimer();
      this.startGame();
    },
    startTimer() {
      this.timerId = setInterval(() => {
        if (this.timeRemaining === 0) {
          this.endGame();
        }
        this.timeRemaining -= 1;
      }, 1000);
    },
    addFlower() {
      const getRandomInt = max => {
        return Math.floor(Math.random() * Math.floor(max));
      };
      const flower = this.createFlower();
      const durationOnScreenInMS = Math.max(
        getRandomInt(this.speed) * 1000,
        1000
      );
      this.flowers.push(flower);
      setTimeout(() => {
        this.removeFlower(Flower, true);
      }, durationOnScreenInMS);
      this.flowerTimerId = setTimeout(this.addFlower, 100 * this.speed);
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
      }, this.duration * 1000);
      this.addFlower();
    },
    endGame() {
      clearInterval(this.timerId);
      this.timerId = null;
      this.started = false;
      this.addFlower = null;     
      alert("Times up!");
    },
    removeFlower(flower, userFailedtoClick = false) {
      if (userFailedtoClick !== true) {
        this.score += 400;
      }
      // const index = this.flowers.findIndex(f => f.id === flower.id)
      this.flowers.splice(flower, 1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.div {
  position: absolute;
}
.scoreboard {
  font-size: 28px;
  display: grid;
  margin: 0 auto;
 color: rgb(248, 197, 34);
  text-shadow: 0.5px 0.5px rgb(20, 18, 20);
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.screenPlay {
  text-align: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h1 {
  text-align: center;
  font-size: 60px;
  line-height: 1.1;
  color:  rgb(248, 197, 34);
  text-shadow: 2px 2px rgb(20, 18, 20);
}

h2 {
  text-align: center;
  font-size: 25px;
  line-height: 1.1;
  color:  #fff;
  text-shadow: 2px 2px rgb(20, 18, 20);
}

.end-screen p {
  position: relative;
  font-size: 25px;
  color:  #fff;
  line-height: 1.5;
  text-shadow: 1px 1px rgb(20, 18, 20);
  padding: 2%;
  margin: 5%;
}
p {
  position: relative;
  font-size: 20px;
  color:  #fff;
  line-height: 1.5;
  text-shadow: 1px 1px rgb(20, 18, 20);
  padding: 2%;
  margin: 5%;
}

button {
  background: #fff;
  color: rgb(196, 74, 165);
  text-shadow: 0.5px 0.5px rgb(20, 18, 20);
  font-size: 29px;
  padding: 5%;  
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
}

.screen-flower{
position: relative;
width: 50%;
left: -270px;
top: 20px;
}

.end-screen {
  display: grid;
  text-align: center;
  padding: 10%;
}


</style>
