
// Cambio de header al bajar en la pagina

$(document).ready(function(){
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('header').addClass('header2');
		} else {
			$('header').removeClass('header2');
		}
	});
 
});

// Jquery scroll secciones de la pagina con animacion

$('.menu a').on('click', function(e) { 
	var el = $( e.target.getAttribute('href') );
	var elOffset = el.offset().top;
	var elHeight = el.height();
	var windowHeight = $(window).height();
	var offset;
  
	if (elHeight < windowHeight) {
	  offset = elOffset - ((windowHeight / 2) - (elHeight / 2));
	}
	else {
	  offset = elOffset;
	}
	var speed = 700;
	$('html, body').animate({scrollTop:offset}, speed);
  });

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
// 			behavior: 'smooth'
//         });
//     });
// });