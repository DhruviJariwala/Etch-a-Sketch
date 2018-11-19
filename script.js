/*-------- HTML element references -------- */
const CONTAINER = document.querySelector(".CONTAINER");
const CLEARBUTTON = document.querySelector(".cl-button");
const CHOOSEBUTTON = document.querySelector(".ch-button");
const RAINBOWBUTTON = document.querySelector(".ra-button");
const BWBUTTON = document.querySelector(".bw-button");
let squareDiv, r, c, i, j, number, userInput;
let hsl = "hsl(0, 0%, 81%)";

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

/*-------- Hover Effects -------- */
function hoverEffect(e){
    let rc = getRandomColor();
    e.target.style.backgroundColor = rc;
}
CONTAINER.addEventListener("mouseover", hoverEffect);

/*-------- Black and White Hover Effect -------- */
function darken(e){
    let dec = hsl.slice(11,14);
    let decN = parseInt(dec);
    if(decN < 0){
        return;
    }
    decN = decN - 10;
    decN = decN.toString();
    hsl = "hsl(0, 0%, "+decN+"%)";
    e.target.style.backgroundColor = hsl;
    console.log(hsl);
}

/*-------- Black and White Effect -------- */
let ba = false;
let ra = false;
function blacke(){
    ra = false;
    ba = true;
    console.log("Inside black"+"\nra "+ra+"\nba "+ba);
    CONTAINER.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "black";
        console.log(e.target.style.backgroundColor);
    });
}
BWBUTTON.addEventListener("click", blacke);

/*-------- Rainbow Effect -------- */
function rainbow(){
    ra = true;
    ba = false;
    console.log("Inside Rainbow"+"\nra "+ra+"\nba "+ba);
    CONTAINER.addEventListener("mouseover", (e) => {
        let rc = getRandomColor();
        e.target.style.backgroundColor = rc;
        console.log(e.target.style.backgroundColor);
    });
}
RAINBOWBUTTON.addEventListener("click", rainbow);

/*-------- Clear Hover Effects -------- */
CONTAINER.addEventListener("mousemove", (e) => {
    if(e.which == 3){
        e.target.style.backgroundColor = "#ffb9b3";
    }
});



/*-------- Clear Effects -------- */
CLEARBUTTON.addEventListener("click", function(e){
    let yes = confirm("Are you sure?");
    if(yes == true)
    {
        clearGrid();
        defaultGrid();
        CONTAINER.addEventListener("mouseover", hoverEffect);
    }
});

CHOOSEBUTTON.addEventListener("click", function(e){
    getStarted();
});


