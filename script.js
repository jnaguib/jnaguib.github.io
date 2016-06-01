
var robot = 1;
var twitter = 1;
var fruit = 1;
var hala = 1;
var knowledge = 1;
var dashboard = 1;


function init(){
	$("#RobotCar").hide();
	$("#TwitterAnalyzer").hide();
	$("#fruitNinja").hide();
	$("#HalaSeeHalaDo").hide();
	$("#HalasKnowledgeBase").hide();
	$("#Dashboard").hide();

	$("#RobotCarClick").click(function(){RobotCarClick();});
	$("#TwitterAnalyzerClick").click(function(){TwitterAnalyzerClick();});
	$("#fruitNinjaClick").click(function(){fruitNinjaClick();});
	$("#HalaSeeHalaDoClick").click(function(){HalaSeeHalaDoClick();});
	$("#HalasKnowledgeBaseClick").click(function(){HalasKnowledgeBaseClick();});
	$("#DashboardClick").click(function(){DashboardClick();});

}

function RobotCarClick(){
	if (robot == 1){
			$("#RobotCar").show();
			$("#RobotCarClick").text("Hand controlled robot car [-]");
			robot = 0;
	}
	else{
			$("#RobotCar").hide();
			$("#RobotCarClick").text("Hand controlled robot car [+]");
			robot = 1;
	}
}


function TwitterAnalyzerClick(){
	if (twitter == 1){
			$("#TwitterAnalyzer").show();
			$("#TwitterAnalyzerClick").text("Twitter Sentiment Analysis [-]");
			twitter = 0;
	}
	else{
			$("#TwitterAnalyzer").hide();
			$("#TwitterAnalyzerClick").text("Twitter Sentiment Analysis [+]");
			twitter = 1;
	}
}

function fruitNinjaClick(){
	if (fruit == 1){
			$("#fruitNinja").show();
			$("#fruitNinjaClick").text("Python Fruit Ninja [-]");
			fruit = 0;
	}	
	else{
			$("#fruitNinja").hide();
			$("#fruitNinjaClick").text("Python Fruit Ninja [+]");
			fruit = 1;
	}
}

function HalaSeeHalaDoClick(){
	if (hala==1){
			$("#HalaSeeHalaDo").show();
			$("#HalaSeeHalaDoClick").text("Hala-See Hala-Do [-]");
			hala = 0;

	}
	else{
			$("#HalaSeeHalaDo").hide();
			$("#HalaSeeHalaDoClick").text("Hala-See Hala-Do [+]");

			hala = 1;
	}
}

function HalasKnowledgeBaseClick(){
	if (knowledge == 1){
		knowledge = 0;
		$("#HalasKnowledgeBase").show();
		$("#HalasKnowledgeBaseClick").text("Improving Hala's knowledge-base [-]");

	}
	else{
		knowledge = 1;
		$("#HalasKnowledgeBase").hide();
		$("#HalasKnowledgeBaseClick").text("Improving Hala's knowledge-base [+]");


	}
}

function DashboardClick(){
	if (dashboard == 1){
		dashboard = 0;
		$("#Dashboard").show();
		$("#DashboardClick").text("Hala's Dashboard [-]");
	}
	else{
		dashboard = 1;
		$("#Dashboard").hide();
		$("#DashboardClick").text("Hala's Dashboard [+]");
	}
}

