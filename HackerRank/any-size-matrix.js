function diagonalDifference(arr) {
  // Write your code here
  let left = 0;
  for (let i = 0; i < arr.length; i++) {
    left = left + arr[i][i];
    console.log("left Diagonal", arr[i][i])
  }
  console.log(left);
  let right = 0;
  for (let b = 0; b < arr.length; b++) {
    right = right + arr[b][arr.length - 1 - b];
    console.log("right Diagonal", arr[b][arr.length - 1 - b])
  }
  console.log(right);
  const result = left - right;
  console.log(result);
  if (result < 0) {
    return result * (-1);
  }
  return result;
}
