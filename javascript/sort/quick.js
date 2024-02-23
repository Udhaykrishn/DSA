function swap(arr,a,b){
    [arr[a],arr[b]] = [arr[b],arr[a]];
}

function partition(arr,low,high){
    let pivot = arr[high];
    let i=low-1,j;
    for(j=low; j<=high-1; j++){
        if(arr[j] < pivot){
            i++;
            swap(arr,i,j);
        }
    }
    i++;
    swap(arr,i,high);
    return i;
}

function quickSort(arr,low,high){
    if(low < high){
        let pivot = partition(arr,low,high);
        quickSort(arr,pivot+1,high)
        quickSort(arr,low,pivot-1)
    }   
}

function printArray(arr,title){
    let output = "";
    arr.forEach((data)=>{
        output += data + " ";
    })
    console.log(title,output);
}

const arr = [20,40,100,70,10,60,90,30,50,80];

printArray(arr,"Original Array is: ");

quickSort(arr,0,arr.length-1);

printArray(arr,"Sorted Array is: ");