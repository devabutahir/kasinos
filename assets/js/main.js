"user strict";

/* All Information
	Author: Softivus
	Date: 247-11-2024
	Version: 1.0
*/

/* User Script
	0.1 Sticky Header
	0.2 Menu Header
	0.3 Owl Carousel
	0.4 Nice Select
	0.5 Magnifiq Popup
	0.6 Wow Animation
	0.7 Preloader
	0.8 Countdown
	0.9 Password Hide
	1.0 Back To Top
*/

$(document).ready(function () {
	//menu header bar
	$(".header-bar").on("click", function (e) {
		$(".main-menu, .header-bar").toggleClass("active");
	});
	$(".main-menu li a").on("click", function (e) {
		$(".main-menu, .header-bar").removeClass("active")
		var element = $(this).parent("li");
		if (element.hasClass("open")) {
			element.removeClass("open");
			element.find("li").removeClass("open");
			element.find("ul").slideUp(300, "swing");
		} else {
			element.addClass("open");
			element.children("ul").slideDown(300, "swing");
			element.siblings("li").children("ul").slideUp(300, "swing");
			element.siblings("li").removeClass("open");
			element.siblings("li").find("li").removeClass("open");
			element.siblings("li").find("ul").slideUp(300, "swing");
		}
	});
	//menu header bar

	//owl carousel
	$(".player__wrap").owlCarousel({
		loop: true,
		margin: 20,
		smartSpeed: 2500,
		autoplayTimeout: 3000,
		autoplay: true,
		nav: false,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="fas fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 1,
			},
			767: {
				items: 2,
			},
			991: {
				items: 2,
			},
			1199: {
				items: 3,
			},
			1399: {
				items: 3,
			},
		},
	});
	$(".game__slide").owlCarousel({
		loop: true,
		margin: 20,
		smartSpeed: 4000,
		autoplayTimeout: 4000,
		autoplay: true,
		nav: true,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="fas fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 2,
			},
			767: {
				items: 2,
			},
			991: {
				items: 3,
			},
			1199: {
				items: 3,
			},
			1399: {
				items: 3,
			},
		},
	});
	$(".game__right__wrap").owlCarousel({
		loop: true,
		margin: 20,
		smartSpeed: 3500,
		autoplayTimeout: 3000,
		autoplay: true,
		nav: true,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="fas fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 2,
			},
			767: {
				items: 2,
			},
			991: {
				items: 3,
			},
			1199: {
				items: 3,
			},
			1399: {
				items: 3,
			},
		},
	});
	$(".game__right__time").owlCarousel({
		loop: true,
		margin: 20,
		smartSpeed: 2500,
		autoplayTimeout: 3000,
		autoplay: true,
		nav: true,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="fas fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 1,
			},
			767: {
				items: 2,
			},
			991: {
				items: 3,
			},
			1199: {
				items: 2,
			},
			1399: {
				items: 3,
			},
		},
	});
	
	//Magnifiq pupup
	$('.picture-btn').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		}
	});

	$('.play-btn').magnificPopup({
		type: 'iframe',
		callbacks: {
			
			}
	});
	//Magnifiq pupup
	
	// password hide
	$(".toggle-password, .toggle-password2, .toggle-password3, .toggle-password4, .toggle-password5, .toggle-password6, .toggle-password7, .toggle-password8, .toggle-password9").click(function() {
		$(this).toggleClass("fa-eye fa-eye-slash");
		var input = $($(this).attr("id"));
		if (input.attr("type") == "password") {
			input.attr("type", "text");
		} else {
			input.attr("type", "password");
		}
	});

	//menu top fixed bar
	var fixed_top = $(".header-section");
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 220) {
			fixed_top.addClass("menu-fixed animated fadeInDown");
			fixed_top.removeClass("slideInUp");
			$("body").addClass("body-padding");
		} else {
			fixed_top.removeClass("menu-fixed fadeInDown");
			fixed_top.addClass("slideInUp");
			$("body").removeClass("body-padding");
		}
	});
	//menu top fixed bar

	// click even scroll bar
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 300) {
			$(".scrollToTop").fadeIn();
		} else {
			$(".scrollToTop").fadeOut();
		}
	});
	// click even scroll bar

	// scroll top bottom bar
	$(".scrollToTop").on("click", function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			700
		);
		return false;
	});
	// scroll top bottom bar

	/*-- Odometer Counting Start--*/
	$(".odometer-item").each(function () {
		$(this).isInViewport(function (status) {
			if (status === "entered") {
				for (
					var i = 0;
					i < document.querySelectorAll(".odometer").length;
					i++
				) {
					var el = document.querySelectorAll(".odometer")[i];
					el.innerHTML = el.getAttribute("data-odometer-final");
				}
			}
		});
	});
	/*-- Odometer Counting End--*/

	// wow animation
	new WOW().init();
	// wow animation

	//preloader
	setTimeout(function(){
		$('.preloader').fadeToggle();
	}, 1600);
	//preloader

	//--Nice Select--//
	$('select').niceSelect();
	
});



