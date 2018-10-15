Vue.component("flower-component", {
  data() {
    return {
      score: 0
    };
  },
  methods: {
    countScore: function() {
      this.score += 10;
    },
    /*Todo: Work out a way to get the random flower here in Vue */
    getRandomFlower: function(){
      
    }
  },
  props: ["id", "image"],
  template: "#flower-component"
});

/* Array of items */
var app = new Vue({
  el: "#app",
  data() {
    return {
      flowers: [
        {
          position: "flower1",
          image: "./img/flower-1.png"
        },
        {
          id: "flower2",
          image: "./img/flower-2.png"
        },
        {
          id: "flower3",
          image: "./img/flower-3.png"
        }
      ]
    };
  }
});
