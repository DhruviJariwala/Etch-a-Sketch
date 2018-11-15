/*-------- HTML element references -------- */
const CONTAINER = document.querySelector(".CONTAINER");
const CLEARBUTTON = document.querySelector(".cl-button");
const CHOOSEBUTTON = document.querySelector(".ch-button");
let squareDiv, r, c, i, j, number, userInput;

/*-------- Default Grid --------- */
function defaultGrid(){
    createGrid(16);
}

/*-------- Get Started --------- */
function getStarted(){
    clearGrid();
    askInput();
    checkGrid(userInput);
}

/*-------- Clear grid -------- */
function clearGrid(){
    while (CONTAINER.firstChild) {
        CONTAINER.removeChild(CONTAINER.firstChild);
    }
}

/*-------- Check grid -------- */
function checkGrid(number){
    if(number === "" || isNaN(number) || number<=0 || number>100)
    {
        if(number == null){
            defaultGrid();
        }
        else{
            alert("You entered something else!!!! Try again!");
            defaultGrid();
        }
    }
    else{
        createGrid(number);
    }
}

/*-------- Ask for Input -------- */
function askInput(){
    userInput = prompt("Enter a number between 2 to 100: ");
    return userInput;
}


/*-------- Creating grid CONTAINER -------- */
function createGrid(n){
    CONTAINER.style.gridTemplateColumns = "repeat("+n+", 1fr)";
    CONTAINER.style.gridTemplateRows = "repeat("+n+", 1fr)";
    let mul = n*n;
    for(i=1;i<=mul;i++){
        squareDiv = document.createElement("div");
        squareDiv.setAttribute("class","child");
        CONTAINER.appendChild(squareDiv);
    }
}

/*-------- Random Color Generator -------- */
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

/*-------- Lighten/Darken Colors -------- */
function LightenDarkenColor(colorCode, amount) {
    var usePound = false;
    if (colorCode[0] == "#") {
        colorCode = colorCode.slice(1);
        usePound = true;
    }
    var num = parseInt(colorCode, 16);
    var r = (num >> 16) + amount;
    if (r > 255) {
        r = 255;
    } else if (r < 0) {
        r = 0;
    }
    var b = ((num >> 8) & 0x00FF) + amount;
    if (b > 255) {
        b = 255;
    } else if (b < 0) {
        b = 0;
    }
    var g = (num & 0x0000FF) + amount;
    if (g > 255) {
        g = 255;
    } else if (g < 0) {
        g = 0;
    }
    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

/*-------- Hover Effects -------- */
function hoverEffect(e){
    if(e.target.tagName == "DIV"){
        if(e.srcElement.id=="iddiv" || e.srcElement.className=="header" || e.srcElement.className=="clear-button" || e.srcElement.className=="choose-button"){
            return;
        }
        else{
            let rc = getRandomColor();
            console.log(rc);
            console.log(LightenDarkenColor(rc,-20));
            e.target.style.backgroundColor = rc;
        }
    }
    else{
        return;
    }
}
document.addEventListener("mouseover", hoverEffect);

/*-------- Clear Effects -------- */
CLEARBUTTON.addEventListener("click", function(e){
    clearGrid();
    defaultGrid();
});

CHOOSEBUTTON.addEventListener("click", function(e){
    getStarted();
});


