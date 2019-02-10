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
  template: `
<div>{{ score }}</div>
`,
  props: {
    score: {
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
      <button class="btn" v-show="!gameStarted" @click="startGame">Play Game</button>
    </div>
    <div v-else>
      <score-board class="scoreboard" :score="score"></score-board>
    </div>
  </div>`,
    components: {
    Flower,
    ScoreBoard
  },
  props: {
    gameLength: {
      type: Number,
      required: false,
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
    }
  },

  data() {
    return {
      started: false,
      score: 0,
      flowers: [],
      flowerId: 0,
      gameStarted: false
    };
  },
  methods: {
    // start() {
    //   this.gameStarted = true;
    //   this.score = 0;
    //   this.flowers = {};
    //   this.flowerId = 0;
    //   this.startGame();
    // },
    addFlower() {
      const flower = this.createFlower();
      this.flowers.push(flower);
    },
    createFlower() {
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
    removeFlower() {
      if (this.removeFlower) {
        this.score += 400;
        this.flowers.splice(this.id, 1);
        this.addFlower();
      }
    }
  }
};

//This is a root instance, with one component
new Vue({
  el: "#app",
  components: {
    FlowerGame
  },
  template: `<flower-game id="game" :width="800" :height="700"/>`
});
