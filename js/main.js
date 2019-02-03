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

	$('.boton-ir-arriba').on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 500);
	});

});

