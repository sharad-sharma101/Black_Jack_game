
let sum = 0
let cards = []
let va = ""
let alive = true
let win = false 
let massageEL = document.getElementById("message-el")
let sumEL = document.getElementById("sum")
let car = document.getElementById("card")
let money = 4

let player =  {
    name:"sharad" ,
    cotation: " Rs. ",
    token:154
}

let playerEL = document.getElementById("player")

function getRandomcad(){
    let ans = Math.floor(Math.random()*13) +1
    if(ans===1)
    return 11
    else if(ans === 11 || ans===12 || ans===13)
    return 10;
    else
    return ans 
}


function startGame(){
    alive = true
    win = false 
    sum = 0
    sumEL.textContent = "SUM : "
    car.textContent = "CARD : "
    let first= getRandomcad()
    let sec = getRandomcad()
    cards = [first , sec]
    
    sum += cards[0] + cards[1]
    
  
    render()

}

function render(){
    sumEL.textContent += sum 
    for(let i=0 ; i<cards.length ; i++){
    car.textContent +=cards[i] + " - "  }
    
        if(sum === 21){
        va = "<><>  you win <><>"
        win = true
    } else if(sum < 21){
        va = "try again"
    } else {
        va = "Game Over !!!"
        alive = false
    }
     massageEL.textContent = va

     if(alive === false){
        player.token -= money
       } else if (win === true) {
        player.token += money
       }
    
        playerEL.textContent = player.name + player.cotation + player.token

}


function newCARD() {

    if(alive===true && win===false){
    let c = getRandomcad()
    sum +=c
    cards.push(c)
    sumEL.textContent = "SUM :"
    car.textContent  = "CARD : "
    render()
                               } 
}
