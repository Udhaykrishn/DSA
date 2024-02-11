const arr = [10,50,20,30,40];
const len = arr.length

function printArray(arr,len,title){
    output = "";
    arr.forEach((data)=>{
        output += data + " "
    })
    console.log(title + output)
}

const selectionSort = (arr,len) =>{
    for(let i=0; i<len; i++){
        let key = i;
        for(let j = key; j<len; j++){
            if(arr[key] > arr[j]){
                key = j;
            }
        }
        [arr[i],arr[key]] = [arr[key],arr[i]];
    }
    return arr;
}

printArray(arr,len,"Original Array is: ");

result = selectionSort(arr,len);

printArray(result,len,"Sorted Array is: ");