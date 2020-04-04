import 'owl.carousel';

$(document).ready(function() {

	$('.c-gallery:not(.c-editions)').hide();
	$('.c-gallery:first').show();

	$('.c-gallerytext').hide();
	$('.c-gallerytext:first').show();

	$('.js-switcher:first').addClass('is_active');

	$(".c-gallery").each(function() {
		//var totalItems = $('.gallery__item').length;
		var totalItems = $(this).find('.gallery__item').length;
		  if (totalItems == 1) {
		    var isLooped = false;
		    var isNav = false;
				var hider = 'display:none';
		  }
		  else {
		    var isLooped = true;
		    var isNav = true;
				var hider = '';
		  }
			console.log('totalItems ',totalItems);
			console.log(isLooped,isNav);

		$(this).owlCarousel({
			items: 1,
			lazyLoad: true,
			loop: isLooped,
			nav: isNav,
			margin: 10,
			margin: 10,
			dots: false,
			navText: [
				"<img style='"+hider+"' src='/site/templates/static/assets/images/left-arrow.png' >",
				"<img style='"+hider+"' src='/site/templates/static/assets/images/right-arrow.png' >"
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

		//var list = $('.js-autoscooter > .owl-stage-outer > .owl-stage > .owl-item').length

	});

});
