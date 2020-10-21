module.exports = function check(str, bracketsConfig) {
   var stack;
  while (str) {
    for (brackets of bracketsConfig) {
      str = str.replace(brackets.join(''), '')
    }
    if (str === stack) {
      return false;
    }
    stack = str;
  }
  return str.length === 0;
}
