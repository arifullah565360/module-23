const numbers = [3, 4, 5, 6, 7, 8,];
const output = [];

// // for (let i = 0; i < number.length; i++){
// //     const element = number[i];
// //     const result = element*element;
// //     output.push(result);
// // }


// function square (element){
//     return element*element;
// }
// numbers.map(function(element){
//     console.log(element);
// })

//    // index
// function square (element){
//     return element*element;
// }
// numbers.map(function(element, index){
//     console.log(element, index,);
// })
//    // array
// function square (element){
//     return element*element;
// }
// numbers.map(function(element, index, array){
//     console.log(element, index, array);
// })


// function square (element){
//     return element*element;
// }
// const result =  numbers.map(function(element){
//    return element*element;
// })



// const result =numbers.map( x => x * x);
// console.log(result);


const bigger =numbers.filter( x => x > 5);
console.log(bigger);

const smaller =numbers.filter( x => x < 3);
console.log(smaller);

const FindBigger  = numbers.find(x => x > 5);
console.log(FindBigger);


const FindSmaller  = numbers.find(x => x < 3);
console.log(FindSmaller);






