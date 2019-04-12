<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
    <AboutMe/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import AboutMe from '@/components/AboutMe.vue'


export default {
  name: 'home',
  components: {
    HelloWorld,
    AboutMe
  }
}
</script>
