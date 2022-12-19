const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function LinearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
readline.question(`Enter a number?`, (number) => {
  console.log(IsPowerOfTwo(number));
  readline.close();
});
