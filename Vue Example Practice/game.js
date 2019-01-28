
Vue.component('child', {
props: {
    count: {
        type: Number,
        required: true
    }
},
template:`<div>{{ count }}</div>`
})


new Vue({
el: '#app',
data() {
    return {
        count: 0
    }
},
methods: {
    increment() {
        this.count++;
      },
      decrement() {
        this.count--;
      }
}
});
  
  