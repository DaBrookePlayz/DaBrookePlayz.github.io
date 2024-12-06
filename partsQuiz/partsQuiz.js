function welcome() {
	window.location.href = "https://dabrookeplayz.github.io/";
}

function process() {
	result = "";
	if (!document.getElementById("question1answer3").checked) {
		result = "Question 1 incorrect.\n";
	}
	
	if (!document.getElementById("question2answer4").checked) {
		result = "Question 2 incorrect.\n";
	}
	
	if (!document.getElementById("question3answer1").checked) {
		result = "Question 3 incorrect.\n";
	}
	
	if (!document.getElementById("question4answer2").checked) {
		result = "Question 4 incorrect.\n";
	}
	
	if (!document.getElementById("question5answer3").checked) {
		result = "Question 5 incorrect.\n";
	}
	
	if (result == "") {
		result = "No incorrect answers, good job\n";
	}
	
	document.getElementById("feedback").innerHTML = result;
}

function reset() {
	
}
