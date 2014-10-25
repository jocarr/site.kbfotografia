$(document).ready(function(){

/*
------------------ scroll -------------------
=============================================
*/
	$('.scroll').click(function() {

		var clickedURL = $(this).attr('href');

		$(clickedURL).velocity("scroll", {duration: 1000, easing: "InOutCubic", offset: -50});
	});

/*
---------- cambia color en Hover ------------
=============================================
*/

	$('.fa').hover(function() {

		var sn = '#' + $(this).attr('id');
		var actColor = $(this).css('color');

		switch (sn) {
			case '#facebook':
				$(sn).velocity({color: '#3B5998'}, {duration: 200});
				break;

			case '#twitter':
				$(sn).velocity({color: '#4099FF'}, {duratio26632039n: 200});
				break;

			case '#instagram':
				$(sn).velocity({color: '#675144'}, {duration: 200});
				break;

			case '#pinterest':
				$(sn).velocity({color: '#CB2027'}, {duration: 200});
				break;
		}
	});

	$('.fa').mouseout(function() {
		$(this).velocity({color: '#9c9c9c'}, {duration: 400});
	});

	$('.cover-heading').hover(function() {
		$('#frame-logo').velocity({backgroundColor : '#000', backgroundColorAlpha: 0.5}, {duration: 500});
	});

	$('.cover-heading').mouseout(function() {
		$('#frame-logo').velocity({backgroundColorAlpha: 0}, {duration: 400});
	});

/*
------ Efecto Parallax en jumbotron ---------
=============================================
*/


	var jumboheight = $('.jumbotron').outerHeight();
	
	function paralax(){
		
		var scrolled = $(window).scrollTop();
		$('.bg-bodas').css('height', (jumboheight-scrolled) + 'px');
		//$('.bg-bodas').velocity({height: jumboheight-scrolled});
	}
	
	$(window).scroll(function(e){
		
		paralax();

	});
	
  });//fin



	



