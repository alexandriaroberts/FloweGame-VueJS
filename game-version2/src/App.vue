<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Game"/>
    <flower-game/>
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
 
}
</style>
