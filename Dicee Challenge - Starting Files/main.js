
function getRandDyeNumber(){
    let random1 = Math.random()
    let randNumber = Math.round(random1 * 6)
    if (randNumber === 0 ) {
        // console.log(randNumber);        
        randNumber = 1
    }
    return randNumber



}

// console.log();

function roll(){

    
    let dye1Number = getRandDyeNumber()
    let dye2Number = getRandDyeNumber()
    document.querySelector(".img1").setAttribute("src", `./images/dice${dye1Number}.png`)
    document.querySelector(".img2").setAttribute("src", `./images/dice${dye2Number}.png`)
    if (dye1Number > dye2Number ){
        document.querySelector(".container>h1").textContent = "Player 1 Wins"

    }
    else if (dye1Number < dye2Number ){
        document.querySelector(".container>h1").textContent = "Player 2 Wins"

    }
    else if (dye1Number === dye2Number){
        document.querySelector(".container>h1").textContent = "Draw!"

    }

    
}

// this line will read the windows status if its the first load the .type property will return "navigation" 
// If it is a reload the ".type" property will return "reload"
if (window.performance.getEntriesByType('navigation')[0].type === "navigation"){
    
}
else if(window.performance.getEntriesByType('navigation')[0].type === "reload"){
    roll()
}
// console.log(getRandDyeNumber());
// console.log(getRandDyeNumber());
