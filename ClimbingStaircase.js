function findWaysToClimb(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return findWaysToClimb(n - 1) + findWaysToClimb(n - 2);
}

console.log(findWaysToClimb(3));
