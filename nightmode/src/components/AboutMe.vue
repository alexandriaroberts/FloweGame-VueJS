<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
       
    <h1>About Me</h1>
    <h4> Write something amaizing about yourself here 😜</h4>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 { 
  margin: 40px 0 0;
}

a {
  color: #42b983;
}
</style>

