const MONTH = new Map([
	["01", "Jan"],
	["02", "Feb"],
	["03", "Mar"],
	["04", "Apr"],
	["05", "May"],
	["06", "Jun"],
	["07", "Jul"],
	["08", "Aug"],
	["09", "Sep"],
	["10", "Oct"],
	["11", "Nov"],
	["12", "Dec"]
]);


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
    let container = document.getElementById("datesCtn");
	let explodedDatas = datas.split("\n");
	for (let i = 0; i < explodedDatas.length; i++){
		if (explodedDatas[i].length > 0){
            container.appendChild(buildTable(explodedDatas, i));
		}
	}
	return container;
}
function buildTable(data, index){
    let dataContainer = document.createElement("div");
    let dates = document.createElement("div");
    let text = document.createElement("div")
    
    dataContainer.setAttribute("id", "dates");
    dates.setAttribute("id", "datesString");
    text.setAttribute("id", "text");

    let dateElement = data[index].split(":")[0];
    dateElement = dateElement.split(" ");
    dayName = dateElement[0];
    fullDate = dateElement[1].split(".");
    day = fullDate[0];
    month = MONTH.get(fullDate[1]);
    year = fullDate[2];
    dates.innerHTML=  "<p>" + month +  " " + year + "</p>" + "<p>" + day + "</p>" + "<p>" + dayName + "</p>";
    let textElement = data[index].split(":")[1];
    text.innerHTML = textElement;
    dataContainer.appendChild(dates);
    dataContainer.appendChild(text);
    return dataContainer
}

// Add all the dates in the dates container
creatTable(dates);
