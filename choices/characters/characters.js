var index = 0;
var infoList = ["Jade Jensen", "Maya Jensen", "Diane Jensen", "Ross Jensen", "Gabriel Johnson", "Aku"];
var descList = ["Jade is the model student at his high school. He is the team leader of the soccer team, has a 4.0 GPA, has several friends, and is known to be kind to others. Deep down though, he feels like he could accomplish more and is ashamed that he is too scared to stand up for Maya. Powers: Invisibility, flight, super strength.", "Maya is essentially Jade’s shadow, an opposite of him. She is regularly bullied by Jade’s friends due to her unpopularity and extreme Newcomer features. She has no real friends, is failing at school, and has no clue of what she will be doing after high school. Powers: Teleportation, telekinesis, intangibility.", "Diane is Jade and Maya’s mother, and Ross’ widow. She attempts to care for Maya and Jade the best she can, but doesn’t know much about Maya’s bullying, and cannot be present at times to her stressful job.", "Ross is a father to Jade and Maya and is Diane’s husband. He died unexpectedly from radiation-induced lung cancer from helping build the city. His death left a severe impact on Diane and Maya. No one knows, but he is the son of Aku, and initiated the Newcomer escape so they could have a better life. Powers: Healing, telepathy, shapeshifting (all when in his true form).", "Gabriel is Jade’s best and most reliable friend, who is there for him whenever he needs it. They have been together since they were young kids and hang out often.", "Aku is a near-immortal god-like being who feasts on Orian’s resources. The resources are extracted with the slavery of the people who are native to the planet. They are due to pass their control to their only descendant, Ross, who ran away. They cannot go far from home, as they leak too much energy to cross large distances. Powers: All."];

function backBtn() {
	window.location.href = "https://brookeplays.github.io/choices";
}

function leftBtn() {
	changeIndex(-1);
}

function rightBtn() {
	changeIndex(1)
}

function changeIndex(change){
    if (index == 0 && change == -1) {
        index = 5;
    } else if (index == 5 && change == 1) {
        index = 0;
    } else {
        index += change;
    }
    
    document.getElementById("infoText").innerHTML = infoList[index];
	document.getElementById("descText").innerHTML = descList[index];
}
