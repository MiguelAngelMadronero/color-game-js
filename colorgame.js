const square = document.querySelectorAll(".square");
const spanColor = document.querySelector("#colorDisplay");
const spanMessage= document.querySelector("#message");
const title = document.querySelector("#h1");
const buttonReset = document.querySelector("#reset");
// const hardButton = document.querySelector("#hard");
// const easyButton = document.querySelector("#easy");
const levelButtons = document.querySelectorAll(".level")
let levels=[...levelButtons];
const textButtonReset="Nuevos Colores";
let colors = [];
let numberOfSquares=6;
generateRandomColors(numberOfSquares);

let pickedColor=pickColor();

let squareColor = [...square];

let isWinner=false;




spanColor.textContent=pickedColor;



buttonReset.addEventListener("click", ()=>{
    // buttonReset.textContent=textButtonReset;

    // colors.splice(0, colors.length);
    
    // console.log(colors)

    // // window.location.reload();
    // generateRandomColors(numberOfSquares);

    // paintSquareOnThePage();

    // pickedColor=pickColor();
    // console.log(pickedColor)
    // spanColor.textContent=pickedColor;
    // title.style.backgroundColor="";
    // spanMessage.textContent="";

    reset();





});

// easyButton.addEventListener("click", ()=>{
//     numberOfSquares=3;
//     hardButton.classList.remove("selected");
//     easyButton.classList.add("selected");

//     colors.splice(0, colors.length);

//     generateRandomColors(numberOfSquares);

//     paintSquareOnThePage();

//     pickedColor=pickColor();
    
//     spanColor.textContent=pickedColor;
//     title.style.backgroundColor="";
//     spanMessage.textContent="";
//     console.log(colors);



// });

// hardButton.addEventListener("click", ()=>{
//     numberOfSquares=6;
//     easyButton.classList.remove("selected");
//     hardButton.classList.add("selected");

//     colors.splice(0, colors.length);

//     generateRandomColors(numberOfSquares);

//     paintSquareOnThePage();

//     pickedColor=pickColor();
    
//     spanColor.textContent=pickedColor;
//     title.style.backgroundColor="";
//     spanMessage.textContent="";
//     console.log(colors);
// });

levels.forEach(level=>{
    level.addEventListener("click", ()=>{
        levels.forEach(lvl => lvl.classList.remove("selected"));
        level.classList.add("selected");
        level.textContent === "EASY" ? numberOfSquares = 3 : numberOfSquares = 6 ;
        reset();
    })
})
function paintSquareOnThePage(){
    for (let i = 0; i < squareColor.length; i++) {
        const element = squareColor[i];
        if(colors[i]){
            element.style.backgroundColor=colors[i];
            element.style.display="block";

        }else{
            element.style.display="none";
        }
        
       
        
    }
}

paintSquareOnThePage();


squareColor.forEach(cuadrado=>{
    cuadrado.addEventListener("click", ()=>{
        let clickedColor=cuadrado.style.backgroundColor;
        if(clickedColor!==pickedColor){
            cuadrado.style.backgroundColor="#232323";
            console.log(clickedColor)
            spanMessage.textContent="Inténtalo nuevamente";
            isWinner=false;
        }else{
            spanMessage.textContent="¡Correcto!";
            title.style.backgroundColor=pickedColor;
            buttonReset.textContent="Play Again?";
            paintAllSquares();
        }
    })

    


})

function paintAllSquares(){
   squareColor.forEach(square=>{
        square.style.backgroundColor=pickedColor;
        
   })
}

function pickColor(){
    const randomNumber= Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
}   


function randomNumberRGB(){
    const randomNumber= Math.floor(Math.random() * 256);
    return randomNumber;
}

function randomColor(){

    const colorRgb  = `rgb(${randomNumberRGB()}, ${randomNumberRGB()}, ${randomNumberRGB()})`
   
    return colorRgb;
}

function generateRandomColors(arrayLength){
    for (let i = 0; i < arrayLength; i++) {
        colors.push(randomColor());       
    }
}

function reset(){
    colors.splice(0, colors.length);

    generateRandomColors(numberOfSquares);

    paintSquareOnThePage();

    pickedColor=pickColor();
    
    spanColor.textContent=pickedColor;
    title.style.backgroundColor="";
    spanMessage.textContent="";
    console.log(colors);

    buttonReset.textContent=textButtonReset;

}

