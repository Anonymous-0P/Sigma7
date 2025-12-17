
//Math Objects

const max = prompt("Enter the maximum number");

const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Guess the number");

while(true){
    if (guess == 'quit'){
        alert("Quitting.....");
        break;
    }
    if( guess == random){
        alert(`Congrates You are right.. The Number is: ${random}`);
        break;
    } else if(guess < random){
        guess = prompt("Hint : Your Guess was too small. Try Agian!")
    }
    else{
       guess = prompt("Hint : Your Guess was too large. Try Agian!")
    }
}
    