/* exported isUpperCased */
function isUpperCased(word) {
  if (word === word.toUpperCase() && word !== word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
