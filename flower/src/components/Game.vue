<template>
  <div class="game-wrapper">
    <h1>{{ msg }}</h1>
   
    <div> </div>
 
  </div>
</template>

<script>
export default {
  name: 'Game',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
