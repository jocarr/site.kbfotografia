$(document).ready(function(){

$(".cover-heading").mouseenter(function(){velocity({ 
	backgroudColor : '#fff'
	}, {
		duration : 500
	})
});
/*var InfiniteRotator = {
		
	init: function() {
		var initialFadeIn = 1000;

		var itemInterval = 5000;

		var fadeTime =2500;

		var numberOfItems = $('.rotating-item').length;

		var currentItem = 0;

		var backgrouds = ['url(../../img/portada)', 'url(../../img/portada1)', 'url(../../img/portada2)', 'url(../../img/portada3)', 'url(../../img/portada4)' ];

		$('rotating-item').eq(currentItem).velocity("fadeIn", {duration : initialFadeIn});

		var infiniteLoop = setInterval(function () {
			$('rotating-item').eq(currentItem).velocity("fadeOut",{duration : fadeTime});

			if (currentItem == numberOfItems -1) {
				currentItem = 0;
			}else{
				currentItem++;
			}
			$('.rotating-item').eq(currentItem).velocity("fadeIn",{duration : fadeTime});
		}, itemInterval);
		
		// $('body').velocity("fadeIn", {duration :})
	}	
};
*/
//InfiniteRotator.init();

// Scroll

	$('#down').click(function() {
		$('#frase1').velocity("scroll", {duration: 1000, easing: "InOutCubic"});
	});
  });



