jQuery(document).ready(function($) {
	var height1=$('.anh img').innerHeight();
		var anh=$('.anh');

		for(let i=0;i<anh.length;i++){
			$(anh[i]).innerHeight(height1);
			
		}
	$(window).resize(function(event) {
		var height1=$('.anh img').innerHeight();
		var anh=$('.anh');
		
		for(let i=0;i<anh.length;i++){
			$(anh[i]).innerHeight(height1);
			
		}
	});

	//for show image

	var target;
	var receive=$('.showanh img');
	var href='';
	$('.motnd a:first-child').click(function(event) {
		target=$(this);
		href=$(target).attr('href');

		$(receive).attr({'src':href});
		$('.show').addClass('showActive');
		return false;
	});
	$('.show').click(function(event) {
		$('.show').removeClass('showActive');
	});;
	
});


document.addEventListener("DOMContentLoaded",function(){


	//for out menupage
	var bar=document.querySelector('.bar');
	var menupage=document.querySelector('.menupage')
	var navs=document.querySelectorAll('nav span');
	var click=true;
	
	
	for(let i=0;i<navs.length;i++){
		navs[i].addEventListener('click',function(){
			document.querySelector('.navActive').classList.remove('navActive');
			
			menupage.classList.toggle('menupageActive');
			
			if(click){
				navs[1].classList.add('navActive');
				click=!click;
			}else{
				navs[0].classList.add('navActive');
				click=!click;
			}
		})
	}

},false);