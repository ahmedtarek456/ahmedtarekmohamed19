var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 700
});

$(function() {  
    $("body").niceScroll({
		cursorwidth:12,
		cursoropacitymin:0.4,
		cursorcolor:'#6e8cb6',
		cursorborder:'none',
		cursorborderradius:4,
		autohidemode:'leave'
  });
});


let dark=document.getElementById('dark');
let content=document.getElementById('contentt');

let darkmode=()=>{
	if(dark.textContent=="light"){
		content.style.background="white";
		dark.textContent="dark";
		dark.style.background="black"
		dark.style.color="white";

	}else{
		content.style.background="black"
		dark.textContent="light";
		dark.style.background="white";
		dark.style.color="black"


	}
}
dark.addEventListener('click',darkmode)

  
  
