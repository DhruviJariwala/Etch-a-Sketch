/*-------- HTML element references -------- */
const CONTAINER = document.querySelector(".container");
let div;
/*-------- Creating 16*16 grid -------- */
for(i=0;i<16;i++){
    for(j=0;j<16;j++){
        div = document.createElement("div");
        div.style.cssText = "height: 50px; width: 50px; border: 1px solid blue; display: inline-block;";
        CONTAINER.appendChild(div);
    }
    CONTAINER.innerHTML+= "<br/>";
}

