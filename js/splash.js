$(document).ready( function() {
	$(window).scroll(function() {
		var dist = $(window).scrollTop();
		updateNav(dist);
	});

	$('#videoa').click(function(event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $("#video").offset().top - $('#splashbar').height()
		}, 600);
	});

	$('#abouta').click(function(event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $("#about").offset().top - $('#splashbar').height()
		}, 600);
	});

	$('#learna').click(function(event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $("#learn").offset().top - $('#splashbar').height()
		}, 600);
	});

	$('#sponsorsa').click(function(event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $("#sponsors").offset().top - $('#splashbar').height()
		}, 600);
	});
});

function updateNav(dist) {
	var navtop = $('#navspace').offset().top - $('#splashbar').height();
	var videotop = $('#video').offset().top;
	var abouttop = $('#about').offset().top;
	var learntop = $('#learn').offset().top;
	var sponsorstop = $('#sponsors').offset().top;

	if (dist > navtop) {
		var navoh = $('#splashbar').addClass('sticky').outerHeight();
		// $('#navspace').height(navoh);
	} else if (dist < navtop) {
		$('#splashbar').removeClass('sticky');
		$('#navspace').height(0);
	}

	var stickyHeight = $('#splashbar').outerHeight();

	if ((dist + stickyHeight) > sponsorstop) {
		$('#splashbar a').removeClass('active');
		$('#sponsorsa').addClass('active');
	} else if ((dist + stickyHeight) > learntop) {
		$('#splashbar a').removeClass('active');
		$('#learna').addClass('active');
	} else if ((dist + stickyHeight) > abouttop) {
		$('#splashbar a').removeClass('active');
		$('#abouta').addClass('active');
	} else if ((dist + stickyHeight) > videotop) {
		$('#splashbar a').removeClass('active');
		$('#videoa').addClass('active');
	} else if ((dist + stickyHeight) < videotop) {
		$('#splashbar a').removeClass('active');
	}
}