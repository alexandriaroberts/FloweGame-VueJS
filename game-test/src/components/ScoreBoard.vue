<template>
  <div>
    <div>{{ score }}</div>
  </div>
</template>

<script>
export default {
  name: "ScoreBoard",
  props: {
    score: {
      type: Number,
      required: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>