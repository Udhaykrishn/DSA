// function reverse(num){
//     let str = num.toString();
//     let output = ""
//     for(let char of str){
//         output = char + output
//     }
//     return parseInt(output)
// }

// console.log(reverse(654321))


//using built-in function
// function reverseNumber(num){
//     let strToNum = num + ""

//     return parseInt(strToNum.split('').reverse().join(''))
// }

// console.log(reverseNumber(42))



// using array of numbers;
function arrayToString(arr){
    let reuslt = []
    arr.forEach(data=>{
        let words = data.toString();
        reuslt.push(words.split('').reverse().join(''))
    })
    return reuslt;
}
const arr = [12,23,34,45,56]
arrayToString(arr).forEach(data=>console.log(data))