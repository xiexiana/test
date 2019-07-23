$(document).ready(function(){
  $("ul li:last-child").click(function(){
    $(".bagview").toggle();
  });
});
 
function myFunction(x) {
		 x.classList.toggle("change");
}
	
$(document).ready(function(){
	  $(".chapternav-items").fadeIn();
		$(".chapternav-items-ipad").fadeIn();
		$(document.getElementsByClassName(".chapternav-items-ipad")).ready(function(){
			$(".ribbon-box").fadeIn();
		});
});

$(document).ready(function(){
	$("#sousuoicon").click(function(){
		$(".sousuo").fadeIn();
		$(".nav-list").fadeOut();
	});
});

$(document).ready(function(){
	$(".sousuo-close").click(function(){
		$(".sousuo").fadeOut();
		$(".nav-list").fadeIn();
	});
});
