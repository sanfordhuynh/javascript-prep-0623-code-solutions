/* exported capitalize */
function capitalize(word) {
  const firstLetter = word.charAt(0).toUpperCase();
  const remaining = word.substring(1).toLowerCase();

  console.log(firstLetter + remaining);
  return firstLetter + remaining;
}
