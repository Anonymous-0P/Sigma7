//this keyword

// const Stud = {
//     name : 'Shradha',
//     age : 22,
//     eng : 30,
//     phy : 20,
//     mat : 35,
//     getAvg(){
//         let avg = (this.eng+this.phy+this.mat) / 3
//         console.log(avg)
//     }
// }


//trycatch


// try{
//     console.log(a);
// }
// catch(e){
//     console.log('there is error in initialization',e)
// }


//Arrow Function


// const sum = (a,b) => {
//     console.log(a+b)
// }

// const mul = (a,b) =>{
// a * b
// }


//SET TIMEOUT

// console.log('hi there')

// setTimeout( ()=>{
//     console.log("Apna Collage")
// },4000)

// console.log("Welcome to")


// setInterval( ()=>{
//    console.log("Hello Bolte")
// },4000)


//this keyword with arrow





//arrow functon which return the square if n

const square = n => {
    return n * n;
}
console.log(square(2));

//write program which prints 'hello world' 5 times for 2 sec each


let id = setInterval(() => {
    console.log('Hello World');
}, 2000);
setTimeout(() => {
    clearInterval(id);
    console.log("Time Stopped")
}, 10000);

