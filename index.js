// document.querySelectorAll(".drum").forEach((element) => element.addEventListener("click", function(){aler(t"I got clicked!");}));

/*var drumElements = document.querySelectorAll(".drum");

for (var i = 0; i < drumElements.length; i++) {
	drumElements[i].addEventListener("click", function(){alert("I got clicked!");});
}*/


// Handle mouse click.
var drumElements = document.querySelectorAll(".drum");

for (var i = 0; i < drumElements.length; i++) {
	drumElements[i].addEventListener("click", function(){
		playSound(this.textContent);
		buttonAnimation(this.textContent);
	});
}

// Handle keypresses.
document.addEventListener("keydown", function(event) {
	playSound(event.key);
	buttonAnimation(event.key);
});

// Function to play sound.	
function playSound(buttonLetter) {
	switch (buttonLetter) {
		case "w":
			let tom1 = new Audio('sounds/tom-4.mp3');
			tom1.play();
			break;
		case "a":
			let tom2 = new Audio('sounds/tom-3.mp3');
			tom2.play();
			break;
		case "s":
			let tom3 = new Audio('sounds/tom-2.mp3');
			tom3.play();
			break;
		case "d":
			let tom4 = new Audio('sounds/tom-1.mp3');
			tom4.play();
			break;
		case "j":
			let snare = new Audio('sounds/snare.mp3');
			snare.play();
			break;
		case "k":
			let crash = new Audio('sounds/crash.mp3');
			crash.play();
			break;
		case "l":
			let bass = new Audio('sounds/kick-bass.mp3');
			bass.play();
			break;
		default:
			console.log(buttonLetter);
	}
}


function buttonAnimation(buttonLetter) {
	let button = document.querySelector("." + buttonLetter);
	button.classList.add("pressed");
	setTimeout(function () {
		button.classList.remove("pressed");
	}, 100);
}