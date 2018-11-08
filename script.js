/*-------- HTML element references -------- */
const CONTAINER = document.querySelector(".CONTAINER");
const BUTTON = document.querySelector("button");
let squareDiv, userInput, r, c;

/*-------- Creating 16*16 CONTAINER ---x----- */
for(i=0;i<16;i++){
    for(j=0;j<16;j++){
        squareDiv = document.createElement("div");
        squareDiv.style.cssText = "height: 50px; width: 50px; border: 1px solid rgba(170, 68, 100, 0.692);; display: inline-block;";
        CONTAINER.appendChild(squareDiv);
    }
    CONTAINER.innerHTML+= "<br/>";
}

/*-------- Hover Effects -------- */
function hoverEffect(e){
    if(e.target.tagName == "DIV"){
        if(e.srcElement.id=="iddiv" || e.srcElement.className=="header"){
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
/*CONTAINER.addEventListener("mouseover", function(e){
    e.target.style.backgroundColor = "brown";
    console.log(e.target);
});*/

/*-------- Clear Effects -------- */
BUTTON.addEventListener("click", function(){
    location.reload();
    userInput = window.prompt("How many squares you want on a grid?");
});