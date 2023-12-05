 
		let sliderImg = Array.from(document.querySelectorAll('.imgSlider img'))
	
		let imgIndex = 1;
		let imgLength = sliderImg.length -1
		
		
		let left =  document.querySelector('.left');
		let right =  document.querySelector('.right');
			sliderImg[imgIndex++].classList.add('active')
			function rmeove(){
				sliderImg.forEach(e=>{
				e.classList.remove('active')
				})
			}
	
		right.addEventListener('click',()=>{
				rmeove()
				checkSlider()
				sliderImg[imgIndex++].classList.add('active')

		})
		left.addEventListener('click',()=>{
				rmeove()
				checkSlider()
				sliderImg[imgIndex--].classList.add('active')

		})
		
		function checkSlider(){
				
			if(imgIndex > imgLength){
				imgIndex = 1;
			}
			if(imgIndex < 0){
				imgIndex = imgLength
			}
			
		}