const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function FindFactorial(number, factorial = number) {
  if (number - 1 === 0) return factorial;
  factorial *= number - 1;
  return FindFactorial(number - 1, factorial);
}
readline.question(`Enter a number?`, (number) => {
  console.log(FindFactorial(number));
  readline.close();
});
