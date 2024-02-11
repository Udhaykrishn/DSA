const arr = [10,20,50,40,30];

function linear(arr,len,target){
    for(let i=0; i<len; i++){
        if(arr[i] == target){
            return [arr[i],i]
        }
    }
    return -1;
}

const target = arr[Math.floor(Math.random()*arr.length)]

const result = linear(arr,arr.length,target)

let output = "";
arr.forEach((data)=>{
    output += data + " ";
})
console.log("Array is: ",output)

if(result !== -1){
    console.log(`${result[0]} found at index: ${result[1]}`);
}else{
    console.log("Element is not found");
}