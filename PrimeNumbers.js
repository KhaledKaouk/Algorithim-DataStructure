const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function IsPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}
readline.question(`Enter a number?`, (number) => {
  console.log(IsPrime(number));
  readline.close();
});
