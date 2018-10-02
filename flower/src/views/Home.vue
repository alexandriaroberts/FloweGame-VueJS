<template>
  <div class="home">
       <Game heading="Pick The Flowers!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Game from '@/components/Game.vue'

export default {
  name: 'home',
  components: {
    Game
  }
}
</script>
