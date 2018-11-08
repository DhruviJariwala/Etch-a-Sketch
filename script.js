/*-------- HTML element references -------- */
const CONTAINER = document.querySelector(".container");
const BUTTON = document.querySelector("button");
let div;

/*-------- Creating 16*16 grid -------- */
for(i=0;i<16;i++){
    for(j=0;j<16;j++){
        div = document.createElement("div");
        div.style.cssText = "height: 50px; width: 50px; border: 1px solid rgba(170, 68, 100, 0.692);; display: inline-block;";
        CONTAINER.appendChild(div);
    }
    CONTAINER.innerHTML+= "<br/>";
}

/*-------- Hover Effects -------- */
CONTAINER.addEventListener("mouseover", function(e){
    e.target.style.backgroundColor = "brown";
});

/*-------- Clear Effects -------- */
BUTTON.addEventListener("click", function(){
    location.reload();
});