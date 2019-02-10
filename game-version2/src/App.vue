<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Game"/>
    <flower-game :width="800" :height="600"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FlowerGame from './components/Flowergame.vue'


export default {
  name: 'app',
  components: {
    HelloWorld,
    FlowerGame
  }
}
</script>

<style>
#app {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
 background: #3b73ac;
  margin-top: 60px;
 
}
</style>
