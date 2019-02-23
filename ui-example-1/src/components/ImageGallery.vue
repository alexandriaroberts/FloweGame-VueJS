<template>
  <div class="imageGallery">
    <h1>{{ msg }}</h1>
    <h1>{{ endY }}</h1>
    <img ref="image" class="image" :src="urlImage" width="400" height="500">
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
      default: 10.56
    },
    endX: {
      type: Number,
      required: false,
      default:20
    },
    endY: {
      type: Number,
      required: false,
      default: 40
    },
    startX: {
      type: Number,
      required: false,
      default: 40
    },
    startY: {
       type: Number,
      required: false,
      default: 20
    }
  },
  mounted() {
    const { image } = this.$refs;
    const timeline = new TimelineLite();

    // timeline.to(image, 0.56, {
    //   scaleY: 0.65,
    //   scaleX: 0.65,
    //   y: -200,
    //   transformOrigin: "50% 50%"
    // });
     timeline.to(image, this.speed, {
      // scaleY: 0.65,
      // scaleX: 0.65,
      y: (this.startY - this.endY),
      // x: (this.startX - this.endX),
      // y: 1000, 
      x: (100 - 100), 
      transformOrigin: "50% 50%"
    });
    console.log("Inside mounted in ImageGallery... endY: " + this.endY)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  }

 .imageGallery {
    position: absolute;
  }


h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/* @keyframes move {
  0% {
    left: 50%;
    top: 100%;
  }
  100% {
    left: 50%;
    top: 50%;
  }
}

.image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: move 1s linear;
} */

.image {
  position: absolute;
  top: 100px;
  left: 100px;

}
</style>
