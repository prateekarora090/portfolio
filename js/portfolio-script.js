$( document ).ready(function() {
    var distance = $('#website-header').offset().top,
    $window = $(window);
    var _DIRECTORY = "/portfolio/";

    /* Header Position Render */
    $window.scroll(function() {
	    if ( $window.scrollTop() >= distance ) {
	        // Your div has reached the top
	        $('#website-header').css({
	        	"position": "fixed",
	        	"top": "0"
	        });
	    }

	    if ( $window.scrollTop() <= distance ) {
	        // Your div has reached the top
	        $('#website-header').css({
	        	"position": "static"
	        });
	    }
	});

});