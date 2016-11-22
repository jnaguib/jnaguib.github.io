

function init(){

	$(".box").click(function(){
		if ($(this).hasClass("flip")){
			$(this).removeClass('flip');
		} else{
			$(this).addClass('flip');
		}
	}
	// , function(){
	// 	$(this).removeClass('flip');
	// }
	)

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
