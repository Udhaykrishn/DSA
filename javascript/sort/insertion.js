const arr = [10,50,20,30,40];
const len = arr.length

function printArray(arr,len,title){
    output = "";
    arr.forEach((data)=>{
        output += data + " "
    })
    console.log(title + output)
}


function insertionSort(arr,size){
    for(let i=1; i<size; i++){
        let key = arr[i];
        let j = i - 1;
        while(j>=0 && arr[j] > key){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}

printArray(arr,len,"Original Array is: ");

let result = insertionSort(arr,len);

printArray(result,len,"Sorted Array is: ");