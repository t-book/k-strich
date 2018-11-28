import 'owl.carousel';

$(document).ready(function() {

	$('.c-gallery:not(.c-editions)').hide();
	$('.c-gallery:first').show();

	$('.c-gallerytext').hide();
	$('.c-gallerytext:first').show();

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
				"", 
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
		$('.js-work-title').text($(this).text());
		let targetEl = $(this).data('id');
		$('.c-gallery, .c-gallerytext').fadeOut('fast');
		$('.js-' + targetEl).fadeIn('slow');
	});

});