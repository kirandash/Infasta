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