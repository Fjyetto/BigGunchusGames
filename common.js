if(window.innerHeight > window.innerWidth){
	let elements = document.querySelectorAll('.top');
		elements.forEach((element) => {
		element.classList.remove('top');
		element.classList.add('topmob');
	});
	
	elements = document.querySelectorAll('.box');
		elements.forEach((element) => {
		element.classList.remove('box');
		element.classList.add('boxmob');
	});
}

