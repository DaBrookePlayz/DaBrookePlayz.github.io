// video setup
var video_player = null;
var currentVideo = "videos/E_P1L1.mp4"

// logic setup
var pointsList = [0, 0, 0]; // endings that use points: 1, 2, 3
var saved = JSON.parse(localStorage.getItem("key"));
//var saved = [false, false, false, false, false, false, false, false, false, false, false]; //TODO: TEMPORARY FIX, USE ABOVE STATEMENT ON GITHUB, LOCALSTORAGE DOESN'T WORK PROPERLY ON NON-DOMAINS
var activateList = [false, false, false, false, false, false, false];
/* for activate list
0: LAD1_W30_P1L7 activates RE_P1L11
1: AGD_P2L3 activates RE_P2L6 and RE7_P2L8
2: GAD3_P2L6 activates URN3_P2L8 (all type 3s clicked) or RE9_P2L8
3: LAD10_P2L6 activates RE10_P2L8 and RE10_P3L2
4: LAD4_S6-8_P2L6 activates RE4_P2L8 and RE4_P3L2
5: AGD_P2L10 activates RE7_P3L2
6: AE_P1L11 activates RE9_P3L2
*/
// 3, 5, 7, 8, 4, 6, 2, 10, 9, 1
function onLoad() {
    //video stuff
    video_player = document.getElementById("video");
	video_player.setAttribute("src", currentVideo);
    video_player.pause();

    if (saved[0]) { // if debug is on, show debug stuff
        refreshDebug();
	}
}


// video autoplay stuff, NO TOUCHY
function toggleMute() {
    var video = document.getElementById('video');
    if (video.muted) {
        video.muted = false;
    } else {
        video.muted = true;
    }
}

function delay(time) { // Delay Function to Add SetTimeOut After Defined Interval
    return new Promise((resolve) => setTimeout(resolve, time));
}

function showVideo() { //Show Video Function to Add Display Property to Show the Video on button click which fufills User Interaction so video runs unmuted
    document.getElementById("agreement").style.visibility = "hidden";
    var element = document.getElementById('video');
    var button = document.getElementById('button');
    element.style.display = 'block';
    button.style.display = 'none';
    delay(100).then(() => toggleMute());
    video_player.play();
}

function onVideoEnded() { // bitch lets have some FUN
	switch (currentVideo) { // currentVideo is actually the video that just ended
	    case "videos/E_P1L1.mp4":
		    currentVideo = "videos/C_T8_P1L2.mp4";
            timer(8);
            createChoice3("Help Maya out", 6, "Wait for Maya", 0, "Leave without Maya", 0);
		    break;
	    case "videos/C_T8_P1L2.mp4":
			currentVideo = "videos/GD3_P1L3.mp4";
			pointsList[2]++;
            clearChoice();
            break;
	    case "videos/LD1_P1L3.mp4": // LD1_P1L3 and GD3_P1L3 use the same code so
		case "videos/GD3_P1L3.mp4":
			currentVideo = "videos/E_P1L4.mp4";
		    break;
		case "videos/D2_W20_P1L3.mp4":
			currentVideo = "videos/E_P1L5.mp4";
		    break;
		case "videos/E_P1L4.mp4":
			currentVideo = "videos/E_P1L5.mp4";
		    break;
		case "videos/E_P1L5.mp4":
			currentVideo = "videos/C_T7_P1L6.mp4";
			timer(7);
			createChoice2("Take a break for Maya", 9, "There is a game to win", 0); 
		    break;
		case "videos/C_T7_P1L6.mp4":
			currentVideo = "videos/GD_P1L7.mp4";
            clearChoice();
		    break;
		case "videos/LAD1_W30_P1L7.mp4":
			currentVideo = "videos/E_P1L8.mp4";
		    break;
		case "videos/GD_P1L7.mp4":
			currentVideo = "videos/E_P1L8.mp4";
		    break;
		case "videos/E_P1L8.mp4":
			currentVideo = "videos/C_T5_P1L9.mp4"; 
			timer(5);
			createChoice3("Stand up for Maya", 2, "Walk away from the crowd", 0, "Laugh with the others", 4);
		    break;
		case "videos/C_T5_P1L9.mp4":
			currentVideo = "videos/GD3_P1L10.mp4";
			pointsList[2]++;
            clearChoice();
		    break;
		case "videos/LD1_W25_P1L10.mp4": // all cutscenes with P1L10 use the same code
		case "videos/GD3_P1L10.mp4":
		case "videos/LD2_S8-5_P1L10.mp4": 
			if (activateList[0]) { // If LAD1_W30_P1L7 was activated
				currentVideo = "videos/RE_P1L11.mp4";
			} else {
				currentVideo = "videos/E_P1L11.mp4";
			}
		    break;
		case "videos/RE_P1L11.mp4": // all cutscenes with P1L11 use similar code
		case "videos/E_P1L11.mp4":
		   if (pointsList[0] >= 3) { // all ending 1 cutscenes
				currentVideo = "videos/N1_P1L12.mp4";
			} else if (pointsList[1] >= 2) { // all ending 2 cutscenes
				currentVideo = "videos/UN2_P1L12.mp4";
			} else { // default
				currentVideo = "videos/E_P2L1.mp4";
			}
		    break;
		case "videos/N1_P1L12.mp4":
			endingScreen(1);
		    break;
		case "videos/UN2_P1L12.mp4":
			endingScreen(2);
		    break;
		case "videos/E_P2L1.mp4": // TODO: EDITING ERROR IN FIRST SCENE
			currentVideo = "videos/C_T10_P2L2.mp4"; 
			timer(10);
			createChoice2("Show your powers", 0, "Hide your powers", 0);
		    break;
		case "videos/C_T10_P2L2.mp4":
			currentVideo = "videos/AGD_P2L3.mp4";
			activateList[1] = true;
            clearChoice();
		    break;
		case "videos/AGD_P2L3.mp4": // all cutscenes with P2L3 use the same code
		case "videos/D_P2L3.mp4":
			currentVideo = "videos/E_P2L4.mp4";
		    break;
		case "videos/E_P2L4.mp4":
			if (activateList[1]) {
				currentVideo = "videos/RE_P2L6.mp4"
			} else {
				currentVideo = "videos/C_T12_P2L5.mp4";
				timer(12);
				createChoice3("Agree with Gabriel", 3, "Do not respond to Gabriel", 0, "Disagree with Gabriel", 8);
			}
		    break;
		case "videos/C_T12_P2L5.mp4":
			currentVideo = "videos/GAD3_P2L6.mp4";
			pointsList[2]++;
			activateList[2] = true;
            clearChoice();
		    break;
		case "videos/RE_P2L6.mp4": // all cutscenes with P2L6 use the same code
		case "videos/GAD3_P2L6.mp4":
		case "videos/LAD10_P2L6.mp4":
		case "videos/LAD4_S6-8_P2L6.mp4":
			currentVideo = "videos/E_P2L7.mp4";
		    break;
		case "videos/E_P2L7.mp4":
			if (activateList[1]) {
				currentVideo = "videos/RE7_P2L8.mp4";
			} else if (activateList[2] && (pointsList[2] >= 3)) { 
				currentVideo = "videos/URN3_P2L8.mp4";
			} else if (activateList[2]) {
				currentVideo = "videos/RE9_P2L8.mp4";
			} else if (activateList[3]) {
				currentVideo = "videos/RE10_P2L8.mp4";
			} else if (activateList[4]) {
				currentVideo = "videos/RE4_P2L8.mp4";
			} else {
				alert("um idk E_P2L7 couldn't decide what cutscene to do");
			}
		    break;
		case "videos/RE7_P2L8.mp4":
			currentVideo = "videos/C_T10_P2L9.mp4"; 
			timer(10);
			createChoice2("Tell her the truth", 0, "She doesn't need to know yet", 0);
		    break;
		case "videos/URN3_P2L8.mp4":
			endingScreen(3);
		    break;
		case "videos/RE9_P2L8.mp4":
			currentVideo = "videos/AE_P2L11.mp4";
		    break;
		case "videos/RE10_P2L8.mp4": // same something something
		case "videos/RE4_P2L8.mp4":
			currentVideo = "videos/E_P3L1.mp4";
		    break;
		case "videos/C_T10_P2L9.mp4":
			currentVideo = "videos/AGD_P2L10.mp4";
			activateList[5] = true;
            clearChoice();
		    break;
		case "videos/AGD_P2L10.mp4":
			currentVideo = "videos/E_P3L1.mp4";
		    break;
		case "videos/D_W35_P2L10.mp4":
			currentVideo = "videos/AE_P2L11.mp4";
		    break;
		case "videos/AE_P2L11.mp4":
			currentVideo = "videos/E_P3L1.mp4";
			activateList[6] = true; // I had nowhere else to put this. Being unique only makes you a nuisance. omg im just kidding-
		    break;
		case "videos/E_P3L1.mp4":
			if (activateList[5]) {
				currentVideo = "videos/RE7_P3L2.mp4";
			} else if (activateList[6]) {
				currentVideo = "videos/RE9_P3L2.mp4";
			} else if (activateList[3]) {
				currentVideo = "videos/RE10_P3L2.mp4";
			} else if (activateList[4]) {
				currentVideo = "videos/RE4_P3L2.mp4";
			} else {
				alert("um idk E_P3L2 couldn't decide what cutscene to do");
			}
		    break;
		case "videos/RE7_P3L2.mp4":
			currentVideo = "videos/C_T5_P3L3.mp4"; 
			timer(5);
			createChoice2("Fight back", 0, "Give up", 0);
		    break;
		case "videos/RE9_P3L2.mp4":
			currentVideo = "videos/C_T3_P3L3.mp4"; 
			timer(3);
			createChoice2("Fight back", 10, "Give up", 0);
		    break;
		case "videos/RE10_P3L2.mp4":
			if (pointsList[1] >= 1) {
				currentVideo = "videos/UN8_P3L5.mp4";
			} else {
				currentVideo = "videos/E_P3L3.mp4";
			}
		    break;
		case "videos/RE4_P3L2.mp4":
			if ((pointsList[1] >= 1)) {
				currentVideo = "videos/UN4_P3L3.mp4";
			} else {
				currentVideo = "videos/GN5_P3L3.mp4";
			}
		    break;
		case "videos/C_T5_P3L3.mp4": // same something
		case "videos/C_T3_P3L3.mp4":
			currentVideo = "videos/GN5_P3L5.mp4";
            clearChoice();
		    break;
		case "videos/E_P3L3.mp4":
			currentVideo = "videos/C_T4_P3L4.mp4"; 
			timer(4);
			createChoice2("Fight back", 0, "Give up", 0);
		    break;
		case "videos/UN4_P3L3.mp4":
			endingScreen(4);
		    break;
		case "videos/GN5_P3L3.mp4":
			endingScreen(5);
		    break;
		case "videos/D_S9-5_P3L4.mp4":
			currentVideo = "videos/C_T3_P3L5.mp4"; 
			timer(3);
			createChoice2("Fight for the future", 0, "Mourn the past", 0);
		    break;
		case "videos/LD_S9-4_P3L4.mp4":
			if (pointsList[1] >= 1) {
				currentVideo = "videos/UN8_P3L5.mp4";
			} else {
				currentVideo = "videos/E_P3L5.mp4";
			}
		    break;
		case "videos/C_T4_P3L4.mp4":
			currentVideo = "videos/GN5_P3L5.mp4";
            clearChoice();
		    break;
		case "videos/C_T3_P3L5.mp4":
			currentVideo = "videos/UGN6_P3L6.mp4";
            clearChoice();
		    break;
		case "videos/GN5_P3L5.mp4":
			endingScreen(5);
		    break;
		case "videos/E_P3L5.mp4": 
			currentVideo = "videos/C_T2_P3L6.mp4"; 
			timer(2);
			createChoice2("Rebel against Aku", 0, "Accept your fate", 0);
		    break;
		case "videos/UN8_P3L5.mp4":
			endingScreen(8);
		    break;
		case "videos/D_S9-5_P3L5.mp4": 
			currentVideo = "videos/C_T5_P3L6.mp4"; 
			timer(5);
			createChoice2("Fight for the future", 0, "Mourn the past", 0);
		    break;
		case "videos/UGN6_P3L6.mp4":
			endingScreen(6);
		    break;
		case "videos/LN7_S10-10_P3L6.mp4":
			endingScreen(7);
		    break;
		case "videos/C_T2_P3L6.mp4":
			currentVideo = "videos/GN4_P3L7.mp4";
            clearChoice();
		    break;
		case "videos/C_T5_P3L6.mp4":
			currentVideo = "videos/UGN6_P3L7.mp4";
            clearChoice();
		    break;
		case "videos/GN4_P3L7.mp4":
			endingScreen(4);
		    break;
		case "videos/UN9_W40_P3L7.mp4":
			endingScreen(9);
		    break;
		case "videos/UN10_W45_P3L7.mp4":
			endingScreen(10);
		    break;
		case "videos/UGN6_P3L7.mp4":
			endingScreen(6);
		    break;
	    default:
		    console.log("F U C K");
		    break;
	}
	
	refreshDebug();
    video_player.setAttribute("src", currentVideo);
    video_player.play();
}


// detects keystrokes 
window.addEventListener('keydown', function (e) {
    if (e.key == "d" && !saved[0]) { // enabling / disabling debug mode
		saved[0] = true;
		alert("Debug mode activated.");
        document.getElementById("debug").style.visibility = "visible";
	} else if (e.key == "d" && saved[0]) {
		saved[0] = false;
		alert("Debug mode deactivated.");
		document.getElementById("debug").style.visibility = "hidden";
	} 

    if (saved[0]) {
        if (e.key == "1" && !saved[1]) { // enabling endings
		    saved[1] = true;
	    } else if (e.key == "2" && !saved[2]) {
		    saved[2] = true;
	    } else if (e.key == "3" && !saved[3]) {
		    saved[3] = true;
	    } else if (e.key == "4" && !saved[4]) {
		    saved[4] = true;
	    } else if (e.key == "5" && !saved[5]) {
		    saved[5] = true;
	    } else if (e.key == "6" && !saved[6]) {
		    saved[6] = true;
	    } else if (e.key == "7" && !saved[7]) {
		    saved[7] = true;
	    } else if (e.key == "8" && !saved[8]) {
		    saved[8] = true;
	    } else if (e.key == "9" && !saved[9]) {
		    saved[9] = true;
	    } else if (e.key == "0" && !saved[10]) {
		    saved[10] = true;
	    } else if (e.key == "1" && saved[1]) { // disabling endings
		    saved[1] = false;
	    } else if (e.key == "2" && saved[2]) {
		    saved[2] = false;
	    } else if (e.key == "3" && saved[3]) {
		    saved[3] = false;
	    } else if (e.key == "4" && saved[4]) {
		    saved[4] = false;
	    } else if (e.key == "5" && saved[5]) {
		    saved[5] = false;
	    } else if (e.key == "6" && saved[6]) {
		    saved[6] = false;
	    } else if (e.key == "7" && saved[7]) {
		    saved[7] = false;
	    } else if (e.key == "8" && saved[8]) {
		    saved[8] = false;
	    } else if (e.key == "9" && saved[9]) {
		    saved[9] = false;
	    } else if (e.key == "0" && saved[10]) {
		    saved[10] = false;
	    }
	    
	refreshDebug(); // show changes
    }

	// this is the stupidest check ive ever seen its so funny
	if (e.key == "Escape" && document.getElementById("endingInfoText").innerHTML == "") { // menu / pause
		video_player.pause(); 
		if (confirm("Do you want to return to the title screen?")) {
		    window.location.href = "https://brookeplays.github.io/choices/title";
	    } else {
			video_player.play();
		}
    }

	if (e.key == "s" && document.getElementById("endingInfoText").innerHTML == "") { // force skip video
		onVideoEnded();
	}
	
    localStorage.setItem("key", JSON.stringify(saved)); // save
}, false);


// choices related
function createChoice2(prompt1, lock1, prompt2, lock2) { // tbh lock 2 isn't used for either of these
	document.getElementById("twoBtn").style.visibility = "visible";

	if (lock1 != 0 && !saved[lock1]) { // checks if there is a lock AND if that ending hasn't been completed
		document.getElementById("btn21").disabled = true;
		document.getElementById("btn21").style.background='#BBBBBB';
	}
	document.getElementById("btn21").textContent = prompt1;

	document.getElementById("btn22").textContent = prompt2;	
}

function createChoice3(prompt1, lock1, prompt2, lock2, prompt3, lock3) { // same thing but 3
	document.getElementById("threeBtn").style.visibility = "visible";

	if (lock1 != 0 && !saved[lock1]) { 
		document.getElementById("btn31").disabled = true;
		document.getElementById("btn31").style.background='#BBBBBB';
	}
	document.getElementById("btn31").textContent = prompt1;

	document.getElementById("btn32").textContent = prompt2;

	if (lock3 != 0 && !saved[lock3]) {
		document.getElementById("btn33").disabled = true;
		document.getElementById("btn33").style.background='#BBBBBB';
	}
	document.getElementById("btn33").textContent = prompt3;
}

function clearChoice() { // clears both types of choices by making them invisible and undoing any potential locks
	document.getElementById("twoBtn").style.visibility = "hidden";
	document.getElementById("btn21").disabled = false;
	document.getElementById("btn21").style.background='#FFFFFF';

	document.getElementById("threeBtn").style.visibility = "hidden";
	document.getElementById("btn31").disabled = false;
	document.getElementById("btn31").style.background='#FFFFFF';
	document.getElementById("btn33").disabled = false;
	document.getElementById("btn33").style.background='#FFFFFF';
}

function btnProcess(type) {
    switch (currentVideo) { 
		// first digit is # of decisions, second is the button placement
		// 3 options go good, default, bad, and 2 options go non-default, default
	    case "videos/C_T8_P1L2.mp4":
			switch (type) {
				case 31: //LD1_P1L3
					currentVideo = "videos/LD1_P1L3.mp4";
					pointsList[0]++; // to refer to any ending's points you need to decrement from the ending type
					break;
				case 32: //GD3_P1L3
					currentVideo = "videos/GD3_P1L3.mp4";
					pointsList[2]++;
					break;
				case 33: //D2_W20_P1L3
					if (wpm(20, "what has she done for you")) {
						currentVideo = "videos/D2_W20_P1L3.mp4";
						pointsList[1]++;
					} else {
						currentVideo = "videos/GD3_P1L3.mp4";
						pointsList[2]++;
					}
					break;
			}
			break;
		case "videos/C_T7_P1L6.mp4":
			switch (type) {
				case 21: //LAD1_W30_P1L7
					if (wpm(30,"she needs someone")) {
						currentVideo = "videos/LAD1_W30_P1L7.mp4";
						pointsList[0]++;
						activateList[0] = true; // RE_P1L11 activated
					} else {
						currentVideo = "videos/GD_P1L7.mp4";
					}
					break;
				case 22: //GD_P1L7
					currentVideo = "videos/GD_P1L7.mp4";
					break;
			}
			break;
		case "videos/C_T5_P1L9.mp4":
			switch (type) {
				case 31: //LD1_W25_P1L10
					if (wpm(25,"this is not right")) {
						currentVideo = "videos/LD1_W25_P1L10.mp4";
						pointsList[0]++;
					} else {
						currentVideo = "videos/GD3_P1L10.mp4";
						pointsList[2]++;
					}
					break;
				case 32: //GD3_P1L10
					currentVideo = "videos/GD3_P1L10.mp4";
					pointsList[2]++;
					break;
				case 33: //LD2_S8-5_P1L10
					if (cps(8,5)) {
						currentVideo = "videos/LD2_S8-5_P1L10.mp4";
						pointsList[1]++;
					} else {
						currentVideo = "videos/GD3_P1L10.mp4";
						pointsList[2]++;
					}
					break;
			}
			break;
        case "videos/C_T10_P2L2.mp4":
			switch (type) {
				case 21: //D_P2L3
					currentVideo = "videos/D_P2L3.mp4";
					break;
				case 22: //AGD_P2L3
					currentVideo = "videos/AGD_P2L3.mp4";
					activateList[1] = true; //re_p2l6 and re7_p2l8 activated
					break;
			}
			break;
        case "videos/C_T12_P2L5.mp4":
			switch (type) {
				case 31: //LAD10_P2L6
					currentVideo = "videos/LAD10_P2L6.mp4";
					activateList[3] = true; // RE10_P2L8 and RE10_P3L2
					break;
				case 32: //GAD3_P2L6
					currentVideo = "videos/GAD3_P2L6.mp4";
					pointsList[2]++;
					activateList[2] = true; // URN3_P2L8 or RE9_P2L8 activated
					break;
				case 33: //LAD4_S6-8_P2L6
					if (cps(6,8)) {
						currentVideo = "videos/LAD4_S6-8_P2L6.mp4";
						activateList[4] = true; //RE4_P2L8 and RE4_P3L2 activated
					} else {
						currentVideo = "videos/GAD3_P2L6.mp4";
						pointsList[2]++;
						activateList[2] = true;
					}
					break;
			}
			break;
		case "videos/C_T10_P2L9.mp4":
			switch (type) {
				case 21: //D_W35_P2L10
					if (wpm(35,"i cannot do this alone")) {
						currentVideo = "videos/D_W35_P2L10.mp4";
					} else {
						currentVideo = "videos/AGD_P2L10.mp4";
						activateList[5] = true
					}
					break;
				case 22: //AGD_P2L10
					currentVideo = "videos/AGD_P2L10.mp4";
					activateList[5] = true; // re7_p3l2 activated
					break;
			}
			break;
		case "videos/C_T5_P3L3.mp4":
			switch (type) {
				case 21: //D_S9-5_P3L4
					if (cps(9,5)) {
						currentVideo = "videos/D_S9-5_P3L4.mp4";
					} else {
						currentVideo = "videos/GN5_P3L5.mp4";
					}
					break;
				case 22: //GN5_P3L5
					currentVideo = "videos/GN5_P3L5.mp4";
					break;
			}
			break;
		case "videos/C_T3_P3L3.mp4":
			switch (type) {
				case 21: //LD_S9-4_P3L4
					if(cps(9,4)) {
						currentVideo = "videos/LD_S9-4_P3L4.mp4";
					} else {
						currentVideo = "videos/GN5_P3L5.mp4";
					}
					break;
				case 22: //GN5_P3L5
					currentVideo = "videos/GN5_P3L5.mp4";
					break;
			}
			break;
		case "videos/C_T4_P3L4.mp4":
			switch (type) {
				case 21: //D_S9-5_P3L5
					if (cps(9,5)) {
						currentVideo = "videos/D_S9-5_P3L5.mp4";
					} else {
						currentVideo = "videos/GN5_P3L5.mp4";
					}
					break;
				case 22: //GN5_P3L5
					currentVideo = "videos/GN5_P3L5.mp4";
					break;
			}
			break;
		case "videos/C_T3_P3L5.mp4":
			switch (type) {
				case 21: //LN7_S10-10_P3L6
					if (cps(10,10)) {
						currentVideo = "videos/LN7_S10-10_P3L6.mp4";
					} else {
						currentVideo = "videos/UGN6_P3L6.mp4";
					}
					break;
				case 22: //UGN6_P3L6
					currentVideo = "videos/UGN6_P3L6.mp4";
					break;
			}
			break;
		case "videos/C_T2_P3L6.mp4":
			switch (type) {
				case 21: //UN9_W40_P3L7
					if (wpm(40,"i have to keep fighting")) { // may change to "i cannot give up now after coming so far"
						currentVideo = "videos/UN9_W40_P3L7.mp4";
					} else {
						currentVideo = "videos/GN4_P3L7.mp4";
					}
					break;
				case 22: //GN4_P3L7
					currentVideo = "videos/GN4_P3L7.mp4";
					break;
			}
			break;
		case "videos/C_T5_P3L6.mp4":
			switch (type) {
				case 21: //UN10_W45_P3L7
					if (wpm(45,"you have to do this, be the hero")) {
						currentVideo = "videos/UN10_W45_P3L7.mp4";
					} else {
						currentVideo = "videos/UGN6_P3L7.mp4";
					}
					break;
				case 22: //UGN6_P3L7
					currentVideo = "videos/UGN6_P3L7.mp4";
					break;
			}
			break;
        default:
            console.log("Seems as if I did a fucky-wucky. Please contact Brooklyn.");
            break;
    }
    
    clearChoice();
    refreshDebug(); // makes sure that points and activated are up to date
	video_player.setAttribute("src", currentVideo);
    video_player.play();
}


// obstacles related
function timer(seconds) {

}

function cps(cps, seconds) {
	return true;
}

function wpm(wpm, prompt) {
	return true;
}


// logic and displaying of endings 
function endingScreen(typeNum) {
	//setup
	video_player.style.visibility = "hidden";
	document.getElementById("ending").style.display = "block";
	refreshDebug();
	currentVideo = null; // i give up just take this stupid error
    
    // prompts for everything
    let typeList = ["Error", "Resolved", "Bully", "Ignorant", "Evil", "Dead", "Whoops", "Undercover", "Betrayed", "Sacrifice", "Hero"] // lists WITHOUT "Error" at index 0 uses orderList's order instead of this index
    let descList = ["Error", "You stood up to your friends and Maya’s bullies and helped Maya feel like she belonged for the first time in forever.", "You decided to push Maya to her absolute limit. Did you think that would make you feel better in some twisted way?", "You decided that going with the flow would be the best option in life, but how did that turn out for you?", "You became like your grandparent and followed in their path to domination and destruction.", "Get good.", "You had banished the evil and saved your city at the cost of your beloved sister.", "No one knew who this hooded person was, most people thought he died shortly after finishing off Aku, but he is hailed as a hero.", "You were mean to Maya before, and you really expect her to reach out to you now?", "With a show of ultimate strength and bravery, you decided to sacrifice yourself to contain the evil.", "You decided to correct your wrongs and save the city and Maya, but the scars created are apparent."];
    let unlockList = ["Error", "Jade learned that respect and compassion are things that everyone needs, and that he should stand up to those who are misinformated on what's right.", "After Jade experienced true loss, he learned how to empathize better in stressful situations.", "Jade learned that going with the flow is usually not a good idea.", "Aku had showed Jade how to be truly cruel to others around you while only caring for yourself.", "", "Jade, understanding that he could always do better, learned how to help others when they feel down.", "Jade learned that you didn't need to be recognized or rewarded in order to help people out.", "Deep down, Jade wanted to get revenge after he was betrayed by his sister.", "Jade learned that you have to sometimes sacrifice your own interests in order to to the right thing.", "Jade has learned how to fight back against magic after he had taken back control from his own powers."];
    let endingHint = "There's a message waiting for you on the title screen..."; // in case endingList isn't affected by the for function below
    let hintList = ["KIA", "Do not care about others and take as little action as possible.", "Be unable to save Maya at the last second.", "Try to save Maya while being mean to her.", "Keep your powers secret, but still save the city.", "Accept your roots and try to befriend Aku.", "Be extremely cruel to Maya.", "Save Maya and the city with the help of your friends.", "Discover a secret, and find your true potential.", "Be nice to Maya and stand up for her, but it will require strength and courage."];
    let orderList = [5, 3, 6, 8, 7, 4, 2, 10, 9, 1]; // shows hints for how to get other endings

    // actual ending logic
    if (saved[typeNum]) { // if current ending is already been completed
        document.getElementById("endingTypeText").innerHTML = "Ending " + typeNum + ": " + typeList[typeNum] + " (Duplicate ending)";
        for (let i = 0; i < orderList.length; i++) { // run through each ending to see what hint should be shown to help the player out
            if (!saved[orderList[i]]) {
                endingHint = hintList[i];
                break;
            }
        }
        document.getElementById("endingStatusText").innerHTML = "Hint: " + endingHint;

    } else { // if current ending isn't ticked in saved (aka not completed)
		saved[typeNum] = true;
		localStorage.setItem("key", JSON.stringify(saved)); // make sure that its now completed
        //display
        document.getElementById("endingTypeText").innerHTML = "Ending " + typeNum + ": " + typeList[typeNum] + " (New ending!)";
        document.getElementById("endingStatusText").innerHTML = descList[typeNum];
    }
	document.getElementById("endingInfoText").innerHTML = unlockList[typeNum];

}


function refreshDebug() { // if in the debug state, update the text in the corners with current info
	if (saved[0]) { // this check isn't absolutely needed but eh I've already wasted too much unecessary processing power
		document.getElementById("activatedText").innerHTML = activateList;
		document.getElementById("savedText").innerHTML = saved;
		document.getElementById("pointsText").innerHTML = pointsList;
		document.getElementById("fileText").innerHTML = currentVideo;
	}
}
