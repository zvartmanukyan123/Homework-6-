function findLargestNum (arr) {
  let maxNum = Math.max(...arr);
  let n = arr.indexOf(maxNum);
  let x = arr.splice(n,1);
  let secondMax = Math.max(...arr);
  return maxNum * secondMax;
}
