function MergeSort(arr) {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, mid);
  const rightArray = arr.slice(mid);

  return merge(MergeSort(leftArray), MergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  const sortedArr = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      sortedArr.push(leftArray.shift());
    } else {
      sortedArr.push(rightArray.shift());
    }
    return [...sortedArr, ...leftArray, ...rightArray];
  }
}
arr = [2, -1, -4, 29, 5, 87, 1];
console.log(MergeSort(arr));
