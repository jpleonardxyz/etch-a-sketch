//define dimension of grid which does not change
const gridDimension = 860;

//generate a defualt grid for the user to work with
generateGrid(16);

//get reference to reset button
const btnReset = document.querySelector("#redo");
//attach event
btnReset.addEventListener("click", ()=>{
    reset();
});

function generateGrid(numSquaresAcross){
    //get total number of squares
    let totalSquares = numSquaresAcross**2;

    //obtain reference to container div
    const container = document.querySelector("#container");

    //calculate width of new squares, always round down to prevent overflow
    let squareWidth = gridDimension/numSquaresAcross;
    console.log(squareWidth + " before modification");

    //create divs with correct size
    for (let i = 0; i<totalSquares; i++){
        let square = document.createElement("div");
        square.style.width = squareWidth + "px";
        square.style.height = squareWidth + "px";
        square.style.border = "1px solid grey";
        square.style.boxSizing= "border-box";
        container.appendChild(square);
        //add hover event to change color
        square.addEventListener("mouseover", ()=>{
            square.classList.add("color");
        });
    }
}

function reset(){
    //get input from the user
    let numSquares = getInput();

    //remove all children on the grid
    const container = document.querySelector("#container");

    while (container.firstChild){
        container.removeChild(container.lastChild);
    }

    //call generate with the new number of squares
    generateGrid(numSquares);
}

function getInput(){
    //get number from user, do not proceed until it is correct
    let input = prompt("Enter the number of squares across");
    let numSquares = parseInt(input);
    while (!numSquares || numSquares > 100 || numSquares < 0){
        input = prompt("Enter the number of squares across");
        numSquares = parseInt(input);
    }

    //in case of decimal value entered
    numSquares = Math.floor(numSquares);
    return numSquares;
}






