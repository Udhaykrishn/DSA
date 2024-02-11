const arr = [10, 40, 20, 50, 30];
const len = arr.length;

arr.sort((a, b) => a - b);

function binarySearch(arr, left, right, target) {
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

let output = "Array is: ";
arr.forEach((data) => (output += data + " "));
console.log(output);

const target = arr[Math.floor(Math.random() * len)];

const result = binarySearch(arr, 0, len, target);

if (result !== -1) {
  console.log(`${target} is found at index is: ${result}`);
} else {
  console.log(`${target} is not found`);
}
