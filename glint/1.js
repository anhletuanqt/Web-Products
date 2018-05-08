$(function() {
	var width=$(window).width();
	var height=$(window).height();
	
			$('.myCarousel').slick({
		    infinite: true,
		    slidesToShow: 6,
		    slidesToScroll: 3,
		    arrows:false,
		    dots:true,
		    dotsClass:'myli'
		});
	
	

	//animation for about
	var aboutPos=$('.about').offset().top;
	var homePos=$('header').offset().top;
	var servicePos=$('.services').offset().top;
	var workPos=$('.work').offset().top;
	var clientPos=$('.clients').offset().top;
	var contactPos=$('.contact').offset().top;
	var canCount=true;
	var arrPos=[homePos,aboutPos,servicePos,workPos,clientPos,contactPos];

	
	$(window).scroll(function(event) {
		var windowPos=$(window).scrollTop();
		//console.log(windowPos);
		if(windowPos>100){
			$('.logo1').addClass('nenmauden');
		}else{
			$('.logo1').removeClass('nenmauden');
		}
		if(windowPos>500){
			$('.up').addClass('uphienra');
		}else{
			$('.up').removeClass('uphienra');
		}
		if(windowPos>=600){
			$('.row1').addClass('aboutActive');
		}

		if(windowPos>800){
			$('.so').addClass('aboutActive')
			if(canCount){
			$('.so h2').each(function () {
				$(this).prop('Counter',0).animate({
				        Counter: $(this).text()
				    }, {
				        duration: 3000,
				        easing: 'swing',
				        step: function (now) {
				        $(this).text(Math.ceil(now));
				    }
				});
				});
				canCount=false;
			}
		}

		if(windowPos>=1400){
			$('.servicesT').addClass('servicesActive');
		}
		if(windowPos>=1600){
			$('.serviceD').addClass('servicesActive');
		}
		if(windowPos>=2600){
			$('.workT').addClass('workActive');
		}
		if(windowPos>=3000){
			$('.oneSP1').addClass('workActive');
		}
		if(windowPos>=3800){
			$('.oneSP2').addClass('workActive');
		}
		if(windowPos>=4400){
			$('.oneSP3').addClass('workActive');
		}
		if(windowPos>=5100){
			$('.clientT').addClass('clientActive');
		}
		if(windowPos>=5500){
			$('.myCarousel').addClass('clientActive');
		}
		if(windowPos>=6000){
			$('.bsCarousel').addClass('clientActive');
		}
		if(windowPos>=6500){
			$('.contactT').addClass('contactActive');
		}
		if(windowPos>=7000){
			$('.contactD').addClass('contactActive');
		}
	});

	//css for click menu
	$('.up').click(function(event) {
		$('html').animate({scrollTop: homePos}, 1500);
	});;
	$('.logo1').click(function(event) {
		$('.myNav').addClass('myNavdivao');
		return false;
	});
	$('.close1').click(function(event) {
		$('.myNav').removeClass('myNavdivao');
	});

	function closeNav(){
		$('.myNav').removeClass('myNavdivao');
	}

	$('.listli').click(function(event) {
		console.log(arrPos[$('.listli').index($(this))]);
		$('html').animate({scrollTop:arrPos[$('.listli').index($(this))]+20},1500);
		
		setTimeout(closeNav ,1400)
	});

	//code for resposive
	
	

});