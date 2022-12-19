function bubbleSort(arr) {
  let swaps = true;
  while (swaps) {
    swaps = false;
    for (let e = 0; e < arr.length - 1; e++) {
      if (arr[e] > arr[e + 1]) {
        let temp = arr[e];
        arr[e] = arr[e + 1];
        arr[e + 1] = temp;
        swaps = true;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([0, -2, -10, 30, 20, 3]));
