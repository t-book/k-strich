import 'owl.carousel';

$(document).ready(function() {

	$('.c-gallery').hide();
	$('.c-gallery:first').show();
	$('.js-switcher:first').addClass('is_active');

	$(".c-gallery").each(function() {
		$(this).owlCarousel({
			items: 1,
			lazyLoad: true,
			loop: true,
			margin: 10,
			margin: 10,
			dots: false,
			navText: [
				"<img src='./assets/images/left-arrow.png?raw=1' >", 
				"<img src='./assets/images/right-arrow.png' >"
				],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});
	});

	$('.js-switcher').click(function() {
		$('.js-switcher').removeClass('is_active');
		$(this).addClass('is_active');
		let targetEl = $(this).data('id');
		$('.c-gallery').fadeOut('fast');
		$('.js-' + targetEl).fadeIn('fast');
	});

});