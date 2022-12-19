const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
function FindFibonacciSequence(Input) {
  let Sequence = [0, 1];
  for (let i = 2; i < Input; i++) {
    Sequence.push(Sequence[i - 2] + Sequence[i - 1]);
  }
  return Sequence;
}

readline.question(`Enter a number?`, (number) => {
  console.log(FindFibonacciSequence(number));
  readline.close();
});
