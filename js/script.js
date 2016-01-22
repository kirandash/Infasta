$(document).ready(function(){
	
	"use strict";
	
<!-- ============================================== -->
<!-- ============ bootstrap scrollspy ============ -->
<!-- ============================================== -->
	$('body').scrollspy({
		target: '.navbar',
		offset: 160
	});	

<!-- ============================================== -->
<!-- ============ scrollTop.js ============ -->
<!-- ============================================== -->

	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 2000);
		return false;
	});
	
<!-- ============================================== -->
<!-- ============ scrolldown.js ============ -->
<!-- ============================================== -->

	$('.scrolldown a').bind('click', function(){
		$('html, body').stop().animate({
			scrollTop: $($(this).attr('href')).offset().top - 160
		}, 1500, 'easeInOutExtp');
		event.preventDefault();
	});

<!-- ============================================== -->
<!-- ============ navbardown.js ============ -->
<!-- ============================================== -->

	$('.nav a').bind('click', function(){
		$('html, body').stop().animate({
			scrollTop: $($(this).attr('href')).offset().top - 80
		}, 1500, 'easeInOutExtp');
		event.preventDefault();
	});

<!-- ============================================== -->
<!-- ============ superslides ============ -->
<!-- ============================================== -->

	$('#slides').superslides({
		animation: "fade",
		play: 10000,
		slide_easing: 'easeInOutCubic',
		slide_speed: 800,
		pagination: true,
		hashchange: false,
		scrollable: true
	});
				
<!-- ============================================== -->
<!-- ============ skillbar ============ -->
<!-- ============================================== -->

/*

Use .position().top to get the top position of the skillbar

Then use the .scroll() event to get the current position the window is scrolled to using .scrollTop().valueOf().

When the .scrollTop value is close enough to the .skillbar's top position, then the element must be in view, so you can set this up as a condition for when to invoke the animation.

*/

	var skillBarTopPos = jQuery('.skillbar').position().top;
	jQuery(document).scroll(function(){
		var scrolled_val = $(document).scrollTop().valueOf();
		if( scrolled_val > skillBarTopPos - 250 ) startAnimation();
	});
	
	function startAnimation(){
		jQuery('.skillbar').each(function(){
			jQuery(this).find('.skillbar-bar').animate({
				width: jQuery(this).attr('data-percent')
			}, 6000);
		});
	};
	
<!-- ============================================== -->
<!-- ============ fancy box ============ -->
<!-- ============================================== -->	

/*
I am using Fancybox plugin for playing a video on modal. How to play a video in full-screen mode on mobile mode on mobile for a crossdevice. I would rather use youtube in its embed format so you can open it as iframe with this html format.
*/
	$(".youtube-media").on("click", function(e){
		var jWindow = $(window).width();
		if(jWindow <= 410) {
			return;
		}
		$.fancybox({
			href: this.href,
			padding: 4,
			type: "iframe",
			'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
		});
		return false;
	});

<!-- ============================================== -->
<!-- ============ Portfolio lightbox ============ -->
<!-- ============================================== -->	
	
	$("#portfolio a").nivoLightbox({
		effect: 'fadeScale',
	});

<!-- ============================================== -->
<!-- ============ owl carousel team ============ -->
<!-- ============================================== -->	

	$("#owl-carousel-team").owlCarousel({
		
		/*autoPlay: 3000, set autoPlay to 3 seconds*/
		items : 4,
		itemsDesktop : [1199, 3],
		itemsDesktopSmall : [979,3],
		
		pagination : true,
		paginationNumbers : false,
		
		responsive : true,
		responsiveRefreshRate : 200,
		responsiveBaseWidth : window
		
	});

	new WOW().init();
	
});

<!-- ============================================== -->
<!-- ============ Navbar ============ -->
<!-- ============================================== -->

jQuery(window).scroll(function(){
	var top = jQuery(document).scrollTop();
	var batas = jQuery(window).height();
	//alert(batas);
	
	if(top > batas) {
		jQuery('.main-menu').addClass('tiny');	
		jQuery('.main-menu').css('opacity', '1');
	} else {
		jQuery('.main-menu').removeClass('tiny');	
	}
});

<!-- ============================================== -->
<!-- ============ Snizzy-Map ============ -->
<!-- ============================================== -->

$(document).ready(function(){
	// When the window has finished loading create our google map below
	google.maps.event.addDomListener(window, 'load', init);

	function init() {
		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: 11,
			
			scrollwheel: false,

			// The latitude and longitude to center the map (always required)
			center: new google.maps.LatLng(17.3700, 78.4800), // Hyderabad

			// How you would like to style the map. 
			// This is where you would paste any style found on Snazzy Maps.
			styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#ec46c0"},{"visibility":"on"}]}]
		};

		// Get the HTML DOM element that will contain your map 
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById('map');

		// Create the Google Map using our element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);

		// Let's also add a marker while we're at it
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(40.6700, -73.9400),
			map: map,
			title: 'Snazzy!'
		});
	}
});