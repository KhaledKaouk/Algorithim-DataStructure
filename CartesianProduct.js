function findCartesianProduct(FirstSet, SecondSet) {
  let arr = [];
  for (let i = 0; i <= FirstSet.length - 1; i++) {
    for (let j = 0; j <= SecondSet.length - 1; j++) {
      arr.push([FirstSet[i], SecondSet[j]]);
    }
  }
  return arr;
}

FirstSet = [2, 3, 5];
SecondSet = [1, 4, 7];
console.log(findCartesianProduct(FirstSet, SecondSet));
