jQuery(document).ready(function(){

	jQuery('ul li').click(function(){
		jQuery(this).children('ul').slideToggle(500, "easeOutExpo");
		return false;
	});

	jQuery('.mobile-menu').click(function(){
		jQuery('.main-menu').slideToggle(100);
	});

	jQuery(window).resize(function(){
		var screenWidth = jQuery(window).width();
		if (screenWidth > 991) {
			jQuery('.main-menu').removeAttr('style');
		}

		if (screenWidth < 992) {
			jQuery('.main-menu').hide();
		}
	});

	jQuery('ul li').children('ul').addClass('dropdown');

	jQuery('ul li').children('ul').children('li').children('a').text('submenu-1');

	jQuery('.dropdown li').children('ul').children('li').children('a').text('submenu-2');

	jQuery('.dropdown').parent('li').children('a').append(' <i class="fas fa-caret-down"></i>');

	jQuery('.scrollTop').hover(function(){
		jQuery('.scrollTop i').addClass('animate__animated animate__fadeInUp animate__infinite');
	}, function(){
		jQuery('.scrollTop i').removeClass('animate__animated animate__fadeInUp animate__infinite');
	});

	jQuery(window).scroll(function(){
		var btot = jQuery(window).scrollTop();
		var headerHeight = jQuery('.header-area').outerHeight();

		if(btot > headerHeight)
		{
			jQuery('.scrollTop').fadeIn();
		}else{
			jQuery('.scrollTop').fadeOut();
		}

		if(btot > headerHeight)
		{
			jQuery('nav').addClass('fixed');
		}else{
			jQuery('nav').removeClass('fixed');
		}
	});

	jQuery('.scrollTop').click(function(){
		jQuery('html').animate({'scrollTop' : 0}, 1000, "easeInOutCirc");
	});


});


