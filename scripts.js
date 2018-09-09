
// //Reloads page at top
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// Scroll to top or bottom animations
$('.nav-logo').click( function(e){
  var $target = $('html,body');
  $target.animate({scrollTop: $('body').position().top}, 300);
});


/**
* Copyright 2012, Digital Fusion
* Licensed under the MIT license.
* http://teamdf.com/jquery-plugins/license/
*
* @author Sam Sehnert
* @desc A small plugin that checks whether elements are within
*     the user visible viewport of a web browser.
*     only accounts for vertical position, not horizontal.
*/
(function($) {

 

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);
// END JQUERY plugin

// jQuery for slide in animations--start
$(window).scroll(function(event) {
  
  $(".js-slide").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("js-slide-in-element"); 
    } 
  });
  
});

var win = $(window);
var allMods = $(".js-slide");

// Already visible modules
// allMods.each(function(i, el) {
//   var el = $(el);
//   if (el.visible(true)) {
//     el.addClass("already-visible"); 
//   } 
// });
//jQuery slide animation -- end


// *************END JQUERY FUNCTIONS**************