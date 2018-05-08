document.addEventListener("DOMContentLoaded",function(){
	var listButton=document.querySelectorAll(".sliderButton ul li");
	var slider=document.querySelectorAll('.motslider');
	var liIndex=0;
	var currentLi=null;

	//for auto slider
	var sliderInterval=setInterval(function(){
		
		if(liIndex==listButton.length){
			document.querySelector('.liactive').classList.remove("liactive");
			listButton[0].classList.add('liactive');
			document.querySelector('.sliderActive').classList.remove('sliderActive');
			slider[0].classList.add('sliderActive');
			liIndex=0;
		}else{
			document.querySelector('.liactive').classList.remove("liactive");
			listButton[liIndex].classList.add('liactive');
			document.querySelector('.sliderActive').classList.remove('sliderActive');
			slider[liIndex].classList.add('sliderActive');
		}
		liIndex++;
	},6000)

	//for check button slider
	for (let i = 0; i < listButton.length; i++) {

		listButton[i].onclick=function(){
			clearInterval(sliderInterval);
			currentLi=listButton[i];
			document.querySelector('.liactive').classList.remove("liactive");
			this.classList.add('liactive');
		
			for(liIndex=0;currentLi=currentLi.previousElementSibling;liIndex++){}
			

			//for sliderActive
			document.querySelector('.sliderActive').classList.remove('sliderActive');
			slider[liIndex].classList.add('sliderActive');
		}	
	}

	
	//for out menupage
	var bar=document.querySelector('.bar');
	var menupage=document.querySelector('.menupage')
	var navs=document.querySelectorAll('nav span');
	var click=true;
	console.log(navs);
	
	
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