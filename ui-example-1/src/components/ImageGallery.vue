<template>
  <div class="imageGallery">
    <h1>{{ msg }}</h1>
    <img ref="image" class="image" :src="urlImage" width="300" height="400">
  </div>
</template>

<script>
import { TimelineLite } from "gsap";
export default {
  name: "ImageGallery",
  data() {
    return {
      // imageGalleryDetails: {
      //   url: "https://source.unsplash.com/WLUHO9A_xik/1600x900"
      // }
    };
  },
  props: {
    msg: String,
    urlImage: {
      type: String,
      required: true
    },
    // ToDo: Speed is doesn't match "speed" (time it takes) when hard code it but not through the binding
    speed: {
      type: Number,
      required: false,
      default: 0.56
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}

</style>
