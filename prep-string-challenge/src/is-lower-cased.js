/* exported isLowerCased */
function isLowerCased(word) {
  if (word === word.toLowerCase() && word !== word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
