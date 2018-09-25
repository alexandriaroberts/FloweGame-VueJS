var app = new Vue({
  el: "#app",
  data: {
    active: false,
    nearby: false
  }
});

var app2 = new Vue({
  el: "#app-2",
  data: {
    active: false,
    nearby: false
  },
  methods: {},
  computed: {
    computedClass: function() {
      return {
        active: this.active,
        nearby: this.nearby
      };
    }
  }
});

var app2 = new Vue({
  el: "#app-3",
  data: {
    games: ["cards", "chess", "backgamon"],
    players: [
      { name: "Lex", Score: 100 },
      { name: "John", Score: 10 }, 
      { name: "Jake", Score: 50 },
    ]
  }
});
