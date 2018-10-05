/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';
// import '../node_modules/slider-pro/dist/css/slider-pro.min.css'

// ================================
// START YOUR APP HERE
// ================================


import {
	people,
	scroller
} from "./hello"
//alert(people);
//scroller();


import "./scrollanchors"

// import Glide from '@glidejs/glide'

// new Glide('.glide',{
// 	type: 'slider',
//   	startAt: 0,
//   	focusAt: 'center',
//   	gap: 10
// }).mount()


 import 'slick-carousel';

$(document).ready(function(){
			$('.customer-logos').slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				autoplay: false,
				autoplaySpeed: 1000,
				arrows: true,
				dots: false,
					pauseOnHover: false,
					responsive: [{
					breakpoint: 768,
					settings: {
						slidesToShow: 3
					}
				}, {
					breakpoint: 520,
					settings: {
						slidesToShow: 2
					}
				}]
			});
		});