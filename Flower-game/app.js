var app = new Vue({
  el: "#app",
  data: {
    mousemove: function(event) {
      flower.style.position = 'absolute';
      flower.style.zIndex = 100;
      document.body.append(flower);
      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY){
        flower.style.left= pageX - flower.offsetWidth / 10 + 'px';
        flower.style.top= pageY - flower.offsetWidth / 10 + 'px';
      }

      function onMouseMove(event){
        moveAt(event.pageX, event.pageY);
      }

      document.addEventListener('mousemove', onMouseMove);

      this.flower.onmouseup = function(){
        document.removeEventListener('mousemove', onMouseMove);
        flower.onmouseup = null;
      };

      this.flower.ondragstart = function() {
        return false;
      };

      
    }
     
}
})
