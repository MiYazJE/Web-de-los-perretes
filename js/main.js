$( document ).ready(function() {

	$(window).on('scroll', function() {
		if($(window).scrollTop() > 100) {
			$('nav').addClass('black');
		}
		else {
			$('nav').removeClass('black');			
		}

		if($(window).scrollTop() > 500) {
			$('.icon-bar').fadeIn(500);
		}
		else {
			$('.icon-bar').fadeOut(500);
		}
	});

	$('.slider').bxSlider({
		responsive: true,
		slideWidth: 600,
		controls: false,
		pager: false,
		auto: true,
		speed: 1000,
		adaptiveHeight: true,
	});

});


