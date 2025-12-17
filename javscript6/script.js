// function hello(){
//     alert("hello");
// }
// hello();

// function peom(){
// console.log("Twinkel Twinkle Little star");
// console.log("How i wonder what you are");
// }

// peom();

//Create a Function to roll a dice & always display the value of the dice (1 to 6).

// function dice(){
//     const roll = Math.floor(Math.random() * 6) +1;
//     console.log(roll)
// }
// dice();

//fucntion with arlguements

// function names(name1,age){
//     console.log(name1,age);
// }

// names("shradha",22);

//avarage of 3 numbers
// function avge(num1, num2, num3) {
//   const avrage = (num1+ num2+ num3) / 3;
//   return avrage;

// }

// let res = avge(1,10,3);
// console.log(res);

// function getSum(n){
//   let sum=0;
//   for (let i=0;i<=n;i++){
//     sum +=i;
//   }
//   return sum;
// }

// console.log(getSum(4));

//concantinate the array of string

// let str = ["heii", "hello", "whatsup", "bro"];

// function conCate(str) {
//   let result= '';
//   for (let i = 0; i < str.length; i++) {
//     result += str[i];
//   }
//   return result;
// }
// console.log(conCate(str));


//fucntion(local variable) Scope

// function Sum(a,b){
//   let res = a +b
//   return res
// }

// console.log(res)

//block variable

// {
//  let a = 10
// }
// console.log(a);


//lexical function(nested)

// function outerFunc(){
//   let x =9;
//   let y =8;
//   function innerFunc(){
//     console.log(x);
//   }
//   innerFunc();
// }

// console.log(outerFunc());

//function expression

// const sum = function(num1,num2){
//   res = num1 = num2
// }
// sum(2,3);


// function mutipleGreet(func, count){
//   for (let i=1;i<=count;i++){
//     greet();
//   }
// }

// let greet = function(){
//   console.log("Doller Sign");
// }

// greet(); // instead of calling it 2 times

// console.log(mutipleGreet(greet,3));


// const caLCulator = {
//   add: function sum(a,b){
//     return a+b;
//   },
//   sub: function sub(a,b){
//     return a-b;
//   },
//   mul: function mul(a,b){
//     return a*b;
//   }
// }