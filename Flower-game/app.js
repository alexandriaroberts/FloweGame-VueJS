const Flower = {
  template: `<div> <img v-for="(image, index) in flowerDetails" 
                        v-bind:src="image.url" 
                        :key="index"
                        v-on:click="aFlowerClicked" 
                        v-bind:style="position">
                   </img>
    </div>`,
  data() {
    return {
      background: "red",
      xValue: 500,
      flowerDetails: [
        { id: 1, url: "https://i.imgur.com/XG5hBW3.png" },
        { id: 2, url: "https://i.imgur.com/TmoqCci.png" },
        { id: 3, url: "https://i.imgur.com/vdamVn4.png" },
        { id: 4, url: "https://i.imgur.com/BuSfAhu.png" },
        { id: 5, url: "https://i.imgur.com/UoIgbHR.png" },
        { id: 6, url: "https://i.imgur.com/7Xwc9BA.png" }
      ]
    };
  },
  props: {
    flower: {
      type: Object,
      required: true
    }
  },
  methods: {
    aFlowerClicked(index) {
      console.log("Click in the flower");
      this.$emit("HelloEmitting");
      this.flowerDetails.splice(index, 1);
    },
    position() {
      var x = this.Math.random() * 130;
      var y = this.Math.random() * 130;
      return "x" + "y";
    }
  }
};

//child component
const Scoreboard = {
  template: `
    <div>{{ score }}</div>
  `,
  props: {
    score: {
      type: Number,
      required: true
    },
    methods: {
      incrementScore() {}
    }
  }
};

//Controls the flowers, score, start game and end game
//main component, with its 2 components
const FlowerGame = {
  components: {
    Flower,
    Scoreboard
  },
  props: {
    gameLength: {
      type: Number,
      required: false,
      default: 5 // Seconds
    }
  },
  data() {
    return {
      score: 0,
      flowers: [],
      gameStarted: false
    };
  },
  methods: {
    addFlower() {
      console.log("Hey"); // to test remove later
      this.flowers.push({
        //An empty object
      });
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
  },
  template: `<div>
                 <flower v-for="(flower, index) in flowers" 
                         :flower="flower" 
                         :key="index" 
                         v-on:HelloEmitting="aFlowerClicked">
          
                 </flower>
                 <button v-show="!gameStarted" 
                         @click="startGame">
                       Play Game
                  </button>
                 <Scoreboard :score="score"></Scoreboard> 
        </div>`
};

//This is a root instance, with one component
new Vue({
  el: "#app",
  components: {
    FlowerGame
  },
  template: `<flower-game/>`
});
