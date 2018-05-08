$(function() {
	$('.bar').click(function(event) {
		$('.thaydoi').removeClass('thaydoi');
		$(this).addClass('thaydoi');
		$('.menu').addClass('divao');
		return false;
	});
	$('.close').click(function(event) {
		$('.thaydoi').removeClass('thaydoi');
		$(this).addClass('thaydoi');
		$('.menu').removeClass('divao');
		return false;
	});

	var home=$('.home').offset().top;
	var about=$('.about').offset().top;
	var services=$('.services').offset().top;
	var port=$('.port').offset().top+80;
	var contact=$('.map').offset().top+80;
	$('.h').click(function(event) {
		$('html').animate({scrollTop:home }, 1500);
		$('.close').click();;
	});
	$('.a').click(function(event) {
		$('html').animate({scrollTop:about }, 1500);
		$('.close').click();;
	});
	$('.s').click(function(event) {
		$('html').animate({scrollTop:services }, 1500);
		$('.close').click();;
	});
	$('.p').click(function(event) {
		$('html').animate({scrollTop:port }, 1500);
		$('.close').click();;
	});
	$('.c').click(function(event) {
		$('html').animate({scrollTop:contact }, 1500);
		$('.close').click();;
	});

	$('.back').click(function(event) {
		$('html').animate({scrollTop:home }, 1500);
		return false;
	});;

	//check scroll
	var prevScroll=0;
	var nextScroll=0;
	$(window).scroll(function(event) {
		nextScroll=$('html').scrollTop();
		if(nextScroll>prevScroll){
        	$('.back').removeClass('thaydoi');
		}else{
			$('.back').addClass('thaydoi');
		}

		prevScroll=nextScroll;
	});;
});