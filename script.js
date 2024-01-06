
// Code to make javascript switch between two articles. 
// On click, show one article, hide another and vice versa.
let switchEmployee = false;

function switchButton() {
	if (switchEmployee == true) {
		document.getElementById("tanya-article").style.display = "flex";
		document.getElementById("john-article").style.display = "none";
    switchEmployee = false;
	} else {
		document.getElementById("tanya-article").style.display = "none";
		document.getElementById("john-article").style.display = "flex";
    switchEmployee = true;
	}
}


// Add a click event listener to the buttons to switch between the articles
const switchButtons = document.querySelectorAll(".switch-button");

switchButtons.forEach((button) => {
	button.addEventListener("click", switchButton);
});
