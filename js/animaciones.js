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
	var Color = 0;

	function rgb2hex(rgb){
		 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
		 return (rgb && rgb.length === 4) ? "#" +
		  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
		  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
		  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
	}	

	$('.fa').mouseenter(function() {
		this.Color = rgb2hex($(this).css('color'));
		var sn = '#' + $(this).attr('id');
		
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

	$('.fa').mouseleave(function() {
		$(this).velocity({color: this.Color}, {duration: 0});
		console.log(this.Color);
	});

	$('.cover-heading').mouseenter(function() {
		$('#frame-logo').velocity({ backgroundColorAlpha: 0.5}, {duration: 500});
	});

	$('.cover-heading').mouseleave(function() {
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


/*
------ Animacion de menu de cover ------------
===============================================
*/
	$('.item').mouseenter(function() {
		$(this).velocity({borderBottomWidth : 2, colorAlpha : 1}, {duration : 200});	
	});
	
	$('.item').mouseout(function() {
		$(this).velocity({borderBottomWidth : 0, colorAlpha : 0.75}, {duration : 0});	
	});

	$('.drop-cover').mouseenter(function() {
		$('.drop-menu-cover').velocity({opacity : 1}, {duration : 200});	
	});

	$('.drop-menu-cover').mouseleave(function() {
		$(this).velocity({opacity : 0}, {duration : 0});	
	});
	
  });//fin





	



