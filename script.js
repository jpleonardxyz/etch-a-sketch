//define dimension of grid which does not change
const gridDimension = 860;

//define initial number of squares across and total squares
let numSquaresAcross = 16;
let totalSquares = numSquaresAcross**2;
console.log(totalSquares);

//obtain reference to container div
const container = document.querySelector("#container");

//calculate width of new squares, always round down to prevent overflow
let squareWidth = Math.floor(gridDimension/numSquaresAcross);


//create divs with correct size
for (let i = 0; i<totalSquares; i++){
    let square = document.createElement("div");
    square.style.width = squareWidth + "px";
    square.style.height = squareWidth + "px";
    square.style.border = "2px solid grey";
    square.style.boxSizing= "border-box";
    container.appendChild(square);
    //add hover event to change color
    square.addEventListener("mouseover", ()=>{
        square.classList.add("color");
    });
}

