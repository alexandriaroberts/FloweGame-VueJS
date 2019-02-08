<template>
  <div id="app">
      <flower-game id="game" :width="800" :height="600"/> 
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; 
  margin-top: 60px;
}

#game {
   position: relative;
   overflow: hidden;
   background: #2c3e50;
}
</style>
