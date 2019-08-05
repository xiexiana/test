 var index=1;

function changimg(n){
	index += n;
	show(index);
}

function dotchange(n){
	index=n;
	show(index);
}

function show(n){
	var divcontent=document.getElementsByClassName("divcontent");
	var dot=document.querySelectorAll(".dot");
	if(n>divcontent.length) {
		index=1;
	}
	if(n<1){ index=divcontent.length;}
	for(let i=0;i<divcontent.length;i++){
		divcontent[i].style.display="none";
	}
	for(let i=0;i<dot.length;i++){
		dot[i].className =dot[i].className.replace("active"," ");
	}
	divcontent[index-1].style.display="block";
	dot[index-1].className += " active";
	
} 


 
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("divcontent");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
   
    if (index > slides.length) {index = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index-1].style.display = "block";  
    dots[index-1].className += " active";
    setTimeout(showSlides, 2000); 
	index++;

}
