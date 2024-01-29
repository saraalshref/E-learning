$(document).ready(function () {
  
    $(".btn-row .btn-primary").waypoint(function () {
        $(".btn-row .btn-primary").addClass("animate__animated animate__fadeInLeft");
    }, { offset: "80%"});

    $(".btn-row .btn-light").waypoint(function () {
        $(".btn-row .btn-light").addClass("animate__animated animate__fadeInRight");
    }, { offset: "80%"});

    
    $(".carousel-caption .text-white").waypoint(function () {
        $(".carousel-caption .text-white").addClass("animate__animated animate__fadeInDown");
    }, { offset: "80%"});

    $(".section2").waypoint(function () {
        $(".section2 .box").addClass("animate__animated animate__fadeInUp");
    }, { offset: "90%"});

    $(".sec3-img").waypoint(function () {
        $(".sec3-img").addClass("animate__animated animate__fadeInUp");
    }, { offset: "80%" });
    
    $(".rightSec3").waypoint(function () {
        $(".rightSec3 h4").addClass("animate__animated animate__fadeInUp");
        $(".rightSec3 h2").addClass("animate__animated animate__fadeInUp");
        $(".rightSec3 p").addClass("animate__animated animate__fadeInUp");

    }, { offset: "80%"});

    $(".section4").waypoint(function () {
        $(".section4 h4").addClass("animate__animated animate__fadeInUp");
        $(".section4 h3").addClass("animate__animated animate__fadeInUp");
        $(".section4 .con").addClass("animate__animated animate__zoomIn");
    }, { offset: "90%"});

    $(".section5").waypoint(function () {
        $(".section5 h4").addClass("animate__animated animate__fadeInUp");
        $(".section5 h2").addClass("animate__animated animate__fadeInUp");

    }, { offset: "80%"});

    $(".group-of-cards").waypoint(function () {
        $(".group-of-cards .card").addClass("animate__animated animate__fadeInUp");
    }, { offset: "80%"});

    $(".section6").waypoint(function () {
        $(".section6 h4").addClass("animate__animated animate__fadeInUp");
        $(".section6 h2").addClass("animate__animated animate__fadeInUp");

    }, { offset: "100%"});

    $(".group-instructors").waypoint(function () {
        $(".group-instructors .card-instructor").addClass("animate__animated animate__fadeInUp");
    }, { offset: "100%"});


	$(".contain .owl-carousel").waypoint(function () {
        $(".contain .owl-carousel .item").addClass("animate__animated animate__fadeInUp");
    }, { offset: "80%"});

});


jQuery(document).ready(function ($) {
	$('#owl-carousel').owlCarousel({
		loop: true,
		margin: 30,
		dots: true,
		nav: true,
		items: 3,

		center: false,
		rewind: false,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: true,
		stagePadding: 0,
		merge: false,
		mergeFit: true,
		autoWidth: false,
		startPosition: 0,
		rtl: false,
		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {
			0: {
				items: 1
				// nav: true
			},
			480: {
				items: 2,
				nav: true
			},
			768: {
				items: 3,
				// nav: true,
				loop: true
			},
			992: {
				items: 3,
				// nav: true,
				loop: true
			}
		},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,
		fallbackEasing: "swing",
		
	})
});

