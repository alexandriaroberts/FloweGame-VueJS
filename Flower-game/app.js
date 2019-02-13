const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

const Flower = {
  template: `<div id="flower">
<img
class="flower"
v-bind:src="flowerDetails.url"
v-on:click="aFlowerClicked"
:style="{left: flower.x + 'px', top: flower.y +'px'}"/>
</div>`,
  data() {
    return {
      flowerDetails: { url: "https://i.imgur.com/RjzfjS5.png" }
    };
  },
  props: {
    flower: {
      type: Object,
      required: true
    }
  },
  methods: {
    //using emit to find flower clicked
    aFlowerClicked(index) {
        this.$emit("HelloEmitting");
    }
  }
};

//child component
const ScoreBoard = {
  template: ` <div>
  <span>Score: {{ score }}</span><br>
  <span>Time: {{ timeRemaining }}</span>
  </div>
`,
  props: {
    score: {
      type: Number,
      required: true
    },
    timeRemaining: {
      type: Number,
      required: true
    }
  }
};

//Controls the flowers, score, start game and end game
//main component, with its 2 components
const FlowerGame = {
    template: ` <div :style="{width: width + 'px', height: height + 'px'}">
    <flower
      class="flower"
      v-for="flower in flowers"
      :flower="flower"
      :key="flower.id"
      v-on:HelloEmitting="removeFlower"
    ></flower>

    <div class="screenPlay" v-if="!gameStarted">
    <h1>Flower Game</h1>
    <button class="btn" v-show="!gameStarted" @click="start">Play Game</button>
  </div>
  <div v-else>
    <score-board class="scoreboard" :score="score" :timeRemaining="timeRemaining"></score-board>
  </div>
</div>
  </div>`,
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
      flowerTimerId : null
    }
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
        if(this.timeRemaining === 0) {
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
      const durationOnScreenInMS = Math.max(getRandomInt(this.speed) * 1000,1000);
      this.flowers.push(flower);
      setTimeout(() => {
        this.removeFlower(Flower, true);
      }, durationOnScreenInMS);
     this.flowerTimerId = setTimeout(this.addFlower, 100* this.speed);

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

//This is a root instance, with one component
new Vue({
  el: "#app",
  components: {
    FlowerGame
  },
  template: `<flower-game id="game" :speed="5" :duration="60" :width="500" :height="500"/>`
});
