<template>
  <div id="home">
    <ImageGallery :urlImage="staticUrl[0]" startX=30 startY=300 :endX=0 endY=0></ImageGallery>
   <!-- <ImageGallery :urlImage="staticUrl[1]" startX=30 startY=30 :endX=0 endY=100></ImageGallery> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ImageGallery from "@/components/ImageGallery.vue";
import axios from 'axios'
const util = require('util')

export default {
  name: "home",
  data() {
    return {
      staticUrl: []
                   
    };
  },
  components: {
    HelloWorld,
    ImageGallery
  },
  mounted() {
    console.log('In Home Mounted: ... before Axios');

    axios.get("https://dog.ceo/api/breeds/image/random")
          .then( (data) => {
            // console.log('In Home Mounted: ...Inside Axios ' + util.inspect(data, {showHidden: false, depth: null})  );
            // console.log('next');
            // console.log(data.data.message);
            this.staticUrl = [data.data.message, data.data.message]
          })
          .catch(err => console.log("Error inside axios " + err))

    console.log('In Home Mounted: ... after Axios');
  }
};
</script>

<style>
#home{
position: relative;
}
</style>