//设置main高度
/* var srheight= screen.availHeight;
var main_height =document.getElementsByClassName("main")[0];
main_height.style.height=(srheight-100)+"px"; */
//有几件宝贝
var count = document.getElementsByClassName("main-content");
document.getElementById("head-jianshu").innerHTML=count.length;
document.getElementById("del").addEventListener("click",jianshu );
function jianshu() {
     count = document.getElementsByClassName("main-content");
    document.getElementById("head-jianshu").innerHTML=count.length;
}
//价格
var price=document.getElementsByClassName("price");
var price_num=document.getElementsByClassName("mount-num");
var sum=0;
var sumbq=document.getElementById("sum");
//选择，全选
var mount_jianshu=0; //选择的件数
var x =document.getElementsByClassName("xuanze");
var y=document.getElementsByClassName("quanxuan");
var btn = document.getElementsByClassName("choice-btn");
var maincontent=document.getElementsByClassName("main-content");
for(let i=0;i<btn.length-1;i++){
			x[i].style.display="none";
}
y[0].style.display="none";
for(let i=0;i<btn.length-1;i++){
	btn[i].onclick=function(){
		if(x[i].style.display=="none"){
			x[i].style.display="block";
			mount_jianshu +=1;
			document.getElementById("jianshu").innerHTML=mount_jianshu;
			sum+=Number(price[i].innerText)*Number(price_num[i].innerText);
			sumbq.innerHTML=sum;
			var flag=1;
			for(let m=0;m<x.length;m++){
				if(x[m].style.display=="none"){
					flag=0;
					break;
				}
			}
			if(flag)
			y[0].style.display="block";
		}
		else{
			x[i].style.display="none";
			y[0].style.display="none";
			mount_jianshu -=1;
			document.getElementById("jianshu").innerHTML=mount_jianshu;
			sum-=Number(price[i].innerText)*Number(price_num[i].innerText);
			sumbq.innerHTML=sum;
		}
	}
}
btn[btn.length-1].onclick=function(){
	if(y[0].style.display=="none"){
		y[0].style.display="block";
		mount_jianshu=0;
		sum=0;
		for(let i=0;i<btn.length-1;i++){
			x[i].style.display="block";
			mount_jianshu +=1;
			sum+=Number(price[i].innerText)*Number(price_num[i].innerText);
		}
		document.getElementById("jianshu").innerHTML=mount_jianshu;
		sumbq.innerHTML=sum;
	}
	else{
		y[0].style.display="none";
		for(let i=0;i<btn.length-1;i++){
			x[i].style.display="none";
		}
		mount_jianshu=0;
		document.getElementById("jianshu").innerHTML=mount_jianshu;
		sum=0;
		sumbq.innerHTML=sum;
	}
}
//按钮
var rd_btn=document.getElementsByClassName("reduce");
var ad_btn=document.getElementsByClassName("add");
for(let i=0;i<rd_btn.length;i++){
	rd_btn[i].onclick=function(){
		if(price_num[i].innerText>1){
			price_num[i].innerHTML=Number(price_num[i].innerText)-1;
			if(x[i].style.display=="block"){
				sum-=Number(price[i].innerText);
				sumbq.innerHTML=sum;
			}
		}
	}
}
for(let i=0;i<ad_btn.length;i++){
	ad_btn[i].onclick=function(){
		price_num[i].innerHTML=Number(price_num[i].innerText)+1;
		if(x[i].style.display=="block"){
			sum+=Number(price[i].innerText);
			sumbq.innerHTML=sum;
		}
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
document.getElementById("del").addEventListener("click",dele);
function dele() {
     for(let i=0;i<btn.length-1;i++){
     	if(x[i].style.display=="block"){
     		/* main.children[i].innerHTML=""; */
     		main.removeChild(main.children[i]);
     	}
     }
	  x =document.getElementsByClassName("xuanze");
	  y=document.getElementsByClassName("quanxuan");
	 btn = document.getElementsByClassName("choice-btn");
}
var del=document.getElementById("del");
var main=document.getElementsByClassName("main")[0];
//增加一个mian-content
/* window.onload = function(){
	var  main=document.getElementsByClassName("main")[0];
	var main_content_left = document.createElement("div");
	var mcl=document.createAttribute("class");
	mcl.value="main-content-left";
	main_content_left.setAttribute(mcl);
	var main_content_right = document.createElement("div");
	
} */