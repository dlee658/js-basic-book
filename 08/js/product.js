		var bigPic = document.querySelector("#cup");  
		var smallPics = document.querySelectorAll(".small");  
		var isOpen = false;

		for(i=0; i<smallPics.length; i++) {
			smallPics[i].addEventListener("click", function() {
				newPic = this.src;
				bigPic.setAttribute("src", newPic);
			});
		}

		var view = document.querySelector("#view");
		view.addEventListener("click",function(){
			if(isOpen){
				document.querySelector("#detail").style.display = "none";
				view.innerText = "열기";
				
				isOpen = false;
			}
			else{
				document.querySelector("#detail").style.display = "block";
				view.innerText = "닫기";
				isOpen = true;
			}
			
		})