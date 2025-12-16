// const favMovie ="Avatar";
// let guess = prompt("Guess the movie: type 'quit' to exit")

// while((guess != favMovie) && (guess !="quit")){
//     guess = prompt("Wrong Guess. Try Again")
// }

// if(guess == favMovie){
//     alert("Congrats !!")
// }

// if(guess == "quit"){
//    alert("You quit the game")
// }

// let fruits = ['mango','aapple','orange','banana','litchi']

// for(let i=0;i<fruits.length;i++){
//     console.log(i,fruits[i]);
    
// }


let heros = [['ironman','spiderman','thor'],['wonderwoman','flash','superman']]

// for (let i=0;i<heros.length;i++){
//     console.log(`list#${i}`)
//     for(let j=0;j<heros[i].length;j++){
//     console.log(heros[i][j]);
    
// }
// }


//for of loop

// for(hero of heros){
//     console.log(hero);
    
// }

//nested for of loop

for(i of heros){
    // console.log(i)
    for (j of i){
        console.log([j]);
        
    }
}