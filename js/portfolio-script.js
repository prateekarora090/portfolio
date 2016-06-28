$( document ).ready(function() {
    $window = $(window);

    $('#page-body').show();
    $('#slide-1').css('background-color', 'rgba(0,0,0,0.65)');
    $('#loading-overlay').fadeOut();
    //$('#loading-overlay').detach();

    //var _DIRECTORY = "/portfolio/";

    //Change icons on homepage
    $(".portfolio-icon").hover(function(){
    	$(this).find(".display-icon").toggle();
    	$(this).find(".hover-icon").toggle();
    });

    //Enable local scroll for navigation links
    $.localScroll();

    var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
    	var stickyHeight = sticky.outerHeight();
    	var stickyTop = stickyWrapper.offset().top;
    	if (scrollElement.scrollTop() >= stickyTop){
      		stickyWrapper.height(stickyHeight);
      		sticky.addClass("is-sticky");
    	}
    	else{
      		sticky.removeClass("is-sticky");
      		stickyWrapper.height('auto');
    	}
  	};
  
  	// Find all data-toggle="sticky-onscroll" elements
  	$('[data-toggle="sticky-onscroll"]').each(function() {
    	var sticky = $(this);
    	var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
    	
    	sticky.before(stickyWrapper);
    	sticky.addClass('sticky');
    
    	// Scroll & resize events
    	$(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
      		stickyToggle(sticky, stickyWrapper, $(this));
    	});

      //Contact Buttons for copying links
      $(".contact-button").click(function(){
          
          //Find the link to be copied
          var holdtext = $(this).data("link-text");
          
          //Copy link using a text element
          var $temp = $("<input>");
          $("body").append($temp);
          $temp.val(holdtext).select();
          document.execCommand("copy");
          $temp.remove();

          //Update the button to say copied and the others to go back to the original text
          $.each($(".contact-button").not(this), function(){
            $(this).text($(this).data("copy-text"));
          });
          $(this).text("COPIED");
      });

    
    	// On page load
    	stickyToggle(sticky, stickyWrapper, $(window));
  	});

    /*
    $window.scroll(function() {

      var distance = $('#slide-3').offset().top,

      if ( $window.scrollTop() >= distance ) {
          // Your div has reached the top
          $('#background-1').css({
            "opacity": "0"
          });
      }

      if ( $window.scrollTop() <= distance ) {
          // Your div has reached the top
          $('#background-1').css({
            "opacity": "1"
          });
      }
    });
    */    

    
    /* Header Position Render */
    /*$window.scroll(function() {
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
	});*/

});