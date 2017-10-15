
$(document).ready(function() {

// Header Reveal
var scroll_pos = 0;
var scroll_time;

$(window).scroll(function() {
	clearTimeout(scroll_time);
	var current_scroll = $(window).scrollTop();

	if (current_scroll >= $('.header-reveal').outerHeight()) {
		if (current_scroll <= scroll_pos) {
			$('.header-reveal').removeClass('nav-down').addClass('nav-up');
		}
	else {
		$('.header-reveal').removeClass('nav-up').addClass('nav-down');
		}
	}
	scroll_time = setTimeout(function() {
	scroll_pos = $(window).scrollTop();
}, 0);
});

// Toggle Menu
$(".navclosed").click(function () {
	//$(this).toggleClass("navclicked");
	$(".wrapper").toggleClass("wrapper-push");
	$(".nav-off").toggleClass("nav-on");
	$(".close-side").toggleClass("close-side-on");
	$(".line-nav-1").toggleClass("line-nav-1-open");
	$(".line-nav-2").toggleClass("line-nav-2-open");
	$(".line-nav-3").toggleClass("line-nav-3-open");
	$(".line-nav-4").toggleClass("line-nav-4-open");
	return false;		
});
// Close side button
$(".close-side").click(function () {
	//$(this).toggleClass("navclicked");
	$(".wrapper").toggleClass("wrapper-push");
	$(".nav-off").toggleClass("nav-on");
	$(".close-side").toggleClass("close-side-on");
	$(".line-nav-1").toggleClass("line-nav-1-open");
	$(".line-nav-2").toggleClass("line-nav-2-open");
	$(".line-nav-3").toggleClass("line-nav-3-open");
	$(".line-nav-4").toggleClass("line-nav-4-open");
	return false;		
});

});