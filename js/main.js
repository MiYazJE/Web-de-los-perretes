$( document ).ready(function() {

	$('.slider').bxSlider({
		responsive: true,
		slideWidth: 600,
		controls: false,
		pager: false,
		auto: true,
		speed: 1000,
		adaptiveHeight: true,
	});

	$(window).on('scroll', function() {

		if($(this).scrollTop() > 100) {
			$('nav').addClass('black');
		} else {
			$('nav').removeClass('black');			
		}

		if($(this).scrollTop() > 500) {
			$('.icon-bar').fadeIn(500);
			$('.boton-ir-arriba').fadeIn(500);
		} else {
			$('.icon-bar').fadeOut(500);
			$('.boton-ir-arriba').fadeOut(500);
		}

		$('.boton-ir-arriba').click(function() {
			$('body, html').animate({
				scrollTop: '0px'
			}, 500);
			return false;
		});

	});

});


