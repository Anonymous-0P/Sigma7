//Array Methods


//forEach

// let arr = [1,2,3,4,5]

// let print = function(el){
//     console.log(el);
// };

// arr.forEach(print);

// arr.forEach((el) => {
//     console.log(el);
// });


//filter

// let nums = [2,3,4,5,1,22,11,31,9,8,6]

// let ans = nums.filter((el) =>{
//     return el%2 ==0; //even -> true odd -> false
// });

// console.log(ans);



//Every

// let arr =[,2,4]
// let ans = arr.every((el) =>{
//     return el%2 ==0;
// })
// console.log(ans);



// let arr =[1,2,3,4]

// let out = arr.reduce((res,el) =>{
//     return res + el;
// })
// console.log(out);

//spread
// console.log(..."JOHN WICK")


//rest (oppos of spread)

// function sum(...args){
//     for (let i=0;i<args.length;i++){
//         console.log("you gave us",args[i]);
// }
// }


//destructuring

let names = ['tony','steve','bruce','natasha']
let [winners, second,...others] = names;
console.log(winners);

