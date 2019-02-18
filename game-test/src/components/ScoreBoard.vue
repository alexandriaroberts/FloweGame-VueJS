<template>
  <div>
    <span class="score">Score: {{ score }}</span><br>
    <span>Time: {{timeRemaining}}</span>
  </div>
</template>

<script>
export default {
  name: "ScoreBoard",
  props: {
    score: {
      type: Number,
      required: true
    },    
    timeRemaining: {
      type: Number,
      required: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>