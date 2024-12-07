function welcome() {
	window.location.href = "https://dabrookeplayz.github.io/";
}

function process() {
	result = "";
	if (!document.getElementById("question1answer3").checked) {
		result += "Question 1 incorrect.\n";
	}
	
	if (!document.getElementById("question2answer4").checked) {
		result += "Question 2 incorrect.\n";
	}
	
	if (!document.getElementById("question3answer1").checked) {
		result += "Question 3 incorrect.<br>";
	}
	
	if (!document.getElementById("question4answer2").checked) {
		result += "Question 4 incorrect.<br>";
	}
	
	if (!document.getElementById("question5answer3").checked) {
		result += "Question 5 incorrect.\n";
	}
	
	if (result == "") {
		result = "No incorrect answers, good job.";
	}
	
	document.getElementById("feedback").innerHTML = result;
}

function reset() {
	document.getElementById("question1answer1").checked = false;
	document.getElementById("question1answer2").checked = false;
	document.getElementById("question1answer3").checked = false;
	document.getElementById("question1answer4").checked = false;

	document.getElementById("question2answer1").checked = false;
	document.getElementById("question2answer2").checked = false;
	document.getElementById("question2answer3").checked = false;
	document.getElementById("question2answer4").checked = false;

	document.getElementById("question3answer1").checked = false;
	document.getElementById("question3answer2").checked = false;
	document.getElementById("question3answer3").checked = false;
	document.getElementById("question3answer4").checked = false;

	document.getElementById("question4answer1").checked = false;
	document.getElementById("question4answer2").checked = false;
	document.getElementById("question4answer3").checked = false;
	document.getElementById("question4answer4").checked = false;

	document.getElementById("question5answer1").checked = false;
	document.getElementById("question5answer2").checked = false;
	document.getElementById("question5answer3").checked = false;
	document.getElementById("question5answer4").checked = false;
	
	document.getElementById("feedback").innerHTML = "";
	// if theres a better way to clear radio buttons, I didn't ask.
}
