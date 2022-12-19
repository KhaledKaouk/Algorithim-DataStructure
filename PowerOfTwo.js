const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function IsPowerOfTwo(n) {
  if (n < 1) return false;
  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }
  return true;
}
readline.question(`Enter a number?`, (number) => {
  console.log(IsPowerOfTwo(number));
  readline.close();
});
