Vue.component("todo-item", {
  template: "<li>1st Todo</li>"
});

var app7 = new Vue({
  el: "#app-7"
});

Vue.component("todo-item", {
  //Props is like a custom attribute which you can register on a component
  //When value is passed it becomes the property of that component instance
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>"
});

var app8 = new Vue({
  el: "#app-8",
  data: {
    list: [
      { id: 0, text: "Salad" },
      { id: 1, text: "cheese" },
      { id: 2, text: "olive oil" }
    ]
  }
});
