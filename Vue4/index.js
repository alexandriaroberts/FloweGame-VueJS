var app = new Vue({
  el: "#app",
  data: {
    age: 33,
    x: 0,
    y: 0
  },
  methods: {
    add: function(inc) {
      this.age += inc;
    },
    subtract: function(dec) {
      this.age -= dec;
    },
    updateXY: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
});

var app2 = new Vue({
  el: "#app-2",
  data: {
    logName: function() {
      console.log("My name is");
    },
    logAge: function() {
      console.log("My age is");
    }
  }
});

var app3 = new Vue({
  el: "#app-3",
  data: {
    name: "",
    age: ""
  },
  methods: {
    logName: function() {
      console.log("My name is");
    },
    logAge: function() {
      console.log("My age is");
    }
  }
});

var app4 = new Vue({
  el: "#app-4",
  data: {
    a: 0,
    b: 0,
    age: 80
  },
  computed: {
    agePlusA: function(){
        console.log('agePlusA');
        return this.a + this.age;
    },
    agePlusB: function(){
        console.log('agePlusB');
        return this.b + this.age;
    }
  }
});
