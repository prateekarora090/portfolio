$(window).on("load", function(){
    $('#slide-1').css('background-color', 'rgba(0,0,0,0.65)');
    $('#page-body').delay(200).fadeIn(400);
    $('.spinner').fadeOut(700);
    $('#loading-overlay').delay(400).css('z-index', '0').delay(300).detach();
});

$( document ).ready(function() {
    $window = $(window);
    //$('#loading-overlay').detach();

    //var _DIRECTORY = "/portfolio/";

    if ($(window).width() <= 1024 && $(window).width()>400 ) {
        $(".fa-2x").removeClass("fa-2x").addClass("fa-lg");
        $("#boston-marker").css('font-size', '1.1em');
      }
    
    if($(window).width()<=400){
        $(".fa-2x").removeClass("fa-2x").addClass("fa-sm");
        $("#boston-marker").css('font-size', '0.9em');
      }

    //Change icons on homepage
    $(".portfolio-icon").hover(function(){
    	$(this).find(".display-icon").toggle();
    	$(this).find(".hover-icon").toggle();
    });

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      skrollr.init().destroy();

      var $background = $("<div class=\"background-image\" id=\"background-1\" style=\"z-index: -999;\"><div class =\"background-overlay\" style=\"z-index: -998;\"></div></div>");
      $("#slide-2").after($background);
    }
        //Add skrollr mobile on mobile devices.
        //document.write('<script type="text/javascript" src="js/skrollr.mobile.min.js"><\/script>');
    else{
        skrollr.init({smoothScrolling: false});

        //Add extra images to main scroller
        var $img3 = $("<img src=\"img/slide1-16-2-min.jpeg\" style=\"background-color: rgba(0,0,0,0.65);\" alt=\"\" />");
        var $img4 = $("<img src=\"img/slide1-10-min.jpeg\" style=\"background-color: rgba(0,0,0,0.65);\" alt=\"\" />");
        $('#maximage').append($img3);
        $('#maximage').append($img4);

        //Add background images
        var $backgroundImage1 = $("<div class=\"background-image\" id=\"background-1\" style=\"background-image: url('img/slide1-8-2-min.jpeg'); z-index: -999;\" data-anchor-target=\"#about-me\" data-bottom-top= \"opacity: 1;\" alt=\"\" <div class =\"background-overlay\"></div></div>");
        $('#slide-2').after($backgroundImage1);

        var $backgroundImage2 = $("<div class=\"background-image\" id=\"background-2\" style=\"background-image: url('img/slide1-14-min.jpeg'); z-index: -998;\"   data-anchor-target=\"#slide-3\" data-top-top= \"opacity: 1;\" data-1-bottom-bottom= \"opacity: 0;\" alt=\"\"><div class =\"background-overlay\"></div></div>");
        $('#slide-3').after($backgroundImage2);

    }

    //Enable skrollr depending on size of screen
    // initialize skrollr if the window width is large enough
    /*if ($(window).width() > 767) {
      skrollr.init({smoothScrolling: false});
    } else{
      skrollr.init().destroy();
    }*/

    // disable skrollr if the window is resized below 768px wide
    $(window).on('resize', function () {
      if ($(window).width() <= 767) {
        skrollr.init().destroy(); // skrollr.init() returns the singleton created above
      }
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