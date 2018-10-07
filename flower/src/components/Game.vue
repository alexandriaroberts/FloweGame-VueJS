<template>
  <div class="game">
    <h1>{{ heading }}</h1> 
    <!-- Basket-->
    <div> 
      <img src="@/assets/basket.png" alt="Flower Basket">
    </div>
    <!-- Flowers-->
    <div> 
      
          <flower v-for="flower in flowers" v-bind="">
            {{ item.flower }}
          </flower>
          <!--
           <li>
            <img src="@/assets/flower-2.png" alt="Flower" width="100px" height="210px">
          </li>
           <li>
            <img src="@/assets/flower-3.png" alt="Flower" width="100px" height="210px">
          </li>
           <li>
            <img src="@/assets/flower-4.png" alt="Flower" width="100px" height="210px">
          </li>
           <li>
            <img src="@/assets/flower-5.png" alt="Flower" width="100px" height="210px">
          </li>
           <li>
            <img src="@/assets/flower-6.png" alt="Flower" width="100px" height="210px">
          </li>
           <li>
            <img src="@/assets/flower-7.png" alt="Flower" width="100px" height="210px">
          </li>
           <li>
            <img src="@/assets/flower-8.png" alt="Flower" width="100px" height="210px">
          </li> -->
      
     </div>
    
  </div>

</template>




<script>
export default {
  name: "Game",
  props: {
    heading: String
  },
  data: {
    flowers: [{ item: "flower-1" }, { item: "flower-2" }]
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
li {
  list-style: none;
}
</style>
