

function init(){

	$(".box").click(function(){
		$(this).toggleClass("flip");
	});

	$(".front").mouseenter(function(){
		$(this).children(".projectTitle").css("color", "red");
		var click = "<p class='click_text'> Click for more info </p>";
		$(this).append(click);
	});

	$(".front").mouseleave(function(){
		$(this).children(".projectTitle").css("color", "black");
		$(this).children(".click_text").remove();
	});


}
