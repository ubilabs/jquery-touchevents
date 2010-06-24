/*
 * Touch Events - jQuery plugin to simulate mouse events on touch devices.
 *
 * By Martin Kleppe <kleppe@ubilabs.net>
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function($){

  $(function(){
    var events = "touchstart touchmove touchend touchcancel";
    $(document).bind(events, function(){
      var type, simulated, touch = event.changedTouches[0];

      switch (event.type) {
        case "touchstart": type = "mousedown"; break;
        case "touchmove": type = "mousemove"; break;    
        case "touchend": type = "mouseup"; break;
        default: return;
      }

      simulated = document.createEvent("MouseEvent");
      simulated.initMouseEvent(
        type, true, true, window, 1,
        touch.screenX, touch.screenY,
        touch.clientX, touch.clientY, 
        false, false, false, false, 
        0, null
      );

      touch.target.dispatchEvent(simulated);
    
      if (event.type == "touchmove" ){
        event.preventDefault();        
      }
      
    }, true);
  });

})(jQuery);





