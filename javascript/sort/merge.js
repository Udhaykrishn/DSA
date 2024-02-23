function mergeSort(arr) {
  const len = arr.length;
  if (len < 2) {
    return arr;
  }

  let mid = Math.floor(len / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid, len);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex]);
      leftIndex += 1;
    } else {
      result.push(rightArr[rightIndex]);
      rightIndex += 1;
    }
  }
  return [...result, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
}

function printArray(arr, title) {
  let output = "";
  arr.forEach((data) => {
    output += data + " ";
  });
  console.log(title, output);
}

const arr = [60,30,20,50,40,80,10,100,90,70];

printArray(arr,"Original Array is: ");

printArray(mergeSort(arr),"Sorted Array is: ");