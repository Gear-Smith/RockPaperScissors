button= document.querySelectorAll(".buttons")
button.forEach(element => {
    element.addEventListener('click', playerChoice)
});

function playerChoice(event){
 console.log(event.currentTarget.id)
 decide(event.currentTarget.id)
}

function computerChoice(){
    // 1 = rock | 2 = paper | 3 = Scissors
    const rNum = Math.floor(Math.random()*3+1)
    
    return rNum
}

function decide(player){
    
    const computer= computerChoice()
    const dict = ['rock','paper','scissors']
    
    console.log(dict[computer-1], player)
    if (player === dict[computer-1]){
        console.log('its a tie')
    
    }
    else if (player == 1 )
    }
}