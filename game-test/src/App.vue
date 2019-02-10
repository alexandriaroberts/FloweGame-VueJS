<template>
  <div id="app">
    <flower-game id="game" :width="800" :height="700"/>
  </div>
</template>

<script>
import FlowerGame from "./components/FlowerGame.vue";
export default {
  name: "app",
  components: {
    FlowerGame
  }
};
</script>

<style>
body {
  height: 100%;
  background: #f7f8f8;
  background: linear-gradient(to bottom, #acbb78, #f7f8f8);
}
#app {
<<<<<<< HEAD
  font-family: "Avenir", Helvetica, Arial, sans-serif;
=======
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
>>>>>>> f886eced266dd23d89f419329f0833c6a9e3a802
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#game {
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  height: 100%;
  background: #283c86;
  background: -webkit-linear-gradient(to left, #45a247, #283c86);
  background: linear-gradient(to left, #45a247, #283c86);
}
</style>
