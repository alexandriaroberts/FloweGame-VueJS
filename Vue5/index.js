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
