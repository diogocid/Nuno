$(document).ready(function() {

	// Fade In Scroll

	$(window).scroll(function () {
	
		$('.row').each(function () {
			var bottom_of_object = $(this).position().top + 150;
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			/* If the object is completely visible in the window, fade it in */
			if (bottom_of_window > bottom_of_object) {
				$(this).animate({
					'opacity': '1'
				}, 500);
			}

		});

	});

	// ====================================================================

	// Price Tables

	$('.price-table li:odd').addClass('odd');
	$('.price-table li:last-child').addClass('last');

	// ====================================================================

	// Owl Carousel

	$("#showcase").owlCarousel({
		items: 4
	});

	$("#team").owlCarousel({
		items: 6
	});

	$("#reviews").owlCarousel({
		items: 2,
		itemsDesktop: 2,
		itemsDesktopSmall: 2,
		itemsTablet: 2
	});

	// ====================================================================

	// Fancybox

	$('.fancybox').fancybox()

	// ====================================================================

	// Bootstrap Progress Bar

	$('.progress .progress-bar').progressbar();

	// ====================================================================

	// Column Menu

	$('.submenu li a').append("<i class='fa fa-angle-right'></i>");
	$('.categories > li > a').append("<span><i class='fa fa-plus-square-o'></i></span>");
	$('.categories > li > ul > li > a').append("<i class='fa fa-angle-right'></i>");

	// ====================================================================

	// Portfolio Filter

	$('.portfolio').mixitup();

	// ====================================================================

	// Shop Categories

	$('.categories li').click(function () {
		$(this).find('ul').slideToggle(500);
		$(this).find('span > i').toggleClass('fa-plus-square-o').toggleClass('fa-minus-square-o');
	});
	
	// ====================================================================

	// Checkout

	$('.showlogin').click(function(){
		$('.login').slideToggle(500);
	});

	$('.showcoupon').click(function(){
		$('.coupon').slideToggle(500);
	});

	$('.open-shipping-address input').click(function(){
		$('.shipping-address').slideToggle(500);
	});

})