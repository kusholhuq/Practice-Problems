function extractEachKth(inputArray, k) {
  const result = [];
  for (let i = 0; i < inputArray.length; i++) {
    if ((i + 1) % k !== 0) {
      result.push(inputArray[i]);
    }
  }
  return result;
}
