function InsertionSort(arr) {
  let SortedPart = [];
  let UnsortedPart;
  [arr[0], ...UnsortedPart] = arr;
  SortedPart.push(arr[0]);

  for (let i = 0; i < UnsortedPart.length; i++) {
    let j = SortedPart.length - 1;
    let NTI = UnsortedPart[i];
    let SE = SortedPart[j];

    while (SE > NTI && j >= 0) {
      SortedPart[j + 1] = SE;

      j--;

      SE = SortedPart[j];
    }
    SortedPart[j + 1] = NTI;
  }
  return SortedPart;
}

console.log(InsertionSort([2, 3, 10, 25, -20, 6]));

function InsertionSort1(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
}

const arr = [8, 20, -2, 4, -6];
InsertionSort1(arr);
// console.log(arr);
