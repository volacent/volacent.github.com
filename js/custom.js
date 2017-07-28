/**
* 	Custom javascript plugins calls and Functions. 
* 	Everlything is wrapped inside init function. All functions are well documented
**/

$(document).ready(function  () {
	
	// call init function
	$('.loading').fadeOut(function  () {
		$(this).remove();
		init();
	});

});


function init () {

	//
	// wow script function
	
	wow();


	

	// smooth scroll to simple navigation.
	navigation();

	mouseSwipe();


	/* ------------------ */





	// back to top

	backToTop();

	// nice scroll function
	niceScroll();

}

/* APPION functions */

function mouseSwipe() {
	
	// src: http://torontographic.wordpress.com/2012/02/23/jquery-mouseswipe/

	// stop browser's default drag and drop feature
	$(document).bind("dragstart", function() { return false; });

	// call swipe
	$('#mouseSwipe').swipe({
	    TYPE:'panelSwipe',
	    HORIZ: true,
	    SNAPDISTANCE: 0,
	    EASING: 'easeInOutCubic',
	    AUTOSTART: 400,
	    PAUSEONHOVER: true,
	    DURATION: 500,
	});

	/* available options

	$('#panelSwipe').swipe({
	    TYPE:'panelSwipe',
	    HORIZ: true,
	    SNAPDISTANCE:20,
	    DURATION:750,
	    EASING:'easeOutBack',
	    ARROWS:true,
	    FADEARROWS:false,
	    SLIDESHOWTIME:4000,
	    AUTOSTART:100,
	    PAUSEONHOVER:false,
	    PAGENUM:'#pagenum'
	});
	
	

	*/
}






// background animation
function backgroundAnimation () {

	//src: https://github.com/srobbin/jquery-backstretch
	  $('#bgs-slider').backstretch([
          'images/bgslider/2.jpg',
          'images/bgslider/1.jpg',
          'images/bgslider/4.jpg',
          'images/bgslider/3.jpg',
        ], {
          duration: 5000,
          fade: 500,
     });
}

// smooth scroll
function navigation () {
	// src : https://github.com/kswedberg/jquery-smooth-scroll

	$('.simple-navigation ul li a').smoothScroll({
          easing: 'easeInOutSine',
          speed: 900,
     });

	// set up tooltip

	$('.simple-navigation ul li a').tooltip({
		placement: 'right',
		
	});

}

function backToTop () {
	//src: http://markgoodyear.com/2013/01/scrollup-jquery-plugin/

	$.scrollUp({
	    scrollName: 'scrollUp', // Element ID
	    topDistance: '300', // Distance from top before showing element (px)
	    topSpeed: 300, // Speed back to top (ms)
	    animation: 'fade', // Fade, slide, none
	    animationInSpeed: 200, // Animation in speed (ms)
	    animationOutSpeed: 200, // Animation out speed (ms)
	    scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
	    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
}

function niceScroll () {
	// src: http://areaaperta.com/nicescroll/

	$("html").niceScroll({
		touchbehavior:false,
		cursorcolor:"#fff",
		cursoropacitymax:0.8,
		cursorwidth:8,
		cursorborder: 'none',
		cursorborderradius: '0px',
		smoothscroll: true, 
		zindex: 111111111111,
	});
}

function wow () {
	
	new WOW().init();

}