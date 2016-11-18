

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

	var animationSpeed = 200;


}
