 var index=1;
show(index);
function dotchange(n){
	index=n;
	show(index);
}

function show(n){
	var divcontent=document.getElementsByClassName("lunbo");
	var dot=document.querySelectorAll(".tabnav-item");
	if(n>divcontent.length) {
		index=1;
	}
	if(n<1){ index=divcontent.length;}
	for(let i=0;i<divcontent.length;i++){
		divcontent[i].style.display="none";
	}
	for(let i=0;i<dot.length;i++){
		dot[i].style.borderBottomColor="#D3D3D3"
	}
	divcontent[index-1].style.display="block";
	dot[index-1].style.borderBottomColor = "#000000";	
} 


 
