function isDigit(symbol) {
  if (typeof symbol === 'number') {
    return true;
  }
  if (symbol === '0' || symbol === '1' || symbol === '2' || symbol === '3' || symbol === '4' || symbol === '5' || symbol === '6' || symbol === '7' || symbol === '8' || symbol === '9') {
    return true;
  }
  return false;
}
