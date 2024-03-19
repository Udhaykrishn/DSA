// using Built-in Functions
// const reverseString = (str)=>{
//     return str.split('').reverse().join('')
// }

// console.log(reverseString("Hello world"))

// using non-Built-in functions
// function reverseString(str){
//     let output = ""
//     for(let char of str){
//         output = char + output;
//     }
//     return output;
// }

// console.log(reverseString("Hello world"))

// using array of string

function arrayToString(arr){
    let reuslt = []
    arr.forEach(data=>reuslt.push(data.split('').reverse().join('')))
    return reuslt;
}
const arr = ["Hello","World","This is","JS"]
arrayToString(arr).forEach(data=>console.log(data))