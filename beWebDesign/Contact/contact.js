document.addEventListener("DOMContentLoaded",function(){

	
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