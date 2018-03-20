$(document).ready(function() {

	// Bootstrap Carousel

	$('.carousel').carousel()
	
	// ====================================================================

	// Fade In Scroll

	$(window).scroll(function () {
	
		$('.row').each(function (i) {
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

	$('.fancybox').fancybox();


})