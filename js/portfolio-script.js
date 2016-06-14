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

	/*Fix links when website is being served */
    /*$("*[href],[src]").each(function(){
    	
    	var replaceLink = function(element, attributeName){
    		var link = $(element).attr(attributeName);
    		if(!link.match("^http")){
    			$(element).attr(attributeName, _DIRECTORY + link);
    		} 
    	}

    	if(typeof $(this).attr("href")==="undefined"){
    		replaceLink($(this), "src");
    	} else{
    		replaceLink($(this), "href");
    	} 
    });*/

});