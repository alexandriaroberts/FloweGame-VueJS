<template>
  <div class="about">
    <h1>This is an about page</h1>
     <!-- <ImageGallery></ImageGallery> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ImageGallery from "@/components/ImageGallery.vue";

export default {
  name: "home",
  data() {
    return {
      
    };
  },
  components: {
    HelloWorld,
    ImageGallery
  }
};
</script>

