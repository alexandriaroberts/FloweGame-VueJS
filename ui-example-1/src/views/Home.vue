<template>
  <div id="home">
    <ImageGallery class="image1" :urlImage="staticUrl[0]" ></ImageGallery>
    <ImageGallery class="image2" :urlImage="staticUrl[1]"></ImageGallery>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ImageGallery from "@/components/ImageGallery.vue";
import axios from "axios";
const util = require("util");

export default {
  name: "home",
  data() {
    return {
      staticUrl: [ 'https://source.unsplash.com/user/erondu/1600x900' , 
      'https://source.unsplash.com/daily' ]
    }
  },
  components: {
    HelloWorld,
    ImageGallery
  }
};
</script>

<style>
div {  
 position: absolute;
 margin-left: 10%;
 }

img {

}
.image1 { 
  z-index: 1;
   margin-left: 50px;
  animation: move 1.5s;   
}

.image2 {
 z-index: 2;
  margin-left: -50px;
  margin-top: 140px;
  animation: move 1.5s;
}

@keyframes move {
 0%   {margin-left: -25%;}
    100% {opacity: 1;}
}




</style>