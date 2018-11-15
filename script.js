/*-------- HTML element references -------- */
const CONTAINER = document.querySelector(".CONTAINER");
const BUTTON = document.querySelector("button");
let squareDiv, r, c, i, j, number;

/*-------- Default grid ---x----- */
function getStarted(){
    clearGrid();
    createGrid();
}

/*-------- Clear grid ---x----- */
function clearGrid(){
    while (CONTAINER.firstChild) {
        CONTAINER.removeChild(CONTAINER.firstChild);
    }
}

/*-------- Creating grid CONTAINER ---x----- */
function createGrid(){
    number = prompt("Enter number between 2 to 100: ");
    CONTAINER.style.gridTemplateColumns = "repeat("+number+", 1fr)";
    CONTAINER.style.gridTemplateRows = "repeat("+number+", 1fr)";
    let mul = number*number;
    for(i=1;i<=mul;i++){
        squareDiv = document.createElement("div");
        squareDiv.setAttribute("class","child");
        CONTAINER.appendChild(squareDiv);
    }
}

/*-------- Hover Effects -------- */
function hoverEffect(e){
    if(e.target.tagName == "DIV"){
        if(e.srcElement.id=="iddiv" || e.srcElement.className=="header" || e.srcElement.className=="clear-button"){
            return;
        }
        else{
            e.target.style.backgroundColor = "brown";
        }
    }
    else{
        return;
    }
}
document.addEventListener("mouseover", hoverEffect);

/*-------- Clear Effects -------- */
BUTTON.addEventListener("click", function(e){
    getStarted();
});



