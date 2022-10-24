var numberOfButtons =
	document.querySelectorAll(".button").length;

for (var j = 0; j < numberOfButtons; j++) {

document.querySelectorAll(".button")[j]
.addEventListener("click", function() {

	var buttonStyle = this.innerHTML;
	sound(buttonStyle);
	animation(buttonStyle);
});
}

document.addEventListener("keypress", function(event) {
sound(event.key);
animation(event.key);
});

function sound(key) {
switch (key) {
	case "A":
	var sound1 = new Audio("music/m-1.mp3");
	sound1.play();
	break;

	case "B":
	var sound2 = new Audio("music/m-2.mp3");
	sound2.play();
	break;

	case "C":
	var sound3 = new Audio('music/m-3.mp3');
	sound3.play();
	break;

	case "D":
	var sound4 = new Audio('music/m-4.mp3');
	sound4.play();
	break;

	case "E":
	var sound5 = new Audio('music/m-5.mp3');
	sound5.play();
	break;

	case "F":
	var sound6 = new Audio('music/m-6.mp3');
	sound6.play();
	break;

	case "G":
	var sound7 = new Audio('music/m-7.mp3');
	sound7.play();
	break;

	default: console.log(key);
}
}

function animation(currentKey) {
var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("animation");

setTimeout(function() {
	activeButton.classList.remove("animation");
}, 100);
}