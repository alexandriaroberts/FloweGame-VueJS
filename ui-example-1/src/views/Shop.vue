<template>
  <div class="shop">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <ImageGallery msg="You working?"/> -->
    <h1>You working?</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ImageGallery from '@/components/ImageGallery.vue'

export default {
  name: 'shop',
  components: {
    HelloWorld,
    ImageGallery
  }
}
</script>
