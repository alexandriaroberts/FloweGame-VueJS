<template>
  <div class="game-heading">
    <h1>{{ heading }}</h1> 
    <div> 
      <img src="@/assets/basket.png" alt="Flower Basket">
    </div>
    <div> 
      <ul id="flower">
  <li v-for="flower in flowers">
    {{ item.flower }}
  </li>
</ul>
    </div>
    
  </div>

</template>




<script>
export default {
  name: 'Game',
  props: {
    heading: String
    
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
