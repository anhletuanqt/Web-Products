 $(function(){
 	var ho=$('.home').offset().top;
 	var fea=$('.high').offset().top;
 	var ga=$('.rocket').offset().top;
 	var pri=$('.pricing').offset().top;
 	var con=$('.footert').offset().top;
 	
 	var check=false;

 	$(window).scroll(function(event) {
 	
 		check=true;
 		if(!check) return;
 		if($('html').scrollTop()>100){
 			$('.menu').addClass('menuactive');
 		}else{
 			$('.menu').removeClass('menuactive');
 		}

 		if($('html').scrollTop()<700){
 			$('.li-active').removeClass('li-active');
 			$('.ho').children().addClass('li-active');
 		}else if((700 <= $('html').scrollTop())&&($('html').scrollTop()<3000)){
 			$('.li-active').removeClass('li-active');
 			$('.fea').children().addClass('li-active');
 		}else if((3000 <= $('html').scrollTop())&&($('html').scrollTop()<5500)){
 			$('.li-active').removeClass('li-active');
 			$('.ga').children().addClass('li-active');
 		}else if((5500 <= $('html').scrollTop())&&($('html').scrollTop()<7200)){
 			$('.li-active').removeClass('li-active');
 			$('.pri').children().addClass('li-active');
 		}else if(7200 <= $('html').scrollTop()){
 			$('.li-active').removeClass('li-active');
 			$('.con').children().addClass('li-active');
 		}
 	});

 	$('.list li').click(function(event) {
 		check=false;
 		$('.li-active').removeClass('li-active');
 		
 	});

 	$('.ho').click(function(event) {
 		$('html').animate({scrollTop:ho},1500);

 		return false;
 	});
 	$('.fea').click(function(event) {
 		$('html').animate({scrollTop:fea},1500);
 		return false;
 	});
 	$('.ga').click(function(event) {
 		$('html').animate({scrollTop:ga},1500);
 		return false;
 	});
 	$('.pri').click(function(event) {
 		$('html').animate({scrollTop:pri},1500);
 		return false;
 	});
 	$('.con').click(function(event) {
 		$('html').animate({scrollTop:con},1500);
 		return false;
 	});

 	$('.row1 .col-md-3').click(function(event) {
 		$('.myactive').removeClass('myactive');
 		$(this).addClass('myactive');

 		console.log($('.row1 .col-md-3').index(this))

 		$('.tabactive').removeClass('tabactive');
 		$('.tabs:nth-child('+($('.row1 .col-md-3').index(this)+1)+')').addClass('tabactive');
 	});

 	$('.bar').click(function(event) {	
 		if($('html').scrollTop()<=100){
             $('.menu').toggleClass('domau');
 		}
 		$('.menu').toggleClass('dairadi');
 		return false;
 	});

 	//slick
 	$('.slider').slick({
 		slidesToShow:3,
 		slidesToScroll:1,
 		dots:true,
 		variableWidth: true,
 		centerMode: true,
 		zIndex:1,
 		dotsClass:'myli',
 		autoplay:true,
 		autoplaySpeed:'1500',
 	});
})  
 