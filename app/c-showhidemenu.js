

/* Hover effect for burgers */
let forEach = function(t, o, r) {
	if ("[object Object]" === Object.prototype.toString.call(t))
		for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
	else
		for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
};

let hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
	forEach(hamburgers, function(hamburger) {
		hamburger.addEventListener("click", function() {
			this.classList.toggle("is-active");
		}, false);
	});
}


/* Hover effect for burgers */

const toggleMenu = function (){
	if ($(window).width() <= 900) {
		$('.sidebar').addClass("sidebar--hidden");
		$('.article').addClass("article--menuhidden");
	} else {
		$('.sidebar').removeClass("sidebar--hidden");
		$('.article').removeClass("article--menuhidden");
		$('.sidebar__navlist').removeClass("nav--topmargin");
		$('.c-news__eventinfo').removeClass("l-grid-u-md-5-5");
		$('.nav--mobile').removeClass("is-active");
		
	}
}

$( document ).ready(function() {
	$('.nav--mobile').click(function() {
		$('.sidebar').toggleClass("sidebar--hidden");
		$('.article').toggleClass("article--menuhidden");
		$('.sidebar__navlist').toggleClass("nav--topmargin");
		$('.c-news__eventinfo').toggleClass("l-grid-u-md-5-5");		
	})
	toggleMenu();
})

$(window).resize(function() {
	toggleMenu();
});