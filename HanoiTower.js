function MoveHanoiTwoer(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  MoveHanoiTwoer(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  MoveHanoiTwoer(n - 1, usingRod, toRod, fromRod);
}

MoveHanoiTwoer(3, "A", "C", "B");
