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