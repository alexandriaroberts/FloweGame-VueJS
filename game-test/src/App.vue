<template>
  <div id="app">
      <flower-game/> 
  </div>
</template>

<script>
import FlowerGame from './components/FlowerGame.vue'
export default {
  name: 'app',
  components: {
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
