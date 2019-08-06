var maincontent=document.getElementsByClassName("main-content");
document.getElementById("head-jianshu").innerHTML=maincontent.length;
var sum=0;
var sumbq=document.getElementById("sum");
//选择，全选
var mount_jianshu=0; //选择的件数
var y=document.getElementsByClassName("quanxuan");
for(let i=0;i<maincontent.length;i++){
	let price=maincontent[i].getElementsByClassName("price")[0];
	let price_num=maincontent[i].getElementsByClassName("mount-num")[0];
	let x=maincontent[i].getElementsByClassName("xuanze")[0];
	 x.style.display="none";
	let btn=maincontent[i].getElementsByClassName("choice-btn")[0];
	btn.addEventListener("click",function(){
		btn_fun(x,price,price_num);
	});
	let rd_btn=maincontent[i].getElementsByClassName("reduce")[0];
	let ad_btn=maincontent[i].getElementsByClassName("add")[0];
	rd_btn.addEventListener("click",function(){
		rd(x,price,price_num);
	});
	ad_btn.addEventListener("click",function(){
		ad(x,price,price_num);
	});		
}
function btn_fun(x,price,price_num){
	if(x.style.display=="none"){
		x.style.display="block";
		mount_jianshu +=1;
		document.getElementById("jianshu").innerHTML=mount_jianshu;
		sum+=Number(price.innerText)*Number(price_num.innerText);
		sumbq.innerHTML=sum;
		checkquanxuan();
	}
	else{
		x.style.display="none";
		y[0].style.display="none";
		mount_jianshu -=1;
		document.getElementById("jianshu").innerHTML=mount_jianshu;
		sum-=Number(price.innerText)*Number(price_num.innerText);
		sumbq.innerHTML=sum;
	}
}
var btn_last=document.getElementsByClassName("choice-btn");
var qx=document.getElementById("qx");
qx.onclick=function(){
	if(y[0].style.display=="none"){
		y[0].style.display="block";
		document.getElementById("jianshu").innerHTML=mount_jianshu;
		quanxuan();
	}
	else{
		y[0].style.display="none";
		clear();
		mount_jianshu=0;
		document.getElementById("jianshu").innerHTML=mount_jianshu;
		sum=0;
		sumbq.innerHTML=sum;
	}
}
y[0].style.display="none";
btn_last[btn_last.length-1].onclick=function(){
	if(y[0].style.display=="none"){
		y[0].style.display="block";
		document.getElementById("jianshu").innerHTML=mount_jianshu;
		quanxuan();
	}
	else{
		y[0].style.display="none";
		clear();
		mount_jianshu=0;
		document.getElementById("jianshu").innerHTML=mount_jianshu;
		sum=0;
		sumbq.innerHTML=sum;
	}
}



//设置
var shezhi=document.getElementById("shezhi");
var shezhi_btn=document.getElementsByTagName("footer")[0].getElementsByClassName("amount");
shezhi.onclick=function(){
	if(shezhi_btn[1].style.display=="none"){
		shezhi.innerHTML="取消";
		shezhi_btn[0].style.display="none";
		shezhi_btn[1].style.display="block";
	}else{
		shezhi.innerHTML="设置";
		shezhi_btn[1].style.display="none";
		shezhi_btn[0].style.display="block";
	}
}
//删除

var main=document.getElementsByClassName("main")[0];
document.getElementById("del").addEventListener("click",dele);
shezhi.addEventListener("click",clear);
function dele() {
     for(let i=0;i<maincontent.length;i++){
     	if(maincontent[i].getElementsByClassName("xuanze")[0].style.display=="block"){
     		/* main.children[i].innerHTML=""; */
     		main.removeChild(main.children[i]);
     	}
     }
	 document.getElementById("head-jianshu").innerHTML=maincontent.length;
}

function clear(){
	for(let i=0;i<maincontent.length;i++){
		let x=maincontent[i].getElementsByClassName("xuanze")[0];
		x.style.display="none";
	}
	y[0].style.display="none";
	mount_jianshu=0;
	document.getElementById("jianshu").innerHTML=mount_jianshu;
	sum=0;
	sumbq.innerHTML=sum;
}
function quanxuan(){
	mount_jianshu=0;
	sum=0;
	for(let i=0;i<maincontent.length;i++){
		let price=maincontent[i].getElementsByClassName("price")[0];
		let price_num=maincontent[i].getElementsByClassName("mount-num")[0];
		let x=maincontent[i].getElementsByClassName("xuanze")[0];
		x.style.display="block";
		mount_jianshu +=1;;
		sum+=Number(price.innerText)*Number(price_num.innerText);
	}
	document.getElementById("jianshu").innerHTML=mount_jianshu;
	sumbq.innerHTML=sum;
}


function rd(x,price,price_num){
	if(price_num.innerText>1){
		price_num.innerHTML=Number(price_num.innerText)-1;
		if(x.style.display=="block"){
			sum-=Number(price.innerText);
			sumbq.innerHTML=sum;
		}
	}
}
function ad(x,price,price_num){
		price_num.innerHTML=Number(price_num.innerText)+1;
		if(x.style.display=="block"){
			sum+=Number(price.innerText);
			sumbq.innerHTML=sum;
		}
}
function checkquanxuan(){
	var flag=1;
	for(let i=0;i<maincontent.length;i++){
		let x=maincontent[i].getElementsByClassName("xuanze")[0];
		if(x.style.display=="none"){
			flag=0;
			break;
		}
	}
	if(flag)
	y[0].style.display="block";
}