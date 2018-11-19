
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

function creatTable(datas){
    let container = document.createElement('table');
	let explodedDatas = datas.split("\n");
	for (let i = 0; i < explodedDatas.length; i++){
		if (explodedDatas[i].length > 0){
            container.appendChild(buildTable(explodedDatas, i));
		}
	}
	return container;
}
function buildTable(data, index){
    let dataContainer = document.createElement('tr');
    let dateElement = data[index].split(":")[0];
    let dates = document.createElement('th');
    dates.innerHTML= dateElement;
    let textElement = data[index].split(":")[1];
    let text = document.createElement('td')
    text.innerHTML = textElement;
    dataContainer.appendChild(dates);
    dataContainer.appendChild(text);
    return dataContainer
}

document.getElementById("dates").appendChild(creatTable(datas));
