function QuickSort(arr) {
  let pivot = arr[arr.length - 1];
  let leftArray = [];
  let rightArray = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > pivot) rightArray.push(arr[i]);
    if (arr[i] < pivot) leftArray.push(arr[i]);
  }
  if (rightArray.length >= 1) rightArray = QuickSort(rightArray);
  if (leftArray.length >= 1) leftArray = QuickSort(leftArray);

  return leftArray.concat([pivot]).concat(rightArray);
}

let arr = [2, -3, -10, 3, 20, 1];
let arr1 = [100, -3, -10, 3, 20, 1];
let arr2 = [100, -22, -10, 7, 20, 1];
console.log(QuickSort(arr));
console.log(QuickSort(arr1));
console.log(QuickSort(arr2));
