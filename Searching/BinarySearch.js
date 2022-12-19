function BinarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) return middleIndex;
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}
function RecursiveBinarySearch(
  arr,
  target,
  leftIndex = 0,
  rightIndex = arr.length - 1
) {
  if (leftIndex > rightIndex) return -1;
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) return middleIndex;
  if (target < arr[middleIndex]) {
    return RecursiveBinarySearch(arr, target, 0, middleIndex - 1);
  } else {
    return RecursiveBinarySearch(arr, target, middleIndex + 1, arr.length - 1);
  }
}
console.log(BinarySearch([-2, 0, 3, 5, 7, 8, 10], 8));
console.log(RecursiveBinarySearch([-2, 0, 3, 5, 7, 8, 10], 8));
