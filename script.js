
var displayedData = document.getElementById("htw");
var navButton = document.getElementById("nav").children;

function resetButtonsStyle(buttonsArray) {
	for (var i = 0; i < buttonsArray.length; i++) {
		buttonsArray[i].style.backgroundColor = "initial";
		buttonsArray[i].style.color = "initial";
	}
}

function replaceContent(button, contentToReplace, newContent) {
	contentToReplace.style.display = "none";
	newContent.style.display = "flex";
	resetButtonsStyle(navButton);
	button.style.backgroundColor = "#000";
	button.style.color = "#F9C416";
	displayedData = newContent;
}