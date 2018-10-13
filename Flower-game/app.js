Vue.component('flower-component', {
  data() {
   return {
     score: 0
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