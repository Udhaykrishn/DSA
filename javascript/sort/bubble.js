const arr = [10, 40, 30, 50, 20];

const len = arr.length;

function arrayPrint(result,label){
  let output = "";
  result.forEach((data) => {
    output += data + " ";
  });
  console.log(label + output)
}

arrayPrint(arr,"Original Array is: ")

function bubbleSort(arr, len) {
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            if (arr[i] > arr[j]) {
                [arr[j], arr[i]] = [arr[i], arr[j]];
            }
        }
    }
    return arr;
}

const result = bubbleSort(arr, len);

arrayPrint(result,"Sorted Array is: ")
