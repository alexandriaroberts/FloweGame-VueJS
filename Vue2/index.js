var app = new Vue({
  el: "#app",
  data: {
    seen: true
  }
});
app.seen = false;

var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "Loading this page" + new Date().toLocaleString()
  }
});

var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [
      { text: "Learn JS" },
      { text: "Learn Vue" },
      { text: "Have fun making a game" }
    ]
  }
});

app4.todos.push({ text: "Practice rigorously!" });

var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Hello World!"
  },
  methods: {
    reverseText: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
});

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: "Hello"
  }
});


