(function(w){
  var last_position = {};
  var last_direction = 'up';
  $(document).on('mousemove', function (event) {
    if (typeof(last_position.x) != 'undefined') {
      var deltaX = last_position.x - event.offsetX,
          deltaY = last_position.y - event.offsetY;
      if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX > 0) {
          //left
          last_direction = 'left';
      } else if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < 0) {
          //right
          last_direction = 'right';
      } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
          //up
          last_direction = 'up';
      } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY < 0) {
          //down
          last_direction = 'down';
      }
    }
    last_position = {
        x : event.offsetX,
        y : event.offsetY
    };
    
    w.getLastMouseDirection = function(){
      return last_direction;
    };
  });
})(window);
