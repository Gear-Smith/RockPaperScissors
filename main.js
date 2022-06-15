button= document.querySelectorAll(".buttons")
button.forEach(element => {
    element.addEventListener('click', playerChoice)
});

function playerChoice(event){
console.log(event)
console.log(event.currentTarget.id)
}