$( document ).ready(function() {
    var distance = $('#website-header').offset().top,
    $window = $(window);

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