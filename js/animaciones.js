$(document).ready(function(){

	$('.scroll').click(function() {

		var clickedURL = $(this).attr('href');

		$(clickedURL).velocity("scroll", {duration: 1000, easing: "InOutCubic", offset: -50});
	});

	$('.fa').hover(function() {

		var sn = '#' + $(this).attr('id');
		var actColor = $(this).css('color');

		switch (sn) {
			case '#facebook':
				$(sn).velocity({color: '#3B5998'}, {duration: 200});
				break;

			case '#twitter':
				$(sn).velocity({color: '#4099FF'}, {duration: 200});
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
  });



	



